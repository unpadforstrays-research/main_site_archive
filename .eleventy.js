const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.min.css');
  eleventyConfig.addPassthroughCopy('./src/asset');
	
	eleventyConfig.addCollection("recentPosts", function(collectionApi) {
  return collectionApi.getFilteredByGlob("./src/articles/*.md").reverse().slice(0, 3);
});
	
	eleventyConfig.addFilter("postDate", (dateObj) => {
			return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
    return {
      templateFormats: ["md", "njk", "html", "liquid"],

      markdownTemplateEngine: "liquid",
      htmlTemplateEngine: "liquid",
      dataTemplateEngine: "liquid",
      
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
