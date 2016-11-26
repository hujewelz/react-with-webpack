# react-with-webpack
### 环境搭建
安装 webpack
```
npm install webpack -g
```
参数-g表示我们将全局(global)安装 webpack, 这样你就能使用 webpack 命令了.

webpack 也有一个 web 服务器 webpack-dev-server, 我们也安装上
```
npm install webpack-dev-server -g
```
### 安装依赖
安装 React:
```
npm install react react-dom --save
```
为了简化 AJAX 请求代码, 引入 jQuery:
```
npm install jquery --save
```
安装 Babel 的 loader 以支持 ES6 语法:
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
```
url-loader和css-loader
```
npm install url-loader file-loader --save-dev
npm install css-loader style-loader --save-dev
```
* `css-loader` 处理 css 文件中的 `url()` 表达式.
* `style-loader` 将 css 代码插入页面中的 `style` 标签中.
