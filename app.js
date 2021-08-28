const default_country = { iso2: "TH", name: "Thailand" };
const countries_data = {};

document.addEventListener("DOMContentLoaded", async () => {
    const countrySelector = document.getElementById("country-selector");
    countrySelector.addEventListener("change", () => {
        refreshContent(countrySelector.value);
    });

    function refreshContent(country_iso2) {
        const nf = new Intl.NumberFormat();

        document.getElementById("cases-new").innerText =
            "+" + nf.format(countries_data[country_iso2].todayCases);
        document.getElementById("cases-total").innerText = nf.format(
            countries_data[country_iso2].cases
        );
        document.getElementById("cases-active").innerText = nf.format(
            countries_data[country_iso2].active
        );
        document.getElementById("cases-critical").innerText = nf.format(
            countries_data[country_iso2].critical
        );
        document.getElementById("deaths-new").innerText =
            "+" + nf.format(countries_data[country_iso2].todayDeaths);
        document.getElementById("deaths-total").innerText = nf.format(
            countries_data[country_iso2].deaths
        );
        document.getElementById("recovered-new").innerText =
            "+" + nf.format(countries_data[country_iso2].todayRecovered);
        document.getElementById("recovered-total").innerText = nf.format(
            countries_data[country_iso2].recovered
        );
    }

    // fetch data
    const res = await fetch("https://disease.sh/v3/covid-19/countries");
    const data = await res.json();

    // set default country
    const option = document.createElement("option");
    option.value = default_country.iso2;
    option.text = default_country.name;
    countrySelector.appendChild(option);

    // prepare data
    data.forEach((country) => {
        // populate country selector
        if (country.countryInfo.iso2 !== default_country.iso2) {
            const option = document.createElement("option");
            option.value = country.countryInfo.iso2;
            option.text = country.country;
            countrySelector.appendChild(option);
        }

        const {
            todayCases,
            cases,
            active,
            critical,
            todayDeaths,
            deaths,
            todayRecovered,
            recovered,
        } = country;

        countries_data[country.countryInfo.iso2] = {
            todayCases,
            cases,
            active,
            critical,
            todayDeaths,
            deaths,
            todayRecovered,
            recovered,
        };
    });

    refreshContent(default_country.iso2);
});
