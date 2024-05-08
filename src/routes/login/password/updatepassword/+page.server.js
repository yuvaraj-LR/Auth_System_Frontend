import { redirect } from "@sveltejs/kit";
import { getUserDetails } from "$lib/services/loginServicesapi";

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

        const oldPass = formData.get("old-password");
        const newPass = formData.get("new-password");
        const conPass = formData.get("confirm-password");

        const payload = {
            "currentPassword" : oldPass,
            "newPassword" : newPass,
            "confirmPassword" : conPass
        }

        console.log(payload, "payloaddd....");

        

    }
}