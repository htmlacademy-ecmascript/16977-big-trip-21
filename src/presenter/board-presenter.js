import { render } from '../render.js';
import FormEditView from '../view/form-edit-view.js';
import WaypointCardView from '../view/waypoint-card-view.js';

const COUNT_CARDS = 3;

export default class BoardPresenter {
  formEdit = new FormEditView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.formEdit, this.boardContainer);

    for (let i = 0; i <= COUNT_CARDS; i++) {
      render(new WaypointCardView(), this.boardContainer);
    }
  }
}
