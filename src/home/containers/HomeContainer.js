import React, { Component } from 'react';
import { connect } from 'react-redux';

import "home/resource/index.less";

import Slogan from '../components/Slogan';
import GoodCoursesContainer from './GoodCoursesContainer';
import CarouselContainer from './CarouselContainer';

import ScholarContainers from './ScholarContainers';


class HomeContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {


    }


    render()
    {
        return (
            <div className="cp-home-container">
                <div className="slogan">
                    <Slogan />
                </div>
                <div className="carousel-wrapper">
                    <CarouselContainer />
                </div>
                <div className="good-courses">
                    <GoodCoursesContainer />
                </div>
                <div className="comments">
                </div>
                <div className="contributors">
                    <ScholarContainers />
                </div>
            </div>
        );
    }
}
