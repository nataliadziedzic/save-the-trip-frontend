/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useIntl } from 'react-intl'
import _ from 'underscore'
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList'
import { getDocuments } from '../../../api/documents.api'
import { ITrip } from '../../../types'
import { documentsTypes } from '../../../variables'
import { DocumentsWrapper } from './DocumentsList.style'

export interface DocumentsListProps {
  trip: ITrip
}

const DocumentsList: React.FC<DocumentsListProps> = ({ trip }) => {
  const intl = useIntl()
  const [allDocuments, setAllDocuments] = React.useState({})
  const [selectedDocuments, setSelectedDocuments] = React.useState<string[]>([])

  const translateDocument = (document: string) => {
    if (document === documentsTypes.PASSPORT) return intl.formatMessage({ id: 'passport' })
    if (document === documentsTypes.VISA) return intl.formatMessage({ id: 'visa' })
    if (document === documentsTypes.ID_CARD) return intl.formatMessage({ id: 'id-card' })
    if (document === documentsTypes.EU_COVID_CERTIFICATE) return intl.formatMessage({ id: 'eu-covid-certificate' })
    if (document === documentsTypes.COVID_PCR_TEST) return intl.formatMessage({ id: 'covid-pcr-test' })
    if (document === documentsTypes.COVID_ANTIGEN_TEST) return intl.formatMessage({ id: 'covid-antigen-test' })
    if (document === documentsTypes.VACCINATION_CERTIFICATE)
      return intl.formatMessage({ id: 'vaccination-certificate' })
    if (document === documentsTypes.DRIVING_LICENCE) return intl.formatMessage({ id: 'driving-licence' })
    if (document === documentsTypes.EHIC) return intl.formatMessage({ id: 'ehic' })
    return document
  }

  React.useEffect(() => {
    if (trip) {
      getDocuments(trip.id!, setAllDocuments)
    }
  }, [trip])

  React.useEffect(() => {
    let docs: string[] = []
    _.mapObject(allDocuments, (value, key) => {
      if (key !== 'id' && key !== 'user_id' && key !== 'trip_id') {
        const documentName = translateDocument(key)
        value && docs.push(documentName)
      }
    })
    setSelectedDocuments(docs)
  }, [allDocuments])

  return (
    <DocumentsWrapper className='listWrapper'>
      <h3 className='listTitle'>
        {intl.formatMessage({ id: 'needed-documents' })} <FeaturedPlayListIcon />
      </h3>
      <ul>
        {selectedDocuments.map((document, index) => (
          <li key={index}>{document}</li>
        ))}
        <div className='button outlinedButton'>{intl.formatMessage({ id: 'edit' })}</div>
      </ul>
    </DocumentsWrapper>
  )
}

export default DocumentsList
