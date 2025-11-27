import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'

class HomeHeader extends Component {

    render() {
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
                                <div><b>Chuyên khoa</b></div>
                                <div className='subs-title'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Cơ sở y tế</b></div>
                                <div className='subs-title'>Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Bác sĩ</b></div>
                                <div className='subs-title'>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Gói khám</b></div>
                                <div className='subs-title'>Khám sức khoẻ tổng quát</div>
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
                                <i className="fas fa-question-circle"><span>Hỗ trợ</span></i>
                            </div>
                            <div className='flag'>VN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            NỀN TẢNG Y TẾ
                        </div>
                        <div className='title2'>
                            CHĂM SÓC SỨC KHOẺ TOÀN DIỆN
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-1'></i></div>
                                <div className='text-child'>Khám chuyên khoa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-2'></i></div>
                                <div className='text-child'>Khám từ xa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-3'></i></div>
                                <div className='text-child'>Khám tổng quát</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-4'></i></div>
                                <div className='text-child'>Xét nghiệm y học</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-5'></i></div>
                                <div className='text-child'>Sức khoẻ tinh thần</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='icon-6'></i></div>
                                <div className='text-child'>Khám nha khoa</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
