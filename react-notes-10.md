Props allow parents components to pass the data to child componenets
Architecthing data flow in a deeply nested application can be quite challenging

Prop drilling

Prop drilling occurs when a parent component generates its state and passes it down as props to its children components that do not consume the props – instead, they only pass it down to another component that finally consumes it.

Orphoned Props

Orphaned props in React.js are props that are passed to a component but are not used by that component. This can happen when a component is refactored or when a prop is no longer needed.
