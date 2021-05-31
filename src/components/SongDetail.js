import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	details: {
		display: 'flex',
		flexDirection: 'column'
	},
	content: {
		flex: '1 0 auto'
	},
	cover: {
		width: 151
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	playIcon: {
		height: 38,
		width: 38
	}
}));

function SongDetail({ selectedSong }) {
	const classes = useStyles();
	const theme = useTheme();

	if (!selectedSong) {
		return <h1>Please select a song</h1>;
	}

	return (
		<Card>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						{selectedSong.name}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						{selectedSong.singer}
					</Typography>
				</CardContent>
				<div className={classes.controls}>
					<IconButton aria-label="previous">
						{theme.direction === 'rtl' ? (
							<SkipNextIcon />
						) : (
							<SkipPreviousIcon />
						)}
					</IconButton>
					<IconButton aria-label="play/pause">
						<PlayArrowIcon className={classes.playIcon} />
					</IconButton>
					<IconButton aria-label="next">
						{theme.direction === 'rtl' ? (
							<SkipPreviousIcon />
						) : (
							<SkipNextIcon />
						)}
					</IconButton>
				</div>
			</div>
			
		</Card>
	);
}

const mapStateToProps = (state) => {
	return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
