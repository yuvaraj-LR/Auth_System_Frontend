import { redirect } from "@sveltejs/kit";


export async function load({cookies, url}) {
    let token = cookies.get("token");

    if(!token) {
        // throw redirect(301, "/login/signin");
    }
}
