import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const NotRegistered = ({check}) => {

    const showHide = check ? "d-block" : "d-none"
    
    return (
        <p className={`text-white bg-danger p-2 fs-5 ${showHide} `}>
            User does not exists.Would you like to{" "}
            <Link className="text-dark" to="/register">create a new account?</Link>
        </p>
    );
};

const InvalidData = ({checkValues}) => {

    const showHide = checkValues ? "d-block" : "d-none"

    return (
        <div className={`${showHide} bg-danger p-3 `}>
            <h3 className="text-center text-white">Login failed!</h3>
            <p className="text-white fs-6">
                Your email or password you entered is incorrect
            </p>
            <p className="text-white fs-6">Please, try again.</p>
        </div>
    );
};



const LoginSchema = () => {
	const LoginSchema = Yup.object({
		email: Yup.string()
			.email("Invalid an email!!!")
			.required("Email Required!"),
		password: Yup.string().min(8, "Must be at least 8 characters!"),
	});

	return LoginSchema;
};

export {LoginSchema, NotRegistered, InvalidData };
