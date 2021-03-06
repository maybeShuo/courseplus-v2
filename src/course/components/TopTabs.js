import React, { Component } from 'react';
import { Affix, Tabs } from "antd";

import PeriodLineContainer from '../containers/PeriodLineContainer';
import ExclusiveResourceContainer from '../containers/ExclusiveResourceContainer';

export default class TopTabs extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount(){

    }

    render(){
        const TabPane = Tabs.TabPane;

        return(
            <Affix>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="课程大纲" key="1">
                        <PeriodLineContainer />
                    </TabPane>
                    <TabPane tab="独家资料" key="2">
                        <ExclusiveResourceContainer />
                    </TabPane>
                    <TabPane tab="提问" key="3">content3</TabPane>
                    <TabPane tab="评价" key="4">content4</TabPane>
                </Tabs>
            </Affix>
        )
    }
}
