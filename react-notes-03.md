State is used when component has to process and store dynamic data and state is always local to the component
React apps are made up of several components in hierarchy
Props are inlets, letting the parent components pass data to child components
Inside the class components Props can be accessed using "this.props.propsName"

5 imp points to keep in mind when using Props

Props enable you to implement a top-down and one-way data flow architecture

Data generated/created at the parent is passed down to a child component using props

State should ideally be located at the nearest logical parent componenet

lifting the state Up

Props are read-only and must never be mutated

Components must act like pure functions and never mutate props
Store prop data in state if you need to modify before consumption

Props defaults to true if no value is passed
Setting default values when props are not set

when you set props using double or single quotes the value will be treated as static string not as dynamic variable

If you wish to pass the data such as numbers, functions, an object then we need to use curly brases {}

Props let you access data from parent components

You can pass strings, Numbers, Objects, Arrays, Functions and more

Props ulimately feed to a component's internal logic
