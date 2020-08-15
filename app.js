console.log("Welcomme to the Library");



let libraryForms = document.getElementById('libraryForm');
libraryForms.addEventListener("submit" , libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("Adding data in localstorage");
    let name = document.getElementById('bookName').value ;
    let author = document.getElementById('author').value ;
    let type;
    let fiction = document.getElementById('fiction') ;
    let programming = document.getElementById('programming') ;
    let cooking = document.getElementById('cooking') ;
    if(fiction.checked)
    {
        type = fiction.value;
    }
    else if(programming.checked)
    {
        type = programming.value;
    }
    else if(cooking.checked)
    {
        type = cooking.checked;
    }
    let tableBody = localStorage.getItem("tableBody");
    if(tableBody == null)
    {
        tableObj = [];
    }
    else{
        tableObj = JSON.parse(tableBody);
    }
    if(name){
        console.log("yes");
    }
    else{
        console.log("No");
    }

    tableObj.push(name , author , type);
    localStorage.setItem("tableBody" , JSON.stringify(tableObj));
    name  = "";
    author  = "";
    type = "fiction";
    console.log(tableobj);
    showBooks();

};

function showBooks(){
    let tableBody = localStorage.getItem("tableBody");
    if(tableBody == null)
    {
        tableObj = [];
    }
    else{
        tableobj = JSON.parse(tableBody);
    }
    let html = "";
    tableobj.forEach(function(name, author , type) {
        html += ` <table class="table">
        <thead class="thead-dark">
          <tr>
            <td scope="col">${name}</td>
            <td scope="col">${author}</td>
            <td scope="col">${type}</td>
          </tr>
        </thead>
      </table>
        `;
         
});

let notesElem = document.getElementById("tableBody");
    if(tableobj.length != 0)
    {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `Nothing have to shown . Use add note block to add your note`;
    }
}

//funciton to assign book details
function Book(name , author , type)
{
 this.name = name;
 this.author = author;
 this.type = type;
}

//display constructor
function Display()
{

}

//prottotype methods for display construtor
Display.prototype.add = function(book){
    console.log("Adding book");
    tableBody = document.getElementById("tableBody");
    let uiString = ` <tr>
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                    </tr>`
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function(book){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }

}

Display.prototype.show = function(type , displayMessage){
    let message = document.getElementById('message');
    message.innerHTML = ` <div class="alert alert- ${type}  alert-dismissible fade show" role="alert">
                        <strong>Message!</strong> ${displayMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`;
 
    setTimeout(function() {
        message.innerHTML = " ";
    } , 2000);
}



//Add event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener("submit" , libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("The book details are added");
    let name = document.getElementById('bookName').value ;
    let author = document.getElementById('author').value ;
    let type;
    let fiction = document.getElementById('fiction') ;
    let programming = document.getElementById('programming') ;
    let cooking = document.getElementById('cooking') ;
    if(fiction.checked)
    {
        type = fiction.value;
    }
    else if(programming.checked)
    {
        type = programming.value;
    }
    else if(cooking.checked)
    {
        type = cooking.checked;
    }

    let book = new Book(name , author , type);
    console.log(book);

    let display = new Display();
   
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success',' Your book has been successfully added!')
    }
    else
    {
        display.show('error' , ' The book details shows error!');
    }
   

    e.preventDefault();
}

