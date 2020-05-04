import React from 'react';
import useStyles from "../../styles";
import {CustomTextField} from "../CustomTextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";
import CircularProgress from "@material-ui/core/CircularProgress";


function Form20200505(props) {

	const classes = useStyles();

	function handleFormChange(newValue) {

		// Deepcopy object without a library
		let newState = {};
		const keys = ["name", "email", "remote"];

		keys.forEach((key) => {
			if (key in newValue) {
				newState[key] = newValue[key];
			} else {
				newState[key] = props.formValues[key];
			}
		})

		if ("remote" in newValue) {
			Cookies.set('form-remote', newValue["remote"], {expires: 1});
		}

		props.setFormValues(newState);
	}

	return (
		<React.Fragment>
			<Grid container justitfy="center" spacing={2}>
				<Grid item xs={12} className={classes.textBox3}>
					<Typography variant="subtitle1">
						Bitte überprüfe in jedem Fall, ob in TUMOnline <br/>
						deine aktuelle Wohnadresse eingetragen ist:
						<br/>
						<strong>Ressourcen > Korrespondenzadresse (Studienadresse)</strong>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<div className={classes.flexBoxRow}>
						<div className={classes.button}>
							<a href="https://campus.tum.de/" target="_blank" rel="noopener noreferrer">
								<Button
									disabled={props.submitting}
									variant="contained"
									onClick={props.handleReset}
									disableElevation>
									campus.tum.de öffnen
								</Button>
							</a>
						</div>
					</div>
				</Grid>

				<Grid item xs={12}>
					<div className={classes.divider3}/>
				</Grid>

				<Grid item xs={12}>
					<CustomTextField
						disabled={props.submitting}
						label="Name"
						fullWidth
						value={props.formValues.name}
						variant="outlined"
						onChange={(newValue) => handleFormChange({name: newValue})}
					/>
				</Grid>
				<Grid item xs={12}>
					<CustomTextField
						disabled={props.submitting}
						label="Email"
						fullWidth
						value={props.formValues.email}
						variant="outlined"
						onChange={(newValue) => handleFormChange({email: newValue})}
						onEnter={!props.formValues.remote ? props.handleSubmit : () => {
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<div className={classes.flexBoxRow}>
						<Checkbox
							disabled={props.submitting}
							checked={props.formValues.remote}
							color="primary"
							onChange={() => handleFormChange({remote: !props.formValues.remote})}
						/>
						<Typography variant="subtitle1" className={props.submitting ? classes.disabledText : ""}>
							Ich kann das Arduino Kit <strong>nicht</strong> persönlich in München abholen
						</Typography>
					</div>
				</Grid>

				<Grid item xs={12}>
					<div className={classes.flexBoxRow}>
						<div className={classes.button}>
							<Button
								disabled={props.submitting}
								variant="contained"
								color="primary"
								onClick={props.handleSubmit}
								disableElevation>
								Kit Reservieren
							</Button>
							{props.submitting && (
								<CircularProgress size={24}
								                  className={classes.buttonProgress}
								                  color="primary"/>
							)}
						</div>
					</div>
				</Grid>
			</Grid>
		</React.Fragment>
	);

}

export default Form20200505;
