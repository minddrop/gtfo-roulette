export const mains = [
  'PISTOL',
  'MACHINE PISTOL',
  'SMG',
  'HEAVY SMG',
  'DMR',
  'DOUBLE TAP RIFLE',
  'ASSAULT RIFLE',
  'BURST RIFLE',
]

export const specials = [
  'SHOTGUN',
  'COMBAT SHOTGUN',
  'REVOLVER',
  'MACHINEGUN',
  'HEL GUN',
  'SNIPER',
  'HEL RIFLE',
]

export const tools = [
  'C-FORM LAUNCHER',
  'BIO TRACKER',
  'MINE DEPLOYER',
  'AUTO SENTRY',
  'SNIPER SENTRY',
  'BURST SENTRY',
]

export const melees = ['SLEDGEHAMMER', 'MAUL', 'MALLET', 'GAVEL']

export const allLevels: string[] = [
  'HIGH',
  'EXTREME',
  '#ER02:// OVERLOAD',
  'PRISONER EFFICIENCY',
]

export const maps: { [key: string]: string[] }[] = [
  { A1: ['HIGH', 'EXTREME'] },
  { A2: allLevels },
  { B1: allLevels },
  { B2: allLevels },
  { B3: ['HIGH', 'EXTREME'] },
  { C1: ['HIGH', 'EXTREME'] },
  { C2: allLevels },
  { D1: ['HIGH', 'EXTREME'] },
]
