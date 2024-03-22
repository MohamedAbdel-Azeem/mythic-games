export default async function mockupAPI() {
    const url = "https://api.rawg.io/api/games?key=ca19ff26425d42c2b47b413aa4a2de2a";
    try {
        const response = await fetch(url, { mode: 'cors' });
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}