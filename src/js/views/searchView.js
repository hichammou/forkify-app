class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const searchQuery = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return searchQuery;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
