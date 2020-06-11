import React from 'react';
import useStyles from "../styles";
import DrawingSurvey from '../Surveys/assets/undraw_customer_survey_f9ur.svg';
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";


function NotFoundPage() {

	const classes = useStyles();

	return (
		<div className={classes.flexBoxCol}>

			<div className={clsx(classes.logoBox, classes.logoBox250)}>
				<img src={DrawingSurvey} alt="Survey Drawing" className={classes.logoBoxLogo}/>
			</div>

			<div className={classes.textBox3}>
				<Typography variant="h4">
					Willkommen beim MSE Survey Tool!
				</Typography>
			</div>
			<div className={classes.textBox3}>
				<Typography variant="subtitle1">
					Bitte <strong>benutze einen gültigen Link</strong>, um an einer Umfrage teilzunehmen.
				</Typography>
			</div>
		</div>
	);

}

export default NotFoundPage;
