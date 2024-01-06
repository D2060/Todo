let body=document.querySelector(".my_tasks");
let uniqueId=0;

let Todo_Container_box=document.querySelector(".container");

let div_containar_array=[];

function addListItems(text,idx){
    
    id=`box_${idx}`;
    let div=document.createElement("div");
    div.classList.add("box");
    body.appendChild(div);
    div.id=`div_${idx}`;
    
    let input=document.createElement("input");
    input.type="checkbox";
    input.id=`checkbox_${idx}`;
    div.appendChild(input);
    input.classList.add("input_box");
    input.style.cursor="pointer";
    
    
    let label=document.createElement("label");
    label.id=`label_${idx}`;
    label.setAttribute("for",`checkbox_${idx}`);
    label.textContent=text;
    div.appendChild(label);
    
    let icon=document.createElement("i");
    icon.id=`id_${idx}`;
    icon.classList.add("icon","fa","fa-solid","fa-trash");
    div.appendChild(icon);
    
    
    if(idx==0){
        let save_button;
        save_button=document.createElement('button');
        save_button.classList.add('btns');
        save_button.textContent="Save";
        Todo_Container_box.appendChild(save_button);

        save_button.addEventListener("click",()=>{
            let store=JSON.stringify(div_containar_array);
            localStorage.setItem("local_storage",store);
            alert("Changes Saved");
        })
    }

    let check_box=document.querySelectorAll(".input_box");
    check_box.forEach((box,index)=>{
        box.addEventListener('click',()=>{
            let i=box.id.charAt(box.id.length-1);
            let label = document.querySelector(`#label_`+i);
            if(box.checked==true){
                label.classList.add("strike");
                div_containar_array[i]["isChecked"]=true;
            }else{
                label.classList.remove("strike");
                div_containar_array[i]["isChecked"]=false;
            }
        })
    })


    let del = document.querySelectorAll(".icon");
    del.forEach((val)=>{
        val.addEventListener('click',()=>{
            let j=val.id.charAt(val.id.length - 1);
            let div_box=document.querySelector(`#div_`+j);
            div_containar_array.splice(j,1);
            div_box.remove();
            console.log(div_containar_array);
        })
    })
}



let btn=document.querySelector(".btn");
let input_ele=document.querySelector('.task');

let local_array_string=localStorage.getItem("local_storage");
let local_array=JSON.parse(local_array_string);
if(local_array){
    div_containar_array=local_array;
    local_array.forEach((val,idx)=>{
        addListItems(val['Task'],uniqueId);
        if(val["isChecked"]){
            let label_text = document.querySelector(`#label_`+uniqueId);
            let check_box_status=document.querySelector(`#checkbox_${uniqueId}`);
            check_box_status.checked=true;
            label_text.classList.add("strike");
        }
        uniqueId++;
    })
}


function addListItemsToBody(){
    let div_containar_object={};
    if (input_ele.value){
        div_containar_object["Task"]=input_ele.value;
        div_containar_object["isChecked"]=false;
        addListItems(input_ele.value,uniqueId++);        
    }else{
        alert("Please Enter a Task to Proceed");
    }
    div_containar_array.push(div_containar_object);
    input_ele.value='';
}

btn.addEventListener('click',addListItemsToBody);
input_ele.addEventListener('keydown',function(Event){
    if(Event.key=='Enter'){
        addListItemsToBody();
    }
});