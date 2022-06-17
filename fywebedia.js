let content = document.querySelector(".didomi-popup-open");
let popup = document.querySelector("#didomi-host");
if (content && popup) {
    content.classList.remove("didomi-popup-open");
    content.classList.add("didomi-popup-closed");
    popup.style.visibility = "hidden";
}
