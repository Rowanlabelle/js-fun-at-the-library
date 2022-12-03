function createLibrary(libName) {
  var library = {
    name: libName,
    shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: []
    }
  };
  return library;
};

function addBook(library, book) {
  var bookGen = book.genre;
  library['shelves'][bookGen].push(book);
};

function checkoutBook(library, bookTitle, genre) {
  var findShelf = library['shelves'][genre];
  for (var i = 0; i < findShelf.length; i++) {
    if (bookTitle === findShelf[i].title) {
      findShelf.splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  };
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};