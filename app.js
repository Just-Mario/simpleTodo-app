//TODO LIST #LOGIC

//reference/targets for DOM query
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//function to generate a new html todo list item
generateTemplate = todo => {
    //template string
    const html = ` <li class="list-group-item d-flex justify-content-between">
                    <span>${todo}</span>
                     <i class="far fa-trash-alt delete"></i>
                   </li>`;

    list.innerHTML += html;//Append new item to the template.

};
//attach submit event listener to the Add form
addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();
    //If the value of the input field is 0 = falsey then do not add any value
    if (todo.length) {

        generateTemplate(todo);//Invoke a function to generate a new item
        addForm.reset();//Reset input Value.
    };

});

//Deleting Todo Items.
list.addEventListener('click', e => { //event deligation = target element that contains 'delete class'.

    if (e.target.classList.contains('delete')) {

        e.target.parentElement.remove(); //remove class list
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term)) //When searching add class list 'Filtered'
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered')); //When searching remove class list 'Filtered'
};


//keyup Event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
