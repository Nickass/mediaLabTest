$(function () {
  $('.tabs').each(function(){
    var self = $(this);
    var nav = self.find('.tabs__nav');
    var links = nav.find('.tabs__link');
    var pages = self.find('.tabs__page');

    $('.tabs__link').on('click', function (e) {
      var target = this.hash;
      var targetElement = $(target);
      var self = $(this);
      var isOpen = targetElement.is('.tabs__page--open') && self.is('.tabs__link--active');
      var siblingNavItems = links.not(self);
      var siblingPages = pages.not(targetElement);

      e.preventDefault();

      if(isOpen) {
        $(target).removeClass('tabs__page--open');
        $(this).removeClass('tabs__link--active');
      } else{
        $(target).addClass('tabs__page--open');
        $(this).addClass('tabs__link--active');

        siblingNavItems.removeClass('tabs__link--active');
        siblingPages.removeClass('tabs__page--open');
      }
    })
  });
});

$(function() {
  $('.range').ionRangeSlider();
  $('.select').niceSelect();
});

$(function() {
  $('.lodging__dd-toggler').on('click', function(e) {
    e.preventDefault();
    $(this.hash).slideToggle();
  });
})
$(function () {
  $('.dd-toggler').each(function() {
    var self = $(this);
    var target = self.attr('href') ? self.attr('href').substring(self.attr('href').indexOf('#')) : 
                self.data('target') ? self.data('target') : null;

    if(!target) return;

    var targetList = $(target);
    var commonparent = $(self).parent().has(targetList).first();

    function blurHandler(e) {
      if($(e.target).is(targetList) || 
        $(e.target).closest(self).length !== 0 ||
        $(e.target).closest(targetList).length !== 0 ||
        $(e.target).is(self) ) return;
      else closeDd();
    }

    function closeDd() {
      self.removeClass('active');
      targetList.slideUp(200, function() {
        targetList.removeClass('opened');
        commonparent.removeClass('active-parent');
      });
      $(document).off('click', blurHandler)
    }

    function openDd() {
      self.addClass('active');
      targetList.slideDown(200);
      targetList.addClass('opened');
      commonparent.addClass('active-parent');
      $(document).on('click', blurHandler)
    }

    if(self.is('.active')) {
      $(document).on('click', blurHandler);
      openDd();
    }
    self.on('click', function(e) {
      e.preventDefault();
      if(targetList.is('.opened')) closeDd();
      else openDd();
    });
  });
});