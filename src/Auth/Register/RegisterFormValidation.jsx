import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

export default function SignUpSchema() {

    const SignUpSchema = Yup.object({
		first_name: Yup.string().required("Required!"),
		last_name: Yup.string().required("Required!"),
		email: Yup.string()
			.email("Invalid an email!!!")
			.required("Email Required!"),
		password: Yup.string().min(8, "Must be at least 8 characters!").required("Password required!"),
	});

    return SignUpSchema
}