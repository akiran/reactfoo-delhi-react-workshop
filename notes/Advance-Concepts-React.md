## Amazing features offered by React 16

---

### Topics

- [Higher Order Component](#higher-order-component)
- [Render Props](#render-props)
- [React Portals](#react-portals)
- [Error Boundaries](#error-boundaries)
- [React Fragments](#react-fragments)

---

### Higher Order Components

- A higher-order component is a function that takes a component as an argument and returns a new component
- HOC allows you to extract redundant code into a layer of higher order

---

Example

```Javascript
import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
 class HOC extends React.Component {
   render() {
     return <WrappedComponent />;
   }
 }

 return HOC;
};
```

---

But what exaclty I can do with HOCs?

---

### Uses of HOC

- Wraps an element or a component around a component
- State Abstraction
- Props Manipulation
- Props Validation
  - https://codepen.io/arwaJLokhandwala/pen/EpBveO?editors=1010

---

### Problems that HOC solves

  - You can use it with ES6 
  - It supports the single responsibility principle by allowing individual HOC to handle one responsibility which is being used by other components
  - You can apply multiple HOCs to one component (use compose from 'recompse')

---

### Drawbacks of HOC

 - Lot of bolierplate code
 - Indirection, as we don't know which HOC is passing which prop
 - No way to guarantee 2 HOCs are not passing the same prop & how to avoid overriding of values in such case
 - Debuggingg becomes very difficult in case of multiple HOCs

 How can we solve it?

---

Here comes Render Props pattern to your rescue !!

---

### Render Props(RP)

- A RP is simply a prop that takes function which returns elements that will be used in render()
- You can also pass an element directly into the prop but thats not RP pattern

Lets see an example

---

Example

```Javascript

const List = props => {
  //fetch the data
  const data = fetch('myjson.com/getdata')

  props.render(data)
  }

const ListItem = props => <li> {props.text} </li>

const HighlightItem = props => <li style={{background: 'red'}}>{prop.text}</li>

const FinalItem = props => {
  return <List render={(data) => {
    <HighlightItem text="MacBook"/>
      {data.map(item => {
        return <ListItem text={item} />
      })}
  }}/>
            
ReactDOM.render(<FinalItem/>, documeent.getElementById('root'))
}
```

---

### Advantages

- No additional boilerplate code
- No worries about indirection as we know what data is being passed
- No overriding of the props

---

### React Portals

> Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

Note: Previously it was only possible to render child component within its parent node, example : ReactDOM.render(<App/>, document.getElementById('root')), in this example all of our react components are rendered only with this _root_ id _div_ element.

[Go to Index](#topics)

---

### How to create a portal?

Before Portals

```Javascript
render() {

children into it

 return (

   <div>

     {this.props.children}

   </div>

 );

}
```

[Go to Index](#topics)

---

After Portals

```Javascript
render() {

 return ReactDOM.createPortal(

   this.props.children,

   myNode,

 );

}
```

[Go to Index](#topics)

---

### Why do we need React Portal?

- Modals (_global dialog messages, tooltips, hovercards_)
- Legacy application

[Go to Index](#topics)

---

#### Example

https://codepen.io/arwaJLokhandwala/pen/vawjjN

[Go to Index](#topics)

---

#### Event Bubbling through Portals

An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree.

[Go to Index](#topics)

---

### Error Boundaries

- Provides a better way of handling all the cryptic errors
- A component is considered as an error boundary component when it implements _componentDidCatch(error, info)_

---

Without Error Boundary

https://codepen.io/arwaJLokhandwala/pen/KBjgOo

---

With Error Boundary

https://codepen.io/arwaJLokhandwala/pen/KBjgOo?editors=0011

---

### React Fragments

Allows you to group a list of children without adding additional DOM nodes

```Javascript
class Details extends React.Component {
  render() {
    return <React.Fragment>
        <div> My name is Arwa </div>
        <div> I am from Mumbai </div>
    </React.Fragment>
  }
}
```

