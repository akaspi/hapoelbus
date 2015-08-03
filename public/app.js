requirejs.config({
    baseUrl: "src",
    paths: {
      react: "//fb.me/react-with-addons-0.12.2",
      lodash: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.0/lodash.min",
      firebase: "https://cdn.firebase.com/js/client/2.2.8/firebase"
    },
    shim: {
      react: { exports: 'React' },
      lodash: { exports: '_' },
      firebase: { exports: 'Firebase' }
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react', 'components/app/main'], function(React, main) {
  var element = React.createElement(main);
  React.render(element, document.getElementById('view'));
});
