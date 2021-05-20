import axios from 'axios';

const KEY = 'AIzaSyCH8cJa5hwQBu6OQIOziTnkn0zvuQ0xSTA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
