export default {
  name: 'footerPage',
  title: 'Footer',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'disclaimerText',
      title: 'Disclaimer text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text2',
      title: 'Text 2',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partnersText',
      title: 'Partners Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'disclaimerText.hu',
    },
  },
};
