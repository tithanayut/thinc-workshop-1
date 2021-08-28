document.addEventListener("DOMContentLoaded", async () => {
    // DOM elements
    const cases_new = document.getElementById("cases-new");
    const cases_total = document.getElementById("cases-total");
    const cases_active = document.getElementById("cases-active");
    const cases_critical = document.getElementById("cases-critical");
    const deaths_new = document.getElementById("deaths-new");
    const deaths_total = document.getElementById("deaths-total");
    const recovered_new = document.getElementById("recovered-new");
    const recovered_total = document.getElementById("recovered-total");

    // fetch data
    const res = await fetch("https://disease.sh/v3/covid-19/countries/TH");
    const data = await res.json();

    // populate DOM
    cases_new.innerText = data.todayCases;
    cases_total.innerText = data.cases;
    cases_active.innerText = data.active;
    cases_critical.innerText = data.critical;
    deaths_new.innerText = data.todayDeaths;
    deaths_total.innerText = data.deaths;
    recovered_new.innerText = data.todayRecovered;
    recovered_total.innerText = data.recovered;
});
