The Context API

Implementing React’s top-down data flow architecture using props can often lead to a situation where one has several forwarding props that simply carry data for deeply nested components. Such props must be built across all intermediary components in the hierarchy. 

As the application evolves and more features and components are added, these forwarding props would only increase, leading to logistical and debugging nightmares. This is where a need to share global data with any number of child components without the need to explicitly pass the data through props comes into being. 

React offers us a plethora of solutions, ranging from better composition strategies to using render props, a better abstraction of components and even global state management using a solution like Redux. 

One feature which stands out is the Context API.

Context API

Context API offers an amazing way to share globally available data with child components without the need for implementing props. In simple words, it allows us to share data with child components without needing any props at all.

When to Use Context

Context API is used then when there is a need to share data that can be considered 'global' for a tree of React components. With the help of Context API, we can avoid passing props through intermediate elements.

API

React.createContext

React.createContext creates a context object. When React renders a component that subscribes to this context object, then it will read the current context value from the closest matching Provider above it in the tree.

Context.Provider

Context Objects some with a Provider React component, which allows the consumption of components to subscribe to context changes.

It accepts a value prop that has to be passed to consuming components that are descendants of Provider. One Provider can connect to many consumers. they can be nested to override values deeper within the tree.

Class.contextType

A Context object created by React.createContext() can be assigned to the contextType property on a class. This lets us consume the nearest current value of that Context type using this.context, and can be referenced in any of the lifecycle methods including the render function.  

Context.Consumer

Context.Consumer is a React component that subscribes to context changes and lets you subscribe to a context within a function component.

Context.displayName

The Context object accepts a displayName string property. React DevTools uses this sting to determine what has to be displayed for the context.