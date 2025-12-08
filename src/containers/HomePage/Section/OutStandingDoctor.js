import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

class OutStandingDoctor extends Component {

    render() {
        let settings = { ...this.props.settings }
        settings.slidesToShow = 3
        return (
            <div className='section-share section-out-standing-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-out-standing-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Nội Soi Tiêu Hóa Doctor Check 1</div>
                                    <div>Tiêu hoá</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-out-standing-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Nội Soi Tiêu Hóa Doctor Check 2</div>
                                    <div>Tiêu hoá</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-out-standing-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Nội Soi Tiêu Hóa Doctor Check 3</div>
                                    <div>Tiêu hoá</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-out-standing-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Nội Soi Tiêu Hóa Doctor Check 4</div>
                                    <div>Tiêu hoá</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-out-standing-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Nội Soi Tiêu Hóa Doctor Check 5</div>
                                    <div>Tiêu hoá</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-out-standing-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Nội Soi Tiêu Hóa Doctor Check 6</div>
                                    <div>Tiêu hoá</div>
                                </div>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));
