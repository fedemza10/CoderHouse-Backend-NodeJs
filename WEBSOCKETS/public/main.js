const socket = io();

let productsContainer = document.getElementById("products")
let messagesContainer = document.getElementById('messages')

socket.on('products', products => {
  fetch("./views/index.hbs")
    .then(response => response.text())
    .then(html => {
      let template = Handlebars.compile(html);
      productsContainer.innerHTML = template({
        products
      })
    })
})

socket.on('allMessages', messages => {
  messagesContainer.innerHTML = ""
  messages.forEach(m => {
    appendMessage(m)
  })
})

socket.on('newMessage', message => {
    appendMessage(message)
})

const appendMessage = (message) => {
  let div = document.createElement('div');
  div.innerHTML = `
    <p>
      <span class="email">${message.email}</span>
      <span class="datetime">${message.datetime}</span>:
      <span class="text">${message.text}</span>
    </p>
  `
  messagesContainer.append(div)
}

/* Handlebars */
fetch("./views/index.hbs")
  .then(response => response.text())
  .then(html => {
    let template = Handlebars.compile(html);
    productsContainer.innerHTML = template()
  })


/* Add product */
const addProduct = event => {
  let product = {
    title: document.getElementById('title').value,
    thumbnail: document.getElementById('thumbnail').value,
    price: document.getElementById('price').value,
  }
  socket.emit('addProduct', product);
  return false;
}

/* Send message */
const sendMessage = event => {
  let message = {
    email: document.getElementById('email').value,
    text: document.getElementById('text').value,
    datetime: getDate()
  }
  socket.emit('sendMessage', message)
  return false;
}

const getDate = () => {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  return (date + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds);
}