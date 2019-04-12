module.exports = {
  title: 'JavaScript设计模式',
  description: 'javascript设计模式实践整理',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '基础提要', link: '/base/' },
      { text: '设计模式', link: '/designMode/' },
      { text: '关于', link: '/about' },
    ],
    sidebar: {
      '/base/': [
        '',
        'fooOne',
        'fooTwo'
      ],
      '/designMode/': [
        '',
        'barOne',
        'barTwo'
      ],
      '/designSkill/': [
        ''
      ]
    },
    search: true,
    searchMaxSuggestions: 10
  }
}
