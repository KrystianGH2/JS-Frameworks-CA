import * as yup from "yup";

 

export const userSchema = yup.object({
  email: yup.string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  
  
});
export const subjects = ["Shipping", "Orders", "Customer Service", "Refund", "Payment"];
  export const ContactFormSchema = yup.object().shape({
     product: yup.array().min(1, "Please select at least one product").of(
    yup.string().oneOf(subjects, "Please select a valid product")
  ),
    fullName: yup.string().required('Full name is required').min(3),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required').min(5)
  });


export const validateEmail = async (email) => {
  try {
    await userSchema.validate({ email  });
    return true;
  } catch (err) {
    return false;
  }
};

  export const formSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    streetAddress: yup.string().required("Street address is required"),
    city: yup.string().required("City is required"),
    region: yup.string().required("State/Province is required"),
    postalCode: yup.string().required("ZIP/Postal code is required"),
    cardNumber: yup.string().required("Card number is required"),
    expireDate: yup.string().required("Expiration date is required"),
    cvc: yup.string().required("CVC is required"),
    acceptTerms: yup.boolean().oneOf([true], "Please accept the terms and conditions"),
  });


  export const validatePaymentForm = async (firstName, lastName, email, streetAddress, city, region, postalCode, cardNumber, expireDate, cvc, acceptTerms) => {
  try {
    await formSchema.validate({ firstName, lastName, email, streetAddress, city, region, postalCode, cardNumber, expireDate, cvc, acceptTerms });
    return true;
  } catch (err) {
    return false;
  }
  }