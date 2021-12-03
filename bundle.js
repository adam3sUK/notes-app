(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // createNote.js
  var require_createNote = __commonJS({
    "createNote.js"(exports, module) {
      var createNote3 = (title2, content2, callback) => {
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
      module.exports = createNote3;
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

  // createForm.js
  var require_createForm = __commonJS({
    "createForm.js"(exports, module) {
      var createForm2 = () => {
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
        title = document.querySelector("#note-title");
        content = document.querySelector("#note-content");
        form = document.querySelector("#form");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          createNote(title.value, content.value, (newNote) => {
            AddNoteToPage(newNote);
          });
        });
      };
      module.exports = createForm2;
    }
  });

  // index.js
  var createNote2 = require_createNote();
  var displayNotes = require_displayNote();
  var createForm = require_createForm();
  var space = document.querySelector("#noteSpace");
  displayNotes((notes) => {
    space.innerHTML = "";
    notes.forEach((note) => {
      AddNoteToPage2(note);
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    createNote2(title.value, content.value, (newNote) => {
      AddNoteToPage2(newNote);
    });
  });
  var AddNoteToPage2 = (note) => {
    const notewrapper = document.createElement("p");
    notewrapper.style.textDecoration = "underline";
    notewrapper.style.color = "#3333BB";
    notewrapper.style.cursor = "pointer";
    const notetitle = document.createElement("strong");
    notetitle.innerText = note.title;
    const notedesc = document.createElement("span");
    notedesc.innerText = ` - ${note.content.substring(0, 20)}`;
    notewrapper.append(notetitle, notedesc);
    const close = document.createElement("button");
    close.innerText = "Close";
    notewrapper.addEventListener("click", () => {
      document.body.innerHTML = `
      <h1>Notes</h1>
      <h2>${note.title}</h2>
      <p>${note.content}</p>`;
      document.body.append(close);
    });
    close.addEventListener("click", () => {
      displayNotes((notes) => {
        document.body.innerHTML = "";
        createForm();
        notes.forEach((note2) => {
          AddNoteToPage2(note2);
        });
      });
    });
    document.body.append(notewrapper);
  };
})();
