Lifecycle of Components

Mounting phase

The Mounting phase begins when a React component instance is created and ends when it is inserted into the DOM.

Once the component is rendered into the DOM, the component goes through the next phase where there are changes to state or props.

Mounting Phase

The Mounting Phase occurs when a React component instance is created and inserted into the DOM. React has four built-in methods that get called in the order given below when mounting a component:

constructor() Method
–
The constructor is called before the component is mounted into the DOM. The typical use of a constructor is to initialize local state variables and bind class methods. This is the only lifecycle method where one can initialize state using this.state, as all other lifecycle class methods use this.setState().
Constructors should only be used for initializing state and binding methods since they’re called in the render phase where nothing has gone into the DOM.

getDerivedStateFromProps() Method
–
The getDerivedStateFromProps() method is a rare lifecycle method which is used only in very special cases.  
This lifecycle hook is used in both the mounting and updating phases and allows us to perform state changes on the basis of data in the props.



Remember,  getDerivedStateFromProps() method is invoked every time a parent component re-renders.

render() Method
–
The render method specifically is needed only if we’re building class components and its purpose is to return React elements. This is also the reason why the render method should stay pure, that is, must never modify the state and should always return the same, predictable result.  


componentDidMount() Method
–
Once the DOM insertion is complete, the componentDidMount() lifecycle method is immediately invoked. This is where we can perform API queries and other side effects which leads to setting the state.


Once the state is set, the component re-renders.

This finishes the initial ‘Mounting’ phase. Our component is now in the DOM as we move into the ‘Updating’ phase. 

Updating Phase

The ‘Updating’ phase occurs when we interact with the component and it re-renders. This interaction includes receiving updated data through props or an update to the state.
React has five built-in methods that is called in the order given below when a component is updated:

getDerivedStateFromProps() Method
–
Upon implementation, the getDerivedStateFromProps() method allows us to decide whether we want the state to be updated or not based on the changes made to the data in the props. In simple words, when getDerivedStateFromProps() method is called in the ‘Mounting’ phase, it can be used to set state variables based on the data in the props.

The next time the getDerivedStateFromProps() method is called in the ‘Updating’ phase, we can compare the data in the state with that in the props and we can update the state if needed.
This helps in the implementation of the state changes that will occur only if the data in the props differs from what it was earlier.

This is important to understand because every update to the parent component brings about an update to the child components, even if the data in the props continue to be the same.
If the data in the props continue to be the same as before, we may not want to update the state in a child component.


shouldComponentUpdate() Method
–
The shouldComponentUpdate() function lets us decide if we want the component to be re-rendered based on the changes made to the data in the state or props. As a result, DOM reconciliation can be prevented for components if no data has been in the props or state, thereby boosting performance.
This method works in such a manner that it lets us implement a comparison between the current value of state variables and props with the updated values that have just come in, during the ‘Updating’ phase.
Usually, a prop or state update would result in a re-render even if the values in that data are exactly the same as before. This can be optimized by doing a comparison and returning true if a re-render is needed or false if it can be saved upon.
By using shouldComponentUpdate() method for large applications where components are deeply nested, the efficiency and performance can be vastly improved by preventing several component instances from getting re-rendered, just because their parent component was refreshed.

Instead of implementing this method for optimization, React also offers Pure Component which automates this process.  A PureComponent has shouldComponentUpdate() baked right in and doesn’t need to be manually set up as in the case of a Component instance.
The built-in shouldComponentUpdate() performs a shallow comparison of state & props and offers no customization of this behavior. This kind of component is perfect for simple use cases where components produce predictable results on the basis of simple and shallow comparisons. Additionally, a PureComponent will prevent its entire subtree from re-rendering.

For customized behavior involving complex data structures, you should build a Component that implements the shouldComponentUpdate() function with your own custom comparison logic.

getSnapshotBeforeUpdate() Method
–
The getSnapshotBeforeUpdate() function also lets us compare current and previous values in the state and props, but now we have access to DOM nodes before React implements them. This means that we can access and update DOM properties using React references.

componentDidUpdate() Method
–
The componentDidUpdate() function is particularly useful when a component needs to perform side effects such as querying an API for more data on the basis of change in state or props.
The componentDidUpdate() method runs on every single update. This will run perpetually as the component is updated/re-rendered. This is why the componentDidUpdate() function provides access to values in the props and state as they were before the update phase. This allows us to compare values and decide if we really want to perform the side effect and query the API or not.

At this point, our ‘Updating’ phase is complete. Every time the state and props change, the ‘Updating’ phase occurs again and runs through all the lifecycle methods.

Unmounting Phase

This is the final phase of the component lifecycle, which is the phase of unmounting a component from the DOM.
ref: https://www.geeksforgeeks.org/reactjs-lifecycle-components/ 
React has only one built-in method that gets called when a component is updated:

componentWillUnmount() Method

The componentWillUnmount() lifecycle method is extremely useful for cleanup such as removing timer instances and detaching/unsubscribing from real-time data sources such as when using Websockets when a component is removed.
It frees up memory when the component is destroyed and unmounted.


A class component offers milestones alongside its life as it goes from creation to destruction. These lifecycle methods offer incredible opportunities for us to customize the behavior and implement optimizations that can massively improve the performance of a React application.  

What about function components? Can we incorporate lifecycle methods in function components? 

Hooks API allows us to incorporate a life-cycle like a workflow with Function components. They are not exactly like lifecycle methods and require a slightly different approach and thought process. 