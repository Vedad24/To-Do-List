import { contentDOM } from "./DOMcache";
let EDIT = false;
let EDITID = null;

document.querySelector(".btnClose").addEventListener("click", () => {
    contentDOM.dialog.close();
    document.querySelector(".inputs").reset();
})
document.querySelector(".addButton").addEventListener("click", function () {
    contentDOM.dialog.showModal();
});
document.querySelector(".add-task").addEventListener("click", function () {
    //Make task object
    if (document.querySelector("#task-title").value.trim() == '') { return; }
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
    if (EDIT == true) {
        contentDOM.testingList.forEach(t => {
            if (t.Id == EDITID) {
                contentDOM.testingList[EDITID] = newTask;
                let f = t.Finished;
                contentDOM.testingList[EDITID].Id = EDITID;
                contentDOM.testingList[EDITID].Finished = f;
                console.log(contentDOM.testingList);
            }
        })
    }
    else {
        contentDOM.testingList.push(newTask);
    }
    //Close the dialog
    contentDOM.dialog.close();
    document.querySelector(".inputs").reset();
    //Push the task to the list
    //Load the tasks
    loadTasks(contentDOM.sectionName.innerHTML);

    localStorage.setItem("testingList", JSON.stringify(contentDOM.testingList));
    EDIT = false;
});

export function loadTasks(title) {
    contentDOM.taskNumber.innerHTML = contentDOM.testingList.length + " Tasks";
    contentDOM.tasks.innerHTML = "";
    contentDOM.testingList.forEach(t => {
        // cheking for the type of the task
        if ((title != t.Type && title != "All Tasks" && title != "Important") || (title == "Important" && t.Priority != true)) { return; } 
        //Adding it to the DOM
        contentDOM.tasks.innerHTML +=
            `
            <div class="task ${t.Priority}">
                <div class="taskText">
                    <input type="checkbox" class="mark" data-id="${t.Id}" ${t.Finished ? 'checked' : ''}>
                    <p style="${t.Finished ? 'text-decoration: line-through; color: gray' : ''}" >${t.Title} ::  ${t.Description}</p>
                </div>
                <div class="taskButtons">
                    <button class="btnDetails" det-id="${t.Id}">Details</button>
                    <button class="edit" ed-id="${t.Id}"><i class="fa-solid fa-pen fa-lg" style="color: #000000;"></i></button>
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
    document.querySelectorAll(".delete").forEach(del => del.addEventListener("click", function () {
        let idSearch = del.getAttribute("dt-id");
        contentDOM.testingList = contentDOM.testingList.filter(function (item) {
            return item.Id != idSearch;
        });
        loadTasks(contentDOM.sectionName.innerHTML);
        localStorage.setItem("testingList", JSON.stringify(contentDOM.testingList));
    }))

    document.querySelectorAll(".edit").forEach(btnEdit => btnEdit.addEventListener("click", () => {
        let idEdit = btnEdit.getAttribute("ed-id");
        editTask(idEdit);
    }))

    document.querySelectorAll(".btnDetails").forEach(btnDet => btnDet.addEventListener("click", () => {
        contentDOM.detailsDialog.showModal();
        let idDet = btnDet.getAttribute("det-id");
        loadDetails(idDet);
    }))
}

function editTask(fId) {
    contentDOM.dialog.showModal();
    EDIT = true;
    EDITID = fId;
    contentDOM.testingList.forEach(t => {
        if (t.Id == fId) {
            document.querySelector("#task-title").value = t.Title;
            document.querySelector("#task-description").value = t.Description;
            document.querySelector("#due").value = t.DueDate;
            document.querySelector("#task-priority").checked = t.Priority;
            document.querySelector("#taskType").value = t.Type;
        }
    });
}

function loadDetails(dID) {
    contentDOM.testingList.forEach(t => {
        if (t.Id == dID) {
            contentDOM.detailsDialog.querySelector("#tName").innerHTML = t.Title;
            contentDOM.detailsDialog.querySelector(".tDescription").innerHTML = "Description: " + t.Description;
            contentDOM.detailsDialog.querySelector(".tDueDate").innerHTML = "Due Date: " + t.DueDate;
            contentDOM.detailsDialog.querySelector(".tPriority").innerHTML = "Priority: " + (t.Priority ? "Important" : "Regular");
            contentDOM.detailsDialog.querySelector(".detClose").addEventListener("click", () => { contentDOM.detailsDialog.close(); });
        }
    })
}