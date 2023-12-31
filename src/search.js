import { displayData, getCurrentUnit } from './display';

async function searchBtn() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const search = document.querySelector('.search').value;
    displayData(search, getCurrentUnit());
    form.reset();
  });
}

export default searchBtn;
