import Component from '../../components/component';
import renderCars from '../../components/renders/renderCars';
import renderContainerMake from '../../components/renders/renderMake';
import renderTrack from '../../components/renders/renderTrack';
import './garagePage.scss';

export default class GaragePage extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render(): HTMLElement {
    this.container.append(renderContainerMake());
    this.container.append(renderTrack());
    renderCars();
    return this.container;
  }
}
