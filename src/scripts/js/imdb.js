class Imdb {
    constructor(apiKey, season, episode) {
        this.apiKey = apiKey;
        this.season = season;
        this.episode = episode;
    }

    async fetchIMDBinfo() {
        const apiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}&t=friends&season=${this.season}&episode=${this.episode}`;
        const apiRequest = await fetch(apiUrl);

        if (apiRequest.ok) {
            console.log("Works");
            const episodeDataJSON = await apiRequest.json();
            return episodeDataJSON;
        }
    }
}

export default Imdb;