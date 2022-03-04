import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { authSelector, login } from "../../authSlice";
import AuthForm from "../../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../../../../models/User";

// Configure FirebaseUI.
const uiConfig = {
    signInFlow: "redirect",
    signInSuccessUrl: "/photos",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignIn() {
    const dispatch = useAppDispatch();
    const history = useNavigate();

    const { isFetching, isSuccess, isError, errorMessage } =
        useAppSelector(authSelector);

    const handleLoginClick = (data: User) => {
        // dispatch(login(data));
        console.log(data);
    };

    const initialValues = {};

    // useEffect(() => {
    //     return () => {
    //         dispatch(clearState());
    //     };
    // }, []);

    useEffect(() => {
        if (isSuccess) {
            history("/photos");
        }
        if (isError) {
            // dispatch(clearState());
        }
    }, [isSuccess, isError]);

    return (
        <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography variant="h4">Login Form</Typography>
            <Typography variant="h6">or login with social accounts</Typography>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />

            <Container maxWidth="sm" sx={{ my: 6 }}>
                <AuthForm
                    initialValues={initialValues}
                    onSubmit={handleLoginClick}
                />
            </Container>
        </Box>
    );
}

export default SignIn;
