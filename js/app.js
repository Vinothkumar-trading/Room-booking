const time = document.getElementById("time");
const btn = document.getElementById("btnTest");
const result = document.getElementById("result");

time.textContent =
    "Current Time : " +
    new Date().toLocaleString();

btn.addEventListener("click", () => {

    result.textContent =
        "JavaScript is working successfully!";
});