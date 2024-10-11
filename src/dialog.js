import { contentDOM } from "./DOMcache";

export function dialogFunc() {
    document.querySelector(".addButton").addEventListener("click", function () { contentDOM.dialog.showModal(); });
    document.querySelector(".add-task").addEventListener("click", function () {
        document.querySelector("#task-title").value;
        let t = {
            title: document.querySelector("#task-title").value,
            description: document.querySelector("#task-description").value,
            dueDate: document.querySelector("#due").value,
            priority: document.querySelector("#task-priority").checked,
            type: document.querySelector("#taskType").value
        }
        contentDOM.allItemTasks.push(t);
        refreshTasks(contentDOM.sectionName.innerHTML);
        contentDOM.dialog.close();
        document.querySelector(".inputs").reset();
    });
}

export function refreshTasks(typeName) {
    contentDOM.tasks.innerHTML = "";

    contentDOM.allItemTasks.forEach(task => {
        if (task.type != typeName && typeName != "All Tasks") {
            return;
        }
        contentDOM.tasks.innerHTML +=
        `
            <div class="task">
                <div class="taskText">
                    <input type="checkbox" class="mark">
                    <p>${task.title}</p>
                </div>
                <div class="taskButtons">
                    <button class="edit"><i class="fa-solid fa-pen fa-lg" style="color: #000000;"></i></button>
                    <button class="delete"><i class="fa-solid fa-trash fa-lg" style="color: #000000;"></i></button>
                </div>
            </div>
        `
    });

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
