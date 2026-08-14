module.exports = function (eleventyConfig) {

  // CSS and JavaScript
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");

  // Root-level images
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.webp");

  // Decap CMS
  eleventyConfig.addPassthroughCopy("admin");

  // CMS uploaded images
  eleventyConfig.addPassthroughCopy("uploads");

  // SEO files
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
