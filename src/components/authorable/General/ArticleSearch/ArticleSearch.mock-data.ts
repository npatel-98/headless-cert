import { ArticleSearchProps } from './ArticleSearch';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ArticleSearchProps = {
  rendering: { componentName: 'ArticleSearch' },
  params: {},
  fields: {
    // text: {
    //   value:
    //     '<p>This is <em>richtext</em> content to show the <strong>simplest</strong> possible example of a implementaiton possible.</p>',
    // },

    variant: {
      value: 'primary',
    },
    articleList: [
      {
        id: 'f09ca6ca-1590-450f-a0d5-2e62d5544b8a',
        url: '/Components/ArticleWithSearch/Articles/Accounts-Executive',
        name: 'Accounts Executive',
        displayName: 'Accounts Executive',
        fields: {
          discipline: {
            value: 'Human Resources and Accounting',
          },
          jobTitle: {
            value: 'Accounts Executive (Client Invoicing & Accounts Receivable)',
          },
          location: {
            value: 'Bengaluru-IN',
          },
        },
      },
      {
        id: 'cf1c0b6e-a2f4-472e-b058-c8d4ec3ec0f4',
        url: '/Components/ArticleWithSearch/Articles/Associate-Mobile-App-Developer',
        name: 'Associate Mobile App Developer',
        displayName: 'Associate Mobile App Developer',
        fields: {
          discipline: {
            value: 'Web and Application Development',
          },
          jobTitle: {
            value: 'Associate Mobile App Developer',
          },
          location: {
            value: 'Vadodara-IN',
          },
        },
      },
      {
        id: '13bd2692-e05d-4e93-b9fd-f342183bf79f',
        url: '/Components/ArticleWithSearch/Articles/Associate-Sitecore-Developer',
        name: 'Associate Sitecore Developer',
        displayName: 'Associate Sitecore Developer',
        fields: {
          discipline: {
            value: 'Web and Application Development',
          },
          jobTitle: {
            value: 'Associate Sitecore Developer',
          },
          location: {
            value: 'Bengaluru-IN',
          },
        },
      },
      {
        id: '8d380f1a-6759-4009-ab3b-a706b9f6fb21',
        url: '/Components/ArticleWithSearch/Articles/Digital-Strategist',
        name: 'Digital Strategist',
        displayName: 'Digital Strategist',
        fields: {
          discipline: {
            value: 'Digital Strategy',
          },
          jobTitle: {
            value: 'Digital Strategist',
          },
          location: {
            value: 'Remote - US',
          },
        },
      },
    ],
    description: {
      value: '<p>We invest in people who add to our expertise, empathy and ingenuity.</p>',
    },
    title: {
      value: 'Careers',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
