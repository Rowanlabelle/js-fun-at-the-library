function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }; 
};
 
function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      shelf.splice(i,1);
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
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      return true;
    };
  };
  return false;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};