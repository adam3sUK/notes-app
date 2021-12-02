const createNote = require('./createNote')
const displayNotes = require('./displayNote')




// const button = document.querySelector('#click-btn');
const title = document.querySelector('#note-title');
const content = document.querySelector('#note-content');
const space = document.querySelector('#noteSpace');
const form = document.querySelector('#form');
const selected = document.querySelector('#selected-note');

displayNotes((notes) => {
  space.innerHTML = "";
  notes.forEach(note => {
    
    //space.insertAdjacentHTML('afterbegin', `
      //  <p><strong>${note.title}</strong> - <span>${note.content.substring(0, 20)}</span></p>
    //`);
    
    //creating a div to wrap a note in
    const notewrapper = document.createElement("div");
    const notetitle = document.createElement("p");
    notetitle.innerText = note.title;
    const notedesc = document.createElement("p");
    notedesc.innerText = note.content;
    notewrapper.append(notetitle);
    notewrapper.addEventListener('click', () => {
      selected.innerHTML = `<h2>${note.title}</h2> <p>${note.content}</p>`
    });
    space.append(notewrapper);




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