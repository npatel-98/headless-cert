// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ArticleWithSearch, { ArticleWithSearchProps } from './ArticleWithSearch';
import defaultData from './ArticleWithSearch.mock-data';

const meta: Meta<typeof ArticleWithSearch> = {
  title: 'Authorable/General/ArticleWithSearch',
  component: ArticleWithSearch,
  argTypes: {},
  // tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ArticleWithSearch>;

export const Default: Story = {
  render: (args) => {
    return <ArticleWithSearch {...(expandObj({ ...args }) as ArticleWithSearchProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
