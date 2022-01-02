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
})