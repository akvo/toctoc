// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    // directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  plugins: [
    /* ... */
    [
      "@snowpack/plugin-react-refresh",
      {
        /* options: see below */
      },
    ],
    [
      "@snowpack/plugin-sass",
      {
        /* see options below */
      },
    ],
    [
      "@snowpack/plugin-webpack",
      {
        /* see "Plugin Options" below */
        sourceMap: true,
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3040,
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   sourcemap: "external",
  //   target: "es2020",
  // },
};
