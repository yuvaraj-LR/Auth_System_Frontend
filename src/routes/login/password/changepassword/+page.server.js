import { resetPassword } from "$lib/services/loginServicesapi";
import { redirect } from "@sveltejs/kit";

export async function load({url}) {
    const searchParams = new URLSearchParams(url.search);

    const token = searchParams?.get("token");

    return {
        token
    }

}

export const actions = {
    changePass: async({cookies, request}) => {
        const formData = await request.formData();

        const email = formData.get("email");
        const newPass = formData.get("new-password");
        const conPass = formData.get("confirm-password");
        const token = formData.get("token");

        let errorMessage = {};
        if(!email || !newPass || conPass) {
            if(!email) {
                errorMessage.email = "Missing Email"
            }
            if(!newPass) {
                errorMessage.newPass = "Missing New Password"
            }
            if(!conPass) {
                errorMessage.conPass = "Missing Confirm Password"
            }
        }

        const payload = {
            "email" : email,
            "password" : newPass,
            "confirmPassword" : conPass,
        }

        // console.log(payload, "payloadd...");

        const updatePass = await resetPassword(token, payload);
        console.log(updatePass, "passss");
        
        if(updatePass?.success) {
            console.log("logged successful.");
            cookies.set("token", updatePass?.token, {path: "/"});
            throw redirect(301, "/");    
        } else {
            errorMessage.email = email;
            errorMessage.invalidPass = updatePass?.error;
            errorMessage.token = token;
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }
    }
}