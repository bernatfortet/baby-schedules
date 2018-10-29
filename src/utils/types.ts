export enum BlockType {
  sleep = 'sleep',
  awake = 'awake',
  nap = 'nap',
  feed = 'feed',
  BedTimeRoutine = 'bedTimeRoutine',
  // MorningRoutine,
  // Outdoor,
  // Cotemplation
}

export const BlockAttr = {
  sleep: { label: 'Sleep', color: '#31435F' },
  awake: { label: 'Awake', color: '#F6AC56' },
  nap: { label: 'Nap', color: '#31727A' },
  feed: { label: 'Feed', color: '#99D87C' },
  bedTimeRoutine: { label: 'BTR', color: '#ffeeff' },
}

export type Assumptions = {
  monthsOld: number,
  minInDay: number,
  startOfDay: number,
  dailySleep: number,
  bedTime: number,
  napTime: number,
  maxNapTime: number,
  awakeTime: number,
  maxWakeSession: number,
  lastTimeForNaps: number,
  feedDuration: number,
}