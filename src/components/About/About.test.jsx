import { render, screen } from '@testing-library/react';
import About from '../About';

// Test 1: Check to see if our `About` component renders without throwing an error.
it('About Component Renders Without Error', () => {
    render(<About />);
});

// Test 2: Check to see if `AnswerSphere` link is working
it('Contains a working link', () => {
    render(<About />);
  const linkElement = screen.getByText('AnswerSphere');
  expect(linkElement).toBeInTheDocument(); // Check if the link element exists
  expect(linkElement.tagName).toBe('A'); // Check if the link element is an a tag
  expect(linkElement).toHaveAttribute('href', 'https://github.com/nyitrai87/answersphere'); // Check if the link element has an href attribute
  expect(linkElement).toHaveAttribute('class', 'appName') // check if the link element has a class of 'appName
});

// Test 3: Check to see if bagel renders at bottom of page
it('Contains a working image', () => {
  render(<About />);
const bagelImg = screen.getByAltText('Bagel Image');
expect(bagelImg).toBeInTheDocument(); // Check if the link element exists
expect(bagelImg.tagName).toBe('IMG'); // Check if the link element is an a tag
expect(bagelImg).toHaveAttribute('src', '/images/logoBagel.png'); // Check if the link element has an href attribute
expect(bagelImg).toHaveAttribute('class', 'bagelImg') // check if the link element has a class of 'appName
});

// Test 4: Check to see if text is rendering as expected
it('Renders expected text', () => {
  render(<About />); // Render the About component
  const usersOptionsElement = screen.getByText('Users have two options:');
  expect(usersOptionsElement).toBeInTheDocument(); // Check if the text element is present in the DOM
  expect(usersOptionsElement.tagName).toBe('P') // Check if text is within a p tag
});
