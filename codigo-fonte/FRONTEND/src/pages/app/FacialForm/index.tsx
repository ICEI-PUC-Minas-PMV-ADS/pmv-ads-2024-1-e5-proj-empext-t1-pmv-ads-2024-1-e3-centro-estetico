import { registerSkinForm } from '@/api/clientsForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';
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
  tyrichosis
} from './constants/constants';

const checkboxValueHandler = (e, field) => {
  const { checked, value } = e.target;
  field.onChange(checked ? value : undefined);
};

const checkboxArrValueHandler = (e, field) => {
  const { checked, value } = e.target;
  if (checked) {
    field.onChange([...field.value, value]);
  } else {
    field.onChange(field.value.filter((val) => val !== value));
  }
};

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
  skinInvolution: z.record(z.string(), z.object({ type: z.string().optional(), typeDescription: z.string().optional() })).optional(),
  skinContains: z.array(z.string()).optional(),
  hypotonias: z.array(z.string()).optional(),
  tyrichosis: z.array(z.string()).optional(),
  scars: z.record(z.string(), z.object({ type: z.string().optional(), typeDescription: z.string().optional() })).optional(),
  purpuricSpots: z.array(z.string()).optional(),
  pigmentedSpots: z.array(z.string()).optional(),
  melanotics: z.array(z.string()).optional(),
  notMelanotics: z.array(z.string()).optional(),
  skinLesions: z.array(z.string()).optional(),
  fluidSkinLesions: z.array(z.string()).optional(),
  bloodVessels: z.record(z.string(), z.object({ type: z.string().optional(), typeDescription: z.string().optional() })).optional(),
  others: z.string().optional(),
  additionalInformation: z.string().optional(),
});
type RegisterFacialForm = z.infer<typeof skinAnalysis>;

const FacialForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFacialForm>({
    resolver: zodResolver(skinAnalysis),
  }); // Set initial values
console.log(`ERROR`, errors)
  const { clientId } = useParams();
  const navigate = useNavigate()

  const { mutateAsync: postSkinForm } = useMutation({
    mutationFn: registerSkinForm,
  })

  async function handleRegisterClient(data: Partial<RegisterFacialForm>) {
    try {
      console.log(`SENT`, data)

      await postSkinForm({...data})

     navigate('/')
      toast.success('Cliente cadastrado com sucesso!')
    } catch (error) {
      toast.error('Erro ao cadastrar usuário!')
    }
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Ficha Facial</h2>

      <form onSubmit={handleSubmit(handleRegisterClient)}>
        <input
          type="hidden"
          id="clientId"
          value={clientId}
          {...register('clientId')}
        />
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-8">
            <h3 className="text-base font-medium mb-4">Fototipo</h3>
            <div className="space-y-2">
              {skinPhotoTypes.map((phototype) => (
                <div key={`${phototype.id}-${phototype.label}`} className="flex items-center">
                  <Controller
                    control={control}
                    name="skinPhototypes"
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        id={phototype.id}
                        value={phototype.label}
                        className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                      />
                    )}
                  />
                  <label htmlFor={phototype.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                    {phototype.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-base font-medium mb-4">Coloração da Pele</h3>
            <div className="space-y-4">
              {skinColors.map((color) => (
                <div key={`${color.id}-${color.label}`} className="flex items-center">
                  <Controller
                    control={control}
                    name="skinColors"
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        id={color.id}
                        value={color.label}
                        className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                      />
                    )}
                  />
                  <label htmlFor={color.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                    {color.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-8">
            <h3 className="text-base font-medium mb-6">Desidarataçâo da Pele</h3>
            <div className="space-y-2">
              {dehydrationLevels.map((hidatation) => (
                <div key={`${hidatation.id}-${hidatation.label}`} className="flex items-center">
                  <Controller
                    control={control}
                    name="dehydrationLevels"
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        id={hidatation.id}
                        value={hidatation.label}
                        className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                      />
                    )}
                  />
                  <label htmlFor={hidatation.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                    {hidatation.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-base font-medium mb-4">Textura da Pele</h3>
            <div className="space-y-2">
              {skinTextures.map((texture) => (
                <div key={`${texture.id}-${texture.label}`} className="flex items-center">
                  <Controller
                    control={control}
                    name="skinTextures"
                    render={({ field }) => (
                      <input
                        type="radio"
                        {...field}
                        id={texture.id}
                        value={texture.label}
                        className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                      />
                    )}
                  />
                  <label htmlFor={texture.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                    {texture.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium mb-4">Óstios</h3>
          <div className="grid grid-cols-2 gap-6">
            {poreSizes.map((ostium) => (
              <div key={`${ostium.id}-${ostium.label}`} className="flex items-center">
                <Controller
                  control={control}
                  name="poreSizes"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={ostium.id}
                      value={ostium.label}
                      className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                    />
                  )}
                />
                <label htmlFor={ostium.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                  {ostium.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium mb-4">Tipo Cutâneo / subclassificação</h3>
          <div className="grid grid-cols-2 gap-6">
            {skinTypes.map((type) => (
              <div key={`${type.id}-${type.label}`} className="flex items-center">
                <Controller
                  control={control}
                  name="skinTypes"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={type.id}
                      value={type.label}
                      className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                    />
                  )}
                />
                <label htmlFor={type.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium mb-4">Grau oleosidade</h3>
          <div className="space-y-2">
            {oilinessLevels.map((oilinessGrade) => (
              <div key={`${oilinessGrade.id}-${oilinessGrade.label}`} className="flex items-center">
                <Controller
                  control={control}
                  name="oilinessLevels"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={oilinessGrade.id}
                      value={oilinessGrade.label}
                      className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                    />
                  )}
                />
                <label htmlFor={oilinessGrade.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                  {oilinessGrade.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium mb-4">Pele com acne</h3>
          <div className="space-y-2">
            {acneGrades.map((acneGrade) => (
              <div key={`${acneGrade.id}-${acneGrade.label}`} className="flex items-center">
                <Controller
                  control={control}
                  name="acneGrades"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={acneGrade.id}
                      value={acneGrade.label}
                      className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                    />
                  )}
                />
                <label htmlFor={acneGrade.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                  {acneGrade.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h3 className="text-base font-medium mb-4">Presenca de:</h3>
            <div className="grid grid-cols-2 gap-4">
              {skinContains.map((contain) => (
                <div key={`${contain.id}-${contain.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="skinContains"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={contain.id}
                        value={contain.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{contain.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 flex justify-center">
          <h2 className="text-base font-medium mb-4">Aspectos Inestéticos</h2>
        </div>
        <div className="mb-6">
          <h3 className="text-base font-medium mb-4">Involução cutânea</h3>
          <div className="space-y-4">
            {skinInvolution.map((involution) => (
              <div key={`${involution.id}-${involution.label}`} className="flex items-center">
                <Controller
                    control={control}
                    name={`skinInvolution.${involution.typeName}.type`}
                    defaultValue={undefined}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={involution.id}
                        value={involution.label}
                        onChange={(e) => checkboxValueHandler(e, field)}
                      />
                    )}/>
                <label htmlFor={involution.id} className=" text-sm ml-2 font-bold text-[#00A27B]">
                  {involution.label}
                </label>
                {involution.hasDescription  && (
                  <div className="ml-5 flex justify-center items-center">
                    <div className="flex items-center">
                      <label className="flex mr-1 text-xs text-center font-bold text-gray-700">Região:</label>
                      <input
                        placeholder="Ex.: peeling"
                        type="text"
                        {...register(`skinInvolution.${involution.typeName}.typeDescription`)}
                        className="h-5 border text-xs border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-28"
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
            <h3 className="text-base font-medium mb-4">Hipotonia</h3>
            <div className="space-y-2">
              {hypotonias.map((hypotonia) => (
                <div key={`${hypotonia.id}-${hypotonia.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="hypotonias"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={hypotonia.id}
                        {...field}
                        value={hypotonia.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{hypotonia.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="text-base font-medium mb-4">Tricose</h3>
            <div className="space-y-2">
              {tyrichosis.map((tyrichose) => (
                <div key={`${tyrichose.id}-${tyrichose.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="tyrichosis"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={tyrichose.id}
                        value={tyrichose.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{tyrichose.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-medium mb-4">Cicatrizes / Sequelas</h3>
          <div className="space-y-4">
            {scars.map((scar) => (
              <div key={`${scar.id}-${scar.label}`} className="flex items-center">
                <Controller
                    control={control}
                    name={`scars.${scar.typeName}.type`}
                    defaultValue={undefined}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={scar.id}
                        value={scar.label}
                        onChange={(e) => checkboxValueHandler(e, field)}
                      />
                    )}/>
                <label htmlFor={scar.id} className=" text-sm ml-2 font-bold text-[#00A27B]">
                  {scar.label}
                </label>
                {scar.hasDescription && (
                  <div className="ml-5 flex justify-center items-center">
                    <div className="flex items-center">
                      <label className="flex mr-1 text-xs text-center font-bold text-gray-700">Região:</label>
                      <input
                        placeholder="Ex.: peeling"
                        type="text"
                        {...register(`scars.${scar.typeName}.typeDescription`)}
                        className="h-5 w-20 border text-xs border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex justify-center">
          <h2 className="text-base font-medium mb-4">Alteração na cor / Lesões dermatológicas:</h2>
        </div>
        <div className="mb-8">
          <h3 className="text-base font-medium mb-4">Vásculo sanguínea</h3>
          <div className="space-y-4">
            {bloodVessels.map((vessel) => (
              <div key={`${vessel.id}-${vessel.label}`} className="flex items-center">
                <Controller
                    control={control}
                    name={`bloodVessels.${vessel.typeName}.type`}
                    defaultValue={undefined}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={vessel.id}
                        value={vessel.label}
                        onChange={(e) => checkboxValueHandler(e, field)}
                      />
                    )}/>
                <label htmlFor={vessel.id} className=" text-sm ml-2 font-bold text-[#00A27B]">
                  {vessel.label}
                </label>
                {vessel.hasDescription && (
                  <div className="ml-5 flex justify-center items-center">
                    <div className="flex items-center">
                      <label className="flex mr-1 text-xs text-center font-bold text-gray-700">Região:</label>
                      <input
                        placeholder="Ex.: peeling"
                        type="text"
                        {...register(`bloodVessels.${vessel.typeName}.typeDescription`)}
                        className="h-5 w-20 border text-xs border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <h3 className="text-base font-medium mb-4">Mancha purpúrica</h3>
            <div className="space-y-2">
              {purpuricSpots.map((purpuricSpot) => (
                <div key={`${purpuricSpot.id}-${purpuricSpot.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="purpuricSpots"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={purpuricSpot.id}
                        value={purpuricSpot.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{purpuricSpot.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="text-base font-medium mb-4">Mancha pigmentada</h3>
            <div className="space-y-2">
              {pigmentedSpots.map((typigmentedSpot) => (
                <div key={`${typigmentedSpot.id}-${typigmentedSpot.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="pigmentedSpots"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={typigmentedSpot.id}
                        value={typigmentedSpot.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{typigmentedSpot.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h3 className="text-base font-medium mb-4">Melanodérmica</h3>
            <div className="space-y-2">
              {melanotics.map((melanotic) => (
                <div key={`${melanotic.id}-${melanotic.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="melanotics"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={melanotic.id}
                        value={melanotic.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{melanotic.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="text-base font-medium mb-4">Não meianodérmica</h3>
            <div className="space-y-2">
              {notMelanotics.map((notMelanotic) => (
                <div key={`${notMelanotic.id}-${notMelanotic.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="notMelanotics"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={notMelanotic.id}
                        value={notMelanotic.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{notMelanotic.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h3 className="text-base font-medium mb-4">Lesões sólidas</h3>
            <div className="grid grid-cols-2 gap-4">
              {skinLesions.map((skinLesion) => (
                <div key={`${skinLesion.id}-${skinLesion.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="skinLesions"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={skinLesion.id}
                        value={skinLesion.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{skinLesion.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="text-base font-medium mb-4">Lesões líquidas</h3>
            <div className="grid grid-cols-2 gap-4">
              {fluidSkinLesions.map((fluidSkinLesion) => (
                <div key={`${fluidSkinLesion.id}-${fluidSkinLesion.label}`} className="pb-3 flex items-center">
                  <Controller
                    control={control}
                    name="fluidSkinLesions"
                    defaultValue={[]}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B] ring-offset-1 h-4 w-4 box-border ring-2 ring-[#00A27B] focus:outline-black rounded-sm"
                        id={fluidSkinLesion.id}
                        {...field}
                        value={fluidSkinLesion.label}
                        onChange={(e) => checkboxArrValueHandler(e, field)}
                      />
                    )}/>
                  <label className="text-sm ml-2 font-bold text-[#00A27B]">{fluidSkinLesion.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium mb-4">Outras</h3>
          <div className="space-y-2">
            {others.map((another) => (
              <div key={`${another.id}-${another.label}`} className="flex items-center">
                <Controller
                  control={control}
                  name="acneGrades"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={another.id}
                      value={another.label}
                      className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                    />
                  )}
                />
                <label htmlFor={another.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                  {another.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex">
          <div className="flex flex-col">
            <label className="mb-2 flex mr-1 text-xs text-center font-bold text-gray-700">Observações Gerais:</label>
            <input
              type="text"
              {...register("additionalInformation")}
              className="mb-6 border text-xs border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-60 w-64 "
            />
          </div>
        </div>


        <div className="flex justify-center items-center ">
          <button type="submit" className="w-80 bg-[#00A27B] hover:[#00a27c69] text-white font-bold py-2 px-4 rounded">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacialForm;
