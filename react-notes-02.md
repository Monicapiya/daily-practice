State Compnent

State is used to describe visual elements using data. Updates to the state causes the component to re-render with visual updates

Render Compnent

The render method describes the visual elements of a componenet typically using JSX

Render Method

A component must implement a render method which means that it must produce visual content that it would render on the page.   

For instance, if you’ve designed a component that should render a button, then it must implement a mechanism to visually render that button when the component is used.  

These render methods allow you to describe the DOM layout of your component using JSX, a JavaScript derivative that looks and feels a lot like HTML when you first start working with. 

But unlike HTML, JSX allows you to use JavaScript expressions directly in the layout.


State

Components may also include state. Stateful components describe visual elements with data.

As you change and modify this data, the component automatically re-renders to reflect the change. 

If your component features a visual element that the user can interact with, such as buttons or other elements, then you can implement event listeners to capture user interaction. 

Such event listeners can then be used to trigger methods. A method is a function that is private to a component and can be used for all sorts of things, from manipulating state, to side effects such as fetching data from an API. 

 Methods are optional and may not be needed in all cases. 

The interesting thing about React is that it is much more than a library to build interfaces for the web. React by itself is not limited to web pages and the DOM. It is a way to design composable components and functionality that can be used with a wide range of mediums. 

For instance, the React Native project lets you use React for designing mobile apps for iOS and Android. 

And you can write custom renderers as well. This separation of core logic and the renderer makes React an excellent library to work with.


2.Types of Components

React offers two kinds of components that offer you ample flexibility for all kinds of use cases. 

Class Component
Function Component

A React Component written with a JavaScript class comes with methods like the class constructor -- which is primarily used in React to set initial state or to bind methods -- and the mandatory render method to return JSX as output.

A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React.Component and create a render function which returns a React element.

Class Component

A class component is subclassed from the component class in React. 

A class component offers several out of the box features. For instance, class components let you store local state.  

They also allow you to create lifecycle hooks, which we’ll examine later in the course. 

Function Component

Now, the second type of component that you can build with React is known as Function components.  

These are just simple functions that return a React element. They can also bring in a props object as an argument.  

According to React's official documents, the most fundamental way to define a component is by writing a Javascript function. 

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

At its most basic, a function component is a presentational component, which lets you accept data through a prop and render it on the UI. 

They’re perfect for separating the visuals from container components where your logic and state may reside.

These functions do not offer built-in state management, lifecycle methods and other bells and whistles that class components offer. While originally designed for elementary and simple use cases where class components are overkill, the beauty of function components is in the syntax and simplicity.  

They’re simple JavaScript functions. 

And while natively they may lack the ability to incorporate state and methods, React recently introduced the Hooks API, which lets you incorporate state and lifecycle methods, right within a function component. 

This means you can upgrade a function component to include state management and other advanced features, without converting it to a class component. 


3.Understand JSX

The most fundamental element in a component is the visual elements that it has to render. 

This is where JSX comes into the picture. It is a syntax that lets you describe what a component renders.

JSX is an extension to regular JavaScript and while it looks a lot like HTML, it is way more powerful and expressive.   

JSX is like a templating syntax for React applications that makes it easy for developers to incorporate visual elements and dynamic data in a format and syntax that they’re somewhat familiar from the get go. 

But the real power behind JSX is that it lets you use JavaScript all the way. 

JSX is not HTML.

For instance, instead of using an attribute called class, we use className and we can create event listeners like onClick as we saw in the last topic.

How Does JSX Work?

JSX is like a templating language which means it lets us describe visual elements in an HTML like syntax but internally it transforms the syntax into code that React actually uses.

JSX is designed to produce React elements. 

So, when you write JSX, it is compiled into standard JavaScript functions containing nested invocations of the createElement function which is what React uses to create renderable elements internally.  

In fact, JSX is nothing more than syntactic sugar for the createElement function from the React library. 

The createElement function takes in 3 arguments.

1. The first is the type of element or the reference to a component.

2. The second argument is an object where key-value pairs translate to props and their values.

3. The third argument is for child components or content that needs to go between the opening and closing tags of an element or a component.


JSX Restrictions

There are, however a few things you should know before you venture into JSX. 

Attribute names in JSX, unlike HTML, must be in camelCase just as they would be when using DOM APIs in JavaScript.  

Specifying Attributes with JSX

Now, every attribute must have a value. Static String values can be expressed in a pair of double-quotes, like how you would in HTML. 

Dynamic values, on the other hand, are expressed in a pair of curly braces.  

The value within curly braces can be an expression and hence allows you to use standard JavaScript to access values, invoke functions and more.  

Curly braces allow you to pass in values as arrays, numbers, objects, and not just strings. 

This is critically important, especially when using props to accept data from a parent component, which could be in any format, and not just a string. 

There are other reasons for using curly braces.

For instance, if you have to use inline styles on a component, you can do so by using a pair of curly braces on the style property and passing in an object with camelcased version of CSS properties and their values.

Curly braces expressed between the opening and closing tag for a component or an element, allows you to render child objects.

In a nutshell, using a pair of curly braces allows you to set or pass dynamic data on your elements and component tags.

JSX: Tags

Now, elements in JSX are expressed as tags, in much the same way as you would in regular HTML. Custom made components are also expressed as tags. 

On the other hand, React components also need to be expressed within JSX. This allows you to compose together multiple and isolated components to build a larger UI or application.

In this case, however, their names must begin with an upper-case character.   

This is an important naming convention that you must adhere to. It also allows you to easily distinguish between standard HTML elements and React components in a layout. 

Also, note here that a closing tag is not needed if there’s no data to process between the tags. 

But in such a case, a self-closing tag is mandatory


