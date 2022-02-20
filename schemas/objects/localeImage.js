const supportedLanguages = [
  { id: 'hu', title: 'Hungarian', isDefault: true },
  { id: 'sk', title: 'Slovak' },
  { id: 'en', title: 'English' },
];

export default {
  name: 'localeImage',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'imageWithInfo',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
