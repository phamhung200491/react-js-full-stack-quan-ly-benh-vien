import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions'

class UserRedux extends Component {

    state = {

    }

    constructor(props) {
        super(props)
        this.state = {
            genderArr: [],
            roleArr: [],
            position: []
        }
    }

    async componentDidMount() {

        this.props.getGenderStart()
        this.props.getRoleStart()
        // this.props.dispatch(actions.getGenderStart())
        // try {
        //     let resGender = await getAllCodeService(`gender`)
        //     if (resGender && resGender.errCode === 0) {
        //         this.setState({
        //             genderArr: resGender.data
        //         })
        //     }
        //     console.log('check gender res: ', resGender)
        // } catch (error) {
        //     console.log(error)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //render => didupdate
        // hiện tại (this) và quá khứ (prev)
        //[] [3]

        //[3] [3]
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }

        console.log('roleRedux', prevProps.roleRedux)
        console.log('props roleRedux', this.props.roleRedux)
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }

    render() {
        let genders = this.state.genderArr
        let language = this.props.language
        let roles = this.state.roleArr
        console.log('check props from redux: ', this.props.genderRedux)
        return (
            <React.Fragment>
                <div className='user-redux-container'>
                    <div className='title'>Learn React - Redux "Hoi Dan IT"</div>
                    <div className="user-redux-body" >
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 my-3'><FormattedMessage id="manage-user.add" /></div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.email" /></label>
                                    <input className='form-control' type='email' />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.password" /></label>
                                    <input className='form-control' type='password' />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.first-name" /></label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.last-name" /></label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.phone-number" /></label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-9'>
                                    <label><FormattedMessage id="manage-user.address" /></label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.gender" /></label>
                                    <select className='form-select'>
                                        {/* <option selected>Choose...</option> */}
                                        {genders && genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option key={index}>
                                                        {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                    </option>
                                                )
                                            })}
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.role" /></label>
                                    <select className='form-select'>
                                        {/* <option selected>Choose...</option> */}
                                        {roles && roles.length > 0 &&
                                            roles.map((item, index) => {
                                                return (
                                                    <option key={index}>
                                                        {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                    </option>
                                                )
                                            })}
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.position" /></label>
                                    <select className='form-select'>
                                        {/* <option selected>Choose...</option> */}
                                        <option>Doctor</option>
                                        <option>Patient</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label><FormattedMessage id="manage-user.image" /></label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-12 mt-3'>
                                    <button className='btn btn-primary'>
                                        <span className='m-3'>
                                            <FormattedMessage id="manage-user.save" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())
        //  processLogout: () => dispatch(actions.processLogout()),
        //  changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
