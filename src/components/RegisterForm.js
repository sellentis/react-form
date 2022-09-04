import React from "react";
import {Form, Formik} from "formik";
import {advancedSchema} from "../schemas";
import NameInput from "./NameInput";
import DefaultButton from "./DefaultButton";

const onSubmit = (values, actions) => {
	console.log(values)
	actions.resetForm();
};

const RegisterForm = () => {
	return (
		<Formik
			initialValues={{username: ""}}
			validationSchema={advancedSchema}
			validateOnBlur={true}
			validateOnChange={true}
			onSubmit={onSubmit}
		>
			{({
				  values,
				  isSubmitting,
				  dirty,
				  isValid,
				  handleBlur,
				  handleChange
			}) => (
				<Form>
					<NameInput
						label="Username"
						name="username"
						type="text"
						placeholder="Enter your username"
						values={values}
						handleBlur={handleBlur}
						handleChange={handleChange}
					/>
					<DefaultButton
						type='submit'
						disabled={isSubmitting || !isValid || !dirty}
						buttonText='Submit'
					/>
				</Form>
			)}
		</Formik>
	);
};
export default RegisterForm;
