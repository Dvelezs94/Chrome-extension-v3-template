// Script read by popup.html
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("mainBtn")

    btn?.addEventListener("click", sayHello)

    function sayHello(e: any) {
        alert("clicked")
    }
});
