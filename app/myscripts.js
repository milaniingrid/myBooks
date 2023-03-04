class Book {
  constructor(book, author, read) {
    this.id = self.crypto.randomUUID();
    this.book = book;
    this.author = author;
    this.read = read;
  }
  anunciarTitulo() {
    console.log(
      `The book ${this.book} authored by ${this.author} is ${this.read}`
    );
    return `The book ${this.book} authored by ${this.author} is ${this.read}`;
  }
}

let list = [];

const idades = [10, 22, 42, 16, 50];
const podeDirigir = idades.filter((idade) => {
  return idade >= 18;
});

console.log(podeDirigir);
console.log(idades);

function submitForm(event) {
  event.preventDefault();

  let bookNameInput = document.getElementById("bookname");

  let authornameInput = document.getElementById("authorname");

  let readRadios = document.getElementsByName("read");
  let bookRead = "";

  for (let index = 0; index < readRadios.length; index++) {
    if (readRadios[index].checked) {
      bookRead = readRadios[index].value;
    }
  }

  // é uma instancia da class book
  let myBookObject = new Book(
    bookNameInput.value,
    authornameInput.value,
    bookRead
  );

  list.push(myBookObject);

  //limpa o input após o envio

  authornameInput.value = "";
  bookNameInput.value = "";
  readRadios[1].checked = true;

  //mostra o valor após envio
  renderBookList();
}
function finalizouDelete() {
  console.log("Delete finalizado");
}

function deleteBook(id, callback) {
  console.log("antes do filtro", list);
  list = list.filter((value) => {
    if (value.id == id) {
      return false;
    }
    return true;
  });
  console.log("depois do filtro", list);

  renderBookList();
  callback();
}

function renderBookList() {
  let listDiv = document.getElementById("list");

  //altera a propriedade html / limpa o html
  listDiv.innerHTML = "";

  let tamanhoLista = list.length;
  for (let index = 0; index < tamanhoLista; index++) {
    const currentBook = list[index];

    let itemString = "";

    itemString += "<div class=\"list-item\">";

    itemString += currentBook.anunciarTitulo();

    itemString +=
      "<button type='button' class='delete' onclick='deleteBook(\"" +
      currentBook.id +
      "\", finalizouDelete)'>Delete</button>";

    itemString += "</div>";

    itemString += "<hr/>";

    listDiv.innerHTML += itemString;
  }

  const livrosNaoLidos = list.filter((currentLivro) => {
    return currentLivro.read == "no read";
  });

  console.log(livrosNaoLidos);

  listDiv.append("Falta a leitura de " + livrosNaoLidos.length + " livro(s).");

  const livrosLidos = list.filter((currentLivro) => {
    return currentLivro.read == "read";
  });

  console.log(livrosLidos);
  listDiv.innerHTML += "<br>";

  listDiv.append("Você já leu " + livrosLidos.length + " livro(s).");
}
