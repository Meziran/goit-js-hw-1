const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const listIngredientsEl = document.querySelector("#ingredients");
const igredientsArray = ingredients.map((ingredient) => {
  const newList = document.createElement("li");
  newList.textContent = ingredient;
  return newList;
});
listIngredientsEl.append(...igredientsArray);
