let input = document.getElementById("task");
let btn = document.getElementById("btn");
let listItems = document.getElementById("listItems");

btn.addEventListener("click", () => {
    
    if (input.value.trim() !== "") {
        let list = document.createElement("li");
        
        
        list.className = "list-group-item d-flex justify-content-between align-items-center";
        
        
        list.innerHTML = `
            <span class="task-text">${input.value}</span>
            <button class="btn btn-sm btn-info edit-btn">Edit</button>
        `;
        
        
        let editBtn = list.querySelector(".edit-btn");
        let taskText = list.querySelector(".task-text");
        
        editBtn.addEventListener("click", () => {
            let updatedTask = prompt("Task edit korun:", taskText.innerText);
            if (updatedTask !== null && updatedTask.trim() !== "") {
                taskText.innerText = updatedTask;
            }
        });
        
        listItems.appendChild(list);
        
       
        input.value = ""; 
    } else {
        alert("Kichu ekta likhun!");
    }
});
