import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	onSearchSubmit = async search => {
		const res = await youtube.get('/search', {
			params: {
				q: search,
			},
		});

		this.setState({ videos: res.data.items });
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
