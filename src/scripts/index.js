//Style Imports
import '../styles/index.scss';
//JSON API Import
import { apiKey } from "../../imdb.config.json";
//JS Imports
import './js/imdb.js';
import { seasons } from './js/episodesArrayGenerator.js';
import { randomGen } from './js/randomEpisodePicker.js';
import Imdb from './js/imdb.js';
import UI from './js/ui.js';

let btnGen = document.querySelector('.btnGen');
const ui = new UI();

btnGen.addEventListener('click', episodeRandomizer);

function episodeRandomizer() {
    let randomEpisode = randomGen();
    let season = randomEpisode[0]+1;
    let episode = randomEpisode[1]+1;
    let netflixLink = seasons[season-1][episode-1];
    let identifier = document.querySelector('.info-wrapper__identifier');
    let section = document.querySelector('.info-wrapper__section');
    let optBtn = document.querySelector('.info-wrapper__option-container');
    const imdb = new Imdb(apiKey, season, episode);
    imdb.fetchIMDBinfo().then(function (episodeData) {
        ui.updateData(episodeData, netflixLink);
    }).then(function () {
        identifier.classList.add('info-wrapper__identifier--active');
        section.classList.add('info-wrapper__section--active');
        optBtn.classList.add('info-wrapper__option-container--active');
    });

    
}