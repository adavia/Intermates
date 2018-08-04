import cookie from 'js-cookie'

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value)
  }
}

export const deleteCookie = key => {
  if (process.browser) { 
    cookie.remove(key) 
  }
}

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req)
}

const getCookieFromBrowser = key => {
  return cookie.get(key)
}

const getCookieFromServer = (key, req) => {

  if (!req || !req.headers || !req.headers.cookie) {
    return undefined
  }

  return req.headers.cookie.split("=")[1]
}