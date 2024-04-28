import { r as redirect } from "../../chunks/index.js";
async function load({ cookies, url }) {
  let token = cookies.get("token");
  if (!token) {
    throw redirect(301, "/login/signin");
  }
}
export {
  load
};
