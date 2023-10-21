// https://script.google.com/macros/s/AKfycbzwj6CNZfIrkU9ED8BdqYwRj0mxh5MmiauN5fZnGICQ7OzlolBiY7-dzqxfpAsCR79s/exec

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL =
  "https://script.google.com/macros/s/AKfycby7GQqGN5HJaYHuL4Vb5twWRPOQX3teJB3BUDrB2BrxxMkZ93_6tnW9y0FIZkjvwoA67g/exec";

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Success!", response);
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
      submitButton.disabled = false;
    });
});
