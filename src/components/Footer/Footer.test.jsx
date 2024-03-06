import { render, screen, waitFor } from '@testing-library/react';
import Footer from '../Footer';
import { AuthProvider } from '../../contexts/authContext';

// Test 1: Check to see if our `Footer` component renders without throwing an error.
it('Footer Component Renders Without Error', () => {
    render(
    <AuthProvider>
      <Footer />
    </AuthProvider>);
});

