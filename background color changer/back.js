document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        //alert("loaded successfully");
        initApp();
    }
});

const initApp= () =>{
    const main = document.querySelector("main");
    const div = document.getElementById("divs");
    const para = document.querySelector("p");
    const form= document.querySelector("#myForm");
    const getback=() =>{
        let val=`rgb(${Math.floor(Math.random()* 255 +1)},${Math.floor(Math.random()* 255 +1)},${Math.floor(Math.random()* 255 +1)})`;
        return val;
    }
    const changeback =() =>{
        let back=getback();
        main.style.backgroundColor=back;
        para.textContent=`Background-Color: ${back}`;
    }


    form.addEventListener('submit',changeback(),false);
}