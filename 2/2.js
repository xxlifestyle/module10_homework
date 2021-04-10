const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    alert(`Размер экрана - ${screen.width} x ${screen.height} `);
});