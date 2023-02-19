const path = require('path');

module.exports = {
  name: 'gugudan_setting', // webpack 설정이름
  mode: 'development', // 실서비스에서는 production
  devtool: 'eval',

  resolve: {
    extensions: ['.js','.jsx'],
  },
  
  entry: { // 입력되는 곳, client.jsx와 GuGuDan.jsx
    app: ['./client.jsx', './GuGuDan.jsx'],
  },

  module: {
    rules: [{
      test: /\.jsx/, // js와 jsx 전부확인
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env','@babel/preset-react'],
      },
    }],
  },

  output: { // 출력되는 곳 app.js
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },

};