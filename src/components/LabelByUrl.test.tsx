import { render, waitFor } from '@testing-library/react';
import ApiProvider from '../api/CacheProvider';
import LabelByUrl from './LabelByUrl';

describe('LabelByUrl component', () => {
  const url = 'jest.dev/planet/1';

  const renderComponent = async (key?: string) => {
    const result = await render(
      <LabelByUrl propKey={key} url={url} />, {wrapper: ApiProvider});
    return result;
  };

  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return {
        json: () => ({
          testKey: 'jest test',
          name: 'Test thing',
          url,
        }),
      };
    });
  });

  it('renders the data via the supplied key', async  () => {
    const result = await renderComponent('testKey');
    expect(result.container.textContent).toEqual('...');
    await waitFor(() => 
      expect(result.container.textContent).toEqual('jest test')
    );
  });

  it('defaults to the "name" key', async  () => {
    const result = await renderComponent();
    expect(result.container.textContent).toEqual('...');
    await waitFor(() => 
      expect(result.container.textContent).toEqual('Test thing')
    );
  });
});