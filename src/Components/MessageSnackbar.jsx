import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "../styles";


function MessageSnackbar(props) {
    const classes = useStyles();

    let text = "";

    switch (props.text) {

        // REGULAR FORM ERRORS (Client/Server)
        case "validation error: name/email missing":
            // Email/Password/Zip Code/Country form field empty
            text = "Bitte trage Namen und Email Addresse ein";
            break;
        case "validation error: email domain":
            text = "Du benötigst eine \"...@tum.de\" oder eine \"...@mytum.de\" Email Adresse";
            break;
        case "validation error: email format":
            text = "Bitte trage ein gültige Adresse ein";
            break;
        case "validation error: street/zip_code/city missing":
            text = "Um dir das Kit zu schicken, benötigen wir deine ganze Adresse."
            break;

        case "validation error: country invalid":
            text = "Bitte nicht versuchen, invalide Daten zu senden, du Schlingel..."
            break;
        case "validation error: XSS alert":
            text = "Bitte nicht versuchen, invalide Daten zu senden, du Schlingel..."
            break;

        case "":
            break;

        default:
            text = "Leid trat auf unserem Server ein Fehler auf, bitte überprüfe deine " +
                "Eingabe oder versuche es später erneut."
            break;
    }

    if (text !== "") {
        console.log("Error message: '" + props.text + "'");
    }

    return (
        <Snackbar className={classes.snackbar}
                  open={props.open}
                  anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <SnackbarContent
                className={classes.snackbarContent}
                aria-describedby="message-id"
                message={<span id="message-id">{text}</span>}
                action={(
                    <IconButton onClick={props.closeMessage}>
                        <CloseIcon className={classes.snackbarIcon} style={{fill: "white", color: "white"}}/>
                    </IconButton>
                )}
            />
        </Snackbar>
    );
}

export default MessageSnackbar;
