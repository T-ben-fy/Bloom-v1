// const selectWrapper = document.querySelector('.select-wrapper');
// const bl_select = document.querySelector('.bl-select');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// const { Collapse } = require("bootstrap");

// bl_select.addEventListener('click', () => {
//   dropdownMenu.classList.toggle('active');
// });

// document.addEventListener('click', (e) => {
//   if (!selectWrapper.contains(e.target)) {
//     dropdownMenu.classList.remove('active');
//   }
// });

let bl_collapse__switchs = document.querySelectorAll('.bl-collapse__switch');
bl_collapse__switchs.forEach((e)=>{
    e.onclick = ()=>{
        let selected_bl_collapse = e.parentElement;
        if(selected_bl_collapse.classList.contains('on')){
            selected_bl_collapse.children[1].innerHTML = 'Collapse view (off)';
            selected_bl_collapse.setAttribute('class' , 'bl-collapse off');
        }else{
            selected_bl_collapse.children[1].innerHTML = 'Collapse view (on)';
            selected_bl_collapse.setAttribute('class' , 'bl-collapse on');
        }
    }
})
