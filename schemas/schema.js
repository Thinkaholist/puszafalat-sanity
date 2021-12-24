// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import documents
import puszafalat from './documents/puszafalat';
import courseType from './documents/courseType';
import homePage from './documents/homePage';
import recipesPage from './documents/recipesPage';
import puszafalatPage from './documents/puszafalatPage';
import footerPage from './documents/footerPage';
import headerPage from './documents/headerPage';

// Import objects
import localeString from './objects/localeString';
import localeText from './objects/localeText';
import imageWithInfo from './objects/imageWithInfo';
import localeStringRequired from './objects/localeStringRequired';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    localeString,
    localeText,
    puszafalat,
    imageWithInfo,
    courseType,
    homePage,
    recipesPage,
    puszafalatPage,
    footerPage,
    headerPage,
    localeStringRequired,
  ]),
});
