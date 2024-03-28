import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BlogPostListing } from './BlogPostListing';

it('Renders BlogPostListing', () => {
  render(<BlogPostListing posts={[ { id:1, body:"testbody", title:"testtitle", userId:0 } ]} />);
  expect(screen.getAllByRole('listitem')[0]).toHaveTextContent("testtitle");
});
