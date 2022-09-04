import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from "./fetch-countries";
import { refs } from './consts/refs';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(getInputValue, DEBOUNCE_DELAY));

function getInputValue(evt) {
    
    const inputText = evt.target.value;
    
    if (inputText === "") {
        clearInterface()
        return;
    }
    fetchCountries(inputText)
}

function clearInterface() {
    refs.countryList.innerHTML = "";
    refs.countryInfo.innerHTML = "";
}
