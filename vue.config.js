module.exports = {
  pages: {
    'popup/popup': {
      entry: 'src/popup/popup.ts',
      title: 'Popup'
    },
    'options/options': {
      entry: 'src/options/options.ts',
      title: 'Options'
    },
    'override/override': {
      entry: 'src/override/override.ts',
      title: 'Override'
    },
    'standalone/standalone': {
      entry: 'src/standalone/standalone.ts',
      filename: 'app.html',
      title: 'im-not-agree-naver-series'
    }
  },
  pluginOptions: {
    browserExtension: {
      registry: undefined,
      components: {
        background: true,
        popup: true,
        options: true,
        contentScripts: true,
        override: true,
        standalone: true
      },
      api: 'chrome',
      componentOptions: {
        background: {
          entry: 'src/background.ts'
        },
        contentScripts: {
          entries: {
            'content_scripts/content-script': [
              'src/content_scripts/content-script.ts'
            ]
          }
        }
      }
    }
  }
}
