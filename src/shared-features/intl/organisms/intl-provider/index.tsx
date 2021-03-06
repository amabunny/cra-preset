import React from 'react'
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { useStore } from 'effector-react'
import { $language, $intl } from '../../model'

interface IProps {
  children: React.ReactNode
}

export const IntlProvider = ({ children }: IProps) => {
  const language = useStore($language)
  const { data, loading } = useStore($intl)

  if (loading || !language) {
    return (
      <>
        loading...
      </>
    )
  }

  return (
    <ReactIntlProvider
      locale={language}
      messages={data}
    >
      {children}
    </ReactIntlProvider>
  )
}
