import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "../styles";


function MessageSnackbar(props) {
    const classes = useStyles();

    const text = "Leid trat auf unserem Server ein Fehler auf, bitte überprüfe deine " +
        "Eingabe oder versuche es später erneut.";

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
