export default {
  title: 'Course Type',
  name: 'courseType',
  type: 'document',
  icon: () => '🍴',
  fields: [
    {
      title: 'Serial number',
      name: 'serialNumber',
      type: 'number',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    {
      title: 'URL identifier (slug)',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name.hu',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Plural',
      name: 'plural',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name.hu',
    },
  },
};
