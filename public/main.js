requirejs.config({
    baseUrl: "src",
    paths: {
      react: "https://fb.me/react-0.13.3",
      lodash: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.0/lodash.min",
      firebase: "https://cdn.firebase.com/js/client/2.2.8/firebase"
    },
    shim: {
      react: { exports: 'React' },
      lodash: { exports: '_' },
      firebase: { exports: 'Firebase' }
    }
});

requirejs(['react', 'components/helloWorld'], function(React, HelloWorld) {
  var element = React.createElement(HelloWorld);
  React.render(element, document.getElementById('view'));
});
