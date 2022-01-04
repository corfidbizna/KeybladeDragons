var cleanDragonStat = function(value) {
  return value
    .split('<br>')
    .map(function(item) {
      return item
        .trim()
        .replace('<strong>', '')
        .replace('</strong>','')
      }
    );
};
var sanitizers = {
  dragonID: function (value) {
    return parseInt(
      value
        .trim()
        .replace('(#', '')
        .replace(')', ''),
      10
    )
  },
  getColor: function(value) {
    return cleanDragonStat(value)[0];
  },
  getGene: function(value) {
    return cleanDragonStat(value)[1];
  },
}

var scrapeSources = {
  name: {
    selector: '.dragon-profile-header-name',
    propertyName: 'innerText',
  },
  dragonID: {
    selector: '.dragon-profile-header-number',
    propertyName: 'innerText',
    sanitizer: 'dragonID',
  },
  species: {
    selector: '.dragon-profile-stat-icon-value strong',
    propertyName: 'innerText',
  },
  gender: {
    selector: '#dragon-profile-icon-sex-tooltip strong',
    propertyName: 'innerText',
  },
  element: {
    selector: '#dragon-profile-icon-element-tooltip strong',
    propertyName: 'innerText',
  },
  image: {
    selector: '#dragon-profile-dragon-frame img',
    propertyName: 'src',
  },
  sceneImage: {
    selector: '#dragon-profile-scene',
    propertyName: 'style'
  },
  familiarImage: {
    selector: 'img.common-animated-familiar-frame',
    propertyName: 'src',
  },
  primaryColor: {
    selector: '#dragon-profile-physical > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)',
    propertyName: 'innerHTML',
    sanitizer: 'getColor',
  },
  primaryGene: {
    selector: '#dragon-profile-physical > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)',
    propertyName: 'innerHTML',
    sanitizer: 'getGene',
  },
  secondaryColor: {
    selector: '#dragon-profile-physical > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)',
    propertyName: 'innerHTML',
    sanitizer: 'getColor',
  },
  secondaryGene: {
    selector: '#dragon-profile-physical > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)',
    propertyName: 'innerHTML',
    sanitizer: 'getGene',
  },
  tertiaryColor: {
    selector: '#dragon-profile-physical > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)',
    propertyName: 'innerHTML',
    sanitizer: 'getColor',
  },
  tertiaryGene: {
    selector: '#dragon-profile-physical > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)',
    propertyName: 'innerHTML',
    sanitizer: 'getGene',
  },
};

var scrape = function (scrapeSources) {
  var result = {};
  Object.keys(scrapeSources).forEach(function (sourceKeyName) {
    var source = scrapeSources[sourceKeyName];
    var element = document.querySelector(source.selector);
    if (!element) {
      throw new Error('Invalid selector: ' + source.selector);
    }
    var elementValue = element[source.propertyName];
    var sanitizer = sanitizers[source.sanitizer];
    if (sanitizer) {
      elementValue = sanitizer(elementValue);
    }
    result[sourceKeyName] = elementValue;
  })
  return result;
};

var localStorageKey = 'DergScraping';

var scrapedData = scrape(scrapeSources);
var dragonsSoFar = JSON.parse(
  localStorage.getItem(localStorageKey) 
  || '{}'
);
dragonsSoFar[scrapedData.dragonID] = scrapedData;
localStorage.setItem(localStorageKey, JSON.stringify(dragonsSoFar));


/* Previous Version */

/* 
var dataSelectors = {
    name: {selector: '.dragon-profile-header-name', propertyName: 'innerText'},
      elementImage: {selector: 'span[data-tooltip-source="#dragon-profile-icon-element-tooltip"] img', propertyName: 'src'}
}

var destination = {};

Object.keys(dataSelectors).forEach(function(destinationPropertyName) {
    var howToFindIt = dataSelectors[destinationPropertyName];
      var element = document.querySelector(howToFindIt.selector);
      var elementValue = element[howToFindIt.propertyName];
      destination[destinationPropertyName] = elementValue;
});
*/
