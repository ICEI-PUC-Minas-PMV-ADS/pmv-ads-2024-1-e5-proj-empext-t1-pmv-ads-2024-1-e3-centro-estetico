// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from 'axios'
import { Info, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { toast } from 'sonner'

import { getClientHealthQuestionaryLink } from '@/api/questionary'
import { ButtonWithIcon } from '@/components/button-with-icon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useUser } from '@/context/UserContext'
import { useTitle } from '@/hooks/useTitle'
import { TitleOfPages } from '@/utils/titleOfPages'

import imgPerson from '../../assets/imgPerson.svg'
import newTreatment from '../../assets/newTreatment.svg'
import { env } from '../../env'

export function PerfilClients() {
  const { users } = useUser()
  const { id } = useParams()
  const navigate = useNavigate()
  const { setTitle, setPreviousPath, setPreviousTitle, title } = useTitle()

  const user = users?.find((item) => item.id === id)

  const [healthQuestionnaire, setHealthQuestionnaire] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [questionnaireLink, setQuestionnaireLink] = useState('*')
  const hasHealthConditions = healthQuestionnaire?.oncological_history || healthQuestionnaire?.diabetes || healthQuestionnaire?.cardiac_issues

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title)
    navigate(path)
  }

  useEffect(() => {
    setPreviousPath(window.location.pathname)
    setPreviousTitle(title)
  },[])

  useEffect(() => {
    const fetchQuestionnaire = async () => {
      try {
        const response = await getClientHealthQuestionaryLink(id!)
        const data = response.data
        setQuestionnaireLink(data.link)
      } catch (error) {
        toast.error('Falha ao gerar o link. Tente novamente!')
      }
    }
    fetchQuestionnaire()
  }, [questionnaireLink, id])

  useEffect(() => {
    async function fetchHealthQuestionnaire() {
      try {
        const response = await axios.get(
          `${env.VITE_API_URL}/health-questionnaire-by-client-id?client_id=${id}`,
        )
        const data = await response.data
        setHealthQuestionnaire(data)
      } catch (error) {
        throw new Error(`Failed to fetch health questionnaire: ${error}`)
      } finally {
        setLoading(false)
      }
    }
    fetchHealthQuestionnaire()
  }, [id])

  const handleHealthQuestionnaireClick = () => {
    if (healthQuestionnaire) {
      navigate(`/perfil-users/${id}/view-questionnaire`)
    } else {
      setShowPopup(true)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  const handleCopyToClipboard = () => {
    try {
      navigator.clipboard.writeText(questionnaireLink)
      toast.success('Link copiado com sucesso. Envie via WhatsApp!')
    } catch (error) {
      toast.error('Falha ao gerar o link. Tente novamente!')
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'xs'}
          onClick={() =>
            navigateUpdatingHeader(
              `/perfil-users/${id}/info-client`,
              TitleOfPages.infoClient,
            )
          }
        >
          <Info />
        </Button>
      </div>
      <div className="align-space-around flex justify-around pb-2">
        <div>
          <ReactSVG src={imgPerson} />
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex justify-between">
            <Button variant={'telephone'} size={'icon'}>
              <Phone />
            </Button>
            <p className="pl-2 pt-2 font-semibold">{user?.phone}</p>
          </div>
          <div className="flex flex-col justify-around">
            <Button onClick={() => navigate(`/appointments-list/${id}`)}>
              <p>Histórico do cliente</p>
            </Button>
          </div>
        </div>
      </div>
      
      {hasHealthConditions && (
        <>
          <h1 className="pl-3 pt-6 text-lg font-semibold">Condições de Saúde</h1>
          <div className="flex justify-evenly pt-4">
            {healthQuestionnaire?.oncological_history && (
              <Badge variant="alertred">
                <p>Histórico Oncológico</p>
              </Badge>
            )}
            {healthQuestionnaire?.diabetes && (
              <Badge variant="alertred">
                <p>Diabético</p>
              </Badge>
            )}
            {healthQuestionnaire?.cardiac_issues && (
              <Badge variant="alertred">
                <p>Cardíaco</p>
              </Badge>
            )}
          </div>
        </>
      )}

      <h1 className="pb-4 pl-3 pt-6 text-lg font-semibold">
        Fichas de Anamnese
      </h1>
      <div className="flex flex-col gap-5">
        <ButtonWithIcon
          title="Questionário de saúde"
          onClick={handleHealthQuestionnaireClick}
        />
        <ButtonWithIcon
          title="Ficha facial"
          onClick={() => navigate(`/facial-form/${id}`)}
        />
        <ButtonWithIcon
          title="Últimas medidas corporais"
          onClick={() => navigate(`/body-measure/${id}`)}
        />
      </div>
      <div className="self-center pt-20">
        <Button
          asChild
          variant="ghost"
          className="p-0"
          onClick={() =>
            navigateUpdatingHeader('/appointment', TitleOfPages.appointment)
          }
        >
          <ReactSVG src={newTreatment} />
        </Button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-medium">
          <div className="flex w-80 flex-col items-center rounded-lg bg-white p-7">
            <p className="mb-4">
              Questionário de saúde não preenchido.
              <br />
              <br />
              Gere um link e envie para o cliente.
            </p>
            <div className="mb-4">
              <Button variant={'telephone'} onClick={handleCopyToClipboard}>
                Clique aqui para gerar o link!
              </Button>
            </div>
            <div className="flex w-full justify-around">
              <Button variant={'forms'} onClick={closePopup}>
                Fechar
              </Button>
              <Button
                onClick={() => navigate(`/perfil-users/${id}/questionary`)}
              >
                Acessar questionário
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
