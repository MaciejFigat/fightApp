export const validateEmail = (email: string): string => {
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
  if (!email) {
    return 'Email is required'
  } else if (!emailPattern.test(email)) {
    return 'Email is invalid'
  } else {
    return ''
  }
}

export const validatePassword = (password: string): string => {
  if (!password) {
    return 'Password is required'
  } else if (password.length < 3) {
    return 'Password needs to be 3 characters or more'
  } else {
    return ''
  }
}
export const validateUsername = (username: string): string => {
  if (!username) {
    return 'username is required'
  } else if (username.length < 3) {
    return 'Username needs to be 3 characters or more'
  } else {
    return ''
  }
}
