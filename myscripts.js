class Book {
  constructor(book, author, read) {
    this.book = book;
    this.author = author;
    this.read = read;
  }
  anunciarTitulo() {
    console.log(`The book ${this.book} authored by ${this.author} is ${this.read}`);
    return `The book ${this.book} authored by ${this.author} is ${this.read}`;
  }
}

let list = [];

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

function renderBookList() {
  let listDiv = document.getElementById("list");

  //altera a propriedade html / limpa o html
  listDiv.innerHTML = "";

  let tamanhoLista = list.length;
  for (let index = 0; index < tamanhoLista; index++) {
    const currentBook = list[index];

    listDiv.append(currentBook.anunciarTitulo());

    listDiv.innerHTML += "<hr/>";
  }
}
