import React from 'react';
import useStyles from "../styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";


function SuccessPage() {

	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.textBox3}>
				<Typography variant="h4">
					Email Adresse erfolgreich bestätigt!
				</Typography>
			</div>

			<div className={classes.textBox3}>
				<Typography variant="subtitle1">
					<React.Fragment>
						<strong>Falls du deine Daten ändern möchtest</strong>, fülle einfach nochmal
						das Formular aus und bestätige die Daten mit der neuen Verifikations-Mail.
						<br/><br/>
						Für eine weitere Person Reservieren?
					</React.Fragment>
				</Typography>
			</div>

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

export default SuccessPage;
