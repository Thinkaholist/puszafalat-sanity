export default {
  title: 'Clickable Logo',
  name: 'clickableLogo',
  type: 'document',
  icon: () => '🖼',
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'imageWithInfo',
      description: 'If you have one image for the languages',
    },
    {
      title: 'Multilanguage logo',
      name: 'multilanguageLogo',
      type: 'localeImage',
      description: 'If you have more images for the languages',
    },
    {
      title: 'Display name',
      name: 'displayName',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'Rank (# Ordering)',
      name: 'rank',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    },
  ],
};
