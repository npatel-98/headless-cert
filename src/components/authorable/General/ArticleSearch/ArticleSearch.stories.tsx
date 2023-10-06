// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ArticleSearch, { ArticleSearchProps } from './ArticleSearch';
import defaultData from './ArticleSearch.mock-data';

const meta: Meta<typeof ArticleSearch> = {
  title: 'Authorable/General/ArticleSearch',
  component: ArticleSearch,
  argTypes: {},
  // tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ArticleSearch>;

export const Default: Story = {
  render: (args) => {
    return <ArticleSearch {...(expandObj({ ...args }) as ArticleSearchProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
