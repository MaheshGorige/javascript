function* generatorFn() {
    yield 1;
    yield 2;
    yield "hello";

    return "Done"
}

const gen = generatorFn();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

// console.log("numbers", numbers())

// for (const num of numbers()) {
//   console.log(num);
// }


function* generatorWithInput() {
  const name = yield "What's your name?";
  yield `Hello, ${name}!`;
}

const genWithInput = generatorWithInput();
console.log(genWithInput.next().value); // "What's your name?"
console.log(genWithInput.next("Alice").value); // "Hello, Alice!"