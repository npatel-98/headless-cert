// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import clsx from 'clsx';
// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

interface Fields {
  // text?: Field<string>;
  // variant: Field<string>;
  // articleList: articleListType[];
  // description: RichTextField;
  // title: Field<string>;

  searchString: Field<string>;
}

export type SearchBarProps = {
  // rendering: { componentName: string };
  // params: { [key: string]: string };
  fields?: Fields;
};

const SearchBar = ({ fields }: SearchBarProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;


  return (
    <>
      

    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<SearchBarProps>(SearchBar);
export default SearchBar;
