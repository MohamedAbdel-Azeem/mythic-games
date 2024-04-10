
export default function getAPIUrl(QueryType, pageNumber){
    if (QueryType === "Trending") {
        return "https://api.rawg.io/api/games?key=ca19ff26425d42c2b47b413aa4a2de2a&ordering=-added&dates=2022-01-01,2023-12-31";
    }
    return `https://api.rawg.io/api/games?key=ca19ff26425d42c2b47b413aa4a2de2a&page=${pageNumber}`;
}