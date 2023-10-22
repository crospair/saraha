
import joi from "joi";

export const SignupSchema = joi.object({
    Username:joi.string().required().alphanum().min(3).max(20),
    Elementmail:joi.string().email().required(),
    Gender:joi.string().valid('Male','Female').required(),
    password:joi.string().required().min(8).max(30),
    cPassword:joi.string().valid(joi.ref('password')).required(),
});

export const SigninSchema = joi.object({
    email:joi.string().email().required().messages({
        'string.empty':"Email is required"
    }),
    password:joi.string().required(),
}); 

