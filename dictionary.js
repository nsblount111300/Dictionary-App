document.body.style.backgroundImage = `url('https://source.unsplash.com/1080x1920/?writing')`;

function onSubmit() {
  const wordInput = document.getElementById("word").value.toLowerCase();
  const definition = document.getElementById("definition");
  definition.innerHTML = ``;
  let input = wordInput.charAt(0).toUpperCase() + wordInput.slice(1);
  fetch(`https://localhost:8080/definitions/${input}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      response.map((element, index) => {
        const paragraph = document.createElement("p");
        document.getElementById("word-header").innerText = input;
        paragraph.textContent = `[${index + 1}] ${input} (${
          element.wordtype
        })- Definition: ${element.definition}`;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?${input}')`;
        document.getElementById("def-container").style.display = "grid";
        definition.appendChild(paragraph);
      });
    })

    .catch((err) => console.error(err));
}
