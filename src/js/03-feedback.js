import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let unfinishedFeedback = {};

formEl.addEventListener(
  'input',
  throttle(e => {
    unfinishedFeedback[e.target.name] = e.target.value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(unfinishedFeedback)
    );
  }, 500)
);

formEl.addEventListener('submit', e => {
  e.preventDefault();

  console.log(unfinishedFeedback);

  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
});

function recallFeedback(evt) {
  evt = localStorage.getItem('feedback-form-state');
  if (!evt) {
    return;
  }

  unfinishedFeedback = JSON.parse(evt);

  Object.entries(unfinishedFeedback).forEach(([name, value]) => {
    formEl.elements[name].value = value;
  });
}

recallFeedback();
