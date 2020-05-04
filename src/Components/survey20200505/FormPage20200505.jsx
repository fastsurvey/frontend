import React, {useState} from 'react';
import Form from "./Form20200505";

import axios from 'axios';
import MessageSnackbar from "../../Components/MessageSnackbar";
import queryString from 'query-string'

import {withRouter} from 'react-router-dom'
import {BACKEND_URL} from "../../constants";


function FormPage20200505(props) {

	const pathParams = queryString.parse(window.location.search);
	let initialState = {};
	const keys = ["name", "email", "remote"];

	keys.forEach((key) => {
		if (key in pathParams) {
			initialState[key] = (key !== "remote") ? pathParams[key].replace("+", " ") : (pathParams[key] === "true");
		} else {
			initialState[key] = (key !== "remote") ? "" : false;
		}
	})

	const [formValues, setFormValuesRaw] = useState(initialState);

	function setFormValues(newValues) {
		closeMessage();
		setFormValuesRaw(newValues);
	}

	function getPathParams() {
		let pathParams = "?";

		keys.forEach((key) => {
			pathParams += key + "=" + formValues[key] + "&";
		})

		return pathParams.substring(0, pathParams.length - 1);
	}

	const [snackbar, setSnackbar] = useState({open: false, text: ""})
	const [submitting, setSubmitting] = useState(false);

	function closeMessage(){
		setSnackbar({open: false, text: snackbar.text});
	}

	function submit() {
		setSubmitting(true);
		closeMessage();
		console.log("Submit");

		axios.post(BACKEND_URL + "submit/20200505", formValues)
			.then(() => {
				props.history.push('/verify' + getPathParams());
				setSubmitting(false);
			})
			.catch((error) => {
				setTimeout(() => {
					setSubmitting(false);
					props.history.push('/form' + getPathParams());
					setSnackbar({
						open: true,
						text: JSON.parse(error.request.response).status
					});
				}, 800)
			})
	}

	function reset() {
		console.log("Reset");

		props.history.push('/form');

		setFormValues({
			name: "",
			email: "",
			remote: false,
		})
	}

	return (
		<React.Fragment>
			<Form
				formValues={formValues}
				setFormValues={setFormValues}
				handleSubmit={submit}
				handleReset={reset}
				submitting={submitting}
			/>
			<MessageSnackbar
				open={snackbar.open}
				text={snackbar.text}
				closeMessage={closeMessage}
			/>
		</React.Fragment>
	);

}

export default withRouter(FormPage20200505);
