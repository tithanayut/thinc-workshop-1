document.addEventListener("DOMContentLoaded", async () => {
    const nf = new Intl.NumberFormat();

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
    cases_new.innerText = "+" + nf.format(data.todayCases);
    cases_total.innerText = nf.format(data.cases);
    cases_active.innerText = nf.format(data.active);
    cases_critical.innerText = nf.format(data.critical);
    deaths_new.innerText = "+" + nf.format(data.todayDeaths);
    deaths_total.innerText = nf.format(data.deaths);
    recovered_new.innerText = "+" + nf.format(data.todayRecovered);
    recovered_total.innerText = nf.format(data.recovered);
});
