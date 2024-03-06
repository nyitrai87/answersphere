import { render, screen } from '@testing-library/react';
import App from '../App';


// Test 1: Check to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
    render(<App />);
});
