/* //Objeto
const Livro = {
  nome: "React",
  editora: "Casa do codigo",
  paginas: 185,
  anunciar: function () {
    console.log("A alura indica o livro " + this.nome + "!")
  }
}

Livro.anunciar() */

//função que age como uma classe
/* const livro = function (nome, editora, paginas) {
  (gNome = nome), (gEditora = editora), (gPaginas = paginas);

  this.getNome = function () {
    return gNome;
  };
  this.gEditora = function () {
    return gEditora;
  };
  this.gPaginas = function () {
    return gPaginas;
  };
};

const GraphQL = livro("GraphQL", "Casa do Código", 143);

console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas()); */

///////////////////////////

//classe nomeada

let Book = class Livro {
  constructor(book, author) {
    this.book = book;
    this.author = author;
  }
  anunciarTitulo() {
    console.log(`Titulo: ${this.book}`);
  }
  descreverTitulo() {
    console.log(
      `Titulo: ${this.book} é um livro de autoria de ${this.author}.`
    );
  }
};

let livroMilani = new Book("teste", "teste");
livroMilani.descreverTitulo;

console.log(livroMilani);

////////////////////////////////

let list = [];

//apagar list comentada
/* let listBooks = [];
let listAuthors = []; */
let listReadOption = [];

/*listBooks.push("Milani");
listBooks.push("Outro nome");
listBooks.push("Lucas");
listBooks.splice(0,1)

console.log(listBooks);
console.log(listBooks[0]);*/

function submitForm(event) {
  event.preventDefault();

  let bookNameInput = document.getElementById("bookname");

  let authornameInput = document.getElementById("authorname");

  let readRadios = document.getElementsByName("read");
  for (let index = 0; index < readRadios.length; index++) {
    if (readRadios[index].checked) {
      listReadOption.push(readRadios[index].value);
    }
  }

  // é uma instancia da class book
  let myBookObject = new Book(bookNameInput.value, authornameInput.value);

  list.push(myBookObject);

  /* listBooks.push(bookNameInput.value);
  console.log(listBooks);

  listAuthors.push(authornameInput.value);
  console.log(listAuthors); */

  //TODO: usar forEach p/ identificar qual opção foi selecionada
  //TODO: Colocar o valor da opção selecionada no array (listReadOption)
  //TODO: mostrar a opção selecionada dentro do renderBookList

  /*console.log(readRadio.checked);
   console.log(bookNameInput.value);
  console.log(authornameInput.value); */

  //limpa o input após o envio
  readRadios.bookNameInput.value = "";
  authornameInput.value = "";
  bookNameInput.value = "";

  //mostra o valor após envio
  renderBookList();
}

function renderBookList() {
  let listDiv = document.getElementById("list");

  //altera a propriedade html
  listDiv.innerHTML = "";

  let tamanhoLista = list.length;
  for (let index = 0; index < tamanhoLista; index++) {
    const currentBook = list[index]
    console.log(currentBook.book + " - " + currentBook.author);
    listDiv.append(
      currentBook.book +
        ", " +
        currentBook.author +
        " - " +
        listReadOption[index] +
        "\n"
    );

    listDiv.innerHTML += "<hr/>";
  }
  //listDiv.append(listBooks, listAuthors);

  //abre um alert com o button selecionado
  /* var seg = document.querySelector("input[name=read]:checked").value;
  alert(seg); */
  /*           alert(document.querySelector('input[name=read]:checked').value)
   */
}
