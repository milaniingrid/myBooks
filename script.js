/*   class Book {
  constructor(book) {
    this.book = book;
  }
} */

let list = [];

let listBooks = [];
let listAuthors = [];
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

  let myBookObject = new Object();
  myBookObject.book = bookNameInput.value;
  myBookObject.author = authornameInput.value;
  myBookObject.read =
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
  //mostra o valor após envio
  renderBookList();
}

function renderBookList() {
  let listDiv = document.getElementById("list");

  listDiv.innerHTML = "";

  let tamanhoLista = listBooks.length;
  for (let index = 0; index < tamanhoLista; index++) {
    console.log(listBooks[index] + " - " + listAuthors[index]);
    listDiv.append(
      listBooks[index] +
        ", " +
        listAuthors[index] +
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
