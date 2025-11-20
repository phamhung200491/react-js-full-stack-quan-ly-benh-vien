import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '1',
            roleId: '1',
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnChangeInput = (event, id) => {
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
        let copyState = { ...this.state }
        //console.log('copystate: ', copyState)
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    checkValideInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber']
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop', arrInput[i], this.state[arrInput[i]])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i])
                break;
            }
        }
        return isValid
    }

    handleAddNewUser = () => {
        let isValid = this.checkValideInput()
        if (isValid) {
            // call api create modal
            this.props.createNewUser(this.state)
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                size='lg'
                centered
                className='modal-user-container'>
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                value={this.state.email} />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                value={this.state.password}
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
                            >
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div className='input-container'>
                            <label>Role</label>
                            <select
                                name="roleId"
                                className="form-select"
                                onChange={(event) => { this.handleOnChangeInput(event, "roleId") }}
                            >
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleAddNewUser() }}>
                        Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
