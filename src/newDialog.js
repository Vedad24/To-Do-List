import { contentDOM } from "./DOMcache";

export function addItemsToLocalStorage(title) {
    if (localStorage.getItem("testingList") === null) {
        return;
    }
    else {
        
        contentDOM.testingList = JSON.parse(localStorage.getItem("testingList") || []);
        loadTasks(title);
    }
    //localStorage.clear();
}

document.querySelector(".addButton").addEventListener("click", function () {
    contentDOM.dialog.showModal();

    document.querySelector(".add-task").addEventListener("click", function () {
        //Make task object
        let newTask =
        {
            Id: contentDOM.testingList.length,
            Title: document.querySelector("#task-title").value,
            Description: document.querySelector("#task-description").value,
            DueDate: document.querySelector("#due").value,
            Priority: document.querySelector("#task-priority").checked,
            Type: document.querySelector("#taskType").value,
            Finished: false
        };
        //Push the task to the list
        contentDOM.testingList.push(newTask);
        localStorage.setItem("testingList", JSON.stringify(contentDOM.testingList));
        //Close the dialog
        contentDOM.dialog.close();
        document.querySelector(".inputs").reset();
        //Load the tasks
        loadTasks(contentDOM.sectionName.innerHTML);
    });
});


export function loadTasks(title) {
    contentDOM.tasks.innerHTML = "";
    contentDOM.testingList.forEach(t => {
        // cheking for the type of the task
        if (title != t.Type && title != "All Tasks") { return; } 
        //Adding it to the DOM
        contentDOM.tasks.innerHTML +=
            `
            <div class="task ${t.Priority}">
                <div class="taskText">
                    <input type="checkbox" class="mark" data-id="${t.Id}" ${t.Finished ? 'checked' : ''}>
                    <p style="${t.Finished ? 'text-decoration: line-through; color: gray' : ''}" >${t.Title} >>>>> ${t.Type}</p>
                </div>
                <div class="taskButtons">
                    <button class="edit""><i class="fa-solid fa-pen fa-lg" style="color: #000000;"></i></button>
                    <button class="delete" dt-id="${t.Id}"><i class="fa-solid fa-trash fa-lg" style="color: #000000;"></i></button>
                </div>
            </div>
        `;
    });

    //Option to mark it  as read
   document.querySelectorAll(".mark").forEach(mark => mark.addEventListener("click", function () {
        let indexForSearch = mark.getAttribute("data-id");
        let foundTask = contentDOM.testingList.find(task => task.Id == indexForSearch);
        if (mark.checked == true) {
            foundTask.Finished = true;
    
            mark.nextElementSibling.style.textDecoration = "line-through";
            mark.nextElementSibling.style.color = "gray";
        }
        else {
            foundTask.Finished = false; 
            mark.nextElementSibling.style.textDecoration = "none";
            mark.nextElementSibling.style.color = "black";
        }
        localStorage.setItem("testingList", JSON.stringify(contentDOM.testingList));
    }));
    /* document.querySelectorAll(".delete").forEach(del => del.addEventListener("click", function () {
        let idSearch = del.getAttribute("dt-id");
        delete contentDOM.testingList[idSearch];
        console.log(contentDOM.testingList)
    })) */
}