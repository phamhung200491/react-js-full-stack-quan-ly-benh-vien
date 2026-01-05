import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from '../../../store/actions'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import TableManageUser from './TableManageUser';
import { use } from 'react';


class UserRedux extends Component {

    state = {

    }

    constructor(props) {
        super(props)
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImgURL: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            role: '',
            position: '',
            avatar: '',

            //ACTION
            action: '',
            userEditId: '',
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getRoleStart()
        this.props.getPositionStart()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGender = this.props.genderRedux
            this.setState({
                genderArr: this.props.genderRedux,
                gender: arrGender && arrGender.length > 0 ? arrGender[0].keyMap : ''
            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRole = this.props.roleRedux

            this.setState({
                roleArr: this.props.roleRedux,
                role: arrRole && arrRole.length > 0 ? arrRole[0].keyMap : ''
            })
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPosition = this.props.positionRedux

            this.setState({
                positionArr: this.props.positionRedux,
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].keyMap : ''
            })
        }

        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGender = this.props.genderRedux
            let arrRole = this.props.roleRedux
            let arrPosition = this.props.positionRedux

            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGender && arrGender.length > 0 ? arrGender[0].keyMap : '',
                role: arrRole && arrRole.length > 0 ? arrRole[0].keyMap : '',
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].keyMap : '',
                avatar: '',
                previewImgURL: '',
                action: CRUD_ACTIONS.CREATE,
            })
        }
    }

    handleOnChangeImage = async (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64
            })
        }
    }

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return
        this.setState({
            isOpen: true
        })
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }

        copyState[id] = event.target.value

        this.setState({ ...copyState })
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return

        let { action } = this.state

        if (action === CRUD_ACTIONS.CREATE) {
            //fire redux action create
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                image: this.state.avatar,
                roleId: this.state.role,
                positionId: this.state.position,
            })
        }
        else if (action === CRUD_ACTIONS.EDIT) {
            this.props.editAUser({
                //fire redux action edit
                id: this.state.userEditId,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                image: this.state.avatar,
                roleId: this.state.role,
                positionId: this.state.position,
            })
        }
    }

    checkValidateInput = () => {
        let isValid = true
        let arrCheck =
            ['email', 'password', 'firstName',
                'lastName', 'phoneNumber', 'address']

        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false
                alert('This input is required: ' + arrCheck[i])
                break
            }
        }

        return isValid
    }

    handleEditUserFromParent = (user) => {

        let imageBase64 = null
        if (user.image) {
            //let imageJoinBase64 = `data:image/png;base64,${user.image}`
            //imageBase64 = new Buffer(user.image, 'base64').toString(`binary`)
            imageBase64 = `data:image;base64,${user.image}`
        }

        console.log('check user image ', user)

        this.setState({
            email: user.email,
            password: '******',
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            gender: user.gender,
            role: user.roleId,
            position: user.positionId,
            avatar: user.image,
            previewImgURL: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id,
        })
    }

    render() {
        let genders = this.state.genderArr
        let language = this.props.language
        let roles = this.state.roleArr
        let isGetGenders = this.props.isLoadingGender
        let positions = this.state.positionArr

        let { email, password, firstName,
            lastName, phoneNumber, address,
            gender, role, position } = this.state

        return (
            <React.Fragment>
                <div className='user-redux-container'>
                    <div className='title'>Learn React - Redux "Hoi Dan IT"</div>
                    <div className="user-redux-body" >
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 my-3'><FormattedMessage id="manage-user.add" /></div>
                                {/* <div className='col-12'>{isGetGenders === true ? 'Loading genders' : ''}{console.log('isGetGenders: ', isGetGenders)}</div> */}
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.email" /></label>
                                    <input className='form-control'
                                        type='email'
                                        value={email}
                                        onChange={(event) => { this.onChangeInput(event, 'email') }}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.password" /></label>
                                    <input className='form-control'
                                        type='password'
                                        value={password}
                                        onChange={(event) => { this.onChangeInput(event, 'password') }}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.first-name" /></label>
                                    <input className='form-control'
                                        type='text'
                                        value={firstName}
                                        onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.last-name" /></label>
                                    <input className='form-control'
                                        type='text'
                                        value={lastName}
                                        onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.phone-number" /></label>
                                    <input className='form-control'
                                        type='text'
                                        value={phoneNumber}
                                        onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                                    />
                                </div>
                                <div className='col-9'>
                                    <label><FormattedMessage id="manage-user.address" /></label>
                                    <input className='form-control' type='text'
                                        value={address}
                                        onChange={(event) => { this.onChangeInput(event, 'address') }}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.gender" /></label>
                                    <select className='form-select'
                                        onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                        value={gender}
                                    >
                                        {/* <option selected>Choose...</option> */}
                                        {genders && genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.keyMap}>
                                                        {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                    </option>
                                                )
                                            })}
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.role" /></label>
                                    <select className='form-select'
                                        onChange={(event) => { this.onChangeInput(event, 'role') }}
                                        value={role}
                                    >
                                        {/* <option selected>Choose...</option> */}
                                        {roles && roles.length > 0 &&
                                            roles.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.keyMap}>
                                                        {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                    </option>
                                                )
                                            })}
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.position" /></label>
                                    <select className='form-select'
                                        onChange={(event) => { this.onChangeInput(event, 'position') }}
                                        value={position}
                                    >
                                        {/* <option selected>Choose...</option> */}
                                        {positions && positions.length > 0 &&
                                            positions.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.keyMap}>
                                                        {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                    </option>
                                                )
                                            })}
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.image" /></label>
                                    <div className='preview-img-container'>
                                        <input id='previewImg' type='file' hidden
                                            onChange={(event) => this.handleOnChangeImage(event)} />
                                        <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i className="fas fa-upload"></i></label>
                                        <div className='preview-image'
                                            style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                            onClick={() => this.openPreviewImage()}
                                        >
                                        </div>
                                    </div>

                                </div>
                                <div className='col-12 my-3'>
                                    <button className={this.state.action === CRUD_ACTIONS.EDIT ? 'btn btn-warning' : 'btn btn-primary'}
                                        onClick={() => this.handleSaveUser()}>
                                        <span className='m-3'>
                                            {this.state.action === CRUD_ACTIONS.EDIT ?
                                                <FormattedMessage id="manage-user.edit" /> : <FormattedMessage id="manage-user.save" />}
                                        </span>
                                    </button>
                                </div>
                                <div className='col-12'>
                                    <TableManageUser
                                        handleEditUserFromParentKey={this.handleEditUserFromParent}
                                        action={this.state.action}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.state.isOpen === true &&
                        <Lightbox
                            mainSrc={this.state.previewImgURL}
                            onCloseRequest={() => this.setState({ isOpen: false })} />
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender,
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        editAUser: (data) => dispatch(actions.editAUser(data))
        //  processLogout: () => dispatch(actions.processLogout()),
        //  changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
