(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // createNote.js
  var require_createNote = __commonJS({
    "createNote.js"(exports, module) {
      var createNote2 = (title2, content2, callback2) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ "title": `${title2}`, "content": `${content2}` })
        }).then((response) => response.json()).then((data) => {
          console.log("Success:", data);
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
      var displayNote2 = (callback2) => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => callback2(data));
      };
      module.exports = displayNote2;
    }
  });

  // index.js
  var createNote = require_createNote();
  var displayNote = require_displayNote();
  displayNote(callback);
  var button = document.querySelector("#click-btn");
  var title = document.querySelector("#note-title");
  var content = document.querySelector("#note-content");
  button.addEventListener("click", () => {
    createNote(title.value, content.value);
  });
})();
