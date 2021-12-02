(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // createNote.js
  var require_createNote = __commonJS({
    "createNote.js"(exports, module) {
      var createNote2 = (title2, content2, callback) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ "title": `${title2}`, "content": `${content2}` })
        }).then((response) => response.json()).then((data) => {
          console.log("Success:", data);
          callback(data);
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = createNote2;
    }
  });

  // displayNote.js
  var require_displayNote = __commonJS({
    "displayNote.js"(exports, module) {
      var displayNotes2 = (callback) => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => callback(data));
      };
      module.exports = displayNotes2;
    }
  });

  // index.js
  var createNote = require_createNote();
  var displayNotes = require_displayNote();
  var title = document.querySelector("#note-title");
  var content = document.querySelector("#note-content");
  var space = document.querySelector("#noteSpace");
  var form = document.querySelector("#form");
  var selected = document.querySelector("#selected-note");
  displayNotes((notes) => {
    space.innerHTML = "";
    notes.forEach((note) => {
      const notewrapper = document.createElement("div");
      const notetitle = document.createElement("p");
      notetitle.innerText = note.title;
      const notedesc = document.createElement("p");
      notedesc.innerText = note.content;
      notewrapper.append(notetitle);
      notewrapper.addEventListener("click", () => {
        selected.innerHTML = `<h2>${note.title}</h2> <p>${note.content}</p>`;
      });
      space.append(notewrapper);
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    createNote(title.value, content.value, (newNote) => {
      space.insertAdjacentHTML("afterbegin", `
      <p><strong>${newNote.title}</strong> - <span>${newNote.content.substring(0, 20)}</span></p>
    `);
    });
  });
})();
