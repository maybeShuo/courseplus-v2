import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Affix } from 'antd';

import 'course/resource/index.less';

import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';
import DetailContainer from './DetailContainer';


class CourseContainer extends Component {

    constructor (props) {
        super(props);
        this._scroll_event = this._scroll_event.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        curClass: "state1"
    }

    componentDidMount()
    {
        this.sidebar = this.refs["sidebar"];
        window.onscroll = this._scroll_event;
        this.sidebar.style.height = this.refs['detail'].offsetHeight + 'px';

    }

    _scroll_event()
    {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //console.log(scrollTop);
        if(scrollTop < 172){
            this.setState({
                curClass: "state1"
            });
        }else if (scrollTop >= 172 && scrollTop < this.refs['detail'].offsetHeight-719+172) {
            //172:header+titleBar;719:sidebar
            this.setState({
                curClass: "state2"
            });
        }else{
            this.setState({
                curClass: "state3"
            });
        }

    }

    render()
    {
        return (
            <div className="cp-course-container">
                <div className="titleBar">
                    <TitleBar />
                </div>
                <div className="center-container" >
                    <div ref="sidebar" className="sidebar">
                        <Sidebar curClass={this.state.curClass}/>
                    </div>
                    <div ref="detail" className="detail">
                        <DetailContainer />
                    </div>
                </div>
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
export default connect(mapStateToProps)(CourseContainer);
