import * as os from 'os'

export const isMemoryAvailable = () => {
  const freeMemory = os.freemem()
  return freeMemory > 0
}
