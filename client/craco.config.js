module.exports = {
  style: {
    //in the docs it's appear as 'postcss' but it's throw an error without the addtion 'Option'. so dont change
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
