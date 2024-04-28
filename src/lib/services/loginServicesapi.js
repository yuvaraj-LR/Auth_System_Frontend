import { env } from '$env/dynamic/private';

const baseURL = env.buildenv == "dev" ? "http://localhost:8080/api/user/" : "https://auth-system-backend.onrender.com/api/user/"
console.log("<---------------------BaseURL---------------------------------------->");
console.log(baseURL);
console.log("<-------------------------------------------------------------------->");

// Login API
export const signIn = async (payload) => {
    const options = {
        method: "POST",
        body: payload,
        headers: {
            "Content-Type": "application/json"
        },
    }

    const signinResponse = await fetch(`${baseURL}/login`, options);

    if (signinResponse.ok) {
        try {
            const signinData = await signinResponse.json();
            console.log(signinData, "userDetails....");
            return signinData;
        } catch (error) {
            // Handle JSON parsing error
            console.error('Error parsing JSON:', error);
            throw new Error('Error parsing server response');
        }
    } else {
        console.error('Network response was not ok:', signinResponse.status, signinResponse.statusText);
        throw new Error('Network response was not ok.');
    }
}