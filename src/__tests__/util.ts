import { chooseMap, returnOneAtRandom } from '../util'

test('chooseMap()', () => {
  const r = chooseMap([
    { A1: ['HIGH', 'EXTREME'] },
    { B1: ['HIGH', 'EXTREME'] },
  ])
  expect([
    ['A1', 'HIGH'],
    ['A1', 'EXTREME'],
    ['B1', 'HIGH'],
    ['B1', 'EXTREME'],
  ]).toContainEqual(r)
})

test('returnOneAtRandom()', () => {
  const r = returnOneAtRandom(['a', 'b', 'c'])
  expect(['a', 'b', 'c']).toContain(r)
})
