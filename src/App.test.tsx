import {act, fireEvent, render, waitFor} from '@testing-library/react';
import App from './App';
import ApiProvider from './api/CacheProvider';
import { BrowserRouter } from 'react-router';
import { MOCK_PEOPLE, MOCK_PLANETS, MOCK_STARSHIPS } from './mocks';

describe('Main app portal', () => {
  const renderComponent = async () => {
    return render(
      <ApiProvider>
        <App />
      </ApiProvider>, {wrapper: BrowserRouter});
  };

  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation((url: string) => {
      return {
        json: () => {
          switch (true) {
          case url.endsWith('planets'):
            return MOCK_PLANETS;
          case url.endsWith('people'):
            return MOCK_PEOPLE;
          case url.endsWith('starships'):
            return MOCK_STARSHIPS;
          default:
            return {};
          }
        },
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

  it('loads the people table when Nav clicked', async () => {
    const result = await act(() => renderComponent());
    await waitFor(
      () => expect(result.getByText('Test planet')).toBeInTheDocument()
    );

    fireEvent.click(result.getByTestId('people'));
    await waitFor(
      () => expect(result.getByText('Jest thingson')).toBeInTheDocument()
    );
  });

  it('loads the starships table when Nav clicked', async () => {
    const result = await act(() => renderComponent());

    fireEvent.click(result.getByTestId('starships'));
    await waitFor(
      () => expect(result.getByText('Spaceship test')).toBeInTheDocument()
    );
  });

  it('clears cache, scrubbing the view as a result', async () => {
    const result = await act(() => renderComponent());
    
    const button = result.getByText(/clear cache/i);
    fireEvent.click(button);
    await waitFor(
      () => expect(result.getByText('No data found for starships')).toBeInTheDocument()
    );
  });
});