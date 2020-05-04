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

	function handleFormChange(stateUpdate) {

		// Deepcopy object without a library
		let newState = {
			email: props.formValues.email,
			election: props.formValues.election,
		};

		if ("email" in stateUpdate) {
			newState.email = stateUpdate.email;
		}

		if ("election" in stateUpdate) {
			const names = ["albers", "deniers", "schmidt", "ballweg"];

			for (let i=0; i<4; i++) {
				if (names[i] in stateUpdate.election) {
					newState.election[names[i]] = stateUpdate.election[names[i]];
				}
			}
		}

		props.setFormValues(newState);
	}

	return (
		<React.Fragment>
			<Grid container justitfy="center" spacing={2}>

				<div className={classes.titleTextBox2}>
					<Typography variant="h4">
						Semestersprecher Wahl
					</Typography>
				</div>
				<div className={classes.titleTextBox1}>
					<Typography variant="h5">
						6. Fachsemester, 05.05.2020
					</Typography>
				</div>

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
							checked={props.formValues.election.albers}
							color="primary"
							onChange={() => handleFormChange({election: {albers: !props.formValues.election.albers}})}
						/>
						<Typography variant="subtitle1" className={props.submitting ? classes.disabledText : ""}>
							Steffi Albers
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
								Wahl Bestätigen
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
