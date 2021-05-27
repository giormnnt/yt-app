import './VideoItem.css';
import React from 'react';

const VideoItem = ({ onVideoSelect, video }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<img
				className="ui image"
				alt={video.snippet.title.replaceAll('&#39;', "'")}
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<div className="header">
					{video.snippet.title.replaceAll('&#39;', "'")}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
