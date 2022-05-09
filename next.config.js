const withPlugins = require("next-compose-plugins");
const withTranspileModules = require("next-transpile-modules")([
  "@hitachivantara/uikit-react-core",
  "@hitachivantara/uikit-react-icons",
]); // pass the modules you would like to see transpiled

const { i18n } = require("./next-i18next.config");

module.exports = withPlugins([withTranspileModules], {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
  i18n,
});
