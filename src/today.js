import { contentDOM } from "./DOMcache";

export function today() {
    contentDOM.sectionName.innerHTML = "Today";
        document.querySelectorAll(".mark").forEach(mark => mark.addEventListener("click", function () {
            if (mark.checked == true) {
                mark.nextElementSibling.style.textDecoration = "line-through";
                mark.nextElementSibling.style.color = "gray";
            } 
            else {
                mark.nextElementSibling.style.textDecoration = "none";
                mark.nextElementSibling.style.color = "black";
            }
        }))
}
