

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

=> getElementById();

 lects a single element by its id.Which is used to access and manipulate specific HTML elements within a web page.

=> getElementsByClassName():

  A JavaScript method that returns an array-like collection (HTMLCollection) of all elements according to a specified class name.

=> querySelector():
 
  Takes the first element that matches any CSS selector. Returns only the first element.

=> querySelectorAll();
    querySelectorAll can use any CSS selector and it can catch all elements as a NodeList. it Can use any CSS selector id, class, p, h1 tag etc.



2. How do you **create and insert a new element into the DOM**?

=>First, you have to use document.createElement() to create a new element .Then, that element has to be added to the DOM as a child of another element using appendChild().


3. What is **Event Bubbling** and how does it work?
=>Event bubbling is a process where when an event is triggered on an element, it first acts on that element, then gradually reaches its parent → grandparent → all ancestor elements above.

That is, the event starts from an element and spreads in the form of a bubble to the root above.


4. What is **Event Delegation** in JavaScript? Why is it useful?

= >Event delegation is a technique where instead of providing a separate event listener to each child element, only one event listener is provided to the parent element. The code becomes simpler.Events of new dynamically added elements can be easily handled.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault(): This is used to stop the default behavior of an event. For example: a form is submitted or a link is clicked to go to another page.

stopPropagation(): This stops event bubbling, i.e. the event does not reach the parent or ancestor element.


