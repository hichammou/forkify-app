import View from './View';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _successMessage;
  _errorMessage = 'No recipes found';

  // The parent Class makes the _data attr and stores an array of results inside it
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(res) {
    return `
        <li class="preview">
            <a class="preview__link" href="#${res.id}">
            <figure class="preview__fig">
                <img src="${res.image}" alt="${res.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">The Pioneer Woman</p>
            </div>
            </a>
        </li
    `;
  }
}

export default new ResultsView();
