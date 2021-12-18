export default {
  name: 'puszafalatPage',
  title: 'Puszafalat Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'storyDividerText',
      title: 'Story Divider Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'recipeDividerText',
      title: 'Recipe Divider Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'songDividerText',
      title: 'Song Divider Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ingredientsText',
      title: 'Ingredients text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'makingText',
      title: 'Making text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'illustration',
      title: 'Illustration',
      type: 'imageWithInfo',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
