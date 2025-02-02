export function range([min, max]: [min: number, max: number], count: number): number[] {
  var output = []
  for (var i = 0; i < count; i++) output.push(min + ((max - min) * i) / (count - 1))
  return output
}
export function sum<T>(list: ArrayLike<T>, transform: (item: T) => number) {
  for (var i = 0, sum = 0, len = list.length; i < len; i++) sum += transform(list[i])
  return sum
}
export function find<T>(list: T[], predicate: (e: T) => boolean) {
  for (var i = 0; i < list.length; i++) if (predicate(list[i])) return list[i]
  return undefined
}
export function last<T>(list: T[]) {
  return list[list.length - 1]
}
export function hasSubstring(haystack: string, needle: string) {
  if (needle === '') return true
  if (!haystack) return false
  return haystack.indexOf(needle) !== -1
}
export function indexBy<T>(list: T[], key: keyof T): { [key: string]: T } {
  var obj: { [key: string]: T } = {}
  for (var i = 0; i < list.length; i++) obj[list[i][key] as any] = list[i]
  return obj
}
export function uniqueBy<T>(list: T[], property: keyof T): T[] {
  var seen: { [key: string]: boolean } = {}
  var out: T[] = []
  for (var i = 0; i < list.length; i++) {
    var key = list[i][property] as unknown as string
    if (!seen[key]) {
      seen[key] = true
      out.push(list[i])
    }
  }
  return out
}
