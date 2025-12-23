import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from '../../../store/actions'
import UserRedux from './UserRedux';

class TableManageUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        console.log('delete user :', user.id)
        this.props.deleteAUser(user.id)
    }

    render() {
        console.log('check all Users ', this.props.listUsers)
        console.log('check state ', this.state.usersRedux)
        let arrUsers = this.state.usersRedux
        return (
            <div className="user-container">
                <div className='title text-center'>Manage users with Hung</div>
                <div className='users-table mt-3 mx-1 mb-5'>
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
                                <th>Position</th>
                                <th>Actions</th>
                            </tr>
                            {arrUsers && arrUsers.length > 0 &&
                                arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.gender === 'M' ? 'Male' : item.gender === 'F' ? 'Female' : 'None'}</td>
                                            <td>{item.roleId}</td>
                                            <td>{item.positionId}</td>
                                            <td className='table-btn'>
                                                <button className='btn-edit'><i className="fas fa-edit"></i></button>
                                                <button
                                                    onClick={() => this.handleDeleteUser(item)}
                                                    className='btn-delete'><i className="fas fa-trash"></i></button>
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
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUser: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
