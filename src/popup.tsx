import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { mains, maps, melees, specials, tools } from './const'
import { chooseMap, returnOneAtRandom } from './util'

const Popup = () => {
  const [random, setRandom] = useState<string[][]>([])

  const roulette = () => {
    const r: string[][] = [[], [], [], [], []]
    for (let i = 0; i < 4; i++) {
      r[i].push(returnOneAtRandom<string>(mains))
      r[i].push(returnOneAtRandom<string>(specials))
      r[i].push(returnOneAtRandom<string>(tools))
      r[i].push(returnOneAtRandom<string>(melees))
    }
    r[4] = chooseMap(maps)
    return r
  }

  return (
    <>
      <ul style={{ minWidth: '500px' }}>
        {random.map((r, i) => (
          // <li key={i}>{r}</li>
          <li key={i}>
            {r.map((l, j) => (
              <span key={j}>{l}&ensp;</span>
            ))}
          </li>
        ))}
      </ul>
      <button onClick={() => setRandom(roulette())}>next</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('root')
)
