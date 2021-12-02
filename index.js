const createNote = require('./createNote')
const displayNote = require('./displayNote')
displayNote(callback);


const button = document.querySelector('#click-btn');
const title = document.querySelector('#note-title');
const content = document.querySelector('#note-content');

button.addEventListener('click', () => {

  createNote(title.value, content.value);

});