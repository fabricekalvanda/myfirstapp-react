import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.buttonColor || 'transparent'};
    background: linear-gradient(90deg,#0162C8,#55E7FC);
    display: inline-block;
    border-radius: 40px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: bold;
    margin: 10px 0;
    outline: none;
    padding: 12px 36px;
`;


export const Button = ({ children, buttonColor, ...props }) => {
    return (
        <StyledButton buttonColor={buttonColor} {...props}>{children}</StyledButton>
    );
}

export const DangerButton = ({ children, ...props }) => {
    return <Button buttonColor="red" {...props}>{children}</Button>;
}

export const SuccessButton = ({ children, ...props }) => {
    return <Button buttonColor="green" {...props}>{children}</Button>;
}

// export class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.buttonColor = props.buttonColor;
//     }
//     render() {
//         return (
//             <StyledButton 
//             buttonColor={this.buttonColor} 
//             {...this.props}>
//             {this.props.children}
//         </StyledButton>
//         );
//     }
// }

// export class DangerButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor = 'red';
//     }
// }

// export class SuccessButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor = '#1998';
//     }
// }