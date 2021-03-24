import React, { useState } from 'react';

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('');
    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Option" 
                    value={option}
                    onChange={e => setOption(e.target.value)} />
            </div>
            <button onClick={e => {
                alert(`
                    Your name is ${name},
                    your email is ${email},
                    and your option is ${option}
                `);
                e.preventDefault();
            }}>Submit</button>
        </form>
    )
}