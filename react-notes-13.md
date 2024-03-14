With React Hooks, we can use state, and other React features, in a functional component. It empowers devs to do functional programming in React.

Class based components were able to use React’s lifecycle and state. Aside from enabling Function components to do this, Hooks make it incredibly easy to reuse stateful logic between components.

React Hooks allows Function components to “hook” into the React state and lifecycle

We are using two Hooks here; useState and useEffect. One tells React to store some state for us. While the other tells React to call us during the render lifecycle.

When our component gets rendered, we tell React that we want to store something in the state by calling useState(<VARIABLE>). React gives us back [ stateVariable, setStateVariable ], where stateVariable is the current value of this variable in the state. And setStateVariable is a function that we can call to set the new value of this variable.

Next we the useEffect Hook. We pass in a function that we want React to run every time our component gets rendered or updated. This function can also return a function that’ll get called when our component needs to cleanup the old render. So if React renders our component, and we call setStateVariable at some point, React will need to re-render it.

React Hooks Mental Model
So when you are thinking about Function components with Hooks, they are very simple in that they are rerun every time. As you are looking at your code, imagine that it is run in order every single time. And since there is no local state for your functions, the values available are only what React has stored in its state.

As opposed to Class components, where specific methods in your class are called upon render. Additionally, you might have stored some state locally in a state variable. This means that as you are debugging your code, you have to keep in mind what the current value of a local state variable is.

This slight difference in local state can introduce some very subtle bugs in the Class component version that is worth understanding in detail.

Function components have a more straightforward execution model.
