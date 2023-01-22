import Component from '../../components/component';
import renderCars from '../../components/renders/renderCars';
import renderContainerMake from '../../components/renders/renderEdit';
import renderMessage from '../../components/renders/renderMessage';
import { renderPagination } from '../../components/renders/renderPagination';
import { renderTrack } from '../../components/renders/renderTrack';
import './garagePage.scss';

export default class GaragePage extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render(): HTMLElement {
    this.container.append(renderContainerMake());
    this.container.append(renderTrack());
    this.container.append(renderPagination('garage'));
    renderCars();
    this.container.append(renderMessage());
    return this.container;
  }
}
