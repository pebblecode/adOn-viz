/*global d3:true */
(function (){
  'use strict';

  var UK_POLITICAL_PARTY_COLOURS = {
    'Alliance Party of Northern Ireland': '#FFCC00'
  , 'Conservative': '#333399'
  , 'Democratic Unionist Party': '#CC3300'
  , 'Green Party': '#339900'
  , 'Independent': '#996699'
  , 'Labour': '#CC0000'
  , 'Liberal Democrat': '#FF9900'
  , 'Plaid Cymru': '#006600'
  , 'Scottish National Party': '#FFCC00'
  , 'Sinn Fein': '#003300'
  , 'Social Democratic and Labour Party': '#669966'
  , 'Speaker': '#333399'
  };

  var svg = d3.select('#main').append('svg')
    .attr('width', 330)
    .attr('height', 430);

  var map = UK.ElectionMap()
    .fill(function (constituency) { return UK_POLITICAL_PARTY_COLOURS[UK_GENERAL_ELECTION_RESULTS_2010[constituency]] || 'white'; })
    .origin({x: 55, y: 395});

  map(svg);

})();