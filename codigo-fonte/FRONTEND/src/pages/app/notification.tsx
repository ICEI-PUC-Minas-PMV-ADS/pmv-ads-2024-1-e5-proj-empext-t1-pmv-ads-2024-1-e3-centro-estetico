import imgPerson2 from '../../assets/imgPerson2.svg'
import { ReactSVG } from 'react-svg'


export function NotificationsForm() {


  return (    

    <div className=''>

      <h1 className="font-semibold ml-1 pt-2 pl-3 pb-5 text-lg">Novas fichas preenchidas</h1>

        <div className='justify-around flex bg-input p-5 ml-5 mr-5 rounded-xl'>
          <ReactSVG src={imgPerson2}/>
          <div className='flex flex-col justify-between pt-1 pb-1'>
            <div className='flex justify-between'>
              <p className='text-primary font-semibold'>
                Eduarda Maria
              </p> <span className='text-primary font-extrabold'>→</span>
            </div>
            <p style={{ color: 'green', margin: 0 }}>Ficha de saúde preenchida</p>
          </div>

        </div>
    </div>
  )
}