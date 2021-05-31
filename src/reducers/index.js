import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			singer: 'Justin Biber',
			name: 'Never say never',
			duration: '2:34'
		},
		{
			singer: 'One Republic',
			name: 'Counting stars',
			duration: '4:00'
		},
		{
			singer: 'Flying steps',
			name: 'We are electric',
			duration: '3:53'
		},
		{
			singer: 'Imagine Dragon',
			name: 'Believer',
			duration: '5:34'
		},
		{
			singer: 'Alen Walker',
			name: 'Fade away',
			duration: '3:00'
		}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SELECT_SONG') {
		selectedSong = action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
