import React, { Component } from 'react';
import { connect } from 'react-redux';

import "mycourse/resource/index.less";
import TopTabs from '../components/TopTabs';

class MyCourseContainer extends Component {

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
            <div className="cp-mycourse-container">
                {/* 我的考研课程 */}
                <TopTabs />
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      goodCourses: state.goodCourses
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(MyCourseContainer);
