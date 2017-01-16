import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPeriods, selectPeriod } from 'base/actions/CourseAction';
import CourseVideo from "../components/CourseVideo";

class CourseVideoContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount() {

    }

    render()
    {
        return (
            <div className="course-video-wrapper">
                <CourseVideo period={this.props.selectedPeriod}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      selectedPeriod: state.selectedPeriod
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(CourseVideoContainer);
