import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

interface DialogData {
    isOpen: boolean;
    title: string;
    subTitle: string;
    onConfirm: () => void;
}

interface IConfirmDialogProps {
    confirmDialog: DialogData;
    setConfirmDialog: React.Dispatch<React.SetStateAction<DialogData>>;
}

function ConfirmDialog(props: IConfirmDialogProps) {
    const { confirmDialog, setConfirmDialog } = props;

    const handleClose = () => {
        setConfirmDialog({ ...confirmDialog, isOpen: false });
    };

    return (
        <Dialog
            open={confirmDialog.isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {confirmDialog.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {confirmDialog.subTitle}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={confirmDialog.onConfirm}>Agree</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;
