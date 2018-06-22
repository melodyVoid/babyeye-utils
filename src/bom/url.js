import getUrlParams from '../url/getUrlParams'
export const getParam = (url, name) => getUrlParams(url)[name]
