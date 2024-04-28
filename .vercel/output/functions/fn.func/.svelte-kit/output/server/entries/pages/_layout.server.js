import "../../chunks/index.js";
async function load({ cookies, url }) {
  cookies.get("token");
}
export {
  load
};
