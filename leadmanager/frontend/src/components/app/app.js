import React, {Component, Fragment} from 'react';

import Header from '../header';
import Dashboard from '../dashboard';

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="container">
					<Dashboard />
				</div>
			</Fragment>
		)
	}
}
