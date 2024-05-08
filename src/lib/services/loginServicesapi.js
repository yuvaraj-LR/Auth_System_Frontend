import { env } from '$env/dynamic/private';

const baseURL = env.buildenv == "dev" ? "http://localhost:8080/api/user/" : "https://auth-system-backend.onrender.com/api/user/"
console.log("<---------------------BaseURL---------------------------------------->");
console.log(baseURL);
console.log("<-------------------------------------------------------------------->");

// Login API
export const signIn = async (payload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        },
    };

    const signinResponse = await fetch(`${baseURL}login`, options);
    const response = await signinResponse.json();

    return response;
}

// Send OTP API
export const sendOTP = async (payload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const sendOTPResponse = await fetch(`${baseURL}login/sendOTP`, options);
    const response = await sendOTPResponse.json();

    return response;
}

// Sign Up API
export const signup = async (payload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const signupResponse = await fetch(`${baseURL}signup`, options);
    const response = await signupResponse.json();

    return response;
}

// Verify OTP API 
export const signbyOTP = async (payload) => {
    console.log(payload, "payloadd...");
    const options = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const signbyOTPResponse = await fetch(`${baseURL}login/verifyOTP`, options);
    const response = await signbyOTPResponse.json();

    return response;
}

// Send forget password token.
export const sendForgetPasswordLink = async (payload) => {
    console.log(payload, "payloadd...");
    const options = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const sendTokenPassResponse = await fetch(`${baseURL}password/forget`, options);
    const response = await sendTokenPassResponse.json();

    return response;
}

// Update password.
export const updatePassword = async (payload) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const updatePassResponse = await fetch(`${baseURL}password/update`, options);
    const response = await updatePassResponse.json();

    return response;
}

// Reset password.
export const resetPassword = async (resetToken, payload) => {
    console.log(resetToken, "resttt...");
    const options = {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resetPassResponse = await fetch(`${baseURL}password/reset?token=${resetToken}`, options);
    const response = await resetPassResponse.json();

    return response;
}

// Get user details.
export const getUserDetails = async (token) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: token
        }
    }

    const getUserDetailsResponse = await fetch(`${baseURL}getDetails`, options);
    const response = await getUserDetailsResponse.json();
    return response;
}

