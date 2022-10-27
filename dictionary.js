function onSubmit() {
  const wordInput = document.getElementById("word").value.toLowerCase();
  let input = wordInput.charAt(0).toUpperCase() + wordInput.slice(1);
  fetch(`http://localhost:8080/definitions/${input}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      response.map((element) => {
        const definition = document.getElementById("definition");
        const paragraph = document.createElement("p");
        paragraph.textContent = `${input} ${element.definition}`;
        definition.appendChild(paragraph);
      });
    })
    .catch((err) => console.error(err));
}
