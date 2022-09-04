import { refs } from './consts/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const renderInterface = (countries) => {
    if (countries.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.");
    } else if (countries.length >= 2 || countries.lenght < 10) {
        renderCountriesList(countries);
    } else if (countries.length === 1) {
        renderCountryInfo(countries);
    } else{
        Notify.failure("Oops, there is no country with that name");
    }
}

function renderCountriesList(countries) {
    if (countries) {
        clearCountryInfo()
    }
    const item = countries.map(country => {
        return `<li class="country-item">
                    <img src="${country.flags.svg}" width="20">
                    <p>${country.name.official}</p>
                </li>`
    }).join('');
    refs.countryList.innerHTML = item;
}

function renderCountryInfo(countries) {
    if (countries) {
        clearCountryList()
    }
    const card = countries
        .map(country => {
            const langObjValues = Object.values(country.languages).join(", ");
            return `<div class="title-box"><img src="${country.flags.svg}" width="20">
        <h2>${country.name.official}</h2></div>
        <p><b>Capital: </b>${country.capital}</p>
        <p><b>Population: </b>${country.population}</p>
        <p><b>Languages: </b>${langObjValues}</p>
        `
        })

    refs.countryInfo.innerHTML = card;
}

function clearCountryList() {
    refs.countryList.innerHTML = "";
}

function clearCountryInfo() {
    refs.countryInfo.innerHTML = "";
}

