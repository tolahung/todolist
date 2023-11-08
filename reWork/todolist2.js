
let data = [
    {
        task: 'readding book',
        is_complete: false
    },
    {
        task: 'running 2km',
        is_complete: false
    },
];

const saveData = (data)=>{
    localStorage.setItem('Unitop', JSON.stringify(data));
};


let formAdd = document.forms.add_task;
formAdd.addEventListener('submit', (e)=>{
    let name = document.querySelector('#Name').value;
    let new_data = {
        task: name,
        is_complete: false
    };

    // add(new_data);

    // console.log(name);
    e.preventDefault();
});