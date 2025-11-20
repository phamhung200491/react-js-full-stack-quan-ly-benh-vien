import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService } from '../../services/userService'
import ModalUser from './ModalUser';
class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false
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

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.errCode !== 0) { alert(response.errMessage) }
            else {
                console.log(`response create user `, response)
                console.log('check data child: ', data)
                await this.getAllUserFromReact()
                this.toggleUserModal()
                data = {}
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
                                console.log('check item: ', item)
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
                                            <button className='btn-edit'><i className="fas fa-edit"></i></button>
                                            <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
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
