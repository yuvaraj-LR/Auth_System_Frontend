

export async function load() {
    
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