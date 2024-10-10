const ToDo = ((title,description,due,priority)=>{
    const getTitle = ()=>title;
    const getDescription = ()=>description;
    const getDue = ()=>due;
    const getPriority= ()=>priority;

    return {getTitle,getDescription,getDue,getPriority};
});