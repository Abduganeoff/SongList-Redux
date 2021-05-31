import React, { Component } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class App extends Component {
	render() {
		return (
			<Grid container>
				<Grid item xs={6}>
					<Paper>
						<SongList />
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<SongDetail />
				</Grid>
			</Grid>
		);
	}
}

export default App;
