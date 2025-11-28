import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage, injectIntl } from 'react-intl';

class HomeHeader extends Component {

    render() {
        console.log('check props ', this.props)
        const { intl } = this.props
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>

                            </div>
                        </div>
                        {/* <div className='center-content'>
                        <div className='child-content active-item'>
                            <b>Tất cả</b>
                        </div>
                        <div className='child-content'>
                            <b>Tại nhà</b>
                        </div>
                        <div className='child-content'>
                            <b>Tại viện</b>
                        </div>
                        <div className='child-content'>
                            <b>Sống khoẻ</b>
                        </div>
                    </div> */}

                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.search-dortor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            {/* <div className='sub-content'>
                            <i class="far fa-handshake"></i>
                            <span><b>Hợp tác</b></span>
                        </div>
                        <div className='sub-content'>
                            <i class="fas fa-history"></i>
                            <span><b>Lịch hẹn</b></span>
                        </div> */}
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <span><FormattedMessage id="home-header.support" /></span>
                            </div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className='title2'>
                            <FormattedMessage id="banner.title2" />
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder={intl.formatMessage({ id: "banner.find-medial-specialty" })} />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-1'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.specialist-examination" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-2'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.remote-examination" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-3'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.general-examination" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-4'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.medical-tests" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-5'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.mental-health-check-up" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-6'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.dental-examination" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
