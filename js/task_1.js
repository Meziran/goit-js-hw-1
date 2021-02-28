const ulEl = document.querySelector("#categories");
console.log(`В списке ${ulEl.children.length} категории.`);

const itemEl = ulEl.querySelectorAll(".item");
const elLog = (item) => {
  const itemH2 = item.querySelector("h2");
  const itemLi = item.querySelectorAll("ul li");
  console.log(
    `Категория: ${itemH2.textContent} Количество элементов: ${itemLi.length}`
  );
};
console.log(itemEl.forEach((item) => elLog(item)));
