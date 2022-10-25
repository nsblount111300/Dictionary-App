const options = {
  method: "GET",
};

function onSubmit() {
  const word = document.getElementById("word");
}
fetch(`http://localhost:8080/definitions/:word`)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    document.getElementById("word").innerText = response[0].word;
    document.getElementById("definition").innerText = response[0].definition;
  })
  .catch((err) => console.error(err));
