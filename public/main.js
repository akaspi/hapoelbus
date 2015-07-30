requirejs.config({
    baseUrl: "src",
    paths: {
      react: "https://fb.me/react-0.13.3",
      JSXTransformer: "https://fb.me/JSXTransformer-0.13.3"
    }
});

requirejs(['react', 'components/helloWorld'], function(React, HelloWorld) {
  var element = React.createElement(HelloWorld);
  React.render(element, document.getElementById('view'));
});
