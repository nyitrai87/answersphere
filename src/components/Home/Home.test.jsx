import { render, screen, waitFor } from '@testing-library/react';
import Home from '../Home';
import { AuthProvider } from '../../contexts/authContext';

// Test 1: Check to see if our `Home` component renders without throwing an error.
it('Home Component Renders Without Error', () => {
    render(
    <AuthProvider>
      <Home />
    </AuthProvider>);
});

