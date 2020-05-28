import { Component } from 'preact';

import Header from './header';
import Story from './story'

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<Story />
			</div>
		);
	}
}
