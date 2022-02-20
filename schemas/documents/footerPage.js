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
    {
      name: 'interregLogo',
      title: 'Interreg logo',
      type: 'localeImage',
    },
    {
      name: 'viaCarpatiaLogo',
      title: 'Via Carpatia Logo',
      type: 'imageWithInfo',
    },
    {
      name: 'buildingPartnershipLogo',
      title: 'Building Partnership logo',
      type: 'localeImage',
    },
    {
      name: 'developmentFundLogo',
      title: 'Development Fund logo',
      type: 'localeImage',
    },
    {
      name: 'fmzLogo',
      title: 'FMZ logo',
      type: 'imageWithInfo',
    },
    {
      name: 'skhuUrl',
      title: 'SKHU URL',
      type: 'urlWithDisplay',
    },
    {
      name: 'viaCarpatiaUrl',
      title: 'Via Carpatia URL',
      type: 'urlWithDisplay',
    },
  ],
  preview: {
    select: {
      title: 'disclaimerText.hu',
    },
  },
};
