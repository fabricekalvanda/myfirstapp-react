import React from 'react';
import { Link } from 'react-router-dom';

export const FormsNavBar = () => (
    <ul>
        <li>
            <Link to="/forms/controlled">controlled</Link>
        </li>
        <li>
            <Link to="/forms/uncontrolled">uncontrolled</Link>
        </li>
    </ul>
);