import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { BlogPage } from './BlogPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { act } from 'react-dom/test-utils';
import { Post } from '../models/Post';

it('Renders BlogPage', async () => {
  
  const MockBlogService = { 
    GetPostsAsync: async () : Promise<Post[]> => {
      return Promise.resolve([ 
        { id:0, body: "body", title: "Rolands Demo", userId: 0 } 
      ]) 
    }
  };

  await act(() => {
    render(<QueryClientProvider client={new QueryClient()}>
            <BlogPage blogService={ MockBlogService }/> 
           </QueryClientProvider>
    );
  });

  await waitFor(() => 
    expect(screen.getAllByRole('listitem')[0])
      .toHaveTextContent("0: title (user <<empty>>)")
  );
})
