React apps are mounted to a DOM node.

You can see this usually in the index.js file at the root of a React application where we use the ReactDOM.render() function to mount our App component to a DOM node.

This means that your entire React application gets rendered inside one single DOM element in an HTML file.

ex ReactDOM.render(<App />)

if you want this React app to render something in a div, outside of this parent container? and if it is a modal dialog or some notification display that needs to be rendered in a DOM node outside the hierarchy of the parent DOM node
his is where Portals come into the picture.

Portals offer a convenient way to render React elements outside the DOM hierarchy of the parent component.

Usage

The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

Usually, when you return an element from a component’s render method, it is mounted into the DOM as a child of the nearest parent node:

Portals can be used when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.

We’ve established the fact that portals let you render React elements outside of the DOM hierarchy of the parent component.

This is great because it lets you target DOM containers outside of the one where your React app mounts in.

Portal could be present anywhere in the DOM and it still behaves like a normal React child component in every way. Features, like context, works in the same way regardless of whether the child is a portal, as the portal still exists in React tree regardless of position in the DOM.

This also includes event bubbling. Any event which has been triggered inside a portal propagates to the parent component in the containing React tree, even if those elements are not the parent component in the DOM tree. Let us assume the following HTML structure:


A Parent component in app-root would be able to catch an uncaught, bubbling event from the sibling node modal-root. 

Catching an event bubbling up from a portal in a parent component allows the development of more flexible abstractions that are not inherently reliant on portals.

But what happens when an event such as a mouse click is intercepted in a Portal?

Elements rendered inside portals are considered first-class children of the parent component’s hierarchy. 

So, even if the click originated in a DOM node that is outside of the root hierarchy, we will still get access to all elements inside our main application. This makes it really easy to visualize and work with events inside your React app. 

Elements inside a portal are not treated as alien citizens with limited access.

Overall, the Portal feature in React is a great way to access and render elements outside of the main DOM hierarchy and the fact that such elements are treated as first-class citizens makes it easy to work with them in much the same way as any other component in the application. 