const createNote = require('./createNote')


const button = document.querySelector('#click-btn');
const title = document.querySelector('#note-title');
const content = document.querySelector('#note-content');

button.addEventListener('click', () => {

  createNote(title.value, content.value);

});