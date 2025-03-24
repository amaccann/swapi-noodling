import {act, fireEvent, render, waitFor} from '@testing-library/react';
import App from './App';
import ApiProvider from './api/CacheProvider';
import { BrowserRouter } from 'react-router';

describe('Main app portal', () => {
  const renderComponent = async () => {
    const result = await render(
      <ApiProvider>
        <App />
      </ApiProvider>, {wrapper: BrowserRouter});
    return result;
  };

  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return {
        json: () => ({
          results: [
            {
              climate: 'Arid',
              films: [
                'https://swapi.dev/api/films/1/',
                'https://swapi.dev/api/films/2/'
              ],
              name: 'Test planet',
              population: '123456',
              ur: 'https://swapi.dev/api/planets/123/'
            }
          ]
        }),
      };
    });
  });

  it('renders app, taking snapshot', async () => {
    const result = await act(() => renderComponent());
    await waitFor(
      () => expect(result.getByText('Test planet')).toBeInTheDocument()
    );
    
    expect(result.asFragment()).toMatchSnapshot();
  });

  it('clears cache, scrubbing the view as a result', async () => {
    const result = await act(() => renderComponent());
    const button = result.getByText(/clear cache/i);
    fireEvent.click(button);
    await waitFor(
      () => expect(result.getByText('No data found for planets')).toBeInTheDocument()
    );
  });
});