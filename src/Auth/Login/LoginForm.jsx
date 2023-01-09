import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context";
import { InvalidData,LoginSchema,NotRegistered } from "./LoginFormValidation";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const { user, setUser } = useContext(AuthContext);
	const [checkValues, setCheckValues] = useState(false);
	const [check, setCheck] = useState(false);
	const handleShow = () => setCheck(true);
	const handleErrShow = () => setCheckValues(true);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(LoginSchema()),
	});

	const onSubmit = (data) => {
		console.log(data)
		console.log(user)
		user?.data?.map((item) => {
			if (item.email === data.email && item.password === data.password) {
				navigate("/");
			} 
            else if ((item.email === data.email && item.password !== data.password) || item.email !== data.email && item.password === data.password) {
				handleErrShow();
			}
             else {
				handleShow();
			}
		});
	};

	return (
		<section className="login-form p-5 bg-dark">
			<form
				className="w-50 mx-auto my-5 p-5 shadow"
				style={{ backgroundColor: "#2c2c2c" }}
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="text-center mb-5 text-white fs-1">Login </h2>
				<InvalidData checkValues={checkValues} />
				<label className="w-100 mb-4">
					<input
						type="email"
						className="form-control p-2 bg-dark text-white"
						placeholder="Enter your email"
						{...register("email")}
					/>
					<span className="mb-0 d-block text-danger">
						{errors.email?.message}
					</span>
				</label>
				<label className="w-100 mb-5">
					<input
						type="password"
						className="form-control p-2  bg-dark text-white"
						placeholder="Enter your password"
						{...register("password")}
					/>
					<NotRegistered check={check} />
					<span className="mb-0 d-block text-danger">
						{errors.password?.message}
					</span>
				</label>
				<button disabled={!isValid} className="btn btn-success" type="submit">
					Submit
				</button>
			</form>
		</section>
	);
};

export default LoginForm;
