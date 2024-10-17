const url = "https://flynn.boolean.careers/exercises/api/random/mail"


for (let i = 0; i < 10; i++) {
  fetch(url)
    .then(response=> response.json())
      
    .then(data => {
      document.querySelector('div').innerHTML += `<h2>${data.response}</h2>`
    })
    .catch(err => console.log(err));
}