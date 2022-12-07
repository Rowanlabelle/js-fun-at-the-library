function createTitle(title) {
  return `The ${title}`;
};


function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return character;
};


function saveReview(newReview, allReviews) { 
  if (allReviews.includes(newReview) === false) {
    allReviews.push(newReview);
  };
};


function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};


function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
};

function editBook(book) {
  book.pageCount = book.pageCount * .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};