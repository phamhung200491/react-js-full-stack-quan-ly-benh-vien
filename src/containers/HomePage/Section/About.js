import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về Channel Hỏi Dân IT
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400"
                            src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
                            title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(About));
