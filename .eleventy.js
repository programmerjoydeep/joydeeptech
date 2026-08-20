const markdownIt = require("markdown-it");

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true
});

module.exports = function (eleventyConfig) {

  // =========================================
  // MARKDOWN FILTER
  // =========================================

  eleventyConfig.addFilter("markdown", function (value) {
    if (!value) return "";
    return md.render(value);
  });


  // =========================================
  // CATEGORY FILTER
  // =========================================
  // Filters articles according to their category

  eleventyConfig.addFilter("filterByCategory", function (articles, category) {

    if (!articles || !category) {
      return [];
    }

    return articles.filter(function (article) {

      return article.data.category === category;

    });

  });


  // =========================================
  // CSS AND JAVASCRIPT
  // =========================================

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");


  // =========================================
  // ROOT-LEVEL IMAGES
  // =========================================

  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.webp");


  // =========================================
  // DECAP CMS
  // =========================================

  eleventyConfig.addPassthroughCopy("admin");


  // =========================================
  // CMS UPLOADED IMAGES
  // =========================================

  eleventyConfig.addPassthroughCopy("uploads");


  // =========================================
  // SEO FILES
  // =========================================

  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");


  // =========================================
  // ELEVENTY CONFIGURATION
  // =========================================

  return {

    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }

  };

};
