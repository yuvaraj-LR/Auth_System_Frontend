import { updatePassword } from "$lib/services/loginServicesapi";
import { redirect } from "@sveltejs/kit";

export async function load() {
    
}

export const actions = {
    changePass: async({cookies, request}) => {
        const formData = await request.formData();

        const email = formData.get("email");

        console.log(email, "emaill...");

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
            "newPassword" : newPass,
            "confirmPassword" : conPass,
            "token" : token
        }

        const updatePass = await updatePassword(payload);
        console.log(updatePass, "passss");
        
        if(updatePass?.success) {
            console.log("logged successful.");
            cookies.set("token", updatePass?.token, {path: "/"});
            throw redirect(301, "/");    
        } else {
            errorMessage.email = email;
            errorMessage.invalidPass = updatePass?.error;
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }
    }
}