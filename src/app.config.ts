/*
 * @Description: 
 * @Version: 
 * @Autor: Liang Zhong Wei
 * @Date: 2020-12-08 10:18:16
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-12-18 14:52:28
 */
export default {
  pages: [
    'pages/index/index',
    'pages/home/index',
    'pages/index/hooks',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subPackages: [
    {
      "root": 'pages/echarts/',
      "pages": [
        'Bar'
      ]
    }
  ]
}
