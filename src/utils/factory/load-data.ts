import { createStore, createEffect } from 'effector'

interface ICreateLoadDataStore<T, Params> {
  loadDataHandler: (params: Params) => Promise<T>
  initialData: T
}

/** Factory: create store that contains data using async loading effect */
export const createLoadDataStore = <T, Params = void>({
  loadDataHandler,
  initialData
}: ICreateLoadDataStore<T, Params>) => {
  /** Effect: start to load data and save it to data store */
  const loadData = createEffect({ handler: loadDataHandler })

  /** Store: data store that can be loaded using loadData effect */
  const $dataStore = createStore<IDataStore<T>>({
    loading: false,
    data: initialData,
    error: ''
  })

  $dataStore
    .on(loadData.pending, (state, loading) => ({ ...state, loading }))
    .on(loadData.done, (state, { result }) => ({ ...state, data: result, error: null }))
    .on(loadData.fail, (state, { error }) => ({ ...state, error: error.message }))

  /** Computed: map only data to use it directly */
  const $data = $dataStore.map(({ data }) => data)

  return {
    $dataStore,
    $data,
    loadData
  }
}
