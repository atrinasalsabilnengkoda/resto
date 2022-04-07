/* eslint-disable import/no-cycle */
import RestoSource from '../data/resto-source';
import Detail from '../views/pages/detail';

const ReviewInitiator = {
  init({
    id, name, review, form,
  }) {
    form.addEventListener('submit', (event) => {
      this._handleSubmit({
        id, name: name.value, review: review.value, event,
      });
    });
    window.addEventListener('load', () => {
      const status = document.getElementById('status');
      const log = document.getElementById('log');

      function updateOnlineStatus(event) {
        const condition = navigator.onLine ? 'online' : 'offline';

        status.className = condition;
        status.innerHTML = condition.toUpperCase();

        log.insertAdjacentHTML('beforeend', `Event: ${event.type}; Status: ${condition}`);
      }

      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    });
  },
  _validateInput({ name, review }) {
    if (name === '' || review === '') {
      return false;
    }
    return true;
  },
  async _handleSubmit({
    id, name, review, event,
  }) {
    event.preventDefault();
    if (this._validateInput({ name, review })) {
      const response = await RestoSource.addReview({
        id, name, review,
      });
      if (response === 200) {
        Detail.afterRender();
      }
    }
  },
};

export default ReviewInitiator;
