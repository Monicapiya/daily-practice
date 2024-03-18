Hooks Introduction

When React was originally built, the only kind of component that you could build were class components.
They are sub-classed from the Component class in the React library and offer built-in support for state and lifecycle methods that allow developers to customize the behavior of the component easily.
when a function component’s scope of work expands to necessitate the use of state and lifecycle like behavior, the traditional approach has always been to rewrite the component as a class component.
Why Hooks?

The React team outlines three motivations behind the introduction of the Hooks API.

1. Class components can become complex and consequently are harder to understand and read than function components.

Using class components in larger applications may lead to:

poor developer experience
complexity in debugging process
difficulty in maintaining the application
A class component can contain lifecycle methods such as componentDidMount and componentDidUpdate and componentWillUnmount and others, besides instance methods, state and other features.

As the class component evolves, and more of these features are added, complexity increases and readability decreases.

Often, unrelated code such as this situation here, where we’re instantiating a timer instance, as well as fetching initial data from an API, get huddled together in the same lifecycle method.

This can easily introduce bugs that are equally difficult to spot and squash.

And with class components, you cannot break this down further into smaller components or functional units.

So, you’re bound to get stuck at some point or the other as your component maxes out in complexity.

2. Classes in addition to being difficult to read and understand can also be tough to optimize and process, by compilers and the toolchain, rendering the process somewhat unreliable.

Compared to function components, class components are:

difficult to optimize as well as
difficult to minify
Function components are simple, faster, easier to read and optimize.

3. Hooks allow you to write reusable & stateful logic easily.

Besides components as the fundamental way to write reusable features, React developers typically implement two patterns for authoring reusable logic.

The first is Render props which enable you to hive off logic and state while enabling you to implement custom render logic. Render props enabled components, returns a function that needs to return React components.

The second technique is higher-order components which are components that accept other components and return a new component that can be augmented with new features.
This allows you to write components that can power up existing components with new features and is a commonly used pattern in products such as Redux.

Besides these, sharing stateful data and logic across components can also be done using the Context API which involves the use of the Provider and Consumer components.

But with all these techniques, you can easily end up in a situation that the React team calls 'Wrapper Hell'.


Hooks let you take a simple function component and incrementally add state, logic and behavioral features such as side effects and more to Function components.

  

These are core React features that were out of bounds for Function components. 

Hooks are optional which means you don’t have to use Hooks if you don’t want to and it doesn’t break any existing conventions or APIs.

Hooks as a feature can be gradually brought into an evolving product without the need to rewrite components or parts of your application. This is quite important to understand because one of the core benefits of React, as a library is that it can be gradually adopted. This makes it straightforward to build your product, knowing you can incrementally add features without breaking or completely rewriting your code.  

React offers a bunch of built-in hooks that enable the addition of state, context, side effects, refs, memoization, and many other features.

Built-in Hooks

The useState hook can be used to create stateful properties easily. 
The useEffect hook lets you run side effects and somewhat resembles lifecycle functions like componentDidMount, componentDidUpdate, and componentWillUnmount, all in a single function.
The useContext hook can be used to bring in context data without the need to write provider and consumer component hierarchies. 
The useReducer hook enables the creation and management of complex state logic which is like Redux, a popular and global state management solution for React.
Besides these, there are several other hook functions available that offer a range of opt-in features such as memoization, references and more. 

What really shines out above all these features, is the ability to write your own hook!

Hooks offer an opt-in way to create and share reusable and stateful logic. This means you can write a feature that components can share and can also contain its own internal state. It is important to remember that Hooks are just functions that return data and methods.

In the upcoming topics, we’ll look at the useState, useEffect, useContext and useReducer hooks before writing our own hook. So, let’s begin this exciting journey by investigating the useState hook function first, in the next topic.
