document.body.style.backgroundImage = `url('https://source.unsplash.com/1080x1920/?writing')`;

function onSubmit() {
  const wordInput = document.getElementById("word").value.toLowerCase();
  let input = wordInput.charAt(0).toUpperCase() + wordInput.slice(1);
  fetch(`http://localhost:8080/definitions/${input}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      response.map((element, index) => {
        const definition = document.getElementById("definition");
        const paragraph = document.createElement("p");
        const wordHead = (document.getElementById("word-header").innerText =
          input);
        paragraph.textContent = `[${index + 1}] ${input} - Definition: ${
          element.definition
        }`;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?${input}')`;
        document.getElementById("def-container").style.display = "grid";
        definition.appendChild(paragraph);
      });
    })

    .catch((err) => console.error(err));
}
