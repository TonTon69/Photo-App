import { Alert, Snackbar } from "@mui/material";
import React from "react";

interface INotificationProps {
    notify: any;
    setNotify: any;
}

function Notification(props: INotificationProps) {
    const { notify, setNotify } = props;

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
