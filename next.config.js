/* eslint-disable @typescript-eslint/no-var-requires */
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  // future: { webpack5: true },
  webpack(config, { buildId, isServer }) {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: [
        {
          loader: '@linaria/webpack-loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });

    const originalEntry = config.entry;
    // eslint-disable-next-line no-param-reassign
    config.entry = async () => {
      const entries = await originalEntry();
      if (isServer) {
        const entryName = `static/${buildId}/pages/_app.js`;
        if (
          entries[entryName] &&
          !entries[entryName].includes('./polyfills/server.ts')
        ) {
          entries[entryName].unshift('./polyfills/server.ts');
        }
      } else if (
        entries['main.js'] &&
        !entries['main.js'].includes('./polyfills/client.ts')
      ) {
        entries['main.js'].unshift('./polyfills/client.ts');
      }

      return entries;
    };

    return config;
  },
});
