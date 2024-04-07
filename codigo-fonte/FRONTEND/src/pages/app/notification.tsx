//import { Button } from '@/components/ui/button'
//import { ReactSVG } from 'react-svg';
//import { Input } from "@/components/ui/input"
import { Helmet } from 'react-helmet-async'
//import { Search } from 'lucide-react';
//import { Card } from '@/components/card';

// import newTreatment from '../../assets/newTreatment.svg'
// import newClient from '../../assets/newClient.svg'
 //import newForm from '../../assets/newForm.svg'

//<h2>Novas fichas preenchidas</h2> 

//<p><strong>Nome:</strong> <span id="nome"></span></p>
    //<p><strong>Data:</strong> <span id="data"></span></p>

export function NotificationsForm() {
  return (
    
    <div className='justify-center flex flex-col'>
      <Helmet title="Notifications" />

      <h1 className="font-semibold ml-1 pt-5 pb-3 text-lg">Novas fichas preenchidas</h1>
    
      <div className='caixa'>
      
        <p style={{ color: 'blue', margin: 0 }}>Eduarda Maria </p> <span style={{ color: 'blue', margin: 0 }}>→</span>
        <p style={{ color: 'green', margin: 0 }}>Ficha de saúde preenchida</p>
      </div>
     
      
   




    </div>



  )

  return (
    <div style={{ border: '1px solid black', display: 'flex', alignItems: 'center', padding: '10px' }}>
      <div style={{ marginRight: '10px' }}>
        <img src={randomPhotoUrl} alt="Random" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      </div>
      <div>
        <p style={{ color: 'blue', margin: 0 }}>{randomName}</p>
        <p style={{ color: 'green', margin: 0 }}>Nova ficha preenchida</p>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <span style={{ color: 'blue', fontSize: '20px' }}>➜</span>
      </div>
    </div>
  );
}