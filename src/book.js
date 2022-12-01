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


function saveReview(review, array) { 
  if (array.includes(review) === false) {
    array.push(review);
  };
};


// function calculatePageCount() {

// };


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}