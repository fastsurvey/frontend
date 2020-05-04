import React from 'react';
import useStyles from "../styles";
import clsx from "clsx";
import ArduinoImage from "../Components/assets/ArduinoUno.png";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


function IndexPage() {

	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={clsx(classes.flexBoxRow, classes.logoBox)}>
				<img src={ArduinoImage} alt="Arduino Uno" className={classes.logoBoxLogo}/>
			</div>

			<div className={classes.titleTextBox1}>
				<Typography variant="h4">
					MINT Projektmodul 2020 <strong>Survey 1</strong>
				</Typography>
			</div>
			<Container maxWidth="xs">
				<div className={classes.titleTextBox2}>
					<Typography variant="subtitle1">
						Um im vollen Umfang an dieser Veranstaltung teilnehmen zu können,
						stellen wir jedem Teilnehmer ein <strong>Arduino Kit</strong> zur
						Verfügung, welches <strong>alle Bauteile</strong> enthält, die wir
						in den Aufgaben verwenden.

						<br/><br/>

						Um ein Arduino Kit zu bekommen, musst du dieses Formular ausfüllen,
						sowie deine <strong>Email-Adresse bestätigen</strong>.

						<br/><br/>

						Bitte verwende hierfür deine <strong>TUM-Mail Adresse</strong>, da
						wir dir sonst kein Kit reservieren können.
					</Typography>
				</div>
			</Container>

			<div className={classes.flexBoxRow}>
				<Link to="/form">
					<Button variant="contained" color="primary" disableElevation>
						Zum Formular
					</Button>
				</Link>
			</div>
		</React.Fragment>
	);

}

export default IndexPage;
