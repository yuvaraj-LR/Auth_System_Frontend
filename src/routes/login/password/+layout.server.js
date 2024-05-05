export async function load({url}) {
    const query = new URLSearchParams(url.search)
    const username = query?.get("username");

    return {username};

}
