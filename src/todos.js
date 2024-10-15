const ToDo = ((title,description,due,priority,project)=>{
    const getTitle = ()=>title;
    const getDescription = ()=>description;
    const getDue = ()=>due;
    const getPriority = ()=>priority;
    const getProject = ()=>project;

    return {getTitle,getDescription,getDue,getPriority,getProject};
});

export {ToDo};