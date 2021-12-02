const createNote = require('./createNote')
const displayNotes = require('./displayNote')




// const button = document.querySelector('#click-btn');
const title = document.querySelector('#note-title');
const content = document.querySelector('#note-content');
const space = document.querySelector('#noteSpace');
const form = document.querySelector('#form');

displayNotes((notes) => {
  space.innerHTML = "";
  notes.forEach(note => {
    space.insertAdjacentHTML('afterbegin', `
      <a href="#" id="">
        <p><strong>${note.title}</strong> - <span>${note.content.substring(0, 20)}</span></p>
      </a>
    `);
    });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  createNote(title.value, content.value, (newNote) => {
    space.insertAdjacentHTML('afterbegin', `
      <p><strong>${newNote.title}</strong> - <span>${newNote.content.substring(0, 20)}</span></p>
    `);
  });
});