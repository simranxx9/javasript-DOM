const ul = document.querySelector('#book-list ul');

ul.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    ul.removeChild(li);
    }
})

const add = document.forms['add-book'];

add.addEventListener('submit',function(e){
    e.preventDefault();   // to prevent the refresh

    const val = add.querySelector('input[type="text"]').value;
    
    // creating element tags

    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    const delSpan = document.createElement('span');
    //adding the class to the spans

    nameSpan.classList.add('name');
    delSpan.classList.add('delete');

    //adding the text

    nameSpan.textContent = val;
    delSpan.textContent = 'delete';

    //appending the tags in the same order

    li.appendChild(nameSpan);
    li.appendChild(delSpan);
    ul.appendChild(li);

})
// checkbox
const check = add.querySelector('input[type="checkbox"]');

check.addEventListener('change',function(){
    if(check.checked)
    {
        ul.style.display='none';
    }
    else{
        ul.style.display='initial';
    }
})

//search filter

const search = document.forms['search-books'].querySelector('input');

search.addEventListener('keyup',function(e){
    const inside = e.target.value.toLowerCase();
    const books = ul.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const content = book.textContent;
        if(content.toLowerCase().indexOf(inside)!=-1)
        {
            book.style.display='block';
        }
        else{
            book.style.display='none';
        }
    });
})

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
console.log(panels);

tabs.addEventListener('click',function(e){
    const id = document.querySelector(e.target.dataset.target);     //to select the required target div
    console.log(id);
    panels.forEach(function(panel){
        if(panel == id){
            panel.classList.add('active');
        }
        else{
            panel.classList.remove('active');
        }
    })
})