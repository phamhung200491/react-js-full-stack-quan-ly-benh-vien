import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _, { values } from 'lodash'

class ModelEditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '1',
            roleId: '1',
        }

        this.genderOptionsOrigin = [
            { genderId: '1', genderValue: 'Male' },
            { genderId: '0', genderValue: 'Female' }
        ];

        this.arrRole = [
            { roleId: '1', roleValue: 'Admin' },
            { roleId: '2', roleValue: 'Doctor' },
            { roleId: '3', roleValue: 'Patient' }
        ]
    }

    componentDidMount() {
        let user = this.props.currentUser

        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hardcore',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phoneNumber: user.phoneNumber,
                gender: user.gender ? '1' : '0',
                roleId: user.roleId,
            })
        }
        console.log('check user dismount edit modal 2 ', user)
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnChangeInput = (event, id) => {
        if (event) {
            event.preventDefault()
        }
        // bad code
        /**
         * this.state = {
         * email: '',
         * password: '
         * this.state.email === this.state['email']
         * ',
         * }
         */

        // this.state[id] = event.target.value;

        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad state', this.state)
        // })
        // console.log(event.target.value, id)

        // good code
        // console.log('id : ', id)
        // console.log('state 1: ', this.state)
        // let copyState = { ...this.state }
        // console.log('copystate: ', copyState)
        // copyState[id] = event.target.value
        // console.log('event target: ', event.target.value)
        // console.log('copystate id: ', copyState[id])
        // console.log('copystate 2: ', copyState)
        // this.setState({
        //     ...copyState
        // })
        // console.log('state 2: ', this.state)
        const value = event.target.value;
        this.setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    checkValidateInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i])
                break;
            }
        }
        return isValid
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid) {
            // call api edit modal
            this.props.editUser(this.state)
        }
    }



    arrRoleOrderBy = (arrRoleOrigin, targetRoleId) => {
        const findRoleId = arrRoleOrigin.find(role => role.roleId === targetRoleId)
        const remainingRoles = arrRoleOrigin.filter(role => role.roleId !== targetRoleId)
        let sortedRoles = []
        if (findRoleId) {
            sortedRoles = [findRoleId, ...remainingRoles]
        }
        else {
            sortedRoles = arrRoleOrigin
        }

        return sortedRoles
    }

    getSortedGenderOptions = (currentGenderId) => {
        let sortedOptions = []

        if (currentGenderId === '0') {
            sortedOptions = [
                { genderId: '0', genderValue: 'Female' },
                { genderId: '1', genderValue: 'Male' }
            ]
        }
        else if (currentGenderId === '1') {
            sortedOptions = [
                { genderId: '1', genderValue: 'Male' },
                { genderId: '0', genderValue: 'Female' }
            ]
        } else {
            // Trường hợp mặc định
            sortedOptions = this.genderOptionsOrigin;
        }
        return sortedOptions;
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                size='lg'
                centered
                className='modal-user-container'>
                <ModalHeader toggle={() => { this.toggle() }}>Edit user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                value={this.state.password}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>First name</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last name</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                value={this.state.address}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Phone number</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "phoneNumber") }}
                                value={this.state.phoneNumber}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Sex</label>
                            <select
                                name="gender"
                                className="form-select"
                                onChange={(event) => { this.handleOnChangeInput(event, "gender") }}
                                value={this.state.gender}
                            >
                                {(() => {
                                    let getGender = this.state.gender
                                    const sortedGenderList = this.getSortedGenderOptions(getGender);
                                    return sortedGenderList && sortedGenderList.map((item) => {
                                        return <option key={item.genderId} value={item.genderId}>
                                            {item.genderValue}
                                        </option>
                                    })
                                })()}
                            </select>
                        </div>
                        <div className='input-container'>
                            <label>Role</label>
                            <select
                                name="roleId"
                                className="form-select"
                                onChange={(event) => { this.handleOnChangeInput(event, "roleId") }}
                                value={this.state.roleId}
                            >
                                {(() => {
                                    const getArrRoleById = this.arrRoleOrderBy(this.arrRole, this.state.roleId)
                                    return getArrRoleById && getArrRoleById.map((item) => {
                                        return (
                                            <option key={item.roleId} value={item.roleId}>{item.roleValue}</option>
                                        )
                                    })
                                })()}
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>
                        Save changes
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModelEditUser);
