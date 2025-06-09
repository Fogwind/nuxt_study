export const useCounter = () => useState('count', () => 1)
/**
 * 页面上多次使用useCounter创建变量，多个变量的值是共享的
 */

