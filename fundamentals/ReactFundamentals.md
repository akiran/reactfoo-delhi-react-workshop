## Fundmentals of React

---

### Topics

- [JSX](#jsx)
- [Props](#props)
- [State](#state)
- [State vs Props](#state-vs-props)

---

https://codepen.io/arwaJLokhandwala/pen/PBLewW?editors=1010

---

### JSX

- All React Components have **render** function which specifies what the HTML output of our component will be.
- **Javascript eXtension/** or **JSX** is templating language for react that allows us to write javascript that looks like HTML.

[Go to Index](#topics)

---

```Javascript
class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className='large'>Hello World</h1>
    );
  }
}
```

[Go to Index](#topics)

---

```Javascript
class HelloWorld extends React.Component {
  render() {
    return (
      React.createElement(
        'h1',
        {className: 'large'},
        'Hello World'
      )
    );
  }
}
```

[Go to Index](#topics)

---

> Visit this link to see live transpilation using Babel

https://babeljs.io/en/repl

[Go to Index](#topics)

---

### Gotchas while working with JSX

> Some common points which you should keep in mind while working with JSX

[Go to Index](#topics)

---

_User-Defined Components Must Be Capitalized_

[Go to Index](#topics)

Note: Lowercase letter denotes built-in components like 'div' or 'span'

---

_Attribute class is replaced with className & other attributes like onclick, onchange replaced with camelCase form like onClick & onChange respectively_

[Go to Index](#topics)

---

_While evaluating component name using expression, assign expression to capitalized variable and then use it inside **render()**_

[Go to Index](#topics)

---

Wrong

```Javascript
import React from 'react';
import { ShowText, VideoStory } from './stories';

const components = {
  text: ShowText,
  image: ShowImage
};

function Message(props) {
  // Wrong! JSX type can't be an expression.
  return <components[props.messageType] message={props.message} />;
}
```

[Go to Index](#topics)

---

Right

```Javascript
import React from 'react';
import { ShowText, VideoStory } from './stories';

const components = {
  text: ShowText,
  image: ShowImage
};

function Message(props) {
  // Correct! JSX type can be a capitalized variable.
  const DisplayMessage = components[props.messageType]
  return <DisplayMessage message={props.message} />;
}
```

[Go to Index](#topics)

---

### Props

- Props which is short for **properties**
- Allows us to pass custom data to React Components
- Use camelCase format

[Go to Index](#topics)

---

### Usage

- Accessible using **this.props.[propName]** in case of Stateful Components
- Accessible using **props.[propName]** in case of Stateless Components

[Go to Index](#topics)

Note: Let us see few examples depicting usage of props

---

Example 1: Stateful Components

```Javascript
class Element extends React.Component {

    // Component's constructor
    constructor(props) {

        // Required to call original constructor
        super(props);

        // Props are now accessible from here
        var v = props.reactProp;
    }

    // This is called when ReactDOM.render is called on <Element />
    render() {

        // And from here
        return (<div>{this.props.reactProp}</div>)
    }

}
```

[Go to Index](#topics)

---

Example 2: Stateless Components

```Javascript
const Element = (props) => <div> { props.reactProp } </div>
```

[Go to Index](#topics)

---

Example 3: Passing multiple props by using Spread operator

```Javascript
  const DisplayDetails = (props) => {
    return <div> My name is {props.firstName} {props.lastName}, I live in {props.city}. Nice to meet you!! </div>
  }
  const userDetails = {
    firstName: 'Arwa',
    lastName: 'Lokhandwala',
    city: 'Mumbai'
  }

  ReactDOM.render(<DisplayDetails {...userDetails}/>,document.getElementById("root"))
```

https://codepen.io/arwaJLokhandwala/pen/YjgReo

[Go to Index](#topics)

---

### State

- It controls the behaviour of a React Component

- Minimum number of stateful components

- Change the state using the setState()

- Every setState() call causes to re-render again the render()

- https://codepen.io/arwaJLokhandwala/pen/PBLewW?editors=1010

[Go to Index](#topics)

---

### State vs Props

- Props are immutable, while State is observable

- State can only be used in class components, Props have no such limitation

- Props are set by the parent component while State is generally updated by event handlers

[Go to Index](#topics)

Note: Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
