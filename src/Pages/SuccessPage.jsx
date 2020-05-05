import React from 'react';
import useStyles from "../styles";
import Typography from "@material-ui/core/Typography";
import {Link, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";


function SuccessPage(props) {

	const classes = useStyles();

	return (
		<React.Fragment>
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
				<Link to={"/" + props.match.params.surveyId + "/form"}>
					<Button variant="contained" color="primary" disableElevation>
						Zum Formular
					</Button>
				</Link>
			</div>
		</React.Fragment>
	);

}

export default withRouter(SuccessPage);
