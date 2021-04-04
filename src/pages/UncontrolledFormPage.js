import React from 'react';
import { Button } from '../Button';

export const UncontrolledFormPage = () => {
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const optionInput = React.createRef();

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input
                    ref={nameInput} 
                    type="text" 
                    placeholder="Name"/>
            </div>
            <div>
                <input 
                    ref={emailInput}
                    type="text" 
                    placeholder="Email"/>
            </div>
            <div>
                <input
                    ref={optionInput} 
                    type="text" 
                    placeholder="Option" />
            </div>
            <Button onClick={e => {
                alert(`
                    Your name is ${nameInput.current.value},
                    your email is ${emailInput.current.value},
                    and your option is ${optionInput.current.value}!
                `);
                e.preventDefault();
            }}>Submit</Button>
        </form>
        
    )
}