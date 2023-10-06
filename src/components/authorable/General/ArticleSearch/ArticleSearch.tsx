// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import clsx from 'clsx';

import FontAwesomeIcon from 'components/helpers/FontAwesomeIcon/FontAwesomeIcon';
import { useState, useEffect } from 'react';
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
  const [ showResponse, setShowResponse ]: any[] = useState([])

  const handleSearch = (val:string) => {
    setInputValue(val);
    console.log("searched for :",val)
  }

  const handleReset = () => {
    console.log('reset');
    setInputValue('');
  };

  const triggerSearch = (event: any) => {
    const value = event.target.value;
    // if (value.trim.length > 0) {
      setInputValue(value);
      const results = searchInFields(value, fields.articleList)
      setShowResponse(results);
      console.log(' Searching :', value);
      console.log(' RES :', results);
    // }

    if(value.trim.length > 2){
      setShowResults(true);
    }else{
      setShowResults(false)
    }
  };

  // useEffect(() => {
  //   // trigger re-render of articles list
  // }, [inputValue])

  function searchInFields(searchTerm:string, fieldsObject:any) {
    const matches: any[] = [];

    console.log('this is sexarch term: ', searchTerm.toLowerCase());
    const res = fieldsObject.map( (item:any, index:any) => {

    const searchCondition =
      item.fields.discipline.value.toLowerCase().match(searchTerm.toLowerCase()) ||
      item.fields.jobTitle.value.toLowerCase().match(searchTerm.toLowerCase()) ||
      item.fields.location.value.toLowerCase().match(searchTerm.toLowerCase());

      if (searchCondition) {
        matches.push(index);
      }
    })

    return matches;
  }

  


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
          <button
          // onClick={handleSearch}
          >
            <FontAwesomeIcon icon="search" />
          </button>

          <input
            className="w-4/5 border-1 hover:bg-violet-100 hover:bg-violet-100 focus:bg-violet-100"
            // onChange={triggerSearch}
            value={inputValue}
            onChange={triggerSearch}
          ></input>

          <button onClick={handleReset}>
            <FontAwesomeIcon icon="close" />
          </button>
        </div>

        {fields.articleList.length == 0 && <h1>No articles found</h1>}

        <div className="mt-5">
          {!showResults &&
            fields.articleList.map((data: any, index: any) => {
              // {
              //   console.log('data: ', data.fields.discipline);
              // }
              return (
                <ul
                  key={index}
                  className="border border-t-0 border-l-0 border-r-0 border-b-slate-200"
                >
                  {/* <p>hello</p> */}
                  <li className="border-2 border-neutral-300 py-4 px-2 my-4">
                    <h2>{data.fields.jobTitle.value}</h2>
                    <h4>{data.fields.discipline.value}</h4>
                    <h6>{data.fields.location.value}</h6>
                  </li>
                </ul>
              );
            })}

          {showResults &&
            showResponse.map((resultIndex: any) => {
              fields.articleList.map((data: any, index: any) => {
                if (resultIndex === index) {
                  return <p>In condi</p>;
                } else {
                  return null;
                }
              });
            })}
        </div>
      </div>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ArticleSearchProps>(ArticleSearch);
export default ArticleSearch;
