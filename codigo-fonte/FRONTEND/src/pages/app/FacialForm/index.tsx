import { Controller, useForm } from 'react-hook-form';
import { acneGrades, oilinessGrades, ostium, skinColor, skinHidratation, skinPhotoTypes, skinSubclassifications, skinTexture } from './constants';


const FacialForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({ defaultValues: { fototipo: skinPhotoTypes[0].id, coloracao: skinColor[0].id } }); // Set initial values

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Ficha Facial</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Fototipo</h3>
          <div className="space-y-2">
            {skinPhotoTypes.map((phototype) => (
              <div key={phototype.id} className="flex items-center">
                <Controller
                  control={control}
                  name="phototypes"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={phototype.id}
                      value={phototype.id}
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

        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Coloração da Pele</h3>
          <div className="space-y-2">
            {skinColor.map((color) => (
              <div key={color.id} className="flex items-center">

                <Controller
                  control={control}
                  name="color"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={color.id}
                      value={color.id}
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
        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Desidarataçâo da Pele</h3>
          <div className="space-y-2">
            {skinHidratation.map((hidatation) => (
              <div key={hidatation.id} className="flex items-center">
                <Controller
                  control={control}
                  name="hidratation"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={hidatation.id}
                      value={hidatation.id}
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
        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Textura da Pele</h3>
          <div className="space-y-2">
            {skinTexture.map((texture) => (
              <div key={texture.id} className="flex items-center">
                <Controller
                  control={control}
                  name="texture"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={texture.id}
                      value={texture.id}
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
        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Óstios</h3>
          <div className="space-y-2">
            {ostium.map((ostium) => (
              <div key={ostium.id} className="flex items-center">
                <Controller
                  control={control}
                  name="ostium"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={ostium.id}
                      value={ostium.id}
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
        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Tipo Cutâneo / subclassificação</h3>
          <div className="space-y-2">
            {skinSubclassifications.map((skinSubclassifications) => (
              <div key={skinSubclassifications.id} className="flex items-center">
                <Controller
                  control={control}
                  name="skinSubclassifications"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={skinSubclassifications.id}
                      value={skinSubclassifications.id}
                      className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-2 h-2 w-2 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                      />
                  )}
                />
              <label htmlFor={skinSubclassifications.id} className="text-sm mr-2 font-bold text-[#00A27B]">
                {skinSubclassifications.label}
              </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Grau oleosidade</h3>
          <div className="space-y-2">
            {oilinessGrades.map((oilinessGrade) => (
              <div key={oilinessGrade.id} className="flex items-center">
                <Controller
                  control={control}
                  name="oilinessGrades"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={oilinessGrade.id}
                      value={oilinessGrade.id}
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
        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Pele com acne</h3>
          <div className="space-y-2">
            {acneGrades.map((acneGrade) => (
              <div key={acneGrade.id} className="flex items-center">
                <Controller
                  control={control}
                  name="acneGrade"
                  render={({ field }) => (
                    <input
                      type="radio"
                      {...field}
                      id={acneGrade.id}
                      value={acneGrade.id}
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
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Salvar Exame
        </button>
      </form>
    </div>
  );
};

export default FacialForm;
