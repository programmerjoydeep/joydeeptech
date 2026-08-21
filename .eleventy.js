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
  // DATE FILTER
  // =========================================
  // Formats dates for Nunjucks templates

  eleventyConfig.addFilter("date", function (value, format) {

    if (!value) return "";

    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return value;
    }

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    // yyyy-MM-dd
    if (format === "yyyy-MM-dd") {

      const year = date.getFullYear();

      const month = String(date.getMonth() + 1).padStart(2, "0");

      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;

    }


    // MMMM dd, yyyy
    if (format === "MMMM dd, yyyy") {

      const month = months[date.getMonth()];

      const day = String(date.getDate()).padStart(2, "0");

      const year = date.getFullYear();

      return `${month} ${day}, ${year}`;

    }


    // Default format
    return date.toISOString().split("T")[0];

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
  // ARTICLES COLLECTION
  // =========================================
  // Gets all Markdown articles created through
  // Decap CMS from content/articles/

  eleventyConfig.addCollection("articles", function (collectionApi) {

    return collectionApi.getFilteredByGlob(
      "content/articles/*.md"
    );

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
  // AUTOMATIC CATEGORY LIST
  // =========================================

  eleventyConfig.addCollection("categoryList", function (collectionApi) {

    const categories = new Set();

    collectionApi.getAll().forEach(function (item) {

      if (item.data.category) {

        categories.add(item.data.category);

      }

    });

    return Array.from(categories).sort();

  });


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
