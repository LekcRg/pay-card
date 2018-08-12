const navBtn = $('#open-nav');

navBtn.click((ev) => {
  ev.preventDefault();
  if (navBtn.parent().hasClass('navigation--opened')) {
    $('.navigation__link').removeClass('navigation__link--show');

    setTimeout(() => {
      navBtn.parent().removeClass('navigation--opened');
    }, 300);
  } else {
    navBtn.parent().addClass('navigation--opened');

    setTimeout(() => {
      $('.navigation__link').addClass('navigation__link--show');
    }, 300);
  }
});
