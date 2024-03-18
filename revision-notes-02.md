What are React Hooks?
 React Hooks are a feature in React that allows developers to use state and other React features without writing a class component. Hooks are functions that let developers "hook into" the React state and lifecycle methods from a functional component.
useState
useState lets you use local state within a function component. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

Declare state variable
Declaring a state variable is as simple as calling useState with some initial state value, like so: useState(initialStateValue).

React useState and setState don’t make changes directly to the state object; they create queues to optimize performance, which is why the changes don’t update immediately.

The main difference between a class component and a functional component with hooks is that a class component uses a "this" keyword to access its properties and methods, while a functional component uses function arguments and hooks. In a class component, state and lifecycle methods are declared inside the class, while in a functional component with hooks, state and lifecycle methods are declared using hooks.

The useEffect() hook is a function that is called after every render of a functional component. The useEffect() hook is used to handle side effects, such as updating the document title, fetching data from an API, or subscribing to a WebSocket. 

The useContext() hook is a function that allows developers to pass data through the component tree without having to pass props down manually at every level. The useContext() hook is used to consume a context that has been created by a parent component.

The useReducer() hook is used for managing complex state logic in React applications. It is an alternative to the useState() hook and is generally used when the state has multiple sub-values, or when the next state depends on the previous state. It accepts a reducer function and an initial state, and returns the current state and a dispatch function to update the state. 

The useCallback() hook is used to optimize performance in React applications by memoizing a function so that it's not recreated on every render, unless its dependencies change. It's commonly used to prevent unnecessary re-renders of child components that receive a function prop.

The useMemo() hook is used to memoize expensive computations in React applications so that they're not unnecessarily recalculated on every render. It takes a function and an array of dependencies as arguments, and returns a memoized value.

A custom hook is a reusable function that contains some stateful logic and can be used across multiple components in a React application. Custom hooks are created by defining a function that uses one or more of the existing built-in hooks, or even other custom hooks. To create a custom hook, simply define a function starting with the "use" prefix, and use the built-in hooks inside it.

