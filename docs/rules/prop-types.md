# Prevent missing props validation in a React component definition (prop-types)

PropTypes improve the reusability of your component by validating the received data.

It can warn other developers if they make a mistake while reusing the component with improper data type.

## Rule Details

The following patterns are considered warnings:

```js
var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var Hello = React.createClass({
  propTypes: {
    firstname: React.PropTypes.string.isRequired
  },
  render: function() {
    return <div>Hello {this.props.firstname} {this.props.lastname}</div>; // lastname type is not defined in propTypes
  }
});
```

The following patterns are not considered warnings:

```js
var Hello = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});

var Hello = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

// Referencing an external object disable the rule for the component
var Hello = React.createClass({
  propTypes: myPropTypes,
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
```
