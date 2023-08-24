function generatePage() {
  const container = document.querySelector('.topHalf');

  // Create form
  const form = document.createElement('form');

  // Create text input
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute( 'placeholder', 'Enter a location...');
  input.classList.add('search');

  // Create submit button
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Search');

  // Put form together
  form.appendChild(input);
  form.appendChild(submit);

  container.appendChild(form);
}

export default generatePage;
