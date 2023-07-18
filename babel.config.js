let modules = process.env.BABEL_ENV === 'commonjs' || process.env.NODE_ENV === 'test' ? 'commonjs' : false;
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: '14'
            }
        }]
    ]
};