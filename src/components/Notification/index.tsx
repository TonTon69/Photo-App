import { Alert, makeStyles, Snackbar } from "@mui/material";
import React from "react";

interface INotificationProps {
    notify: any;
    setNotify: any;
}

// const useStyles = makeStyles((theme: any) => ({
//     root: {
//         top: theme.spacing(9),
//     },
// }));

function Notification(props: INotificationProps) {
    const { notify, setNotify } = props;
    // const classes = useStyles();

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false,
        });
    };

    return (
        <Snackbar
            // className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
        >
            <Alert severity={notify.type} onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    );
}

export default Notification;
