import './styles.css';

const newTask= document.querySelector('.add');
const closeModal=document.querySelector('.close-modal');
const taskDialog=document.querySelector('.new-task');


newTask.addEventListener('click',()=>{
    taskDialog.showModal();
});
closeModal.addEventListener('click',()=>{
    taskDialog.close();
});