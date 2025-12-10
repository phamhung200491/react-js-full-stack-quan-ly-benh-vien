import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

class About extends Component {

    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2025 Hỏi Dân IT với Hùng. More information, please visit my youtube channel.
                    <a target='_blank' href='https://www.youtube.com/watch?v=147SkAVXEqM&list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI&index=62'>
                        &#8594; Click here &#8592;
                    </a>
                </p>
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
