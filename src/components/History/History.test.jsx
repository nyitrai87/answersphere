import { render, screen, waitFor } from '@testing-library/react';
import History from '../History';
import { AuthProvider } from '../../contexts/authContext';

// Test 1: Check to see if our `History` component renders without throwing an error.
it('History Component Renders Without Error', () => {
    render(
    <AuthProvider>
      <History />
    </AuthProvider>);
});

