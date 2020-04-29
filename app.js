const TodoList = document.querySelector('#cafe');

document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault();
    const form = document.querySelector('form');
    const name = form.name.value;
    const city = form.city.value;

    db.collection('cafe').add({
        name:name,
        city:city
    })
    form.name.value='';
    form.city.value='';
})


function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id',doc.id);
    cross.setAttribute('class','cross');

    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    TodoList.appendChild(li);



    cross.addEventListener('click',(e)=>{
        
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafe').doc(id).delete();
    })
}

db.collection('cafe').onSnapshot(snapshot=>{
    const changes = snapshot.docChanges();
    
    changes.forEach(change=>{
        if(change.type == 'added')
        {
            renderCafe(change.doc);
        }
        else if(change.type == 'removed'){
            let li = TodoList.querySelector('[data-id='+change.doc.id+']');
            TodoList.removeChild(li);
        }
    })
})