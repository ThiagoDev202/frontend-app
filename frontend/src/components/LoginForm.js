import React from "react";
import useForm from "../hooks/useForm";
import ApiService from "../services/ApiService";

function LoginForm() {
    const initialValues = { email: "", password: "" };
    const [values, handleChange, resetForm] = useForm(initialValues);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await ApiService.post("/register", values);
            resetForm();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />

            <button type="submit">Login</button>
        </form>
    );
}

export default RegistrationForm;