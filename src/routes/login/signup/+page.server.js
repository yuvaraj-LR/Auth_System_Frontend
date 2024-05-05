import { signup } from "$lib/services/loginServicesapi"
import { redirect } from "@sveltejs/kit";

export async function load() {
    
}

export const actions = {
    signUp: async({cookies, request}) => {
        const formData = await request.formData();

        const name = formData.get("name");
        const email = formData.get("email");
        const number = formData.get("number");
        const password = formData.get("password");

        let errorMessage = {};

        if(!name || !email || !number || !password) {
            if(!name) {
                errorMessage.name = "Missing Name"
            }

            if(!email) {
                errorMessage.email = "Missing Email"
            }

            if(!number) {
                errorMessage.number = "Missing Number"
            }

            if(!password) {
                errorMessage.password = "Missing Password"
            }
        }

        const payload = {
            "name": name,
            "email": email,
            "number": number,
            "password": password
        }

        const signupResponse = await signup(payload);
        console.log(signupResponse, "responsee.....");

        if(signupResponse.success) {
            cookies.set("token", signupResponse.token, {path: "/"});
            throw redirect(301, "/");
        } else {
            errorMessage.invalidPass = signupResponse.error;
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }

    }
}