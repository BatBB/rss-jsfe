import createElement from '../../utils/createElement';

export default function renderContainerMake() {
  const containerMakeTemplate = `
  <div class="garage__make">
    <div class="garage__make-create">
      <input type="text" class="input-text-create input-create" />
      <input type="color" class="input-color-create input-create" />
      <button class="btn btn-create">CREATE</button>
    </div>
    <div class="garage__make-update">
      <input type="text" class="input-text-update input-update" />
      <input type="color" class="input-color-update input-update" />
      <button class="btn btn-update" disabled>UPDATE</button>
    </div>
    <div class="garage__make-buttons">
      <button class="btn btn-race">RACE</button>
      <button class="btn btn-reset" disabled>RESET</button>
      <button class="btn btn-generate">GENERATE CARS</button>
    </div>
  </div>
  `;
  const element = createElement('div', 'garage__make');
  element.innerHTML = containerMakeTemplate;
  return element;
}
