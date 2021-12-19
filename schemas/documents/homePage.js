export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageWithInfo',
    },
    {
      name: 'headerText',
      title: 'Header text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subHeaderText',
      title: 'Subheader text',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bandCampText',
      title: 'Bandcamp text',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'albumEmbedCode',
      title: 'Album embed code',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'headerText.hu',
    },
  },
};
