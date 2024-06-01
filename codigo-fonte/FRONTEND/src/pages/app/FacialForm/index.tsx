// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { registerSkinForm, updateSkinForm } from '@/api/clientsForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import {
  acneGrades,
  bloodVessels,
  dehydrationLevels,
  fluidSkinLesions,
  hypotonias,
  melanotics,
  notMelanotics,
  oilinessLevels,
  others,
  pigmentedSpots,
  poreSizes,
  purpuricSpots,
  scars,
  skinColors,
  skinContains,
  skinInvolution,
  skinLesions,
  skinPhotoTypes,
  skinTextures,
  skinTypes,
  tyrichosis,
} from './constants/constants'
import { FacialFormFactory } from './factory/factory'
import { useGetSkinForm } from './useCases/useGetSkinForm'

const checkboxValueHandler = (e, field) => {
  const { checked, value } = e.target
  field.onChange(checked ? value : undefined)
}

const checkboxArrValueHandler = (e, field) => {
  const { checked, value } = e.target
  if (checked) {
    field.onChange([...field.value, value])
  } else {
    field.onChange(field.value.filter((val) => val !== value))
  }
}

const skinAnalysis = z.object({
  clientId: z.string(),
  skinPhototypes: z.string().optional(),
  skinColors: z.string().optional(),
  dehydrationLevels: z.string().optional(),
  skinTextures: z.string().optional(),
  poreSizes: z.string().optional(),
  skinTypes: z.string().optional(),
  oilinessLevels: z.string().optional(),
  acneGrades: z.string().optional(),
  skinInvolution: z
    .record(
      z.string(),
      z.object({
        type: z.string().optional(),
        typeDescription: z.string().optional(),
      }),
    )
    .optional(),
  skinContains: z.array(z.string()).optional(),
  hypotonias: z.array(z.string()).optional(),
  tyrichosis: z.array(z.string()).optional(),
  scars: z
    .record(
      z.string(),
      z.object({
        type: z.string().optional(),
        typeDescription: z.string().optional(),
      }),
    )
    .optional(),
  purpuricSpots: z.array(z.string()).optional(),
  pigmentedSpots: z.array(z.string()).optional(),
  melanotics: z.array(z.string()).optional(),
  notMelanotics: z.array(z.string()).optional(),
  skinLesions: z.array(z.string()).optional(),
  fluidSkinLesions: z.array(z.string()).optional(),
  bloodVessels: z
    .record(
      z.string(),
      z.object({
        type: z.string().optional(),
        typeDescription: z.string().optional(),
      }),
    )
    .optional(),
  others: z.string().optional(),
  additionalInformation: z.string().optional(),
})
type RegisterFacialForm = z.infer<typeof skinAnalysis>

const FacialForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm<RegisterFacialForm>({
    resolver: zodResolver(skinAnalysis),
  })
  const { clientId } = useParams()
  const navigate = useNavigate()
  const [ responseData, setResponseData ] = useState()

  const { mutateAsync: postSkinForm } = useMutation({
    mutationFn: registerSkinForm,
  })

  const { mutateAsync: putSkinForm } = useMutation({
    mutationFn: updateSkinForm,
  })

  console.log('Errors', errors)
  const query = useGetSkinForm(clientId);

  useEffect(() => {
    if (query.data) {
      setResponseData(query.data);
      const newData = FacialFormFactory(query.data);
      reset(newData);
    }
  }, [reset, query.data]);

  async function handleRegisterClient(data: Partial<RegisterFacialForm>) {
    try {
      if(query.data){
        await putSkinForm({ skinAnalysisId: query.data.id, data: data})
      } else {
        await postSkinForm({ ...data })
      }

      navigate('/')
      toast.success('Cliente cadastrado com sucesso!')
    } catch (error) {
      toast.error('Erro ao cadastrar usuário!')
    }
  }

  return (
    <div className="container mx-auto">
      <h2 className="mb-8 text-center text-3xl font-bold">Ficha Facial</h2>

      <form onSubmit={handleSubmit(handleRegisterClient)}>
        <input
          type="hidden"
          id="clientId"
          value={clientId}
          {...register('clientId')}
        />
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-8">
            <h3 className="mb-4 text-base font-medium">Fototipo</h3>
            <div className="space-y-2">
              {skinPhotoTypes.map((phototype) => (
                <div
                  key={`${phototype.id}-${phototype.label}`}
                  className="flex items-center"
                >
                  <Controller
                    control={control}
                    name="skinPhototypes"
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        id={phototype.id}
                        value={phototype.label}
                        checked={getValues('skinPhototypes') === phototype.label}
                        className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                      />
                    )}
                  />
                  <label
                    htmlFor={phototype.id}
                    className="mr-2 text-sm font-bold text-[#00A27B]"
                  >
                    {phototype.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-base font-medium">Coloração da Pele</h3>
            <div className="space-y-4">
              {skinColors.map((color) => (
                <div
                  key={`${color.id}-${color.label}`}
                  className="flex items-center"
                >
                  <Controller
                    control={control}
                    name="skinColors"
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        id={color.id}
                        value={color.label}
                        checked={getValues('skinColors') === color.label}
                        className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                      />
                    )}
                  />
                  <label
                    htmlFor={color.id}
                    className="mr-2 text-sm font-bold text-[#00A27B]"
                  >
                    {color.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-8">
            <h3 className="mb-6 text-base font-medium">
              Desidarataçâo da Pele
            </h3>
            <div className="space-y-2">
              {dehydrationLevels.map((hidatation) => (
                <div
                  key={`${hidatation.id}-${hidatation.label}`}
                  className="flex items-center"
                >
                  <Controller
                    control={control}
                    name="dehydrationLevels"
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        id={hidatation.id}
                        value={hidatation.label}
                        checked={getValues('dehydrationLevels') === hidatation.label}
                        className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                      />
                    )}
                  />
                  <label
                    htmlFor={hidatation.id}
                    className="mr-2 text-sm font-bold text-[#00A27B]"
                  >
                    {hidatation.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-base font-medium">Textura da Pele</h3>
            <div className="space-y-2">
              {skinTextures.map((texture) => (
                <div
                  key={`${texture.id}-${texture.label}`}
                  className="flex items-center"
                >
                  <Controller
                    control={control}
                    name="skinTextures"
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        id={texture.id}
                        value={texture.label}
                        checked={getValues('skinTextures') === texture.label}
                        className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                      />
                    )}
                  />
                  <label
                    htmlFor={texture.id}
                    className="mr-2 text-sm font-bold text-[#00A27B]"
                  >
                    {texture.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-base font-medium">Óstios</h3>
          <div className="grid grid-cols-2 gap-6">
            {poreSizes.map((ostium) => (
              <div
                key={`${ostium.id}-${ostium.label}`}
                className="flex items-center"
              >
                <Controller
                  control={control}
                  name="poreSizes"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={ostium.id}
                      value={ostium.label}
                      checked={getValues('poreSizes') === ostium.label}
                      className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                    />
                  )}
                />
                <label
                  htmlFor={ostium.id}
                  className="mr-2 text-sm font-bold text-[#00A27B]"
                >
                  {ostium.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-base font-medium">
            Tipo Cutâneo / subclassificação
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {skinTypes.map((type) => (
              <div
                key={`${type.id}-${type.label}`}
                className="flex items-center"
              >
                <Controller
                  control={control}
                  name="skinTypes"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={type.id}
                      value={type.label}
                      checked={getValues('skinTypes') === type.label}
                      className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                    />
                  )}
                />
                <label
                  htmlFor={type.id}
                  className="mr-2 text-sm font-bold text-[#00A27B]"
                >
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-base font-medium">Grau oleosidade</h3>
          <div className="space-y-2">
            {oilinessLevels.map((oilinessGrade) => (
              <div
                key={`${oilinessGrade.id}-${oilinessGrade.label}`}
                className="flex items-center"
              >
                <Controller
                  control={control}
                  name="oilinessLevels"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={oilinessGrade.id}
                      value={oilinessGrade.label}
                      checked={getValues('oilinessLevels') === oilinessGrade.label}
                      className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                    />
                  )}
                />
                <label
                  htmlFor={oilinessGrade.id}
                  className="mr-2 text-sm font-bold text-[#00A27B]"
                >
                  {oilinessGrade.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-base font-medium">Pele com acne</h3>
          <div className="space-y-2">
            {acneGrades.map((acneGrade) => (
              <div
                key={`${acneGrade.id}-${acneGrade.label}`}
                className="flex items-center"
              >
                <Controller
                  control={control}
                  name="acneGrades"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={acneGrade.id}
                      value={acneGrade.label}
                      checked={getValues('acneGrades') === acneGrade.label}
                      className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                    />
                  )}
                />
                <label
                  htmlFor={acneGrade.id}
                  className="mr-2 text-sm font-bold text-[#00A27B]"
                >
                  {acneGrade.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h3 className="mb-4 text-base font-medium">Presenca de:</h3>
            <div className="grid grid-cols-2 gap-4">
              {skinContains.map((contain) => (
                <div
                  key={`${contain.id}-${contain.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="skinContains"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={contain.id}
                        value={contain.label}
                        checked={getValues('skinContains')?.find((item) => item  === contain.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {contain.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 flex justify-center">
          <h2 className="mb-4 text-base font-medium">Aspectos Inestéticos</h2>
        </div>
        <div className="mb-6">
          <h3 className="mb-4 text-base font-medium">Involução cutânea</h3>
          <div className="space-y-4">
            {skinInvolution.map((involution) => (
              <div
                key={`${involution.id}-${involution.label}`}
                className="flex items-center"
              >
                <Controller
                  control={control}
                  name={`skinInvolution.${involution.typeName}.type`}
                  defaultValue={undefined}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                      id={involution.id}
                      value={involution.label}
                      checked={getValues(`skinInvolution.${involution.typeName}.type`)}
                      onChange={(e) => checkboxValueHandler(e, field)}
                    />
                  )}
                />
                <label
                  htmlFor={involution.id}
                  className=" ml-2 text-sm font-bold text-[#00A27B]"
                >
                  {involution.label}
                </label>
                {involution.hasDescription && (
                  <div className="ml-5 flex items-center justify-center">
                    <div className="flex items-center">
                      <label className="mr-1 flex text-center text-xs font-bold text-gray-700">
                        Região:
                      </label>
                      <input
                        placeholder="Ex.: peeling"
                        type="text"
                        {...register(
                          `skinInvolution.${involution.typeName}.typeDescription`,
                        )}
                        className="h-5 w-28 rounded-sm border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-base font-medium">Hipotonia</h3>
            <div className="space-y-2">
              {hypotonias.map((hypotonia) => (
                <div
                  key={`${hypotonia.id}-${hypotonia.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="hypotonias"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={hypotonia.id}
                        {...field}
                        value={hypotonia.label}
                        checked= {getValues('hypotonias')?.find((item) => item  === hypotonia.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {hypotonia.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-base font-medium">Tricose</h3>
            <div className="space-y-2">
              {tyrichosis.map((tyrichose) => (
                <div
                  key={`${tyrichose.id}-${tyrichose.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="tyrichosis"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={tyrichose.id}
                        value={tyrichose.label}
                        checked={getValues('tyrichosis')?.find((item) => item  === tyrichose.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {tyrichose.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-base font-medium">Cicatrizes / Sequelas</h3>
          <div className="space-y-4">
            {scars.map((scar) => (
              <div
                key={`${scar.id}-${scar.label}`}
                className="flex items-center"
              >
                <Controller
                  control={control}
                  name={`scars.${scar.typeName}.type`}
                  defaultValue={undefined}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                      id={scar.id}
                      value={scar.label}
                      checked={getValues(`scars.${scar.typeName}.type`)}
                      onChange={(e) => checkboxValueHandler(e, field)}
                    />
                  )}
                />
                <label
                  htmlFor={scar.id}
                  className=" ml-2 text-sm font-bold text-[#00A27B]"
                >
                  {scar.label}
                </label>
                {scar.hasDescription && (
                  <div className="ml-5 flex items-center justify-center">
                    <div className="flex items-center">
                      <label className="mr-1 flex text-center text-xs font-bold text-gray-700">
                        Região:
                      </label>
                      <input
                        placeholder="Ex.: peeling"
                        type="text"
                        {...register(`scars.${scar.typeName}.typeDescription`)}
                        className="h-5 w-20 rounded-sm border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex justify-center">
          <h2 className="mb-4 text-base font-medium">
            Alteração na cor / Lesões dermatológicas:
          </h2>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-base font-medium">Vásculo sanguínea</h3>
          <div className="space-y-4">
            {bloodVessels.map((vessel) => (
              <div
                key={`${vessel.id}-${vessel.label}`}
                className="flex items-center"
              >
                <Controller
                  control={control}
                  name={`bloodVessels.${vessel.typeName}.type`}
                  defaultValue={undefined}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                      id={vessel.id}
                      value={vessel.label}
                      checked={getValues(`bloodVessels.${vessel.typeName}.type`)}
                      onChange={(e) => checkboxValueHandler(e, field)}
                    />
                  )}
                />
                <label
                  htmlFor={vessel.id}
                  className=" ml-2 text-sm font-bold text-[#00A27B]"
                >
                  {vessel.label}
                </label>
                {vessel.hasDescription && (
                  <div className="ml-5 flex items-center justify-center">
                    <div className="flex items-center">
                      <label className="mr-1 flex text-center text-xs font-bold text-gray-700">
                        Região:
                      </label>
                      <input
                        placeholder="Ex.: peeling"
                        type="text"
                        {...register(
                          `bloodVessels.${vessel.typeName}.typeDescription`,
                        )}
                        className="h-5 w-20 rounded-sm border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-base font-medium">Mancha purpúrica</h3>
            <div className="space-y-2">
              {purpuricSpots.map((purpuricSpot) => (
                <div
                  key={`${purpuricSpot.id}-${purpuricSpot.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="purpuricSpots"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={purpuricSpot.id}
                        value={purpuricSpot.label}
                        checked={getValues('purpuricSpots')?.find((item) => item  === purpuricSpot.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {purpuricSpot.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-base font-medium">Mancha pigmentada</h3>
            <div className="space-y-2">
              {pigmentedSpots.map((typigmentedSpot) => (
                <div
                  key={`${typigmentedSpot.id}-${typigmentedSpot.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="pigmentedSpots"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={typigmentedSpot.id}
                        value={typigmentedSpot.label}
                        checked={getValues('pigmentedSpots')?.find((item) => item  === typigmentedSpot.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {typigmentedSpot.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-base font-medium">Melanodérmica</h3>
            <div className="space-y-2">
              {melanotics.map((melanotic) => (
                <div
                  key={`${melanotic.id}-${melanotic.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="melanotics"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={melanotic.id}
                        value={melanotic.label}
                        checked={getValues('melanotics')?.find((item) => item  === melanotic.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {melanotic.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-base font-medium">Não meianodérmica</h3>
            <div className="space-y-2">
              {notMelanotics.map((notMelanotic) => (
                <div
                  key={`${notMelanotic.id}-${notMelanotic.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="notMelanotics"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={notMelanotic.id}
                        value={notMelanotic.label}
                        checked={getValues('notMelanotics')?.find((item) => item  === notMelanotic.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {notMelanotic.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-base font-medium">Lesões sólidas</h3>
            <div className="grid grid-cols-2 gap-4">
              {skinLesions.map((skinLesion) => (
                <div
                  key={`${skinLesion.id}-${skinLesion.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="skinLesions"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={skinLesion.id}
                        value={skinLesion.label}
                        checked={getValues('skinLesions')?.find((item) => item  === skinLesion.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {skinLesion.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-base font-medium">Lesões líquidas</h3>
            <div className="grid grid-cols-2 gap-4">
              {fluidSkinLesions.map((fluidSkinLesion) => (
                <div
                  key={`${fluidSkinLesion.id}-${fluidSkinLesion.label}`}
                  className="flex items-center pb-3"
                >
                  <Controller
                    control={control}
                    name="fluidSkinLesions"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="box-border h-4 w-4 appearance-none rounded-sm border-2 border-solid border-[#ffffff] ring-2 ring-[#00A27B] ring-offset-1 checked:bg-[#00A27B] focus:outline-black"
                        id={fluidSkinLesion.id}
                        {...field}
                        value={fluidSkinLesion.label}
                        checked={getValues('fluidSkinLesions')?.find((item) => item  === fluidSkinLesion.label)}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}
                  />
                  <label className="ml-2 text-sm font-bold text-[#00A27B]">
                    {fluidSkinLesion.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-base font-medium">Outras</h3>
          <div className="space-y-2">
            {others.map((another) => (
              <div
                key={`${another.id}-${another.label}`}
                className="flex items-center"
              >
                <Controller
                  control={control}
                  name="others"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={another.id}
                      value={another.label}
                      checked={getValues('others') === another.label}
                      className="mr-2 box-border h-2 w-2 appearance-none rounded-full bg-transparent ring-2 ring-[#00A27B] ring-offset-2 checked:bg-[#00A27B]"
                    />
                  )}
                />
                <label
                  htmlFor={another.id}
                  className="mr-2 text-sm font-bold text-[#00A27B]"
                >
                  {another.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex">
          <div className="flex flex-col">
            <label className="mb-2 mr-1 flex text-center text-xs font-bold text-gray-700">
              Observações Gerais:
            </label>
            <input
              type="text"
              {...register('additionalInformation')}
              className="mb-6 h-60 w-64 rounded-sm border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className="hover:[#00a27c69] w-80 rounded bg-[#00A27B] px-4 py-2 font-bold text-white"
          >
            { query.data ? 'Atualizar' : 'Cadastrar '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FacialForm
