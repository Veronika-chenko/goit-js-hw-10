import { renderInterface } from "./render-interface";

const BASE_URL = "https://restcountries.com/v3.1/name/"
const QUERY_PARAMS = "?fields=name,capital,population,flags,languages"

export default function fetchCountries(name) {
    const resourceUrl = BASE_URL + name + QUERY_PARAMS
    return fetch(resourceUrl)
        .then(response => {
            return response.json();
        }).then(country => {
            renderInterface(country);
        })
}