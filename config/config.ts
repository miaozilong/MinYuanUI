export default {
    treeShaking: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: false,
            title: 'MinYuanUI',
            dll: false,
            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//,
                ],
            },
        }],
    ],
    urlLoaderExcludes: [/.svg$/],
    chainWebpack(config, {webpack}) {
        config.module
            .rule('svg')
            .test(/.svg(\?v=\d+.\d+.\d+)?$/)
            .use([
                {
                    loader: 'babel-loader'
                },
                {
                    loader: '@svgr/webpack',
                    options: {
                        babel: false,
                        icon: true
                    }
                }
            ])
            .loader(require.resolve('@svgr/webpack'));
    },
}

