const form = document.querySelector('form');
const ul = document.querySelector('ul');
const searchInput = document.querySelector('.search-input')
// const li = document.querySelectorAll('li');
// const descriptionContainer = document.querySelector('.item_todo__description')

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = e.target.inputAddTodo.value.trim();
  if(inputValue.length){
    ul.innerHTML += `
      <li>
        <span>${inputValue}</span>
        <span>
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-trash delete"></i>
        </span>
      </li>
    `;
    e.target.reset();
  }
})

ul.addEventListener('click', e => {
  if(Array.from(e.target.classList).includes('delete')){
    e.target.parentElement.parentElement.remove()
  }
})

searchInput.addEventListener('input', e => {
  const inputValue = e.target.value.trim().toLowerCase()
  console.log(inputValue)
  Array.from(ul.children).filter(li => !li.textContent.toLowerCase().includes(inputValue)).
    forEach(li => {
      li.classList.add('hidden');
    })

    Array.from(ul.children).filter(li => li.textContent.toLowerCase().includes(inputValue)).
    forEach(li => {
      li.classList.remove('hidden');
    })
})