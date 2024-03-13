1. Components
   At the heart of React lies the concept of components. A component is a self-contained, reusable building block for your user interface. Think of components as individual pieces of your web application. These pieces can be simple, like a button, or complex, like an entire form. React components make it easy to break down your user interface into manageable, reusable parts.
   Defining and rendering components is straightforward in React. You can create functional components using JavaScript functions or class-based components.

2. JSX (JavaScript XML)
   JSX, or JavaScript XML, is a syntax extension for JavaScript used in React. It allows you to write HTML-like code within your JavaScript files, making it more readable and intuitive when defining UI components. JSX gets transpiled into JavaScript by tools like Babel before being rendered in the browser.

3. Virtual DOM
   One of React's key innovations is its use of a Virtual DOM (Document Object Model). When changes occur in your application, React calculates the most efficient way to update the actual DOM. Instead of making direct changes to the DOM, React updates the Virtual DOM first. Then, it compares the Virtual DOM with the real DOM and makes only the necessary changes. This approach significantly improves performance, especially in applications with complex UIs.
4. State
   State is a fundamental concept in React. It represents data that can change over time and affects a component's behavior and rendering. Understanding how to manage and update component state is essential for building dynamic user interfaces.
   Functional components can now handle state using React Hooks,you can use the useState hook to add state to a functional component
   Class components, on the other hand, use the setState method to manage state
5. Props (Properties)
Props, short for properties, allow you to pass data from parent to child components. They make your components reusable and customizable by allowing you to configure them with different data.

6. Lifecycle Methods
React components go through a series of lifecycle phases, such as mounting, updating, and unmounting. These phases allow you to control component behavior at different stages of its existence. While class-based components traditionally used lifecycle methods, functional components can now achieve similar functionality using React Hooks, like useEffect.
Here are a few common class-based lifecycle methods:
componentDidMount: Invoked after the component has been inserted into the DOM.
componentDidUpdate: Called after a component's state or props have changed.
componentWillUnmount: Triggered just before a component is removed from the DOM.
For example, you might use componentDidMount to fetch data from an API when a component is first rendered.

7. React Router
For single-page applications (SPAs), React Router is essential. It allows you to define and manage routes, ensuring a seamless navigation experience without full page reloads. React Router is a collection of navigational components that help you create client-side routing in your React application.

8. Hooks

They allow functional components to have state and lifecycle features previously only available in class components. Some commonly used hooks include:
useState: Adds state to functional components.
useEffect: Handles side effects and lifecycle methods.
useContext: Accesses the Context API within functional components.
useReducer: Manages state with a reducer function.
Hooks have simplified component logic and made it easier to reuse stateful logic across different components.