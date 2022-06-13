// Write your solution here
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (lily) {
  cats.push(lily);
}

function destructivelyPrependCat (lily) {
  cats.unshift(lily);
}

function destructivelyRemoveLastCat () {
  cats.pop();
}

function destructivelyRemoveFirstCat () {
  cats.shift();
}

function appendCat (lily) {
  return [...cats, lily];
}

function prependCat (name) {
  return [name, ...cats];
}

function removeFirstCat () {
  return cats.slice(1);
}

function removeLastCat () {
  return cats.slice(0, cats.length - 1);
}