import { getKi } from './getKi'

export const getRandom = (characters) => {
  const randomIndex = Math.floor(Math.random() * characters.length)
  return getKi(characters[randomIndex])
}
