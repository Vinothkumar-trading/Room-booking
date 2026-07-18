async function loadPage(page) {

    const response =
        await fetch(`pages/${page}.html`);

    const html =
        await response.text();

    document
        .getElementById("content")
        .innerHTML = html;

}

window.addEventListener("hashchange", () => {

    const page =
        location.hash.replace("#", "") || "dashboard";

    loadPage(page);

});

window.dispatchEvent(new Event("hashchange"));