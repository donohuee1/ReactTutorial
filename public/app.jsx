//component
//react.createClass is most common react method. Takes options object as its one and only argument.  Where we can define the behaviour of our component
var Greeter = React.createClass({
  //the only thing that's required of react component is a render method
  render: function () {
    return (
      <div>
        <h1>Hello React</h1>
        <p>This is from a component</p>
      </div>
    );
  }
});

//function we call and pass 2 arguments.  First is piece of jsx and the second our element, the app element
ReactDOM.render(
  // pass it someting to render (i.e. h1 tag)
  // <h1>Hello React!</h1>,
  <Greeter/>,
  //and location to render it. Our node.
  document.getElementById('app')
);
