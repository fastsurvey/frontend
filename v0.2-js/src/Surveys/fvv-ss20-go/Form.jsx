import React from 'react';
import useStyles from "../../styles";
import {CustomTextField} from "../../Components/CustomTextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import Collapse from '@material-ui/core/Collapse';
import Divider from "@material-ui/core/Divider";

function SelectionRow(props) {

	const classes = useStyles();

	return (
		<div className={classes.flexBoxRow}>
			<Checkbox
				disabled={props.submitting}
				checked={props.checked}
				color="primary"
				onChange={props.onChange}
			/>
			<Typography variant="subtitle1"
						className={clsx(props.submitting ? classes.disabledText : "", classes.candidateTextLarge)}>
				{props.label}
			</Typography>
		</div>
	);
}

function Form(props) {

	const classes = useStyles();

	function handleEmailChange(newEmail) {
		// Deepcopy object without a library
		let newState = {
			email: newEmail,
			election: props.formValues.election,
		};

		props.setFormValues(newState);
	}

	function handleElectionChange(label, newValue) {

		// Deepcopy object without a library
		let newState = {
			email: props.formValues.email,
			election: {
				"ja": false,
				"nein": false,
				"enthaltung": false
			},
		};

		switch (label) {
			case "ja":
				newState.election["ja"] = newValue;
				break;
			case "nein":
				newState.election["nein"] = newValue;
				break;
			default:
				newState.election["enthaltung"] = newValue;
				break;
		}

		props.setFormValues(newState);
	}

	return (
		<React.Fragment>
			<Grid container justitfy="center" spacing={2}>

				<div className={classes.titleTextBox2}>
					<Typography variant="h4">
						Abstimmung zur Geschäftsordnung der Fachschaft
					</Typography>
				</div>
				<div className={classes.titleTextBox1}>
					<Typography variant="h5">
						FVV SS20, 06.05.2020
					</Typography>
				</div>

				<Grid item xs={12}>
					<CustomTextField
						disabled={props.submitting}
						label="Email"
						fullWidth
						helperText="<lrz-kennung>@mytum.de"
						value={props.formValues.email}
						variant="outlined"
						onChange={(newValue) => handleEmailChange(newValue)}
						onEnter={!props.formValues.remote ? props.handleSubmit : () => {
						}}
					/>
				</Grid>

				<Grid item xs={12}>
					<div className={classes.divider3}>
						<Divider/>
					</div>
				</Grid>

				<div className={classes.titleTextBox2}>
					<Typography variant="h5">
						Stimmst du der neuen Geschäftsordnung der zu?
					</Typography>
				</div>

				<Grid item xs={12}>
				{[
					{id: "ja", label: "Ja"},
					{id: "nein", label: "Nein"},
					{id: "enthaltung", label: "Ich enthalte mich"}].map((element) => {
						return (
							<SelectionRow
								submitting={props.submitting}
								checked={props.formValues.election[element.id]}
								onChange={() => handleElectionChange(
									element.id, !props.formValues.election[element.id])}
								label={element.label}
							/>
						);
					}
				)}
				</Grid>

				<Grid item xs={12}>
					<div className={classes.divider3}>
						<Divider/>
					</div>
				</Grid>

				<Grid item xs={12}>
					<Collapse className={classes.hintText}
							  in={!props.formValues.email.endsWith("@mytum.de") ||
							  props.formValues.email.length !== 16}>
						<em>Bitte gib eine gültige <strong>@mytum.de</strong> Email Adresse an</em>
					</Collapse>
					<Collapse className={classes.hintText}
							  in={!props.formValues.election["ja"] &&
							  !props.formValues.election["nein"] &&
							  !props.formValues.election["enthaltung"]}>
						<em>Bitte wähle <strong>eine der drei Optionen</strong> aus</em>
					</Collapse>
					<div className={classes.divider2}/>

					<div className={classes.flexBoxRow}>
						<div className={classes.button}>
							<Button
								disabled={(
									props.submitting
								) || (
									!props.formValues.email.endsWith("@mytum.de") ||
									props.formValues.email.length !== 16
								) || (
									!props.formValues.election["ja"] &&
									!props.formValues.election["nein"] &&
									!props.formValues.election["enthaltung"]
								)}
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

export default Form;
