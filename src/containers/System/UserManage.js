import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService'
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter'
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    getAllUserFromReact = async () => {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.errCode !== 0) { alert(response.errMessage) }
            else {
                console.log(`response create user `, response)
                console.log('check data child: ', data)
                await this.getAllUserFromReact()
                this.toggleUserModal()
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (error) {
            console.log(error)
        }

    }

    handleDeleteUser = async (user) => {
        console.log('delete user ', user)
        try {
            let response = await deleteUserService(user.id)
            if (response && response.errCode === 0) {
                console.log(response)
                await this.getAllUserFromReact()
            }
            else {
                alert(response.errMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleEditUser = async (user) => {
        console.log('edit user', user)
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }

    handleDoEditUser = async (user) => {
        console.log('ckick save user', user)
        try {
            let res = await editUserService(user)
            if (res && res.errCode === 0) {
                console.log(res)
                await this.getAllUserFromReact()
                this.toggleUserEditModal()
            } else {
                alert(res.errMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    /** Life cycle
     *  Run component:
     *  1. Run construct -> init state
     *  2. Did mount (set state)
     *  3. Render  
     */

    switchRole = (roleId) => {
        switch (roleId) {
            case '1':
                return 'Admin'
            case '2':
                return 'Doctor'
            case '3':
                return 'Patient'
        }
    }

    render() {
        let arrUsers = this.state.arrUsers
        console.log('check arrUsers ', arrUsers)
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUser={this.handleDoEditUser}
                    />
                }

                <div className='title text-center'>Manage users with Hung</div>
                <div className='mx-1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    ><i className="fas fa-plus"></i> Add new users</button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>Phone number</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.gender ? 'Nam' : 'Nữ'}</td>
                                        <td>{this.switchRole(item.roleId)}</td>
                                        <td className='table-btn'>
                                            <button className='btn-edit'><i className="fas fa-edit" onClick={() => this.handleEditUser(item)}></i></button>
                                            <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
