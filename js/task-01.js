const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Кількість категорій: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryTitle} (кількість елементів: ${categoryItems})`);
});