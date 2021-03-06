const createNote = require('./createNote')
const displayNotes = require('./displayNote')
const createForm = require('./createForm')

// const button = document.querySelector('#click-btn');
// let title = document.querySelector('#note-title');
// let content = document.querySelector('#note-content');
const space = document.querySelector('#noteSpace');
// let form = document.querySelector ('#form');

displayNotes((notes) => {
  space.innerHTML = "";
  notes.forEach(note => {
    AddNoteToPage(note);
  });
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  createNote(title.value, content.value, (newNote) => {
    AddNoteToPage(newNote);
  });
});



const AddNoteToPage = (note) => {
  const notewrapper = document.createElement("p");
  notewrapper.style.textDecoration = "underline";
  notewrapper.style.color = "#3333BB";
  notewrapper.style.cursor = "pointer";
  const notetitle = document.createElement("strong");
  notetitle.innerText = note.title;
  const notedesc = document.createElement("span");
  notedesc.innerText = ` - ${note.content.substring(0, 20)}`;
  notewrapper.append(notetitle, notedesc);
  const close = document.createElement("button")
  close.innerText = "Close";
  notewrapper.addEventListener('click', () => {
    document.body.innerHTML = `
      <h1>Notes</h1>
      <h2>${note.title}</h2>
      <p>${note.content}</p>`;
    document.body.append(close);
  });
  close.addEventListener('click', () => {
    displayNotes((notes) => {
      document.body.innerHTML = "";
      createForm();
      notes.forEach(note => {
        AddNoteToPage(note);
      });
    });
  })
  document.body.append(notewrapper);
};