import * as React from 'react'
import { updatePreferredLanguage } from '../../../api/user.api'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setUserLanguage } from '../../../redux/slices/user'
import { SwitcherWrapper } from './LanguageSwitcher.style'

export interface LanguageSwitcherProps {}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    document.querySelectorAll('.language').forEach(element => element.classList.remove('chosenLang'))
    let lang = null
    if (user.preferredLanguage) {
      lang = document.querySelector(`.${user.preferredLanguage}`)
    } else if (navigator.language === 'pl') {
      lang = document.querySelector('.pl')
    } else {
      lang = document.querySelector('.en')
    }
    lang && lang.classList.add('chosenLang')
  }, [user])

  const switchLanguage = (language: 'pl' | 'en') => {
    language !== user.preferredLanguage &&
      updatePreferredLanguage(user, { preferredLanguage: language }, () => dispatch(setUserLanguage(language)))
  }

  return (
    <SwitcherWrapper className='switcherWrapper'>
      <div className='language en button' onClick={() => switchLanguage('en')}>
        EN
      </div>
      <span className='divider'>/</span>
      <div className='language pl button' onClick={() => switchLanguage('pl')}>
        PL
      </div>
    </SwitcherWrapper>
  )
}

export default LanguageSwitcher
