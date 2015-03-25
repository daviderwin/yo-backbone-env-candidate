define(['handlebars'], function(Handlebars) {

this["handlebars"] = this["handlebars"] || {};

this["handlebars"]["test.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "Test Template";
  },"useData":true});

return this["handlebars"];

});