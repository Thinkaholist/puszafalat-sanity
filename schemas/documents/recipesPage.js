export default {
  name: 'recipesPage',
  title: 'Recipes Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'appetizersButtonText',
      title: 'Appetizers Button Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainCoursesButtonText',
      title: 'Main Courses Button Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dessertsButtonText',
      title: 'Desserts Button Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'searchInputPlaceholder',
      title: 'Search Input Placeholder',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'appetizersButtonText.hu',
    },
  },
};
