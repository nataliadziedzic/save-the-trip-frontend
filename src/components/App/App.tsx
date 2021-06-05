import React from 'react'
import { IntlProvider } from 'react-intl'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeLanguage } from '../../redux/language'
import englishMessages from '../../languages/en.json'
import polishMessages from '../../languages/pl.json'
import Authorization from '../Authorization/Authorization'

const App = () => {
  const { language } = useAppSelector(state => state.language)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    if (navigator.language === 'pl') {
      dispatch(changeLanguage(polishMessages))
    } else {
      dispatch(changeLanguage(englishMessages))
    }
  }, [])

  return (
    <IntlProvider locale={navigator.language || 'en'} messages={language}>
      <div className='App'>
        <Authorization />
      </div>
    </IntlProvider>
  )
}

export default App
