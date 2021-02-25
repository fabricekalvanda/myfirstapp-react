import React, { useState } from 'react';

export const CounterButton = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    
    const increment = () => setNumberOfClicks(numberOfClicks + 1);



    return (
        <>
        <p>You have clicked the button { numberOfClicks } times</p>
        <button onClick={increment}>Click Me!</button>
        </>
    );
}