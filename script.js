const body=document.querySelector(".my_tasks");

function addListItems(text,idx){
    id=`box_${idx}`;
    const div=document.createElement("div");
    div.classList.add("box");
    body.appendChild(div);
    
    const input=document.createElement("input");
    input.type="checkbox";
    input.id=id;
    div.appendChild(input);
    input.classList.add("input_box");
    
    
    const label=document.createElement("label");
    label.id=`label_${idx}`;
    label.setAttribute("for",id);
    label.textContent=text;
    div.appendChild(label);
    
    const icon=document.createElement("i");
    icon.id=`id_${idx}`;
    icon.classList.add("icon","fa","fa-solid","fa-trash");
    div.appendChild(icon);
}

let todoList=[
    {
        text:"Learn HTML"
    },{
        text:"Learn CSS"
    },{
        text:"Learn JavaScript"
    },{
        text:"Learn Node_JS"
    }
    
]

todoList.forEach((val,idx)=>{
    addListItems(val.text,idx);
})


const check_box=document.querySelectorAll(".input_box");
const del = document.querySelectorAll(".icon");

//const label_box=document.querySelectorAll("label");
// label_box.forEach((val,idx)=>{
    //     val.addEventListener("click",()=>{
//         val.classList.toggle("strike");
//     })
// })

check_box.forEach((box,idx)=>{
    box.addEventListener('click',()=>{
        let label = document.querySelector(`#label_${idx}`);
        if(box.checked==true){
            label.classList.add("strike");
        }else{
            label.classList.remove('strike');
        }
    })
})



