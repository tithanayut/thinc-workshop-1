document.addEventListener("DOMContentLoaded", async () => {
    // fetch data
    const res = await fetch("https://disease.sh/v3/covid-19/countries/TH");
    const data = await res.json();

    // populate DOM
    const nf = new Intl.NumberFormat();
    document.getElementById("cases-new").innerText =
        "+" + nf.format(data.todayCases);
    document.getElementById("cases-total").innerText = nf.format(data.cases);
    document.getElementById("cases-active").innerText = nf.format(data.active);
    document.getElementById("cases-critical").innerText = nf.format(
        data.critical
    );
    document.getElementById("deaths-new").innerText =
        "+" + nf.format(data.todayDeaths);
    document.getElementById("deaths-total").innerText = nf.format(data.deaths);
    document.getElementById("recovered-new").innerText =
        "+" + nf.format(data.todayRecovered);
    document.getElementById("recovered-total").innerText = nf.format(
        data.recovered
    );
});
