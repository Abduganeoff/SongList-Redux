import React, { Component } from 'react';
import { selectSong } from '../actions';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class SongList extends Component {
	createSongList() {
		return this.props.songs.map((song, idx) => {
			return (
				<React.Fragment key={song.name}>
					<ListItem>
						<ListItemText primary={song.name} />
						<ListItemSecondaryAction>
							<Button
								onClick={() => this.props.selectSong(song)}
								variant="contained"
								color="primary"
							>
								Select
							</Button>
						</ListItemSecondaryAction>
					</ListItem>
					{idx < this.props.songs.length - 1 && <Divider />}
				</React.Fragment>
			);
		});
	}
	render() {
		return (
			<List
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Songs
					</ListSubheader>
				}
			>
				{this.createSongList()}
			</List>
		);
	}
}

const mapStateToProps = (state) => {
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
