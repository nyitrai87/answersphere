import { render, screen, waitFor } from '@testing-library/react';
import Header from '../Header';
import { AuthProvider } from '../../contexts/authContext';

// Test 1: Check to see if our `Header` component renders without throwing an error.
it('Header Component Renders Without Error', () => {
    render(
    <AuthProvider>
      <Header />
    </AuthProvider>);
});

