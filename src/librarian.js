class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };
  
  greetPatron(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`
    };
  };

  findBook(bookName) {
    var shelfGenres = Object.values(this.library.shelves);
    for (var i = 0; i < shelfGenres.length; i++) {
      var theTitle = shelfGenres[i][i].title;
      var shelf = shelfGenres[i];
      if (bookName === theTitle) {
        for (var j = 0; j < theTitle.length; j++) {
          shelf.splice(j, 1);
          return `Yes, we have ${bookName}`
        };
      };
      if (bookName !== theTitle) {
        return `Sorry, we do not have ${bookName}`;
      };
    };
  };

  calculateLateFee(days) {
    return Math.ceil(days * .25); 
  };

};

module.exports = Librarian;