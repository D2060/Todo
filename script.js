let body=document.querySelector(".my_tasks");
let uniqueId=0;

let Todo_Container_box=document.querySelector(".container");
let save_button;

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
            if(box.checked==true){
                label.classList.add("strike");
            }else{
                label.classList.remove('strike');
            }
        })
    })


    let del = document.querySelectorAll(".icon");
    del.forEach((val)=>{
        val.addEventListener('click',()=>{
            let j=val.id.charAt(val.id.length - 1);
            let div_box=document.querySelector(`#div_`+j);
            div_box.remove();
        })
    })

    // save_button.addEventListener("click",()=>{
    //     let store=document.querySelectorAll('.box');
    //     localStorage.setItem("local_storage",JSON.stringify(store));
    // })

}



let btn=document.querySelector(".btn");
let input_ele=document.querySelector('.task');

function addListItemsToBody(){
    if (input_ele.value){
        addListItems(input_ele.value,uniqueId++);        
    }else{
        alert("Please Enter a Task to Proceed");
    }
    input_ele.value='';
}

btn.addEventListener('click',addListItemsToBody);
input_ele.addEventListener('keydown',function(Event){
    if(Event.key=='Enter'){
        addListItemsToBody();
    }
});















