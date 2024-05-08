import { redirect } from "@sveltejs/kit";
import { updatePassword, getUserDetails } from "$lib/services/loginServicesapi";

export async function load({cookies}) {
    let token = cookies.get("token");
    
    if(!token) {
        throw redirect(301, "/login/signin");
    }

    const userdata = await getUserDetails(token);
    return {
        userdata
    }
}

export const actions = {
    updatePass: async({cookies, request}) => {
        const formData = await request.formData();

        const email = formData.get("email");
        const oldPass = formData.get("old-password");
        const newPass = formData.get("new-password");
        const conPass = formData.get("confirm-password");

        let errorMessage = {};
        if(!email || !oldPass || !newPass || conPass) {
            if(!email) {
                errorMessage.email = "Missing Email"
            }
            if(!oldPass) {
                errorMessage.oldPass = "Missing Old Password"
            }
            if(!newPass) {
                errorMessage.newPass = "Missing New Password"
            }
            if(!conPass) {
                errorMessage.conPass = "Missing Confirm Password"
            }
        }

        const payload = {
            "email": email,
            "currentPassword": oldPass,
            "newPassword": newPass,
            "confirmPassword": conPass
        }

        const updatePass = await updatePassword(payload);
        console.log(updatePass, "up pass...");

        if(updatePass?.success) {
            console.log("Succesfully updated.");
            throw redirect(302, "/");
        } else {
            errorMessage.error = updatePass.error;
            errorMessage.email = email;
        }
    }
}