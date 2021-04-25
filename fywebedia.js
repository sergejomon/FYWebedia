let content = document.querySelector(".didomi-popup-open");
let popup = document.querySelector("#didomi-popup");
if (content && popup) {
    content.classList.remove("didomi-popup-open");
    popup.style.visibility = "hidden";
}
