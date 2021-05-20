import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
	onSearchSubmit = search => {
		youtube.get('/search', {
			params: {
				q: search,
			},
		});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
