module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/vue01/'   // 关键：匹配子路径
    : '/'
}
