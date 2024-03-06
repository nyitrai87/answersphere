import { render, screen, waitFor } from '@testing-library/react';
import LoginModal from '../LoginModal';
import { AuthProvider } from '../../contexts/authContext';

// Test 1: Check to see if our `LoginModal` component renders without throwing an error.
it('LoginModal Component Renders Without Error', () => {
    render(
    <AuthProvider>
      <LoginModal />
    </AuthProvider>);
});

