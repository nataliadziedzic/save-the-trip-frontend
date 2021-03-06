import * as React from 'react'
import { useIntl } from 'react-intl'
import { DialogContentText, DialogTitle, DialogContent, DialogActions, Divider, Checkbox } from '@material-ui/core'
import { addDocuments } from '../../../api/documents.api'
import { useDocumentsContext } from '../../../context/documents.context'
import { DocumentsList, StyledDocsDialog } from './AddDocs.style'
import DialogButton from '../DialogButton/DialogButton'
import { IDocuments } from '../../../types'

export interface AddDocsDialogProps {
  open: boolean
  setOpen: (arg: boolean) => void
  userId: number
  // tripId, allDocuments and setAllDocuments should only be provided from a single trip view 'DocumentsList' file
  tripId?: number | null
  allDocuments?: IDocuments | null
  setAllDocuments?: React.Dispatch<React.SetStateAction<IDocuments | null>>
}

const AddDocsDialog: React.FC<AddDocsDialogProps> = ({
  open,
  setOpen,
  userId,
  tripId,
  allDocuments,
  setAllDocuments,
}) => {
  const intl = useIntl()
  const documentsContext = useDocumentsContext()

  const [passport, setPassport] = React.useState(false)
  const [visa, setVisa] = React.useState(false)
  const [idCard, setIdCard] = React.useState(false)
  const [euCovidCertificate, setEuCovidCertificate] = React.useState(false)
  const [covidPCRtest, setCovidPCRtest] = React.useState(false)
  const [covidAntigenTest, setCovidAntigenTest] = React.useState(false)
  const [vaccinationCertificate, setVaccinationCertificate] = React.useState(false)
  const [drivingLicence, setDrivingLicence] = React.useState(false)
  const [ehic, setEhic] = React.useState(false)
  const availableDocs = [
    { name: intl.formatMessage({ id: 'passport' }), value: passport, changeFunction: setPassport },
    { name: intl.formatMessage({ id: 'visa' }), value: visa, changeFunction: setVisa },
    { name: intl.formatMessage({ id: 'id-card' }), value: idCard, changeFunction: setIdCard },
    {
      name: intl.formatMessage({ id: 'eu-covid-certificate' }),
      value: euCovidCertificate,
      changeFunction: setEuCovidCertificate,
    },
    { name: intl.formatMessage({ id: 'covid-pcr-test' }), value: covidPCRtest, changeFunction: setCovidPCRtest },
    {
      name: intl.formatMessage({ id: 'covid-antigen-test' }),
      value: covidAntigenTest,
      changeFunction: setCovidAntigenTest,
    },
    {
      name: intl.formatMessage({ id: 'vaccination-certificate' }),
      value: vaccinationCertificate,
      changeFunction: setVaccinationCertificate,
    },
    { name: intl.formatMessage({ id: 'driving-licence' }), value: drivingLicence, changeFunction: setDrivingLicence },
    { name: intl.formatMessage({ id: 'ehic' }), value: ehic, changeFunction: setEhic },
  ]

  const handleClose = () => {
    setOpen(false)
  }
  const addTripDocuments = () => {
    if (documentsContext?.tripId) {
      addDocuments(
        documentsContext.tripId,
        {
          passport,
          visa,
          id_card: idCard,
          eu_covid_certificate: euCovidCertificate,
          covid_pcr_test: covidPCRtest,
          covid_antigen_test: covidAntigenTest,
          vaccination_certificate: vaccinationCertificate,
          driving_licence: drivingLicence,
          trip_id: documentsContext.tripId,
          user_id: userId,
          ehic,
        },
        () => setOpen(false),
        () => availableDocs.map(document => document.changeFunction(false))
      )
    } else if (tripId) {
      // If tripId is provided in props then it means it is evoked from single trip view and need different handling
      addDocuments(
        tripId,
        {
          passport,
          visa,
          id_card: idCard,
          eu_covid_certificate: euCovidCertificate,
          covid_pcr_test: covidPCRtest,
          covid_antigen_test: covidAntigenTest,
          vaccination_certificate: vaccinationCertificate,
          driving_licence: drivingLicence,
          trip_id: tripId,
          user_id: userId,
          ehic,
        },
        () => setOpen(false),
        () => availableDocs.map(document => document.changeFunction(false)),
        setAllDocuments
      )
    }
  }
  React.useEffect(() => {
    if (allDocuments) {
      setPassport(allDocuments.passport)
      setVisa(allDocuments.visa)
      setIdCard(allDocuments.id_card)
      setEuCovidCertificate(allDocuments.eu_covid_certificate)
      setCovidPCRtest(allDocuments.covid_pcr_test)
      setCovidAntigenTest(allDocuments.covid_antigen_test)
      setVaccinationCertificate(allDocuments.vaccination_certificate)
      setDrivingLicence(allDocuments.driving_licence)
      setEhic(allDocuments.ehic)
    }
  }, [allDocuments])

  return (
    <StyledDocsDialog id='tripDialog' open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>{intl.formatMessage({ id: 'documents' })}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {intl.formatMessage({ id: 'add-documents-intro' })} <Divider />
        </DialogContentText>
        <DocumentsList>
          {availableDocs.map((document, index) => (
            <li key={index}>
              {document.name}{' '}
              <Checkbox
                checked={document.value}
                onChange={() => document.changeFunction(!document.value)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </li>
          ))}
        </DocumentsList>
      </DialogContent>
      <DialogActions>
        <DialogButton textContent='save' onClick={addTripDocuments} primary />
      </DialogActions>
    </StyledDocsDialog>
  )
}

export default AddDocsDialog
