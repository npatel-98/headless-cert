// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import ArticleSearch from './ArticleSearch';
import defaultData, { noData } from './ArticleSearch.mock-data';

it('renders correctly', () => {
  const component = snapshot(ArticleSearch, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/ArticleSearch');
});

it('does not render without data', () => {
  const component = renderComponent(ArticleSearch, { componentProps: noData });
  const text = component.queryByTestId('ArticleSearch');
  expect(text).toBe(null);
});
