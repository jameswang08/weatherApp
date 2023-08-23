function generatePage() {
  const container = document.createElement('div');
  container.id = 'container';

  // Create form
  const form = document.createElement('form');

  // Create text input
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter a location...');

  // Create submit button
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Search');

  // Put form together
  form.appendChild(input);
  form.appendChild(submit);

  container.appendChild(form);
  document.querySelector('body').appendChild(container);
}

export default generatePage;