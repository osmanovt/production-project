import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        // entry: {
        //   RANDOM: path.resolve(__dirname, 'src', 'index.tsx'),
        // },
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            // обработка файлов отличимых от js
            rules: buildLoaders(options),
        },
        // файлы для которых не нужно указывать расширение при import
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
