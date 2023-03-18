import View from './View';
import PreviewView from './previewView';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _successMessage = '';

  addHnadlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new BookmarksView();
