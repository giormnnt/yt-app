import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
	state = { videos: [] };

	onSearchSubmit = async search => {
		const res = await youtube.get('/search', {
			params: {
				q: search,
			},
		});

		this.setState({ videos: res.data.items });
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
