Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.

Props are immutable so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as this.props and can be used to render dynamic data in our render method.

When you need immutable data in the component, you have to add props to reactDom.render() method in the main.js file of your ReactJS project and used it inside the component in which you need.

React Hooks

Never call Hooks from inside a loop, condition or nested function
Hooks should sit at the top-level of your component
Only call Hooks from React functional components
Never call a Hook from a regular function
Hooks can call other Hooks


Rules of Hook
Below are the main rules of using React hooks…

1. Always call hooks at the top level. Do not call it inside loops, conditions, or nested functions. You will be ensured that hooks can be called in the same order each time component renders. 

2. Hooks can not be called from regular JavaScript functions. You can call it from React function components. One hook can call another hook. 

Hooks Effect
Hooks effect allows you to perform a side effect in function components. Hooks effect has no use of function components available in-class components. Hooks effects are similar to the lifecycle method componentDidMount(), componentDidUpdate(), and componentWillUnmount(). 

Hooks effect has the common features given below…

Updating the DOM
Fetching and Consuming data from server API
Setting up subscription