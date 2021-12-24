const fs = require('fs');
const slugify = require('slugify');

const types = {
  ELOETEL: '1c8088a8-8e65-462c-9676-1fda702ff6ef',
  FOETEL: '30cd81b9-729f-47cc-9a22-0f0f96807254',
  DESSZERT: '5ef3abe1-022f-4404-94ce-0bf68d783dea',
};

const rawContent = fs.readFileSync('upload.tsv', 'utf8');
const matrix = rawContent.split('\r\n').map((e) => e.split('\t'));
const firstRow = matrix.shift();

const puszafalatArray = matrix.map((falat) => {
  return falat.reduce((acc, element, idx) => {
    acc[firstRow[idx]] = element.trim();
    return acc;
  }, {});
});

function newLineify(text) {
  return text
    .split('_')
    .filter((e) => e !== '')
    .map((e) => e.trim())
    .join('\n');
}

const sanityArray = puszafalatArray.map(
  ({
    _id,
    _type,
    rank,
    title_hu,
    title_en,
    title_sk,
    story_hu,
    story_en,
    story_sk,
    origin_hu,
    origin_en,
    origin_sk,
    altText,
    illustration,
    recipeName_hu,
    recipeName_en,
    recipeName_sk,
    recipeNote_hu,
    recipeNote_en,
    recipeNote_sk,
    simpleExplanation_hu,
    simpleExplanation_en,
    simpleExplanation_sk,
    foodType,
    ingredients_hu,
    ingredients_en,
    ingredients_sk,
    making_hu,
    making_en,
    making_sk,
    songTitle,
    songLyrics,
    bandcampTrack,
  }) => ({
    _id,
    _type,
    rank: parseInt(rank),
    title: {
      _type: 'localeStringRequired',
      hu: title_hu,
      en: title_en,
      sk: title_sk,
    },
    slug: {
      _type: 'slug',
      current: slugify(title_hu, { lower: true }),
    },
    story: {
      _type: 'localeText',
      hu: newLineify(story_hu),
      en: newLineify(story_en),
      sk: newLineify(story_sk),
    },
    origin: {
      _type: 'localeStringRequired',
      hu: origin_hu,
      en: origin_en,
      sk: origin_sk,
    },
    illustration: {
      _type: 'imageWithInfo',
      altText,
      image: {
        _type: 'image',
        _sanityAsset: illustration,
      },
    },
    recipeName: {
      _type: 'localeStringRequired',
      hu: recipeName_hu,
      en: recipeName_en,
      sk: recipeName_sk,
    },
    recipeNote: {
      _type: 'localeString',
      hu: recipeNote_hu,
      en: recipeNote_en,
      sk: recipeNote_sk,
    },
    simpleExplanation: {
      _type: 'localeString',
      hu: simpleExplanation_hu,
      en: simpleExplanation_en,
      sk: simpleExplanation_sk,
    },
    foodType: {
      _type: 'reference',
      _ref: types[foodType],
    },
    ingredients: {
      _type: 'localeText',
      hu: newLineify(ingredients_hu),
      en: newLineify(ingredients_en),
      sk: newLineify(ingredients_sk),
    },
    making: {
      _type: 'localeText',
      hu: newLineify(making_hu),
      en: newLineify(making_en),
      sk: newLineify(making_sk),
    },
    songTitle,
    songLyrics: newLineify(songLyrics),
    bandcampTrack,
  })
);
const ndjson = sanityArray.map((object) => JSON.stringify(object)).join('\n');

fs.writeFile('../upload.ndjson', ndjson, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('file written successfully');
});
