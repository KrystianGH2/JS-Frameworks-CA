import * as yup from "yup";

export const userSchema = yup.object({
  email: yup.string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
});

export const validateEmail = async (email) => {
  try {
    await userSchema.validate({ email });
    return true;
  } catch (err) {
    return false;
  }
};
