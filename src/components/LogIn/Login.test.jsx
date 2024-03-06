import { render, screen, waitFor } from '@testing-library/react';
import Login from '../Login';
import { AuthProvider } from '../../contexts/authContext';

// Test 1: Check to see if our `Login` component renders without throwing an error.
it('Login Component Renders Without Error', () => {
    render(
    <AuthProvider>
      <Login />
    </AuthProvider>);
});

