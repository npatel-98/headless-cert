import { ArticleSearchProps } from './ArticleSearch';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ArticleSearchProps = {
  rendering: { componentName: 'ArticleSearch' },
  params: {},
  fields: {
    variant: {
      value: 'primary',
    },
    articleList: [
      {
        id: '119ac2e7-e03b-4fcf-bc01-85203e1f85a1',
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
      {
        id: '305c3d92-a023-47c6-a6af-0115710c9d29',
        url: '/Components/ArticleWithSearch/Articles/Jira-Admin',
        name: 'Jira Admin',
        displayName: 'Jira Admin',
        fields: {
          discipline: {
            value: 'Web and Application Development',
          },
          jobTitle: {
            value: 'Jira Admin',
          },
          location: {
            value: 'Vadodara-IN',
          },
        },
      },
      {
        id: '1f545ab5-be4c-4f81-91cc-3f79ed7c8fa7',
        url: '/Components/ArticleWithSearch/Articles/Mobile-App-Developer',
        name: 'Mobile App Developer',
        displayName: 'Mobile App Developer',
        fields: {
          discipline: {
            value: 'Web and Application Development',
          },
          jobTitle: {
            value: 'Mobile App Developer',
          },
          location: {
            value: 'Vadodara-IN',
          },
        },
      },
      {
        id: '5404d2e9-f85c-47be-a38d-7af91811dd7c',
        url: '/Components/ArticleWithSearch/Articles/Salesforce-Business-Architect',
        name: 'Salesforce Business Architect',
        displayName: 'Salesforce Business Architect',
        fields: {
          discipline: {
            value: 'Salesforce',
          },
          jobTitle: {
            value: 'Salesforce Business Architect',
          },
          location: {
            value: 'Dubai-AE',
          },
        },
      },
      {
        id: '7e37d1bd-637b-4e68-9442-21c3f6628b4b',
        url: '/Components/ArticleWithSearch/Articles/Salesforce-Developer',
        name: 'Salesforce Developer',
        displayName: 'Salesforce Developer',
        fields: {
          discipline: {
            value: 'Salesforce',
          },
          jobTitle: {
            value: 'Salesforce Developer',
          },
          location: {
            value: 'Jaipur-IN',
          },
        },
      },
      {
        id: 'c1f52add-0441-46f1-ba1a-af4170cce936',
        url: '/Components/ArticleWithSearch/Articles/Salesforce-Functional-Lead',
        name: 'Salesforce Functional Lead',
        displayName: 'Salesforce Functional Lead',
        fields: {
          discipline: {
            value: 'Salesforce',
          },
          jobTitle: {
            value: 'Salesforce Functional Lead',
          },
          location: {
            value: 'Jaipur-IN',
          },
        },
      },
      {
        id: '3731952a-424a-4c25-a8f7-fc9d987bc541',
        url: '/Components/ArticleWithSearch/Articles/Salesforce-Intern',
        name: 'Salesforce Intern',
        displayName: 'Salesforce Intern',
        fields: {
          discipline: {
            value: 'Salesforce',
          },
          jobTitle: {
            value: 'Salesforce Intern',
          },
          location: {
            value: 'Jaipur-IN',
          },
        },
      },
      {
        id: '7f2551b9-24be-4d5c-ac12-5e18b8421070',
        url: '/Components/ArticleWithSearch/Articles/Salesforce-Marketing-Cloud-Consultant',
        name: 'Salesforce Marketing Cloud Consultant',
        displayName: 'Salesforce Marketing Cloud Consultant',
        fields: {
          discipline: {
            value: 'Salesforce',
          },
          jobTitle: {
            value: 'Salesforce Marketing Cloud Consultant',
          },
          location: {
            value: 'Jaipur-IN',
          },
        },
      },
      {
        id: '486e67a6-9460-43da-b2bd-a046eef4dd7c',
        url: '/Components/ArticleWithSearch/Articles/Salesforce-QA-Consultant',
        name: 'Salesforce QA Consultant',
        displayName: 'Salesforce QA Consultant',
        fields: {
          discipline: {
            value: 'Salesforce',
          },
          jobTitle: {
            value: 'Salesforce QA Consultant',
          },
          location: {
            value: 'Vadodara-IN',
          },
        },
      },
      {
        id: '522f7bbb-12f3-4434-9552-00d10ccc694c',
        url: '/Components/ArticleWithSearch/Articles/Senior-Mobile-App-Developer',
        name: 'Senior Mobile App Developer',
        displayName: 'Senior Mobile App Developer',
        fields: {
          discipline: {
            value: 'Web and Application Development',
          },
          jobTitle: {
            value: 'Senior Mobile App Developer',
          },
          location: {
            value: 'Vadodara-IN',
          },
        },
      },
      {
        id: 'cb055f9d-3a7a-4eea-b430-7dc0786104bf',
        url: '/Components/ArticleWithSearch/Articles/Senior-Project-Manager',
        name: 'Senior Project Manager',
        displayName: 'Senior Project Manager',
        fields: {
          discipline: {
            value: 'Digital Strategy',
          },
          jobTitle: {
            value: 'Senior Project Manager',
          },
          location: {
            value: 'Vadodara-IN',
          },
        },
      },
      {
        id: '7e20380a-3566-4bcc-809c-90ff3387c45d',
        url: '/Components/ArticleWithSearch/Articles/Senior-Salesforce-Developer',
        name: 'Senior Salesforce Developer',
        displayName: 'Senior Salesforce Developer',
        fields: {
          discipline: {
            value: 'Salesforce',
          },
          jobTitle: {
            value: 'Salesforce Developer',
          },
          location: {
            value: 'Vadodara-IN',
          },
        },
      },
      {
        id: '8c9e2e3c-e362-4511-973b-67f3bfcd635f',
        url: '/Components/ArticleWithSearch/Articles/Senior-Sitecore-Developer',
        name: 'Senior Sitecore Developer',
        displayName: 'Senior Sitecore Developer',
        fields: {
          discipline: {
            value: 'Web and Application Development',
          },
          jobTitle: {
            value: 'Senior Sitecore Developer',
          },
          location: {
            value: 'Bengaluru-IN',
          },
        },
      },
      {
        id: '13621f22-48f7-47d6-a558-7979249963ce',
        url: '/Components/ArticleWithSearch/Articles/Service-Desk-Technician',
        name: 'Service Desk Technician',
        displayName: 'Service Desk Technician',
        fields: {
          discipline: {
            value: 'Web and Application Development',
          },
          jobTitle: {
            value: 'Service Desk Technician',
          },
          location: {
            value: 'Vadodara-IN',
          },
        },
      },
      {
        id: '0cf16cd4-e121-41fb-b1a3-c28142ee2cf4',
        url: '/Components/ArticleWithSearch/Articles/Sitecore-Developer',
        name: 'Sitecore Developer',
        displayName: 'Sitecore Developer',
        fields: {
          discipline: {
            value: 'Web and Application Development',
          },
          jobTitle: {
            value: 'Sitecore Developer',
          },
          location: {
            value: 'Bengaluru-IN',
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
