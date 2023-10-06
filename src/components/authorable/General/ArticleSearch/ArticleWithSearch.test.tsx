// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import ArticleWithSearch from './ArticleWithSearch';
import defaultData, { noData } from './ArticleWithSearch.mock-data';

it('renders correctly', () => {
  const component = snapshot(ArticleWithSearch, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/ArticleWithSearch');
});

it('does not render without data', () => {
  const component = renderComponent(ArticleWithSearch, { componentProps: noData });
  const text = component.queryByTestId('ArticleWithSearch');
  expect(text).toBe(null);
});
