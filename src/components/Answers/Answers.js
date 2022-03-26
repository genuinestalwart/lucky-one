import React from 'react';

const Answers = () => {
    return (
        <section className='md:flex justify-evenly my-4'>
            <div className='bg-blue-100 my-4 p-4 rounded-lg md:w-2/5'>
                <h3 className='font-bold my-4 text-2xl'>How react works?</h3>
                <p className='font-medium'>React creates a virtual DOM which is faster and easier to render than UI in the real DOM. Basically, react allows us to use JSX for writing the components. Since JSX is not valid JavaScript, browsers can't read it directly. So react translates the JSX syntax into a tree of objects by using a transpiler.</p>
            </div>
            <div className='bg-blue-100 my-4 p-4 rounded-lg md:w-2/5'>
                <h3 className='font-bold my-4 text-2xl'>Difference between props and state:</h3>
                <p className='font-medium'>State is controlled by the component itself. On the other hand, props are controlled by whatever renders the component. State can be changed anytime but props are read-only. Mainly props are for communicating between components and state is used for rendering dynamic changes with the component.</p>
            </div>
        </section>
    );
};

export default Answers;