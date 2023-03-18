import View from './View';
import PreviewView from './previewView';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _successMessage = '';
}

export default new ResultsView();
