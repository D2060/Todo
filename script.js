let body=document.querySelector(".my_tasks");
let uniqueId=0;

let Todo_Container_box=document.querySelector(".container");
let save_button;

let div_containar_array=[];

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


    if(idx==0){
        let del_button=document.createElement('button');
        del_button.classList.add('btns');
        del_button.textContent="Save";
        Todo_Container_box.appendChild(del_button);

        save_button=del_button;
    }

    let check_box=document.querySelectorAll(".input_box");
    check_box.forEach((box,index)=>{
        box.addEventListener('click',()=>{
            let i=box.id.charAt(box.id.length-1);
            let label = document.querySelector(`#label_`+i);
            label.classList.toggle("strike");
            if(box.checked==true){
                div_containar_array[i]["isChecked"]=true;
            }else{
                div_containar_array[i]["isChecked"]=false;
            }
        })
    })


    let del = document.querySelectorAll(".icon");
    del.forEach((val)=>{
        val.addEventListener('click',()=>{
            let j=val.id.charAt(val.id.length - 1);
            let div_box=document.querySelector(`#div_`+j);
            div_box.remove();
            div_containar_array.splice(j,1);
        })
    })

    save_button.addEventListener("click",()=>{
        let store=JSON.stringify(div_containar_array);
        localStorage.setItem("local_storage",store);
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















