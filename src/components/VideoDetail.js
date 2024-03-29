import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) return <div>Loading...</div>;

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe
					src={`${videoSrc}?autoplay=1`}
					allowFullScreen
					title="video player"
				/>
			</div>
			<div className="ui segment">
				<h4 className="ui header">
					{video.snippet.title.replaceAll('&#39;', "'")}
				</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
