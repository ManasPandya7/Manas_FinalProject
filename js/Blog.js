const readMoreButtons = $('.read-more');

readMoreButtons.each(i => {
  readMoreButtons[i].addEventListener('click', () => {
    const modalId = readMoreButtons[i].dataset.modal;
    const modal = $("#" + modalId);
    modal.show();
  });
});

const closeModalButtons = $('.close-modal');

closeModalButtons.each(i => {
  closeModalButtons[i].addEventListener('click', () => {
    const modalId = closeModalButtons[i].dataset.modal;
    const modal = $("#" + modalId);
    modal.hide();
  });
});
