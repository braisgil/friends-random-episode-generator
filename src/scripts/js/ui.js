class UI {
    constructor() {
        this.image = document.querySelector('.info-wrapper__image img');
        this.season = document.querySelectorAll('.info-wrapper__identifier span')[0];
        this.episode = document.querySelectorAll('.info-wrapper__identifier span')[1];
        this.title = document.querySelector('.info-wrapper__title span');
        this.plot = document.querySelector('.info-wrapper__plot span');
        this.aired = document.querySelector('.info-wrapper__aired span');
        this.netflixLink = document.querySelectorAll('.info-wrapper__option a')[1];
        this.imdbLink = document.querySelectorAll('.info-wrapper__option a')[0];
    }

    updateData(data, netflixLink) {
        let posterLink = data.Poster.replace("_SX300", "_SX500");
        this.image.setAttribute("src", posterLink);
        this.season.innerHTML = data.Season;
        this.episode.innerHTML = data.Episode;
        this.title.innerHTML = data.Title;
        this.plot.innerHTML = data.Plot;
        this.aired.innerHTML = data.Released;
        this.netflixLink.setAttribute("href", netflixLink);
        this.imdbLink.setAttribute("href", "https://www.imdb.com/title/" + data.imdbID);
    }
}

export default UI;