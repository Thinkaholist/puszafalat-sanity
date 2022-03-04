export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'pageTitle',
      title: 'Page title',
      type: 'localeString',
      description: 'Ez van a böngésző tab-on, SEO-nak fontos.',
      validation: (Rule) => Rule.required(),
    },
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
      name: 'explanationText',
      title: 'Explanation text',
      type: 'localeString',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button text',
      type: 'localeString',
    },
    {
      name: 'youtube1',
      title: 'First Youtube video',
      type: 'urlWithDisplay',
    },
    {
      name: 'youtube2',
      title: 'Second Youtube Video',
      type: 'urlWithDisplay',
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
