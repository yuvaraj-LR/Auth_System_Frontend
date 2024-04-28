import { redirect } from "@sveltejs/kit";


export async function load({cookies}) {
    let token = cookies.get("token");
    console.log(token, "tokenn...");

    if(!token) {
        throw redirect(301, "/login/signin");
    }
}
