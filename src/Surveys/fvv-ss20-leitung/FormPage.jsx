import React, {useState} from 'react';
import Form from "./Form";

import axios from 'axios';
import MessageSnackbar from "../../Components/MessageSnackbar";
import queryString from 'query-string'

import {withRouter} from 'react-router-dom'
import {BACKEND_URL} from "../../constants";
import Container from "@material-ui/core/Container";


function FormPage(props) {

	const pathParams = queryString.parse(window.location.search);
	let initialState = {
		email: "",
		election: {
		}
	};

	if ("email" in pathParams) {
		initialState.email = pathParams["email"].replace("+", " ");
	}

	const options = ["ja", "nein", "enthaltung"];
	for (let i=0; i<3; i++) {
		if (options[i] in pathParams) {
			initialState.election[options[i]] = (pathParams[options[i]] === "true");
		} else {
			initialState.election[options[i]] = false;
		}
	}


	const [formValues, setFormValuesRaw] = useState(initialState);

	function setFormValues(newValues) {
		closeMessage();
		setFormValuesRaw(newValues);
	}

	function getPathParams() {
		let pathParams = "?email=" + formValues["email"];

		options.forEach((option) => {
			pathParams += "&" + option + "=" + formValues.election[option];
		})

		return pathParams;
	}

	const [snackbar, setSnackbar] = useState({open: false, text: ""})
	const [submitting, setSubmitting] = useState(false);

	function closeMessage(){
		setSnackbar({open: false, text: snackbar.text});
	}

	function openMessage(text){
		setSnackbar({open: true, text: text});
	}

	function submit() {
		setSubmitting(true);
		closeMessage();
		console.log("Submit");

		let backend = axios.create({
			baseURL: BACKEND_URL,
			responseType: "json"
		});

		backend.post("fvv-ss20-leitung/submit", {form_data: formValues})
			.then(() => {
				// Timeout needed so that the user does not get on
				// mail.tum.de too fast (when outlook has not received
				// the mail yet)
				setTimeout(() => {
					setSubmitting(false);
					props.history.push('/fvv-ss20-leitung/verify' + getPathParams());
				}, 1500);
			})
			.catch(error => {
				// Timeout for a better visual experience
				setTimeout(() => {
					setSubmitting(false);
					props.history.push('/fvv-ss20-leitung/form' + getPathParams());
					console.log(error.response.data.status);
					openMessage(error.response.data.status);
				}, 800);
			})
	}

	return (
		<Container maxWidth="sm">
			<Form
				formValues={formValues}
				setFormValues={setFormValues}
				handleSubmit={submit}
				submitting={submitting}
			/>
			<MessageSnackbar
				open={snackbar.open}
				text={snackbar.text}
				closeMessage={closeMessage}
			/>
		</Container>
	);

}

export default withRouter(FormPage);
