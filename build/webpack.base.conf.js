'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')
const vueMarkdown = {
	preprocess: (MarkdownIt, source) => {
		MarkdownIt.renderer.rules.table_open = function () {
			return '<table class="table">'
		}
		MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
		return source
	},
	use: [
		[MarkdownItContainer, 'demo', {
			validate: params => params.trim().match(/^demo\s*(.*)$/),
			render: (tokens, idx) => {
				if (tokens[idx].nesting === 1) {
					const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'));

					const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
					if(m && m[1]) { // demo 有配置info
						const infoArr = m[1].split("|");
						let str = "";
						for(let i = 1 ; i < infoArr.length; i++) {
							str += `<p>${infoArr[i].trim()}</p>`
						}
						return `<art-demo>`
							+ `<div slot="demo">${html}</div>`
							+ `<div slot="info"><h4>${infoArr[0].trim()}</h4>${str}</div>`
							+ `<div slot="source-code">`
					} else {
						return `<art-demo>`
							+ `<div slot="demo">${html}</div>`
							+ `<div slot="source-code">`
					}
				} else {
					// closing tag
					return '</div></art-demo>'
				}
			}
		}]
	]
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['babel-polyfill','./examples/main.js'],
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('examples'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
	    {
		    test: /\.md$/,
		    loader: 'vue-markdown-loader',
		    options: vueMarkdown
	    },
	    {
		    test: /\.html$/,
		    loader: 'vue-html-loader'
	    },
    ]
  }
}
