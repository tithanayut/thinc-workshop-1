const default_country = { iso2: "TH", name: "Thailand" };
const countries_data = {};

document.addEventListener("DOMContentLoaded", async () => {
    const countrySelector = document.getElementById("country-selector");
    countrySelector.addEventListener("change", () => {
        refreshContent(countrySelector.value);
    });

    const refreshContent = async (country_iso2) => {
        // fetch data
        const res = await fetch(
            "https://disease.sh/v3/covid-19/countries/" + country_iso2
        );
        const data = await res.json();

        const nf = new Intl.NumberFormat();
        document.getElementById("cases-new").innerText =
            "+" + nf.format(data.todayCases);
        document.getElementById("cases-total").innerText = nf.format(
            data.cases
        );
        document.getElementById("cases-active").innerText = nf.format(
            data.active
        );
        document.getElementById("cases-critical").innerText = nf.format(
            data.critical
        );
        document.getElementById("deaths-new").innerText =
            "+" + nf.format(data.todayDeaths);
        document.getElementById("deaths-total").innerText = nf.format(
            data.deaths
        );
        document.getElementById("recovered-new").innerText =
            "+" + nf.format(data.todayRecovered);
        document.getElementById("recovered-total").innerText = nf.format(
            data.recovered
        );
    };

    // set default country
    const option = document.createElement("option");
    option.value = default_country.iso2;
    option.text = default_country.name;
    countrySelector.appendChild(option);

    // prepare country selector
    const res = await fetch("countries.json");
    const countries = await res.json();
    countries.forEach((country) => {
        if (country.iso2 !== default_country.iso2) {
            const option = document.createElement("option");
            option.value = country.iso2;
            option.text = country.name;
            countrySelector.appendChild(option);
        }
    });

    refreshContent(default_country.iso2);
});
