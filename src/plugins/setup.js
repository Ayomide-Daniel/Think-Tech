try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
    require('bootstrap/dist/css/bootstrap.min.css');
    require('bootstrap-icons/font/bootstrap-icons.css');

} catch (e) { console.error(e); }