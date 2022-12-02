function shelfBook(book, shelf) {
  if (shelf.length  < 3) { 
    if (book.genre === 'sciFi') {
      shelf.unshift(book);
    };
  };
};

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      shelf.splice(i,1);
      return shelf;
    }; 
  };
};

function listTitles(books) {
  var allTitles = [];
  for (var i = 0; i < books.length; i++) {
    allTitles.push(books[i].title);  
  };
  return allTitles.join(', ');
};

function searchShelf(shelf, book) {
  var result = undefined;
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title !== book) {
      result = false;
    } else {
      result = true;
    };
  };
  return result;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};