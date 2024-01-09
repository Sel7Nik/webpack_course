import { Configuration } from 'webpack'
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// import 'webpack-dev-server';


export function buildWebpack(options: BuildOptions): Configuration {
  const { mode, paths } = options
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  return {
    mode: mode ?? 'development',

    entry: {
      // main_bundle: path.resolve(__dirname, 'src', 'index.tsx'),
      main_bundle: paths.entry
    },
    output: {
      // path: path.resolve(__dirname, 'build'),
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins:
      buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false,
    // devServer: isDev ? buildDevServer(options) : undefined
    // devServer: isDev ? { port: 3033, open: true, historyApiFallback: true } : undefined
    devServer: buildDevServer(options)

  };
}