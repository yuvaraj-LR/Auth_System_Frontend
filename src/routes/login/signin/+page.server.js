import { signIn } from "$lib/services/loginServicesapi";


export async function load({cookies}) {
}

export const actions = {
    default: async({cookies, request}) => {
        const formData = await request.formData();

        const username = formData.get("email");
        const password = formData.get("password");
        // const recaptcha = formData.get("recaptcha");

        let errorMessage = {};
        if(!username || !password) {
            if(!username) {
                errorMessage.username = "Missing Username"
            }
            if(!password) {
                errorMessage.password = "Missing Password"
            }
        }

        if(Object.keys(errorMessage).length !== 0) {
            return {"error": errorMessage}
        }

        const payload = {
            "email": username,
            "password": password
        }

        const loginResp = await signIn(payload);
        console.log(loginResp, "Login Data...");
    }
}