import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ margin: '20px', color: 'white', backgroundColor: 'teal', padding: '40px', borderRadius: '8px' }}>
             <p>Current Count: {count}</p>
            <button style={{ marginRight: '10px', color: 'white', backgroundColor: 'blue' }} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{ marginRight: '10px', color: 'white', backgroundColor: 'blue' }} onClick={() => setCount(count - 1)}>Decrement</button>
            <button style={{ marginRight: '10px', color: 'white', backgroundColor: 'blue' }} onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;