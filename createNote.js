const createNote = (title, content, callback) => {
  fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({'title':`${title}`, 'content': `${content}`})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    callback(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

module.exports = createNote




