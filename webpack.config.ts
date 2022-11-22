import * as path from 'path';
import {Configuration as WebpackConfiguration} from "webpack";
import DotEnv from 'dotenv-webpack';
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin';
import nodeExternals from 'webpack-node-externals'

process.env.TS_NODE_PROJECT = '';
const tsConfigPath = path.join(__dirname, 'src', 'tsconfig.json');
const IS_PROD = process.env.NODE_ENV === 'production';
const IS_DEV = !IS_PROD;

const plugins = [
    new DotEnv({systemvars: true, path: path.join(__dirname, '.env')})
]

const config: WebpackConfiguration = {
    target: 'node',
    externals: [nodeExternals()],
    mode: IS_DEV ? 'development' : 'production',
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'server.ts'),
    output: {
        path: path.resolve('dist'),
        filename: `server.js`,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({configFile: tsConfigPath}) as any],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins,
    optimization: {
        minimize: !IS_DEV,
    },
}
export default config