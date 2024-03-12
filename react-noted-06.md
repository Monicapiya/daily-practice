Side Effects & Lifecycle

Side Effects in a Class Component

There are two kinds of side effects:

Side effects that require a cleanup such as using timers or even web socket-based subscription services where you have to unsubscribe when the component is unmounted. 
Side effects that don't require a cleanup such as fetching data from an API using an HTTP request
Side Effects that do not Require a Cleanup

Side effects that do not require a cleanup involve placing a network request to an API or a service, to fetch data that we wish to display in our React application.   

This kind of side effect does not involve a persistent network connection such as the ones using web sockets or subscriptions. Our app sends an HTTP request to an endpoint (API), as depicted in Fig 5.4. And the API service responds back with the result, as depicted in Fig 5.5, typically as a JSON object which we can then consume in our React application.

Therefore, after performing the side effect, we don’t need to perform cleanups to prevent memory leaks.


Side Effects that Require a Cleanup

In the case where side effects require a cleanup, we subscribe to a service or a function when our Application or Component mounts. When our component unmounts, however, we need to unsubscribe from this data channel to prevent potential memory leaks.   

Handling both kinds of side effects is relatively simple.

Implementing Side Effects

How do we implement side effects which do not require any cleanup, such as fetching data from an external API?
There are two places where we can perform such side effects in a class component.

componentDidMount() function
–
The componentDidMount() function is the most obvious lifecycle method which allows us to perform side effects when the component is mounted for the first time. This way we can fetch the initial data to render.

componentDidUpdate() function
–
When our component is in the updating phase, such as when data in the props or state change, we can use the componentDidUpdate() method for implementing side effects.

Managing Cleanup

Side effects require cleanup once a component is unmounted and destroyed to prevent memory leaks and performance issues. 

React provides us with the ComponentWillUnmount() lifecycle method in class components, which can be easily used to unsubscribe from services, detach event listeners or remove timers.

Why Cleanup?

React performs a cleanup when a component unmounts. React components are re-rendered which might lead to performance issues.

Moreover, it is important to perform a clean up on a regular basis so that there is no memory leak.

Like class components, function components can also implement cleanup mechanisms in a similar manner by using Hooks API.