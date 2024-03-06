import { render, screen, waitFor } from '@testing-library/react';
import Custom404 from '../Custom404';
import { AuthProvider } from '../../contexts/authContext';

// Test 1: Check to see if our `Custom404` component renders without throwing an error.
it('Custom404 Component Renders Without Error', () => {
    render(
    <AuthProvider>
      <Custom404 />
    </AuthProvider>);
});

