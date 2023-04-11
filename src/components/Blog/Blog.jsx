import React from 'react';

const Blog = () => {
    return (
        <div className='md:mt-6 mt-20 p-4 md:px-12'>
            <div className=' bg-slate-300 text-cyan-800 my-7 p-7 rounded'>
            <h2 className='text-4xl font-bold my-3'>1.Why should we use Context API?</h2>
            <p className='mt-4 font-medium text-xl'>
            (a) Avoiding Prop Drilling: When we have deeply nested components, it can become tedious and error-prone to pass down props to each level. Using the Context API, we can avoid this "prop drilling" and easily pass data to any component in the tree.</p>
            <p className='mt-4   font-medium text-xl'> (b) Centralized State Management: The Context API allows to keep the application state in a centralized location, making it easier to manage and update.</p> 
            <p className='mt-4 font-medium text-xl'> (c) Simplified Code: Using the Context API can simplify code, as it don't need to pass props down the component tree. This can make code easier to read and maintain.</p> 
            <p className='mt-4 font-medium text-xl'>(d) Performance Optimization:Uusing the Context API, we can avoid unnecessary re-renders of components that don't need to be updated. This can help improve the performance of application.</p> 
            </div>
            <div  className=' bg-slate-300 text-cyan-800 my-7 p-7 rounded'>
            <h2 className='text-4xl font-bold my-3'>2.What is Custom Hooks in React?</h2>
            <p className='mt-4 font-medium text-xl'>
           (a) A custom hook is a JavaScript function that utilizes built-in React hooks such as useState, useEffect, useContext, etc and can be reused across multiple components in a React application. Custom hooks enable to extract reusable logic from components and create a shared abstraction for stateful or side-effect-related code. 
            </p>
            <p className='mt-4 font-medium text-xl'>
            (b)Custom Hook uses useState to manage the state of the fetched data and error, and useEffect to fetch the data from the URL. The hook returns an object containing the fetched data and error message.
            </p>
            </div>
            {/* 3rd question */}
            <div  className=' bg-slate-300 text-cyan-800 my-7 p-7 rounded'>
            <h2 className='text-4xl font-bold my-3'>3.what is useRef?</h2>
            <p className='mt-4 font-medium text-xl'>
           (a) useRef is a hook function provided by the React library that allows to create a mutable reference that can be used to persist a value between renders in a functional component.
            </p>
            <p className='mt-4 font-medium text-xl'>
            (b)The useRef hook takes an initial value as an argument, and returns a mutable object with a current property. We can read and update the value of current directly, without triggering a re-render of the component.
            </p>
            <p className='mt-4 font-medium text-xl'>
            (b)It is useful for storing and accessing values that need to persist between renders, such as a reference to a DOM node, a timer ID, or any other mutable data that needs to be accessed across multiple renders.
            </p>
            </div>
            {/* 4th question */}
            <div  className=' bg-slate-300 text-cyan-800 my-7 p-7 rounded'>
            <h2 className='text-4xl font-bold my-3'>4.what is useMemo?</h2>
            <p className='mt-4 font-medium text-xl'>
           (a) useMemo is a hook function provided by the React library that allows to optimize expensive computations by memoizing the result of a function call and only re-computing it if the dependencies change.
            </p>
            <p className='mt-4 font-medium text-xl'>
            (b)The useMemo hook takes a function as its first argument, and an array of dependencies as its second argument. The function is executed during rendering, and its result is memoized, or stored in memory, until one of the dependencies changes. When the dependencies change, the function is re-executed and its result is re-memoized.
            </p>
            </div>
           
        </div>
    );
};

export default Blog;