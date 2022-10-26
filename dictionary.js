const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

function onSubmit() {
  const word = document.getElementById("word");
  fetch(`http://localhost:8080/definitions/:${word}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById("word").innerText = response.word;
      // document.getElementById("definition").innerText = definition;
    })
    .catch((err) => console.error(err));
}
