import React from 'react';
import useStyles from "../../styles";
import clsx from "clsx";
import VotingImage from "../assets/undraw_voting_nvu7.svg";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


function IndexPage() {

	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={clsx(classes.flexBoxRow, classes.logoBox, classes.logoBox200)}>
				<img src={VotingImage} alt="Voting Image" className={classes.logoBoxLogo}/>
			</div>

			<div className={classes.titleTextBox2}>
				<Typography variant="h4">
					Entlastung der Fachschaftsleitung
				</Typography>
			</div>
			<div className={classes.titleTextBox1}>
				<Typography variant="h5">
					FVV SS20, 06.05.2020
				</Typography>
			</div>
			<Container maxWidth="sm">
				<div className={classes.titleTextBox2}>
					<Typography variant="subtitle1">
						Am <strong>06.05.2020</strong> ab <strong>10:00 Uhr</strong>&nbsp;
						findet unsere Fachschafts-Vollversammlung auf Twitch statt:&nbsp;
						<a href="https://www.twitch.tv/fs_mse/" target="_blank" rel="noopener noreferrer">
							https://www.twitch.tv/fs_mse/
						</a>.

						<br/><br/>

						Wir <strong>künden im Live Stream an, ab wann und bis wann</strong>&nbsp;
						du hier für über die Entlastung der Fachschaftsleitung abstimmen kannst.

						<br/><br/>

						Um daran teilzunehmen, musst du dieses Formular ausfüllen,
						sowie deine <strong>Email-Adresse bestätigen</strong>.

						<br/><br/>

						Damit wir deine Stimme werten können, verwende hierfür bitte deine&nbsp;
						<strong>@mytum.de Email Adresse</strong>.<br/>
						<em>(z.B. ab12cd3@mytum.de)</em>

						<br/><br/>
					</Typography>
				</div>
			</Container>

			<div className={classes.flexBoxRow}>
				<Link to="/fvv-ss20-entlastung/form">
					<Button variant="contained" color="primary" disableElevation>
						Zum Formular
					</Button>
				</Link>
			</div>
		</React.Fragment>
	);

}

export default IndexPage;
