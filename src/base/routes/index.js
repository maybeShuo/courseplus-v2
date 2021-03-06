import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'base/containers/App.js';

const home = (location, callback) => {
	require.ensure(['home/containers/HomeContainer.js'], require => {
		callback(null, require('home/containers/HomeContainer.js').default);
	}, 'home');
};

const search = (location, callback) => {
	require.ensure(['search/containers/SearchContainer.js'], require => {
		callback(null, require('search/containers/SearchContainer.js').default);
	}, 'search');
};

const course = (location, callback) => {
	require.ensure(['course/containers/CourseContainer.js'], require => {
		callback(null, require('course/containers/CourseContainer.js').default);
	}, 'course');
};

const user = (location, callback) => {
	require.ensure(['user/containers/UserContainer.js'], require => {
		callback(null, require('user/containers/UserContainer.js').default);
	}, 'user');
};

const order = (location, callback) => {
	require.ensure(['order/containers/OrderContainer.js'], require => {
		callback(null, require('order/containers/OrderContainer.js').default);
	}, 'order');
};

const myCourse = (location, callback) => {
	require.ensure(['mycourse/containers/MyCourseContainer.js'], require => {
		callback(null, require('mycourse/containers/MyCourseContainer.js').default);
	}, 'mycourse');
};

const live = (location, callback) => {
	require.ensure(['live/containers/LiveContainer.js'], require => {
		callback(null, require('live/containers/LiveContainer.js').default);
	}, 'live');
};

const notFound = (location, callback) => {
	require.ensure(['base/containers/NotFoundContainer.js'], require => {
		callback(null, require('base/containers/NotFoundContainer.js').default);
	}, '404');
};


const routes = (
    <div>
		<Route path='/' component={App}>
			<IndexRoute getComponent={home} />
            <Route path='home' getComponent={home} />
			<Route path='search(/:school)(/:major)' getComponent={search} />
			<Route path='course' getComponent={course} />
			<Route path='search(/:school)(/:speciality)' getComponent={search} />
			<Route path='course/:courseId' getComponent={course} />
			<Route path='user' getComponent={user} />
			<Route path='order' getComponent={order} />
			<Route path='mycourse' getComponent={myCourse} />
			<Route path='live/:liveId' getComponent={live} />
			<Route path='404' getComponent={notFound} />
		</Route>
    </div>
);

export default routes;
