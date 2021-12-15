export default {
  title: 'Recipe',
  name: 'recipe',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
    },
    // {
    //   title:'category',
    //   name:'category'
    // },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'localeText',
    },
    {
      title: 'Making',
      name: 'making',
      type: 'localeText',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageWithInfo',
    },
  ],
  preview: {
    select: {
      title: 'name.hu',
      media: 'image.image',
    },
  },
};
