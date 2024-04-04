const total = 50000;

async function wwewewe() {
  return await new Promise((resolve) => {
    setTimeout(() => resolve("haha"), 2000);
  });
}

wwewewe()
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
console.log(total);

function a() {
  console.log("");
}

a();

console.log("Before try...catch");

try {
  const result = 10 / 0;
  console.log(result); // Цей рядок не виконається через помилку
} catch (error) {
  // Обробимо помилку
  console.error(error.message);
}

console.log("After try...catch");

a();

function fact(n) {
  if (n <= 1) return 1;

  // console.log(n);
  return n * fact(n - 1);
}

const data = fact(170);

console.log(data);

a();

function fibba(n) {
  if (n <= 1) return 1;

  const data = fibba(n - 1) + fibba(n - 2);
  // console.log(data);
  return data;
}

// 1 1 2 3 5 8 13 21
// 0 1 2 3 4 5 6  7

console.log(fibba(50));
