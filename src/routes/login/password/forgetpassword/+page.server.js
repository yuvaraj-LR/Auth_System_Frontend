import { sendForgetPasswordLink } from "$lib/services/loginServicesapi";
import { redirect } from "@sveltejs/kit";

export const actions = {
    updatePass: async({cookies, request}) => {
        const formData = await request.formData();
        console.log(formData, "formDataa....");
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
                errorMessage.password = "Missing Password"
            }
        }

        const payload = {
            "email": username,
            "otp": password
        }

        const signinResponse = await sendForgetPasswordLink(payload);
        console.log(signinResponse, "responsee..");

        if(signinResponse?.success) {
            console.log("logged successful.");
            throw redirect(301, `/login/password/changepassword?username=${username}`);    
        } else {
            errorMessage.email = username;
            errorMessage.invalidPass = signinResponse.msg;
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }
    }
}