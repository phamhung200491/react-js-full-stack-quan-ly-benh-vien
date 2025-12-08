import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

class HandBook extends Component {

    render() {
        let settings = { ...this.props.settings }
        settings.slidesToShow = 2
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>Thẩm mỹ mắt với ưu đãi đặc biệt từ Dr.Eye 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>Thẩm mỹ mắt với ưu đãi đặc biệt từ Dr.Eye 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>Thẩm mỹ mắt với ưu đãi đặc biệt từ Dr.Eye 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>Thẩm mỹ mắt với ưu đãi đặc biệt từ Dr.Eye 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>Thẩm mỹ mắt với ưu đãi đặc biệt từ Dr.Eye 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>Thẩm mỹ mắt với ưu đãi đặc biệt từ Dr.Eye 6</div>
                            </div>
                        </Slider>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(HandBook));
