import { render, screen, waitFor } from '@testing-library/react';
import Contact from '../Contact';
import { AuthProvider } from '../../contexts/authContext';

// Test 1: Check to see if our `Contact` component renders without throwing an error.
it('Contact Component Renders Without Error', () => {
    render(
    <AuthProvider>
      <Contact />
    </AuthProvider>);
});

