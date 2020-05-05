import React from 'react';
import useStyles from "../styles";
import Typography from "@material-ui/core/Typography";
import {Link, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";


function SuccessPage(props) {

	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<div className={classes.textBox3}>
				<Typography variant="h4">
					Eingabe erfolgreich bestätigt!
				</Typography>
			</div>

			<div className={classes.textBox3}>
				<Typography variant="subtitle1">
					<strong>Falls du deine Daten ändern möchtest</strong>, fülle einfach nochmal
					das Formular aus und bestätige die Daten mit der neuen Verifikations-Mail.
				</Typography>
			</div>

			<div className={classes.flexBoxRow}>
				<div className={classes.button}>
					<Link to={"/" + props.match.params.surveyId + "/form"}>
						<Button variant="contained" disableElevation>
							Zum Formular
						</Button>
					</Link>
				</div>

				<div className={classes.button}>
					<Link to={"/" + props.match.params.surveyId + "/results"}>
						<Button variant="contained" color="primary" disableElevation>
							Zu den Ergebnissen
						</Button>
					</Link>
				</div>
			</div>
		</Container>
	);

}

export default withRouter(SuccessPage);
