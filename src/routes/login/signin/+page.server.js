import { signIn, sendOTP, sendForgetPasswordLink, googleSignIn } from "$lib/services/loginServicesapi";
import { redirect } from "@sveltejs/kit";

export async function load({cookies}) {
}

export const actions = {
    login: async({cookies, request}) => {
        const formData = await request.formData();

        const username = formData.get("email");
        const password = formData.get("password");
        // const recaptcha = formData.get("recaptcha");

        console.log(username, password, "userDetailsss....");

        let errorMessage = {};
        if(!username || !password) {
            if(!username) {
                errorMessage.username = "Missing Username"
            }
            if(!password) {
                errorMessage.password = "Missing Password"
            }
        }

        const payload = {
            "email": username,
            "password": password
        }

        const signinResponse = await signIn(payload);
        console.log(signinResponse, "responsee..");

        if(signinResponse?.success) {
            cookies.set("token", signinResponse.token, {path: "/"});
            throw redirect(301, "/");
        } else {
            errorMessage.invalidPass = signinResponse.error;
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }
    },

    signByOTP: async({cookies, request}) => {
        const formData = await request.formData();

        const username = formData.get("email");

        let errorMessage = {};
        if(!username) {
            errorMessage.username = "Missing Username"
        } 
            
        const payload = {
            "email": username
        }

        const otpResponse = await sendOTP(payload);
        console.log(otpResponse, "resppp...");

        if(otpResponse.status) {
            cookies.set("token", otpResponse.token, {path: "/"})
            throw redirect(301, `/login/password/signbyotp?username=${username}`);
        } else {
            errorMessage.invalidPass = otpResponse.error;
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }
    },

    updatePass: async({cookies, request}) => {
        const formData = await request.formData();

        const username = formData.get("email");

        console.log(username, "userDetailsss....");

        let errorMessage = {};
        if(!username) {
            errorMessage.username = "Missing Username"
        }

        const payload = {
            "email": username,
        }

        const sendPassResponse = await sendForgetPasswordLink(payload);
        console.log(sendPassResponse, "responsee..");

        if(sendPassResponse?.success) {
            return {
                "success": sendPassResponse?.success
            }
        } else {
            errorMessage.email = username;
            errorMessage.invalidPass = sendPassResponse.msg;
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }
    },

    googleLogin: async({cookies, request}) => {
        const formData = await request.formData();

        const token = formData.get("token");
        const gid = formData.get("gid");

        const payload = {
            token,
            gid
        }

        const signinResponse = await googleSignIn(payload);
        console.log(signinResponse, "respp....");

        if(signinResponse?.success) {
            cookies.set("token", signinResponse.token, {path: "/"});
            throw redirect(301, "/");
        } else {
            console.log("Error in signin in google login.");
        }
    }
}