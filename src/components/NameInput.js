import React, {useState} from "react";
import {useField, useFormikContext} from "formik";
import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";

const NameInput = ({values,handleBlur,handleChange}) => {
	return (
		<>
			<InputMask
				mask="9999-9999"
				onChange={handleChange}
				onBlur={handleBlur}
				value={values.username}
			>
				{() => (
					<TextField
						type="text"
						label="Label"
						name="username"
					/>
				)}
			</InputMask>
		</>
	);
};
export default NameInput;
