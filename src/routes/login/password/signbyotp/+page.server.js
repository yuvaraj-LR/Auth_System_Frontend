import { signbyOTP } from "$lib/services/loginServicesapi";
import { redirect } from "@sveltejs/kit";

export const actions = {
    verifyOTP: async({cookies, request}) => {
        const formData = await request.formData();

        const username = formData.get("email");
        const password = formData.get("otp");
        // const recaptcha = formData.get("recaptcha");

        console.log(username, password, "userDetailsss....");

        let errorMessage = {};
        if(!username || !password) {
            if(!username) {
                errorMessage.username = "Missing Username"
            }
            if(!password) {
                errorMessage.password = "Missing OTP"
            }
        }

        const payload = {
            "email": username,
            "otp": password
        }

        const signinResponse = await signbyOTP(payload);
        console.log(signinResponse, "responsee..");

        if(signinResponse?.success) {
            console.log("logged successful.");
            cookies.set("token", signinResponse.token, {path: "/"});
            throw redirect(301, "/");
        } else {
            errorMessage.email = username
            errorMessage.invalidPass = signinResponse.msg;
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }
    }
}