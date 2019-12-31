import fs from 'fs'
import lessToJs from 'less-vars-to-js'

export const getLessVars = (): IDictionary<string> => {
  const palette = fs.readFileSync('./theme.less')
  return lessToJs(palette, { stripPrefix: true })
}
