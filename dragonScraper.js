/*                                                          */
/* This scraper, when run on a Flight Rising dragon's page, */
/* generates an object of the following shape:              */
/*                                                          */
// dragonID: { 
//   name, dragonID, species, silhouette, 
//   element, sceneID, familiarID, 
//   colors[primary, secondary, tertiary], 
//   genes[primary, secondary, tertiary]
// }
// 

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
  dragonID: function(value) {
    return parseInt(
      value
        .trim()
        .replace('(#', '')
        .replace(')', ''),
      10
    )
  },
  getSpecies: function(value) {
    var result = value.split("\n");
    return result[1];
  },
  getSceneID: function(cssFancyObject) {
    // "background-image:url(/static/cms/scene/34845.png)"
    var value = cssFancyObject.cssText;
    var urlValueRegex = /url\((.*)\)/gim;
    var quotesRegex = /["']/gm; 
    var searchResult = urlValueRegex.exec(value) || [];
    var sanitized = searchResult[1] || '';
    sanitized = sanitized.replace(quotesRegex, '');
    var result;
    if (sanitized) {
      var paths = sanitized.split('/');
      var imageName = paths[paths.length-1];
      result = imageName.split('.')[0];
    }
    // if (sanitized) {
    //     result = 'https://www1.flightrising.com' + sanitized;
    // }
    return parseInt(result);
  },
  getFamiliarID: function(value) {
    var paths = value.split('/');
    var imageName = paths[paths.length-1];
    result = imageName.split('.')[0];
    return parseInt(result);
  },
  getColor: function(value) {
    return cleanDragonStat(value)[0];
  },
  getGene: function(value) {
    return cleanDragonStat(value)[1];
  },
};

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
    selector: '#dragon-profile-physical > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)',
    propertyName: 'innerText',
    sanitizer: 'getSpecies'
  },
  silhouette: {
    selector: '#dragon-profile-icon-sex-tooltip strong',
    propertyName: 'innerText',
  },
  element: {
    selector: '#dragon-profile-icon-element-tooltip strong',
    propertyName: 'innerText',
  },
  sceneID: {
    selector: '#dragon-profile-scene',
    propertyName: 'style',
    sanitizer: 'getSceneID',
  },
  familiarID: {
    selector: 'img.common-animated-familiar-frame',
    propertyName: 'src',
    sanitizer: 'getFamiliarID',
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

var scrape = function(scrapeSources) {
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

var flattenGenetics = function(dragon) {
  var colorKeys = [ 'primaryColor', 'secondaryColor', 'tertiaryColor' ];
  var geneKeys = ['primaryGene', 'secondaryGene', 'tertiaryGene'];
  var colors = [];
  var genes = [];
  colorKeys.forEach(function(key, index) {
    colors[index] = dragon[key];
  });
  geneKeys.forEach(function(key, index) {
    genes[index] = dragon[key];
  });
  dragon['colors'] = colors;
  dragon['genes'] = genes;
  var toRemove = colorKeys.concat(geneKeys);
  toRemove.forEach(function(item) {
    delete dragon[item];
  });
};

var localStorageKey = 'DergScraping';

var scrapedData = scrape(scrapeSources);
var dragonsSoFar = JSON.parse(
  localStorage.getItem(localStorageKey) 
  || '{}'
);
flattenGenetics(scrapedData);
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
