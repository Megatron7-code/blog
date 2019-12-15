module.exports = {
  base: '/',
  title: 'Megatron7的博客',
  description: 'Vuepress blog demo',
  themeConfig: {
    tags: "/tags",
    displayAllHeaders: true, // 默认值：false
    lastUpdated: '上次更新', // string | boolean
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FirstBlog', link: '/blog/FirstBlog.md' },
      { text: 'SecondBlog', link: '/blog/SecondBlog.md' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: '我的GitHub', link: 'https://github.com/Megatron7-code', target: '_blank' },
      {
        text: "标签云",
        link: '/blog/tags/',
        tags: true
      }
    ],
    sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客'],
      ['/blog/SecondBlog.md', '我的第二篇博客'],
      ['/blog/Python/tornado.md', 'Python'],
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [
          ['/blog/FirstBlog.md', '我的第一篇博客'],
          ['/blog/SecondBlog.md', '我的第二篇博客'],
          ['/blog/Python/tornado.md', 'Python'],
        ]
      },
    ],
    logo: '/WechatIMG13.jpeg'
  }
};
