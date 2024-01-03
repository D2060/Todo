let body=document.querySelector(".my_tasks");

function addListItems(text,idx){
    id=`box_${idx}`;
    let div=document.createElement("div");
    div.classList.add("box");
    body.appendChild(div);
    div.id=`div_${idx}`;
    
    let input=document.createElement("input");
    input.type="checkbox";
    input.id=id;
    div.appendChild(input);
    input.classList.add("input_box");
    input.style.cursor="pointer";
    
    
    let label=document.createElement("label");
    label.id=`label_${idx}`;
    label.setAttribute("for",id);
    label.textContent=text;
    div.appendChild(label);
    
    let icon=document.createElement("i");
    icon.id=`id_${idx}`;
    icon.classList.add("icon","fa","fa-solid","fa-trash");
    div.appendChild(icon);

}

let check_box=document.querySelectorAll(".input_box");
check_box.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        let label = document.querySelector(`#label_${index}`);
        if(box.checked==true){
            label.classList.add("strike");
        }else{
            label.classList.remove('strike');
        }
    })
})


let del = document.querySelectorAll(".icon");
del.forEach((val,indexs)=>{
    val.addEventListener('click',()=>{
        let div_box=document.querySelector(`#div_${indexs}`);
        div_box.remove();
    })
})




let btn=document.querySelector(".btn");
btn.addEventListener('click',()=>{
    let input_ele=document.querySelector('.task');
    addListItems(input_ele.value,id);
})