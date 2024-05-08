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
    logout: async({cookies}) => {
        console.log("User loggin out...");
        cookies.delete("token", {path: "/"});

        throw redirect(301, "/login/signin");
    }
}