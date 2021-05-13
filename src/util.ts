export const returnOneAtRandom = <T>(a: T[]): T => {
  return a[Math.floor(Math.random() * a.length)]
}

export const chooseMap = (m: { [key: string]: string[] }[]): string[] => {
  const n = returnOneAtRandom<{ [key: string]: string[] }>(m)
  const map: string = Object.keys(n)[0]
  const level = returnOneAtRandom<string>(n[map])
  return [map, level]
}
