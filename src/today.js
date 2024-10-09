export function today() {
    let content = document.querySelector(".content");
    content.innerHTML = "";
    content.innerHTML = `
        <div class="todoName">
            <h1>Today</h1>
        </div>
        <div class="date">
            <h1 class="todayDate">6. October</h1>
            <h2>2 Tasks Left</h2>
        </div>
        <div class="tasks">
            <div class="task">
                <div class="taskText">
                    <input type="checkbox" class="mark">
                    <p>Create magic through my mind, my heart and my keyboard</p>
                </div>
                <div class="taskButtons">
                    <button class="edit"><i class="fa-solid fa-pen fa-lg" style="color: #000000;"></i></button>
                    <button class="delete"><i class="fa-solid fa-trash fa-lg" style="color: #000000;"></i></button>
                </div>
            </div>
        </div>`;
    
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


{/* <div class="task">
                <div class="taskText">
                    <input type="checkbox" class="mark">
                    <p>Create magic through my mind, my heart and my keyboard</p>
                </div>
                <div class="taskButtons">
                    <button class="edit"><i class="fa-solid fa-pen fa-lg" style="color: #000000;"></i></button>
                    <button class="delete"><i class="fa-solid fa-trash fa-lg" style="color: #000000;"></i></button>
                </div>
            </div> */}