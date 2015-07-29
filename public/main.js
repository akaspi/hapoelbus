requirejs.config({
    baseUrl: "src",
    paths: {
      "react": "https://fb.me/react-0.13.3.min",
      "JSXTransformer": "https://fb.me/JSXTransformer-0.13.3"
    }
});

requirejs(['react', 'components/helloWorld'], function(React, HelloWorld) {
  React.render(
    <HelloWorld />,
    document.getElementById('view')
  );
});
