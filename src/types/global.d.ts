declare interface IDictionary<T = unknown> {
  [key: string]: T
}

declare interface IDataStore<T = unknown> {
  loading: boolean
  data: T
  error: string | null
}

declare type Skills =
  | 'ts'
  | 'js'
  | 'vcs'
  | 'git'
  | 'safari'
  | 'deploy'
  | 'react'
  | 'vue'
  | 'dp'

declare interface ISkill {
  key: Skills
  title: string
  image: string
}
