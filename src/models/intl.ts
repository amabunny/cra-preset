import { selfApi } from 'api/self'

export class IntlModel {
  static path = 'dictionaries'

  static async getDictionary (languageCode: string) {
    const { data } = await selfApi.get<IDictionary<string>>(`${IntlModel.path}/${languageCode}.json`)
    return data
  }
}
