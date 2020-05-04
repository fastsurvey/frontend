import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	page: {
		width: "100vw",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	main: {
		marginTop: 72,
		marginBottom: 72,
		width: "100%",
	},
	formField: {
	},
	flexBoxRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	flexBoxCol: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	logoBox: {
		marginBottom: theme.spacing(5),
	},
	logoBox100: {
		height: 100,
	},
	logoBox200: {
		height: 200,
	},
	logoBox250: {
		height: 250,
	},
	logoBox300: {
		height: 300,
	},
	logoBoxLogo: {
		maxHeight: "100%",
		marginLeft: theme.spacing(1.5),
		marginRight: theme.spacing(1.5),
	},
	titleTextBox1: {
		marginBottom: theme.spacing(5),
		textAlign: "center",
	},
	titleTextBox2: {
		marginBottom: theme.spacing(1),
		textAlign: "center",
	},

	textBox5: {
		marginBottom: theme.spacing(5),
		textAlign: "center",
	},
	textBox3: {
		marginBottom: theme.spacing(3),
		textAlign: "center",
	},
	button: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		position: 'relative',
	},
	buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
	cornerLogoBox: {
		position: "absolute",
		top: 16,
		left: 16,
		height: 40,
		zIndex: "1000",
	},
	cornerLogo: {
		maxHeight: "100%",
		zIndex: "1000",
	},
	snackbar: {
        margin: theme.spacing(1),
    },
    snackbarContent: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
    snackbarIcon: {
        fill: "white",
    },
	disabledText: {
		color: "rgb(160, 160, 160)",
	},
	NotFoundDrawingBox: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		maxHeight: "300px",
		maxWidth: "100%",
		marginBottom: theme.spacing(6),
	},
	NotFoundDrawing: {
		maxHeight: "100%",
		maxWidth: "100%",
	},
	divider3: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
	margin3: {
		marginBottom: theme.spacing(3),
	},
	margin6: {
		marginBottom: theme.spacing(6),
	}
}))

export default useStyles;
