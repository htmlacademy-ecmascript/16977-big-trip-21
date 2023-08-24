import { createElement } from '../render.js';

function templateWaypointContainer() {
  return '<ul class="trip-events__list"></ul>';
}

export default class WaypointContainerView {
  getTemplate() {
    return templateWaypointContainer();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
