import React, { useContext } from "react";
import secureLocalStorage from "react-secure-storage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import SignUpSchema from "./RegisterFormValidation";
import { AuthContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
		},
		resolver: yupResolver(SignUpSchema()),
	});


	const onSubmit = (data) => {
        setUser({ data: [data] });
        navigate("/")

      
	};

	return (
		<section className="login-form p-5 bg-dark">
			<form
				className="w-50 mx-auto my-5 p-5 shadow"
				style={{ backgroundColor: "#2c2c2c" }}
				onSubmit={handleSubmit(onSubmit)}
			>
                <h2 className="fs-1 text-center mb-5" style={{color: "#8b8888"}}>Register</h2>
				<label className="w-100 mb-3">
					<input
						type="text"
						className="form-control bg-dark text-white"
						placeholder="Enter your first name"
						{...register("first_name")}
					/>
					<span className="mb-0 d-block text-danger">{errors.first_name?.message}</span>
				</label>
				<label className="w-100 mb-3">
					<input
						type="text"
						className="form-control bg-dark text-white"
						placeholder="Enter your last name"
						{...register("last_name")}
					/>
					<span className="mb-0 d-block text-danger">{errors.last_name?.message}</span>
				</label>
				<label className="w-100 mb-3">
					<input
						type="email"
						className="form-control bg-dark text-white"
						placeholder="Enter your email"
						{...register("email")}
					/>
					<span className="mb-0 d-block text-danger">{errors.email?.message}</span>
				</label>
				<label className="w-100 mb-5">
					<input
						type="password"
						className="form-control bg-dark text-white"
						placeholder="Enter your password"
						{...register("password")}
					/>
					<span className="mb-0 d-block text-danger">{errors.password?.message}</span>
				</label>
                <p className="text-white fs-4">Already have an account? <Link to="/login">Login</Link></p>
				<button disabled={!isValid} className="btn btn-success" type="submit">
					Submit
				</button>
			</form>

		</section>
	);
};

export default RegisterForm;
