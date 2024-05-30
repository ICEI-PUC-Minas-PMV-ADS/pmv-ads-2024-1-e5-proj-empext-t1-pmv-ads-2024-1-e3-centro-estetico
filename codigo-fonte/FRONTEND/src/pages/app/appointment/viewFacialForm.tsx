import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import face0 from '../../../assets/frontFace/Mask group.svg'
import face1 from '../../../assets/frontFace/Mask group-1.svg'
import face2 from '../../../assets/frontFace/Mask group-2.svg'
import face3 from '../../../assets/frontFace/Mask group-3.svg'
import face4 from '../../../assets/frontFace/Mask group-4.svg'
import face5 from '../../../assets/frontFace/Mask group-5.svg'
import face6 from '../../../assets/frontFace/Mask group-6.svg'
import face7 from '../../../assets/frontFace/Mask group-7.svg'
import face8 from '../../../assets/frontFace/Mask group-8.svg'
import face9 from '../../../assets/frontFace/Mask group-9.svg'
import face10 from '../../../assets/frontFace/Mask group-10.svg'
import face11 from '../../../assets/frontFace/Mask group-11.svg'

import faceSelected0 from '../../../assets/frontFaceSelected/Mask group.svg'
import faceSelected1 from '../../../assets/frontFaceSelected/Mask group-1.svg'
import faceSelected2 from '../../../assets/frontFaceSelected/Mask group-2.svg'
import faceSelected3 from '../../../assets/frontFaceSelected/Mask group-3.svg'
import faceSelected4 from '../../../assets/frontFaceSelected/Mask group-4.svg'
import faceSelected5 from '../../../assets/frontFaceSelected/Mask group-5.svg'
import faceSelected6 from '../../../assets/frontFaceSelected/Mask group-6.svg'
import faceSelected7 from '../../../assets/frontFaceSelected/Mask group-7.svg'
import faceSelected8 from '../../../assets/frontFaceSelected/Mask group-8.svg'
import faceSelected9 from '../../../assets/frontFaceSelected/Mask group-9.svg'
import faceSelected10 from '../../../assets/frontFaceSelected/Mask group-10.svg'
import faceSelected11 from '../../../assets/frontFaceSelected/Mask group-11.svg'

import faceTurned0 from '../../../assets/leftFace/Mask group.svg'
import faceTurned1 from '../../../assets/leftFace/Mask group-1.svg'
import faceTurned2 from '../../../assets/leftFace/Mask group-2.svg'
import faceTurned3 from '../../../assets/leftFace/Mask group-3.svg'
import faceTurned4 from '../../../assets/leftFace/Mask group-4.svg'
import faceTurned5 from '../../../assets/leftFace/Mask group-5.svg'
import faceTurned6 from '../../../assets/leftFace/Mask group-6.svg'
import faceTurned7 from '../../../assets/leftFace/Mask group-7.svg'
import faceTurned8 from '../../../assets/leftFace/Mask group-8.svg'
import faceTurned9 from '../../../assets/leftFace/Mask group-9.svg'
import faceTurned10 from '../../../assets/leftFace/Mask group-10.svg'

import faceTurnedSelected0 from '../../../assets/leftFaceSelected/Mask group.svg'
import faceTurnedSelected1 from '../../../assets/leftFaceSelected/Mask group-1.svg'
import faceTurnedSelected2 from '../../../assets/leftFaceSelected/Mask group-2.svg'
import faceTurnedSelected3 from '../../../assets/leftFaceSelected/Mask group-3.svg'
import faceTurnedSelected4 from '../../../assets/leftFaceSelected/Mask group-4.svg'
import faceTurnedSelected5 from '../../../assets/leftFaceSelected/Mask group-5.svg'
import faceTurnedSelected6 from '../../../assets/leftFaceSelected/Mask group-6.svg'
import faceTurnedSelected7 from '../../../assets/leftFaceSelected/Mask group-7.svg'
import faceTurnedSelected8 from '../../../assets/leftFaceSelected/Mask group-8.svg'
import faceTurnedSelected9 from '../../../assets/leftFaceSelected/Mask group-9.svg'
import faceTurnedSelected10 from '../../../assets/leftFaceSelected/Mask group-10.svg'

import { ReactSVG } from 'react-svg';

interface FacialFormProps {
  faceSelections: {
      leftFace0?: boolean,
      leftFace1?: boolean,
      leftFace2?: boolean,
      leftFace3?: boolean,
      leftFace4?: boolean,
      leftFace5?: boolean,
      leftFace6?: boolean,
      leftFace7?: boolean,
      leftFace8?: boolean,
      leftFace9?: boolean,
      leftFace10?: boolean,
      rightFace0?: boolean,
      rightFace1?: boolean,
      rightFace2?: boolean,
      rightFace3?: boolean,
      rightFace4?: boolean,
      rightFace5?: boolean,
      rightFace6?: boolean,
      rightFace7?: boolean,
      rightFace8?: boolean,
      rightFace9?: boolean,
      rightFace10?: boolean,
      frontFace0?: boolean,
      frontFace1?: boolean,
      frontFace2?: boolean,
      frontFace3?: boolean,
      frontFace4?: boolean,
      frontFace5?: boolean,
      frontFace6?: boolean,
      frontFace7?: boolean,
      frontFace8?: boolean,
      frontFace9?: boolean,
      frontFace10?: boolean,
      frontFace11?: boolean,
    }
}


export function ViewFacialForm({faceSelections}: FacialFormProps) {

  const [isHidden, setIsHidden] = useState<string>('hidden')

  useEffect(() => {
    setIsHidden('')
  }, []);


  return (

    <div className='justify-center flex flex-col pt-8 pb-10'>

      <h1 className="font-semibold text-xl text-center pb-5">
        Toque nas partes do rosto que serão atendidas
      </h1>

      <Carousel
        className="flex flex-col"
      >
        <CarouselContent>

          <CarouselItem key='1'>
            <div className={`flex flex-col transform items-center scale-x-[-1] p-0 m-0 ${isHidden}`}>
              {
                faceSelections.rightFace3 ? (
                  <img
                    src={faceTurnedSelected3}

                  />) : (
                  <img
                    src={faceTurned3}
                  />)
              }
              <div className='flex p-0 m-0'>

                {
                  faceSelections.rightFace8 ? (
                    <img
                      src={faceTurnedSelected8}

                    />) : (
                    <img
                      src={faceTurned8}

                    />)
                }

                {
                  faceSelections.rightFace7 ? (
                    <img
                      src={faceTurnedSelected7}

                    />) : (
                    <img
                      src={faceTurned7}

                    />)
                }

                {
                  faceSelections.rightFace9 ? (
                    <img
                      src={faceTurnedSelected9}

                    />) : (
                    <img
                      src={faceTurned9}

                    />)
                }


              </div>

              <div className='flex p-0 m-0'>
                {
                  faceSelections.rightFace2 ? (
                    <img
                      src={faceTurnedSelected2}

                    />) : (
                    <img
                      src={faceTurned2}

                    />)
                }

                {
                  faceSelections.rightFace1 ? (
                    <img
                      src={faceTurnedSelected1}

                    />) : (
                    <img
                      src={faceTurned1}

                    />)
                }

                {
                  faceSelections.rightFace10 ? (
                    <img
                      src={faceTurnedSelected10}

                    />) : (
                    <img
                      src={faceTurned10}

                    />)
                }


              </div>

              <div className='flex p-0 m-0'>
                {
                  faceSelections.rightFace5 ? (
                    <img
                      src={faceTurnedSelected5}

                    />) : (
                    <img
                      src={faceTurned5}

                    />)
                }

                {
                  faceSelections.rightFace0 ? (
                    <img
                      src={faceTurnedSelected0}

                    />) : (
                    <img
                      src={faceTurned0}

                    />)
                }


                {
                  faceSelections.rightFace6 ? (
                    <img
                      src={faceTurnedSelected6}

                    />) : (
                    <img
                      src={faceTurned6}

                    />)
                }

              </div>

              {
                faceSelections.rightFace4 ? (
                  <img
                    src={faceTurnedSelected4}
                  />) : (
                  <img
                    src={faceTurned4}
                  />)
              }
            </div>

          </CarouselItem>

          <CarouselItem key='2'>
            <div className={`flex flex-col p-0 m-0 items-center ${isHidden}`}>
              {
                faceSelections.frontFace0 ? (
                  <ReactSVG
                    src={faceSelected0}
                  />) : (
                  <ReactSVG
                    src={face0}
                  />)
              }

              {
                faceSelections.frontFace9 ? (
                  <ReactSVG
                    src={faceSelected9}
                  />) : (
                  <ReactSVG
                    src={face9}
                  />)
              }

              <div className="flex p-0 m-0">
                {
                  faceSelections.frontFace8 ? (
                    <ReactSVG
                      src={faceSelected8}

                    />) : (
                    <ReactSVG
                      src={face8}

                    />)
                }

                {
                  faceSelections.frontFace10 ? (
                    <ReactSVG
                      src={faceSelected10}

                    />) : (
                    <ReactSVG
                      src={face10}

                    />)
                }

                {
                  faceSelections.frontFace11 ? (
                    <ReactSVG
                      src={faceSelected11}

                    />) : (
                    <ReactSVG
                      src={face11}

                    />)
                }
              </div>

              <div className="flex p-0 m-0">
                {
                  faceSelections.frontFace1 ? (
                    <ReactSVG
                      src={faceSelected1}

                    />) : (
                    <ReactSVG
                      src={face1}

                    />)
                }
                {
                  faceSelections.frontFace7 ? (
                    <ReactSVG
                      src={faceSelected7}

                    />) : (
                    <ReactSVG
                      src={face7}

                    />)
                }


                {
                  faceSelections.frontFace6 ? (
                    <ReactSVG
                      src={faceSelected6}

                    />) : (
                    <ReactSVG
                      src={face6}

                    />)
                }
              </div>

              <div className="flex p-0 m-0">
                {
                  faceSelections.frontFace5 ? (
                    <ReactSVG
                      src={faceSelected5}

                    />) : (
                    <ReactSVG
                      src={face5}

                    />)
                }

                {
                  faceSelections.frontFace4 ? (
                    <ReactSVG
                      src={faceSelected4}

                    />) : (
                    <ReactSVG
                      src={face4}

                    />)
                }
                {
                  faceSelections.frontFace3 ? (
                    <ReactSVG
                      src={faceSelected3}

                    />) : (
                    <ReactSVG
                      src={face3}

                    />)
                }
              </div>

              {
                faceSelections.frontFace2 ? (
                  <ReactSVG
                    src={faceSelected2}
                  />) : (
                  <ReactSVG
                    src={face2}
                  />)
              }

            </div>
          </CarouselItem>

          <CarouselItem key='3'>
            <div className={`flex flex-col p-0 m-0 items-center`}>
              {
                faceSelections.leftFace3 ? (
                  <img
                    src={faceTurnedSelected3}
                  />) : (
                  <img
                    src={faceTurned3}
                  />)
              }

              <div className='flex p-0 m-0'>

                {
                  faceSelections.leftFace8 ? (
                    <img
                      src={faceTurnedSelected8}

                    />) : (
                    <img
                      src={faceTurned8}

                    />)
                }

                {
                  faceSelections.leftFace7 ? (
                    <img
                      src={faceTurnedSelected7}

                    />) : (
                    <img
                      src={faceTurned7}

                    />)
                }

                {
                  faceSelections.leftFace9 ? (
                    <img
                      src={faceTurnedSelected9}

                    />) : (
                    <img
                      src={faceTurned9}

                    />)
                }


              </div>

              <div className='flex p-0 m-0'>
                {
                  faceSelections.leftFace2 ? (
                    <img
                      src={faceTurnedSelected2}

                    />) : (
                    <img
                      src={faceTurned2}

                    />)
                }

                {
                  faceSelections.leftFace1 ? (
                    <img
                      src={faceTurnedSelected1}

                    />) : (
                    <img
                      src={faceTurned1}

                    />)
                }

                {
                  faceSelections.leftFace10 ? (
                    <img
                      src={faceTurnedSelected10}

                    />) : (
                    <img
                      src={faceTurned10}

                    />)
                }


              </div>

              <div className='flex p-0 m-0'>
                {
                  faceSelections.leftFace5 ? (
                    <img
                      src={faceTurnedSelected5}

                    />) : (
                    <img
                      src={faceTurned5}

                    />)
                }

                {
                  faceSelections.leftFace0 ? (
                    <img
                      src={faceTurnedSelected0}

                    />) : (
                    <img
                      src={faceTurned0}

                    />)
                }


                {
                  faceSelections.leftFace6 ? (
                    <img
                      src={faceTurnedSelected6}

                    />) : (
                    <img
                      src={faceTurned6}

                    />)
                }

              </div>

              {
                faceSelections.leftFace4 ? (
                  <img
                    src={faceTurnedSelected4}
                  />) : (
                  <img
                    src={faceTurned4}
                  />)
              }
            </div>

          </CarouselItem>

        </CarouselContent>
        <h2
          className="text-primary font-semibold text-center pt-5"
        >
          Arraste para o lado para mudar a posição do rosto
        </h2>

      </Carousel>

    </div>

  )

}