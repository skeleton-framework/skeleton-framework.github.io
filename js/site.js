/* jshint asi:true */
$(document).ready(function () {

    var customForm = new Vue({
        created: function () {
            var byKey = this._byKey = {}

            this.builds.forEach(function (b) {
                let key = b.name.split('.')[0].split('-')
                console.log()

                byKey[key.sort().join('.')] = b.path
            })
        },

        computed: {
        },

        methods: {
            getBuild: function () {
                let keys = []

                for (let key in this.buildOpts) {
                    if (this.buildOpts[key])
                        keys.push(key)
                }

                let lookupKey = keys.sort().join('.')
                let downloadPath = this._byKey[lookupKey]

                console.log(`builds by key has path: ${downloadPath} for key: ${lookupKey}`)

                window.location = downloadPath

            },
        },

        data: {
            buildOpts: {
                grid: false,
                typo: false,
                util: false,
                content: false,
                buttons: false,
                forms: false
            },

            builds: [
                {
                    name: "buttons-forms-grid.css",
                    path: "/builds/buttons-forms-grid.css"
                },
                {
                    name: "buttons-forms-typo-grid.css",
                    path: "/builds/buttons-forms-typo-grid.css"
                },
                {
                    name: "buttons-forms-typo.css",
                    path: "/builds/buttons-forms-typo.css"
                },
                {
                    name: "buttons-forms.css",
                    path: "/builds/buttons-forms.css"
                },
                {
                    name: "buttons-grid.css",
                    path: "/builds/buttons-grid.css"
                },
                {
                    name: "buttons-typo-grid.css",
                    path: "/builds/buttons-typo-grid.css"
                },
                {
                    name: "buttons-typo.css",
                    path: "/builds/buttons-typo.css"
                },
                {
                    name: "buttons.css",
                    path: "/builds/buttons.css"
                },
                {
                    name: "content-buttons-forms-grid.css",
                    path: "/builds/content-buttons-forms-grid.css"
                },
                {
                    name: "content-buttons-forms-typo-grid.css",
                    path: "/builds/content-buttons-forms-typo-grid.css"
                },
                {
                    name: "content-buttons-forms-typo.css",
                    path: "/builds/content-buttons-forms-typo.css"
                },
                {
                    name: "content-buttons-forms.css",
                    path: "/builds/content-buttons-forms.css"
                },
                {
                    name: "content-buttons-grid.css",
                    path: "/builds/content-buttons-grid.css"
                },
                {
                    name: "content-buttons-typo-grid.css",
                    path: "/builds/content-buttons-typo-grid.css"
                },
                {
                    name: "content-buttons-typo.css",
                    path: "/builds/content-buttons-typo.css"
                },
                {
                    name: "content-buttons.css",
                    path: "/builds/content-buttons.css"
                },
                {
                    name: "content-forms-grid.css",
                    path: "/builds/content-forms-grid.css"
                },
                {
                    name: "content-forms-typo-grid.css",
                    path: "/builds/content-forms-typo-grid.css"
                },
                {
                    name: "content-forms-typo.css",
                    path: "/builds/content-forms-typo.css"
                },
                {
                    name: "content-forms.css",
                    path: "/builds/content-forms.css"
                },
                {
                    name: "content-grid.css",
                    path: "/builds/content-grid.css"
                },
                {
                    name: "content-typo-grid.css",
                    path: "/builds/content-typo-grid.css"
                },
                {
                    name: "content-typo.css",
                    path: "/builds/content-typo.css"
                },
                {
                    name: "content-util-buttons-forms-grid.css",
                    path: "/builds/content-util-buttons-forms-grid.css"
                },
                {
                    name: "content-util-buttons-forms-typo-grid.css",
                    path: "/builds/content-util-buttons-forms-typo-grid.css"
                },
                {
                    name: "content-util-buttons-forms-typo.css",
                    path: "/builds/content-util-buttons-forms-typo.css"
                },
                {
                    name: "content-util-buttons-forms.css",
                    path: "/builds/content-util-buttons-forms.css"
                },
                {
                    name: "content-util-buttons-grid.css",
                    path: "/builds/content-util-buttons-grid.css"
                },
                {
                    name: "content-util-buttons-typo-grid.css",
                    path: "/builds/content-util-buttons-typo-grid.css"
                },
                {
                    name: "content-util-buttons-typo.css",
                    path: "/builds/content-util-buttons-typo.css"
                },
                {
                    name: "content-util-buttons.css",
                    path: "/builds/content-util-buttons.css"
                },
                {
                    name: "content-util-forms-grid.css",
                    path: "/builds/content-util-forms-grid.css"
                },
                {
                    name: "content-util-forms-typo-grid.css",
                    path: "/builds/content-util-forms-typo-grid.css"
                },
                {
                    name: "content-util-forms-typo.css",
                    path: "/builds/content-util-forms-typo.css"
                },
                {
                    name: "content-util-forms.css",
                    path: "/builds/content-util-forms.css"
                },
                {
                    name: "content-util-grid.css",
                    path: "/builds/content-util-grid.css"
                },
                {
                    name: "content-util-typo-grid.css",
                    path: "/builds/content-util-typo-grid.css"
                },
                {
                    name: "content-util-typo.css",
                    path: "/builds/content-util-typo.css"
                },
                {
                    name: "content-util.css",
                    path: "/builds/content-util.css"
                },
                {
                    name: "content.css",
                    path: "/builds/content.css"
                },
                {
                    name: "forms-grid.css",
                    path: "/builds/forms-grid.css"
                },
                {
                    name: "forms-typo-grid.css",
                    path: "/builds/forms-typo-grid.css"
                },
                {
                    name: "forms-typo.css",
                    path: "/builds/forms-typo.css"
                },
                {
                    name: "forms.css",
                    path: "/builds/forms.css"
                },
                {
                    name: "grid.css",
                    path: "/builds/grid.css"
                },
                {
                    name: "typo-grid.css",
                    path: "/builds/typo-grid.css"
                },
                {
                    name: "typo.css",
                    path: "/builds/typo.css"
                },
                {
                    name: "util-buttons-forms-grid.css",
                    path: "/builds/util-buttons-forms-grid.css"
                },
                {
                    name: "util-buttons-forms-typo-grid.css",
                    path: "/builds/util-buttons-forms-typo-grid.css"
                },
                {
                    name: "util-buttons-forms-typo.css",
                    path: "/builds/util-buttons-forms-typo.css"
                },
                {
                    name: "util-buttons-forms.css",
                    path: "/builds/util-buttons-forms.css"
                },
                {
                    name: "util-buttons-grid.css",
                    path: "/builds/util-buttons-grid.css"
                },
                {
                    name: "util-buttons-typo-grid.css",
                    path: "/builds/util-buttons-typo-grid.css"
                },
                {
                    name: "util-buttons-typo.css",
                    path: "/builds/util-buttons-typo.css"
                },
                {
                    name: "util-buttons.css",
                    path: "/builds/util-buttons.css"
                },
                {
                    name: "util-forms-grid.css",
                    path: "/builds/util-forms-grid.css"
                },
                {
                    name: "util-forms-typo-grid.css",
                    path: "/builds/util-forms-typo-grid.css"
                },
                {
                    name: "util-forms-typo.css",
                    path: "/builds/util-forms-typo.css"
                },
                {
                    name: "util-forms.css",
                    path: "/builds/util-forms.css"
                },
                {
                    name: "util-grid.css",
                    path: "/builds/util-grid.css"
                },
                {
                    name: "util-typo-grid.css",
                    path: "/builds/util-typo-grid.css"
                },
                {
                    name: "util-typo.css",
                    path: "/builds/util-typo.css"
                },
                {
                    name: "util.css",
                    path: "/builds/util.css"
                },
            ]
        },
    });

    customForm.$mount("#custom-build-form");


  // Variables
  var $codeSnippets = $('.code-example-body'),
    $nav = $('.navbar'),
    $body = $('body'),
    $window = $(window),
    $popoverLink = $('[data-popover]'),
    navOffsetTop = $nav.offset().top,
    $document = $(document),
    entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
    }

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
    $('a[href^="#"]').on('click', smoothScroll)
    buildSnippets();
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 40
    }, 0, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if ($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#button").click(function () {
    $('html, body').animate({
      scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
  });

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if (navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if (navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function () {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});
