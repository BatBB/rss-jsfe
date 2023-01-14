import createElement from '../../utils/createElement';

export default function renderTrack() {
  const containerTrackTemplate = `
  <p class="garage__track-cars">Garage (<span class="garage__track-cars-count">${123}</span>)</p>
  <p class="garage__track-page">
    Page #<span class="garage__track-page-number">${1}</span>
  </p>
  <div class="garage__track-container"></div>`;
  const element = createElement('div', 'garage__track');
  element.innerHTML = containerTrackTemplate;
  return element;
}
