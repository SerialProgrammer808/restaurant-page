export function loadHome() {
    const div = document.createElement("div");
    div.innerHTML = 
                    `<h1>Welcome to Kimo's Grinds<h1>
                    <p>We got the best grindz on island! E mea hōʻikeʻike ʻuʻuku wale<p>`;
    div.style.backgroundColor = "white"
    return div;
}

export function loadMenu() {
    const div = document.createElement("div");
    div.innerHTML = 
                    `<ul>
                        <li>Laulau
                        <li>Kalua Pig
                        <li>Fried Fish and Poi
                    <ul>`;
    div.style.backgroundColor = "white"
    return div;
}

export function loadContact() {
    const div = document.createElement("div");
    div.innerHTML = 
                    `<h1>Kipa mai!<h1>
                    <p>We are located at 291 Mana Boulevard, Kalihi, HI<p>
                    <p>And our phone number is 1(808)994-3743<p>`
    div.style.backgroundColor = "white"
    return div;
}

