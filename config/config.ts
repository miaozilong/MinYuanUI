export default {
    treeShaking: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: false,
            dynamicImport: false,
            title: 'MinYuanUI',
            dll: false,

            routes: {
                exclude: [
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

