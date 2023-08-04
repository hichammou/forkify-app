import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/searchResultsView.js';
import paginationView from './views/paginationView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipies = async function () {
  try {
    // GET RECEPE ID
    const recipeId = window.location.hash.slice(1);
    if (!recipeId) return;
    // spinner
    recipeView.renderSpinner();

    // 1) LOADING RECIPE
    await model.loadRecipe(recipeId);

    // 2) RENDRING RECIPE
    recipeView.render(model.state.recipe);
  } catch (error) {
    // rendring the error to to the view
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // Load spinner
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load results from the server
    await model.loadSearchResult(query);

    // 3) Render results on the UI
    resultsView.render(model.getSearchResultsPage());

    // 4) Render intial pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (page) {
  // 1) Render new results
  resultsView.render(model.getSearchResultsPage(page));

  // 2) Render new pagination
  paginationView.render(model.state.search);
};

const init = () => {
  recipeView.addHandlerRender(controlRecipies);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.pageChangeHandler(controlPagination);
};
init();
