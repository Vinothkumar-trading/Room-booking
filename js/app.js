async function loadComponent(id, file) {

    const html = await fetch(file);

    document.getElementById(id).innerHTML =
        await html.text();

}

async function init() {

    await loadComponent(
        "sidebar",
        "components/sidebar.html"
    );

    await loadComponent(
        "header",
        "components/header.html"
    );

}

init();