import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import { FormattedMessage, injectIntl } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
//import medicalfacilityImg from '../../../assets/medicalfacility/new_bookingcare_bg.png'

class MedicalFacility extends Component {

    render() {
        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>Phòng khám Bệnh viện Đại học Y Dược 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>Phòng khám Bệnh viện Đại học Y Dược 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>Phòng khám Bệnh viện Đại học Y Dược 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>Phòng khám Bệnh viện Đại học Y Dược 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>Phòng khám Bệnh viện Đại học Y Dược 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>Phòng khám Bệnh viện Đại học Y Dược 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
