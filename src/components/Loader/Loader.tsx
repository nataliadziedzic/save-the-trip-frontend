import * as React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { LoaderContainer } from './Loader.style'

const Loader: React.FC = () => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    document.addEventListener('loading', () => setLoading(true))
    document.addEventListener('finishLoading', () => setLoading(false))
  }, [])

  return loading ? (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  ) : null
}

export default Loader
