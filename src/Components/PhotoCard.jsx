import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import ButtonCard from "./ButtonCard";
// import './Home.styles.css';
import Join from "./Join.component";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 300,
	},
	controlsWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		position: "absolute",
		right: "30px",
		top: "200px",
	},
});

export default function MediaCard({ getRoomID, roomID }) {
	const classes = useStyles();

	return (
		<div className={classes.controlsWrapper}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="https://lh3.googleusercontent.com/b_KqB0XhYGPkKGhCt8EGc4T7nVIu1wSZwYFJT0SW2pY-fhskJmGu5XW5wscxJcXmWg"
						title="Buttons"
					/>

					<CardActions></CardActions>
				</CardActionArea>
			</Card>
		</div>
	);
}
