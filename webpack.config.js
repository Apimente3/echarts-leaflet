var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'echarts-leaflet': __dirname + '/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['echarts-leaflet'],
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts': 'echarts',
        'leaflet': 'L'
    }
};