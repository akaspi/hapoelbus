requirejs.config({
    baseUrl: "src",
    paths: {
      react: "https://fb.me/react-0.13.3",
      lodash: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.0/lodash.min"
    },
    shim: {
      react: { exports: 'React' },
      lodash: { exports: '_' }
    }
});

requirejs(['react', 'components/helloWorld', 'lodash'], function(React, HelloWorld, _) {
  var element = React.createElement(HelloWorld);
  React.render(element, document.getElementById('view'));
});
