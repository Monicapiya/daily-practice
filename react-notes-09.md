Unidirectional Data Flow
The react App is made up of components, it results in a heirarchy that starts with a parent component and branches down to various levels, when vizualising the data it is easier to imagine the data flowing down from parent to child (data flows down through props like waterfall)

In react view is a function of State

State is typically located at a parent level 

This does not ncecessarily have to be the top most parent or root component in the application hierarchy

A casacding waterfall of data resevoirs or state that spill down to componenets using props, it is called as one way flow or top down architecture

A child does not need to know where the data is coming from

A child receives data from the parent using props

The view is updated only when the data in the state updated and is passed using props to children

What if the component wants to send data back up to the parent?

In this data we can use Inverse data flow using call backs
