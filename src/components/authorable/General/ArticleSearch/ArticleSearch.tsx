// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import clsx from 'clsx';

import FontAwesomeIcon from 'components/helpers/FontAwesomeIcon/FontAwesomeIcon';
import { useState, useEffect, useRef } from 'react';
// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
import SearchBar from './SearchBar';

type articleCardDetail = {
  discipline: Field<string>;
  jobTitle: Field<string>;
  location: Field<string>;
};

type articleListType = {
  id?: string;
  url?: string;
  name?: string;
  displayName?: string;
  // fields?: articleCardDetail[];
  fields?: any;
};

interface Fields {
  text?: Field<string>;
  variant: Field<string>;
  articleList: articleListType[];
  description: RichTextField;
  title: Field<string>;
}

export type ArticleSearchProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const ArticleSearch = ({ fields }: ArticleSearchProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  const [inputValue, setInputValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showResponse, setShowResponse]: any[] = useState([]);

  const searchInput:any = useRef('');

  // Search icon click
  const handleSearch = (val: string) => {
    const inputRefValue = searchInput.current.value;
    console.log('searchInput:', inputRefValue);
    performSearch(searchInput.current.value, true);
    
  };

  // Clear icon click
  const handleReset = () => {
    console.log('reset');
    setInputValue('');
    setShowResults(false);
    setShowResponse([]);
  };

  //  input onChange handler
  const triggerSearch = (event: any) => {
    const value = event.target.value;
    performSearch(value);
  };

  const handleKeyDown = (event:any) => {
    var code = event.keyCode ? event.keyCode : event.which;

    if (code == 13) { // upon "enter" key
      const inputRefValue = searchInput.current.value;
      performSearch(inputRefValue, true);
    }
  }
  
  // search match functionality:
  function generalSearch(searchTerm: string, fieldsObject: any) {
    const matches: any[] = [];

    fieldsObject.map((item: any, index: any) => {
      const searchCondition =
        item.fields.discipline.value.toLowerCase().match(searchTerm.toLowerCase()) ||
        item.fields.jobTitle.value.toLowerCase().match(searchTerm.toLowerCase()) ||
        item.fields.location.value.toLowerCase().match(searchTerm.toLowerCase());

      if (searchCondition) {
        matches.push(index);
      }
    });

    return matches;
  }

  // search functionality and filer list functionality:
  const performSearch = (searchString: string, onForceSearch?:boolean) => {

    if (searchString.length >= 3) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }

    if(onForceSearch){  // for icon search
      setShowResults(true);
    }

    setInputValue(searchString);
    const matchResults = generalSearch(searchString, fields.articleList);

    // Filter the array based on the given set of indexes
    const filteredArticles = fields.articleList.filter((item, index) =>
      matchResults.includes(index)
    );
    setShowResponse(filteredArticles);
  }


  // Get refine articles List
  const getArticlesList = (dataArray: any) => {

    // For no data found:
    if (dataArray.length == 0){
      return <h2>No articles found!</h2>
    }

    // response from 
    const finalArticlesList = dataArray.map((data: any, index: any) => {
      return (
        <ul key={index} className="border border-t-0 border-l-0 border-r-0 border-b-slate-200">
          <li className="border-2 border-neutral-300 py-4 px-2 my-4">
            <h2>{data.fields.jobTitle.value}</h2>
            <h4>{data.fields.discipline.value}</h4>
            <h6>{data.fields.location.value}</h6>
          </li>
        </ul>
      );
    });
    return finalArticlesList;
  };

  return (
    <>
      <div
        className="bg-theme-bg border border-b-4 border-b-primary border-black dark:border-gray dark:border-b-primary max-w-lg p-2 rounded"
        data-component="authorable/general/ArticleSearch"
        data-testid="ArticleSearch"
      >
        <h1 className="font-bold text-center">{fields.title.value}</h1>
        <RichTextA11yWrapper
          className="text-center"
          data-testid="ArticleSearch"
          field={fields.description}
          editable
        />
        {/* SearchBar here  */}
        <div className="m-4 flex items-center justify-around bg-theme-bg border-2 border-black dark:border-gray max-w-lg p-2 rounded">
          {/* Search Icon */}
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon="search" />
          </button>

          {/* Input Field */}
          <input
            className="w-4/5 border-1 hover:bg-violet-100 hover:bg-violet-100 focus:bg-violet-100 px-3 py-1"
            value={inputValue}
            // onFocus={checkFocus}
            onChange={triggerSearch} 
            onKeyDown={handleKeyDown}
            ref={searchInput}
          ></input>

          {/* Reset Icon */}
          <button onClick={handleReset}>
            <FontAwesomeIcon icon="close" />
          </button>
        </div>

        {fields.articleList.length == 0 && <h1>No articles found</h1>}

        <div className="mt-5">
          {/* General Case */}
          {!showResults && getArticlesList(fields.articleList)}

          {/* Upon Search  */}
          {showResults && getArticlesList(showResponse)}
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ArticleSearchProps>(ArticleSearch);
export default ArticleSearch;
