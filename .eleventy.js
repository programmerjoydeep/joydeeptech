module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("image");

  // Keep Decap CMS configuration available
  eleventyConfig.addPassthroughCopy("admin/config.yml");

  // Keep existing SEO files
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };

};
