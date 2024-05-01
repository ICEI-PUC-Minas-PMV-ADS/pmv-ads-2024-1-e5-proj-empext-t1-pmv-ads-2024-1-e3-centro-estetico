import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { acneGrades, bloodVessels, dehydrationLevels, oilinessLevels, poreSizes, scars, skinColors, skinContains, skinInvolution, skinPhotoTypes, skinTextures, skinTypes } from './constants/constants';


const SkinWithDescription = z.object({
  type: z.string(),
  description: z.string(),
});

const skinAnalysis = z.object({
  skinPhototypes: z.string(),
  skinColors: z.string(),
  dehydrationLevels: z.string(),
  skinTextures: z.string(),
  poreSizes: z.string(),
  skinTypes: z.string(),
  oilinessLevels: z.string(),
  acneGrades: z.string(),
  skinInvolution: z.array(SkinWithDescription),
  skinContains: z.array(z.string()),
  hypotonias: z.string(),
  trichosis: z.array(z.string()),
  scars: z.array(SkinWithDescription),
  purpuricSpots: z.array(z.string()),
  pigmentedSpots: z.array(z.string()),
  melanotics: z.array(z.string()),
  notMelanotics: z.array(z.string()),
  skinLesions: z.array(z.string()),
  fluidSkinLesions: z.array(z.string()),
  bloodVessels: z.array(SkinWithDescription),
  others: z.string(),
  additionalInformation: z.string(),
});
type RegisterFacialForm = z.infer<typeof skinAnalysis>

const FacialForm = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm<RegisterFacialForm>({}); // Set initial values

  const onSubmit = (data: RegisterFacialForm ) => console.log(data);



  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Ficha Facial</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="ml-3"> */}

        <div className="grid grid-cols-2 gap-6">

          <div className="mb-8">
            <h3 className="text-base font-medium mb-4">Fototipo</h3>
            <div className="space-y-2">
              {skinPhotoTypes.map((phototype) => (
                <div key={phototype.id} className="flex items-center">
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
            {/* {errors.fototipo && <span className="text-red-500 text-xs">{errors.fototipo.message || 'Fototipo é obrigatório'}</span>} */}
          </div>

          <div className="mb-8">
            <h3 className="text-base font-medium mb-4">Coloração da Pele</h3>
            <div className="space-y-4">
              {skinColors.map((color) => (
                <div key={color.id} className="flex items-center">
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
                <div key={hidatation.id} className="flex items-center">
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
                <div key={texture.id} className="flex items-center">
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
                <div key={ostium.id} className="flex items-center">
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
                <div key={type.id} className="flex items-center">
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
                <div key={oilinessGrade.id} className="flex items-center">
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
                <div key={acneGrade.id} className="flex items-center">
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
            {skinContains.map((contain) => (<div key={contain.id} className="pb-3 flex items-center">
            <input
              type="checkbox"
              className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B]  ring-offset-1 h-4 w-4  box-border ring-2 ring-[#00A27B]  focus:outline-black rounded-sm"
              id={contain.id}
              value={contain.label}
              {...register(`skinContains`)} // Register each checkbox with its label as the name
            />
            <label className="text-sm ml-2 font-bold text-[#00A27B]">{contain.label}</label>
          </div>) )}
          </div>
          </div>
          </div>

          <div className="mb-8 flex justify-center">
            <h2 className="text-base font-medium mb-4">Aspectos Inestéticos</h2>
          </div>
          <div className="mb-8">
            <h3 className="text-base font-medium mb-4">Involução cutânea</h3>
            <div className="space-y-4">
              {skinInvolution.map((involution) => (
                <div key={involution.id} className="flex items-center">
                  <input
                    type="checkbox"
                    className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B]  ring-offset-1 h-4 w-4  box-border ring-2 ring-[#00A27B]  focus:outline-black rounded-sm"
                    id={involution.id}
                    value={involution.label}
                    {...register(`skinInvolution`)}
                    />
                <label htmlFor={involution.id} className=" text-sm ml-2 font-bold text-[#00A27B]">
                  {involution.label}
                </label>
                 {involution.hasDescription &&

                  <div  className=" ml-5 flex justify-center items-center ">
                    <div className="flex items-center">
                      <label className="flex mr-1 text-xs text-center font-bold text-gray-700">
                        Região:
                      </label>
                      <input
                        placeholder='Ex.: peeling'
                        type="text"
                        className=" h-5 border text-xs border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-28"
                      />
                    </div>
                  </div>}
                </div>
              ))}
            </div>
          </div>




          {/* outros */}

          <div className="mb-8">
            <h3 className="text-base font-medium mb-4">Cicatrizes / Sequelas</h3>
            <div className="space-y-4">
              {scars.map((scar) => (
                <div key={scar.id} className="flex items-center">
                  <input
                    type="checkbox"
                    className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B]  ring-offset-1 h-4 w-4  box-border ring-2 ring-[#00A27B]  focus:outline-black rounded-sm"
                    id={scar.id}
                    value={scar.label}
                    {...register(`scars`)}
                    />
                <label htmlFor={scar.id} className=" text-sm ml-2 font-bold text-[#00A27B]">
                  {scar.label}
                </label>
                 {scar.hasDescription &&

                  <div  className=" ml-5 flex justify-center items-center ">
                    <div className="flex items-center">
                      <label className="flex mr-1 text-xs text-center font-bold text-gray-700">
                        Região:
                      </label>
                      <input
                        placeholder='Ex.: peeling'
                        type="text"
                        className=" h-5 w-20 border text-xs border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
                      />
                    </div>
                  </div>}
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
                <div key={vessel.id} className="flex items-center">
                  <input
                    type="checkbox"
                    className="appearance-none border-solid border-[#ffffff] border-2 checked:bg-[#00A27B]  ring-offset-1 h-4 w-4  box-border ring-2 ring-[#00A27B]  focus:outline-black rounded-sm"
                    id={vessel.id}
                    value={vessel.label}
                    {...register(`bloodVessels`)}
                    />
                <label htmlFor={vessel.id} className=" text-sm ml-2 font-bold text-[#00A27B]">
                  {vessel.label}
                </label>
                 {vessel.hasDescription &&

                  <div  className=" ml-5 flex justify-center items-center ">
                    <div className="flex items-center">
                      <label className="flex mr-1 text-xs text-center font-bold text-gray-700">
                        Região:
                      </label>
                      <input
                        placeholder='Ex.: peeling'
                        type="text"
                        className=" h-5 w-20 border text-xs border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
                      />
                    </div>
                  </div>}
                </div>
              ))}
            </div>
          </div>
          {/* outros */}



        {/* </div> */}

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
// {contain.hasDescription &&

//   <div  className="ml-5 flex items-center">
//     <div className="flex flex-col w-full">
//       <label className="mb-4 text-sm font-medium text-gray-700">
//         Nome
//       </label>
//       <input
//         type="text"
//         className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   </div>}