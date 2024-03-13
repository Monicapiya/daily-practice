render prop pattern can be used to write reusable & shared component logic.
Render Props 

Render props refers to a pattern for building reusable components that allow us to share logic and state between components. Render prop is in actual a pattern and not a React feature per se.
The behavior, logic and even state for a given feature could be hived off into a reusable unit.

Let's have a look at a basic example to understand render props in a better manner.
The render prop can then be used as a function where we get this fetched rate and then implement our own render logic.
a component that implements a render prop, can be composed with other functions to enhance or add abilities. After all, we’re just getting data in the render prop function. We can use it to render another component that further augments its abilities before ultimately rendering something using its own render prop. 

This way, we can declaratively compose logic together, which is a very powerful ability.
Another way to implement render props is to use the children prop which provides React components with access to components that are enclosed within a pair of opening and closing component instances.  

Render props are used extensively by several community-built React components and packages, such as React Router & Reach Router, Downshift and many more.

Higher Order Components

A Higher Order Component (HOC) is a pattern for abstracting and reusing logic across multiple components. The genesis of this pattern in React is credited to higher-order functions, a fundamental programming pattern is quite common. 

Functions in JavaScript are first-class objects, which means that they can be passed as an argument to a function and even returned from a function. Callback functions, for instance, are great examples of first-class objects because they’re passed as arguments and returned from the function as well.  

Functional Programming and Higher Order Functions

A higher order function is a function that accepts another function as an argument. A Map function is an example of a higher order function. 

The concept of higher order functions has been derived from functional programming, with the goal to decompose a logic into smaller and simpler reusable functions. This way, side effects can be avoided and debugging becomes easier. 

Ref: https://medium.com/@soorajchandran/introduction-to-higher-order-components-hoc-in-react-383c9343a3aa

Higher Order Components

In React, HOC is a technique for reusing component logic. They are not a part of the React API, but it is a pattern that has evolved from the compositional nature (made of components) of React.

HOCs are common in third-party React libraries, such as Redux’s connect and Relay’s createFragmentContainer. 

Ref: https://reactjs.org/docs/higher-order-components.html 

Higher-order components should never be created inside the render method.

HOC should never be created inside the render method. Not only does it affect the performance but it also kills any internal state that the higher order component may have been maintaining on every re-render of the component, which is never desirable. 

Creating the higher-order component outside the render method will create a single and consistent instance of the component that maintains state and children as desired.

Why HOC?

HOC decrease the code redundancy and helps in organizing the codebase in a better manner.

A HOC does not make any modifications in the input component, nor does it use inheritance to copy its behavior. Instead, a HOC comprises of the original component by wrapping it in a container component. It is a pure function with no side-effects at all. 

HOCs add features to a component. The component that returns from a HOC is expected to have a similar interface to the wrapped component. 

The higher order component pattern is extensively used. Both Redux and React or Reach Router packages use this pattern for integration.  

Ref: https://medium.com/@soorajchandran/introduction-to-higher-order-components-hoc-in-react-383c9343a3aa
Ref: https://reactjs.org/docs/higher-order-components.html 