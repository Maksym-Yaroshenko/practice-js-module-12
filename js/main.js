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
