const withImages = require('next-images');

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'svg'],
  pageExtensions: ['page.tsx'],
  esModule: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    return config;
  },
});
