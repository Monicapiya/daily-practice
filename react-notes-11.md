A React application is made up of a number of nested components, resulting in a hierarchy that starts with a parent component and branches down at various levels.

When visualizing data and how it should flow in an application, it is logical and easier to imagine data flowing down from a parent to a child, like a waterfall. This is one of the reasons why React implements a top-down data flow architecture where data is stored and originates at a parent level and flows down components using props.

Many other web frameworks such as Angular feature two-way data binding, in which changes to the data model results in a change to the view and changes to the view automatically updates the data model. While this sounds like a great idea, it has the potential to pose challenges in keeping track of how updates actually happened and the predictability of the process. This is true especially for large applications where it may be impossibly tough to reason and predict data model mutations.

In React, View is a function of State. The state, in this case, is the single source of truth and all updates are a result of the state.

One Way or Top-Down Data Flow

The state is typically located at a parent level. This does not necessarily have to be the topmost parent or root component in the application hierarchy.  
But wherever the state is located, the data can only flow downwards to child components using props and therefore only children can access state. As a result, it can be observed that there is a cascading waterfall of data reservoirs or state that spill down to components using props.

This is what we call as one way or top-down data flow.

This architecture means that a child component does not need to know where the data is coming from or where in the hierarchy, is it stored. Additionally, there is no way for a child component to know if the parent is a stateful or stateless component. All that a child knows is that it receives data typically using props.

So, to sum up, the only way to update the view is to update the state and this data is passed using props to child components. And since we can predict that and the way data flows down one way through props, we can easily predict UI behavior as well.

How to send data back up the chain to a parent in a component?

What if a component wants to send data back up the chain to a parent? For instance, a form field component would like to send data back to the parent, to update a state variable. How do we do it?

In such cases, we can implement an inverse data flow by implementing callbacks in props to run functions on the parent component that update the state.

React makes it explicitly known if and when you want to send data back up the chain. The actual changes to state are still done by functions that reside at the parent, which makes the process abundantly legible and easy to understand.

Challenges With Props
Props allow parent components to pass data to child components. They’re easy to work with and simple to understand.

React strongly affirms a one-way data architecture that relies on the use of props for passing data down to children. It is also important to note here that the state must preferably reside at the nearest parent. This makes it easy to share this data with child components.
And by parent, it is meant a logical parent which makes it easy to store and share data between its children.

While this sounds like a simple idea, the real problem begins when we have a deeply nested application.

Architecting data flow in a deeply nested application can be quite the challenge. And we’re not talking about using a state management solution like Redux here, but instead, we’re talking about React’s core architecture and data flow using props.

Prop Drilling

Prop Drilling, commonly known as 'threading', refers to the process that one has to go through to get data to parts of a React Component tree. 



Prop drilling is used to pass data from a component which is higher up in the component hierarchy, to a child component which is located further down. In small applications that aren't large enough to warrant a third-party state management solution or context, states at different levels of the component hierarchy can be accessed.



We must find a better technique for sharing globally present data with nested components. Now, one can reduce prop drilling to an extent by using patterns like render props and designing reusable components and basically redesigning the composition tree. But even then, the challenge associated with efficiently providing data from a parent that is high up the chain, to a component that sits deeply nested within, needs to be addressed.  

