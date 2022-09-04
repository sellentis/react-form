import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .transform(value => value.replace(/[^\d]/g, ''))
    .min(8, "Username must be at least 3 characters long")
    .required("Required"),
});
