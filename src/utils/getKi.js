export const getKi = (character) => {
  let ki = character.ki.replaceAll('.', '')
  const kiNumber = Number(ki)
  console.log(kiNumber)
  return { ...character, ki: kiNumber }
}
