const createForm = () => {
  document.body.innerHTML = `
  <h1>Notes</h1>
  <form id="form">
    <div style="margin-bottom: 10px;">
      <input type="text" id="note-title" />
    </div>
    <div style="margin-bottom: 10px;">
      <textarea type="text" id="note-content" cols="30" rows="10"></textarea>
    </div>
    <button id="click-btn">Create</button>
  </form>`;
  title = document.querySelector('#note-title');
  content = document.querySelector('#note-content');
  form = document.querySelector ('#form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    createNote(title.value, content.value, (newNote) => {
      AddNoteToPage(newNote);
    });
  });
}

module.exports = createForm;