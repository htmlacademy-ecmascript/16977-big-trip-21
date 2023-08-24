import { RenderPosition, render } from './render.js';
import WaypointInfoView from './view/waypoint-info-view.js';
import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import WaypointContainerView from './view/waypoint-container-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const tripMainContainer = document.querySelector('.trip-main');
const filtersContainer = tripMainContainer.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

render(new WaypointInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(new FiltersView(), filtersContainer);
render(new SortView(), tripEventsContainer);
render(new WaypointContainerView(), tripEventsContainer);

const eventListContainer = document.querySelector('.trip-events__list');
const boardPresenter = new BoardPresenter({ boardContainer: eventListContainer });

boardPresenter.init();
