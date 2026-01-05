import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from '../../../store/actions'
import UserRedux from './UserRedux';
import { LANGUAGES } from '../../../utils';

class TableManageUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usersRedux: [],
            genderArr: [],
            roleArr: [],
            positionArr: [],
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux()
        this.props.getGenderStart()
        this.props.getRoleStart()
        this.props.getPositionStart()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }

        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGender = this.props.genderRedux
            this.setState({
                genderArr: this.props.genderRedux,
                gender: arrGender && arrGender.length > 0 ? arrGender[0].key : ''
            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRole = this.props.roleRedux

            this.setState({
                roleArr: this.props.roleRedux,
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : ''
            })
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPosition = this.props.positionRedux

            this.setState({
                positionArr: this.props.positionRedux,
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : ''
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteAUser(user.id)
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)
    }

    renderSwitchValue = (itemType, itemValue) => {
        let language = this.props.language
        let genders = this.state.genderArr
        let roles = this.state.roleArr
        let positions = this.state.positionArr
        let valueName = ''
        switch (itemType) {
            case 'G':
                genders && genders.length > 0 &&
                    genders.map((item, index) => {
                        if (itemValue === item.keyMap) {
                            valueName = language === LANGUAGES.VI ? item.valueVi : item.valueEn
                        }
                    })
                break

            case 'R':
                roles && roles.length > 0 &&
                    roles.map((item, index) => {
                        if (itemValue === item.keyMap) {
                            valueName = language === LANGUAGES.VI ? item.valueVi : item.valueEn
                        }
                    })
                break

            case 'P':
                positions && positions.length > 0 &&
                    positions.map((item, index) => {
                        if (itemValue === item.keyMap) {
                            valueName = language === LANGUAGES.VI ? item.valueVi : item.valueEn
                        }
                    })
                break
        }

        return valueName
    }

    render() {
        let arrUsers = this.state.usersRedux
        return (
            <div className="user-container">
                <div className='title text-center'>Manage users with Hung</div>
                <div className='users-table mt-3 mx-1 mb-5'>
                    <table>
                        <tbody>
                            <tr>
                                <th><FormattedMessage id="manage-user.email" /></th>
                                <th><FormattedMessage id="manage-user.first-name" /></th>
                                <th><FormattedMessage id="manage-user.last-name" /></th>
                                <th><FormattedMessage id="manage-user.address" /></th>
                                <th><FormattedMessage id="manage-user.phone-number" /></th>
                                <th><FormattedMessage id="manage-user.gender" /></th>
                                <th><FormattedMessage id="manage-user.role" /></th>
                                <th><FormattedMessage id="manage-user.position" /></th>
                                <th><FormattedMessage id="manage-user.actions" /></th>
                            </tr>
                            {arrUsers && arrUsers.length > 0 &&
                                arrUsers.map((item, index) => {
                                    console.log('check table user image ', item)
                                    return (
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{this.renderSwitchValue("G", item.gender)}</td>
                                            <td>{this.renderSwitchValue("R", item.roleId)}</td>
                                            <td>{this.renderSwitchValue("P", item.positionId)}</td>
                                            <td className='table-btn'>
                                                <button
                                                    onClick={() => this.handleEditUser(item)}
                                                    className='btn-edit'><i className="fas fa-edit"></i></button>
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
        listUsers: state.admin.users,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUser: (id) => dispatch(actions.deleteAUser(id)),
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
