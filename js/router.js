async function loadPage(page) {

    try {

        const response = await fetch(`pages/${page}.html`);

        if (!response.ok) {
            throw new Error(`${page}.html not found`);
        }

        document.getElementById("content").innerHTML =
            await response.text();

    } catch (err) {

        document.getElementById("content").innerHTML = `
            <div class="card">
                <h2>404</h2>
                <p>${err.message}</p>
            </div>
        `;

        console.error(err);
    }
}