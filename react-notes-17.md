The useState Hook
Introduction to useState hook

We’ve established the fact that function components, when compared to class components offer a cleaner syntax that is easier to read, understand and debug.
Function components do not offer standard React features like state, side effects, and context.

For instance, state is a fundamental React feature and while class components offer built-in state features, a function component lacks the ability to offer stateful properties.  
With the Hooks API, we can easily plug in state to a function component by using the useState hook.

useState Hook: Usage

The useState hook function is amazingly simple to use and offers a straightforward way to add stateful properties to a function component.

useState hook basically declares a state variable which is a way to store some values between function calls. The useState hook has the exact same capabilities that this.state provides in a class. Typically, when the function ends, the variable disappears, but the state variables are preserved by React.

Side Effects Using the useEffect Hook
Introduction

One of the core features of a class component is lifecycle methods which allow you to run side effects. A class component typically features three major lifecycle methods.

componentDidMount method
componentDidUpdate method
componentWillUnmount method
The componentDidMount method is run synchronously once when the component is mounted into the DOM and is the perfect place to fetch initial data from a data source such as an API.

Thereafter, whenever the component updates, the componentDidUpdate lifecycle function which also runs synchronously, can be used to run side effects and bring updated data based on a query for instance.
When side effects that require cleanup are implemented such as a timer or subscription-based services, the componentWillUnmount lifecycle function can be used to remove the subscription or purge the timer instance.
Traditionally, if a function component needed to implement side effects, the only way was either to turn it into a class component or encapsulate it in a class component that implements side effects for fetching and providing data.
Quite simply, the useEffect hook will run after every single render of the function component, when the DOM update is complete.  

This makes it really easy to understand.  

Hooks are very different from lifecycle methods. While the functionality that they provide seems similar, they’re not exactly lifecycle methods but rather an amalgamation of functionality that may resemble componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle features. 

One of the key differences here is that useEffect runs after every render asynchronously and without blocking the render. On the other hand, in class components, the componentDidMount and componentDidUpdate lifecycle methods run synchronously.  

Having said that, when trying to wrap your head around the useEffect hook, it is best not to compare or correlate the useEffect hook with lifecycle methods in a class component. 

This is because, unlike lifecycle methods that run at specific times during the life of a component, the useEffect hook runs every time a component renders or updates.  

This also means that the DOM has updated by the time useEffect runs.

So, it is better to think of the useEffect hook as a way to synchronize an effect with dependencies.

For instance, this instance of the useEffect will run every single time a component renders. If this effect updates a state variable as you can see in this code example, then this becomes a runaway side effect which never stops, causing the browser to hang up.