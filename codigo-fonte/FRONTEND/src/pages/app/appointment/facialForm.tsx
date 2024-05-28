// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

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

interface FacialFormProps {
  onSelectionChange: (part: string, value: boolean) => void
}

export function FacialForm({ onSelectionChange }: FacialFormProps) {
  const [selectedFace0, setSelectedFace0] = useState<boolean>(false)
  const [selectedFace1, setSelectedFace1] = useState<boolean>(false)
  const [selectedFace2, setSelectedFace2] = useState<boolean>(false)
  const [selectedFace3, setSelectedFace3] = useState<boolean>(false)
  const [selectedFace4, setSelectedFace4] = useState<boolean>(false)
  const [selectedFace5, setSelectedFace5] = useState<boolean>(false)
  const [selectedFace6, setSelectedFace6] = useState<boolean>(false)
  const [selectedFace7, setSelectedFace7] = useState<boolean>(false)
  const [selectedFace8, setSelectedFace8] = useState<boolean>(false)
  const [selectedFace9, setSelectedFace9] = useState<boolean>(false)
  const [selectedFace10, setSelectedFace10] = useState<boolean>(false)
  const [selectedFace11, setSelectedFace11] = useState<boolean>(false)

  const [selectedLeftFace0, setSelectedLeftFace0] = useState<boolean>(false)
  const [selectedLeftFace1, setSelectedLeftFace1] = useState<boolean>(false)
  const [selectedLeftFace2, setSelectedLeftFace2] = useState<boolean>(false)
  const [selectedLeftFace3, setSelectedLeftFace3] = useState<boolean>(false)
  const [selectedLeftFace4, setSelectedLeftFace4] = useState<boolean>(false)
  const [selectedLeftFace5, setSelectedLeftFace5] = useState<boolean>(false)
  const [selectedLeftFace6, setSelectedLeftFace6] = useState<boolean>(false)
  const [selectedLeftFace7, setSelectedLeftFace7] = useState<boolean>(false)
  const [selectedLeftFace8, setSelectedLeftFace8] = useState<boolean>(false)
  const [selectedLeftFace9, setSelectedLeftFace9] = useState<boolean>(false)
  const [selectedLeftFace10, setSelectedLeftFace10] = useState<boolean>(false)

  const [selectedRightFace0, setSelectedRightFace0] = useState<boolean>(false)
  const [selectedRightFace1, setSelectedRightFace1] = useState<boolean>(false)
  const [selectedRightFace2, setSelectedRightFace2] = useState<boolean>(false)
  const [selectedRightFace3, setSelectedRightFace3] = useState<boolean>(false)
  const [selectedRightFace4, setSelectedRightFace4] = useState<boolean>(false)
  const [selectedRightFace5, setSelectedRightFace5] = useState<boolean>(false)
  const [selectedRightFace6, setSelectedRightFace6] = useState<boolean>(false)
  const [selectedRightFace7, setSelectedRightFace7] = useState<boolean>(false)
  const [selectedRightFace8, setSelectedRightFace8] = useState<boolean>(false)
  const [selectedRightFace9, setSelectedRightFace9] = useState<boolean>(false)
  const [selectedRightFace10, setSelectedRightFace10] = useState<boolean>(false)

  const [svgLoader, setSvgLoader] = useState<boolean>(true)
  const [isHidden, setIsHidden] = useState<string>('hidden')

  useEffect(() => {
    setSvgLoader(false)
  }, [])

  useEffect(() => {
    setIsHidden('')
  }, [])

  return (
    <div className="flex flex-col justify-center pb-10 pt-8">
      <h1 className="pb-5 text-center text-xl font-semibold">
        Toque nas partes do rosto que serão atendidas
      </h1>

      <Carousel className="flex flex-col">
        <CarouselContent>
          <CarouselItem key="1">
            <div
              className={`m-0 flex scale-x-[-1] transform flex-col items-center p-0 ${isHidden}`}
            >
              {selectedRightFace3 || svgLoader ? (
                <img
                  src={faceTurnedSelected3}
                  onClick={() => {
                    setSelectedRightFace3(false)
                    onSelectionChange('rightFace3', false)
                  }}
                />
              ) : (
                <img
                  src={faceTurned3}
                  onClick={() => {
                    setSelectedRightFace3(true)
                    onSelectionChange('rightFace3', true)
                  }}
                />
              )}
              <div className="m-0 flex p-0">
                {selectedRightFace8 || svgLoader ? (
                  <img
                    src={faceTurnedSelected8}
                    onClick={() => {
                      setSelectedRightFace8(false)
                      onSelectionChange('rightFace8', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned8}
                    onClick={() => {
                      setSelectedRightFace8(true)
                      onSelectionChange('rightFace8', true)
                    }}
                  />
                )}

                {selectedRightFace7 || svgLoader ? (
                  <img
                    src={faceTurnedSelected7}
                    onClick={() => {
                      setSelectedRightFace7(false)
                      onSelectionChange('rightFace7', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned7}
                    onClick={() => {
                      setSelectedRightFace7(true)
                      onSelectionChange('rightFace7', true)
                    }}
                  />
                )}

                {selectedRightFace9 || svgLoader ? (
                  <img
                    src={faceTurnedSelected9}
                    onClick={() => {
                      setSelectedRightFace9(false)
                      onSelectionChange('rightFace9', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned9}
                    onClick={() => {
                      setSelectedRightFace9(true)
                      onSelectionChange('rightFace9', true)
                    }}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">
                {selectedRightFace2 || svgLoader ? (
                  <img
                    src={faceTurnedSelected2}
                    onClick={() => {
                      setSelectedRightFace2(false)
                      onSelectionChange('rightFace2', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned2}
                    onClick={() => {
                      setSelectedRightFace2(true)
                      onSelectionChange('rightFace2', true)
                    }}
                  />
                )}

                {selectedRightFace1 || svgLoader ? (
                  <img
                    src={faceTurnedSelected1}
                    onClick={() => {
                      setSelectedRightFace1(false)
                      onSelectionChange('rightFace1', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned1}
                    onClick={() => {
                      setSelectedRightFace1(true)
                      onSelectionChange('rightFace1', true)
                    }}
                  />
                )}

                {selectedRightFace10 || svgLoader ? (
                  <img
                    src={faceTurnedSelected10}
                    onClick={() => {
                      setSelectedRightFace10(false)
                      onSelectionChange('rightFace10', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned10}
                    onClick={() => {
                      setSelectedRightFace10(true)
                      onSelectionChange('rightFace10', true)
                    }}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">
                {selectedRightFace5 || svgLoader ? (
                  <img
                    src={faceTurnedSelected5}
                    onClick={() => {
                      setSelectedRightFace5(false)
                      onSelectionChange('rightFace5', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned5}
                    onClick={() => {
                      setSelectedRightFace5(true)
                      onSelectionChange('rightFace5', true)
                    }}
                  />
                )}

                {selectedRightFace0 || svgLoader ? (
                  <img
                    src={faceTurnedSelected0}
                    onClick={() => {
                      setSelectedRightFace0(false)
                      onSelectionChange('rightFace0', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned0}
                    onClick={() => {
                      setSelectedRightFace0(true)
                      onSelectionChange('rightFace0', true)
                    }}
                  />
                )}

                {selectedRightFace6 || svgLoader ? (
                  <img
                    src={faceTurnedSelected6}
                    onClick={() => {
                      setSelectedRightFace6(false)
                      onSelectionChange('rightFace6', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned6}
                    onClick={() => {
                      setSelectedRightFace6(true)
                      onSelectionChange('rightFace6', true)
                    }}
                  />
                )}
              </div>

              {selectedRightFace4 || svgLoader ? (
                <img
                  src={faceTurnedSelected4}
                  onClick={() => {
                    setSelectedRightFace4(false)
                    onSelectionChange('rightFace4', false)
                  }}
                />
              ) : (
                <img
                  src={faceTurned4}
                  onClick={() => {
                    setSelectedRightFace4(true)
                    onSelectionChange('rightFace4', true)
                  }}
                />
              )}
            </div>
          </CarouselItem>

          <CarouselItem key="2">
            <div className={`m-0 flex flex-col items-center p-0 ${isHidden}`}>
              {selectedFace0 || svgLoader ? (
                <ReactSVG
                  src={faceSelected0}
                  onClick={() => {
                    setSelectedFace0(false)
                    onSelectionChange('frontFace0', false)
                  }}
                />
              ) : (
                <ReactSVG
                  src={face0}
                  onClick={() => {
                    setSelectedFace0(true)
                    onSelectionChange('frontFace0', true)
                  }}
                />
              )}

              {selectedFace9 || svgLoader ? (
                <ReactSVG
                  src={faceSelected9}
                  onClick={() => {
                    setSelectedFace9(false)
                    onSelectionChange('frontFace9', false)
                  }}
                />
              ) : (
                <ReactSVG
                  src={face9}
                  onClick={() => {
                    setSelectedFace9(true)
                    onSelectionChange('frontFace9', true)
                  }}
                />
              )}

              <div className="m-0 flex p-0">
                {selectedFace8 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected8}
                    onClick={() => {
                      setSelectedFace8(false)
                      onSelectionChange('frontFace8', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face8}
                    onClick={() => {
                      setSelectedFace8(true)
                      onSelectionChange('frontFace8', true)
                    }}
                  />
                )}

                {selectedFace10 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected10}
                    onClick={() => {
                      setSelectedFace10(false)
                      onSelectionChange('frontFace10', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face10}
                    onClick={() => {
                      setSelectedFace10(true)
                      onSelectionChange('frontFace10', true)
                    }}
                  />
                )}

                {selectedFace11 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected11}
                    onClick={() => {
                      setSelectedFace11(false)
                      onSelectionChange('frontFace11', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face11}
                    onClick={() => {
                      setSelectedFace11(true)
                      onSelectionChange('frontFace11', true)
                    }}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">
                {selectedFace1 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected1}
                    onClick={() => {
                      setSelectedFace1(false)
                      onSelectionChange('frontFace1', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face1}
                    onClick={() => {
                      setSelectedFace1(true)
                      onSelectionChange('frontFace1', true)
                    }}
                  />
                )}
                {selectedFace7 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected7}
                    onClick={() => {
                      setSelectedFace7(false)
                      onSelectionChange('frontFace7', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face7}
                    onClick={() => {
                      setSelectedFace7(true)
                      onSelectionChange('frontFace7', true)
                    }}
                  />
                )}

                {selectedFace6 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected6}
                    onClick={() => {
                      setSelectedFace6(false)
                      onSelectionChange('frontFace6', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face6}
                    onClick={() => {
                      setSelectedFace6(true)
                      onSelectionChange('frontFace6', true)
                    }}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">
                {selectedFace5 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected5}
                    onClick={() => {
                      setSelectedFace5(false)
                      onSelectionChange('frontFace5', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face5}
                    onClick={() => {
                      setSelectedFace5(true)
                      onSelectionChange('frontFace5', true)
                    }}
                  />
                )}

                {selectedFace4 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected4}
                    onClick={() => {
                      setSelectedFace4(false)
                      onSelectionChange('frontFace4', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face4}
                    onClick={() => {
                      setSelectedFace4(true)
                      onSelectionChange('frontFace4', true)
                    }}
                  />
                )}
                {selectedFace3 || svgLoader ? (
                  <ReactSVG
                    src={faceSelected3}
                    onClick={() => {
                      setSelectedFace3(false)
                      onSelectionChange('frontFace3', false)
                    }}
                  />
                ) : (
                  <ReactSVG
                    src={face3}
                    onClick={() => {
                      setSelectedFace3(true)
                      onSelectionChange('frontFace3', true)
                    }}
                  />
                )}
              </div>

              {selectedFace2 || svgLoader ? (
                <ReactSVG
                  src={faceSelected2}
                  onClick={() => {
                    setSelectedFace2(false)
                    onSelectionChange('frontFace2', false)
                  }}
                />
              ) : (
                <ReactSVG
                  src={face2}
                  onClick={() => {
                    setSelectedFace2(true)
                    onSelectionChange('frontFace2', true)
                  }}
                />
              )}
            </div>
          </CarouselItem>

          <CarouselItem key="3">
            <div className={`m-0 flex flex-col items-center p-0`}>
              {selectedLeftFace3 ? (
                <img
                  src={faceTurnedSelected3}
                  onClick={() => {
                    setSelectedLeftFace3(false)
                    onSelectionChange('leftFace3', false)
                  }}
                />
              ) : (
                <img
                  src={faceTurned3}
                  onClick={() => {
                    setSelectedLeftFace3(true)
                    onSelectionChange('leftFace3', true)
                  }}
                />
              )}

              <div className="m-0 flex p-0">
                {selectedLeftFace8 || svgLoader ? (
                  <img
                    src={faceTurnedSelected8}
                    onClick={() => {
                      setSelectedLeftFace8(false)
                      onSelectionChange('leftFace8', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned8}
                    onClick={() => {
                      setSelectedLeftFace8(true)
                      onSelectionChange('leftFace8', true)
                    }}
                  />
                )}

                {selectedLeftFace7 || svgLoader ? (
                  <img
                    src={faceTurnedSelected7}
                    onClick={() => {
                      setSelectedLeftFace7(false)
                      onSelectionChange('leftFace7', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned7}
                    onClick={() => {
                      setSelectedLeftFace7(true)
                      onSelectionChange('leftFace7', true)
                    }}
                  />
                )}

                {selectedLeftFace9 || svgLoader ? (
                  <img
                    src={faceTurnedSelected9}
                    onClick={() => {
                      setSelectedLeftFace9(false)
                      onSelectionChange('leftFace9', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned9}
                    onClick={() => {
                      setSelectedLeftFace9(true)
                      onSelectionChange('leftFace9', true)
                    }}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">
                {selectedLeftFace2 || svgLoader ? (
                  <img
                    src={faceTurnedSelected2}
                    onClick={() => {
                      setSelectedLeftFace2(false)
                      onSelectionChange('leftFace2', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned2}
                    onClick={() => {
                      setSelectedLeftFace2(true)
                      onSelectionChange('leftFace2', true)
                    }}
                  />
                )}

                {selectedLeftFace1 || svgLoader ? (
                  <img
                    src={faceTurnedSelected1}
                    onClick={() => {
                      setSelectedLeftFace1(false)
                      onSelectionChange('leftFace1', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned1}
                    onClick={() => {
                      setSelectedLeftFace1(true)
                      onSelectionChange('leftFace1', true)
                    }}
                  />
                )}

                {selectedLeftFace10 || svgLoader ? (
                  <img
                    src={faceTurnedSelected10}
                    onClick={() => {
                      setSelectedLeftFace10(false)
                      onSelectionChange('leftFace10', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned10}
                    onClick={() => {
                      setSelectedLeftFace10(true)
                      onSelectionChange('leftFace10', true)
                    }}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">
                {selectedLeftFace5 || svgLoader ? (
                  <img
                    src={faceTurnedSelected5}
                    onClick={() => {
                      setSelectedLeftFace5(false)
                      onSelectionChange('leftFace5', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned5}
                    onClick={() => {
                      setSelectedLeftFace5(true)
                      onSelectionChange('leftFace5', true)
                    }}
                  />
                )}

                {selectedLeftFace0 || svgLoader ? (
                  <img
                    src={faceTurnedSelected0}
                    onClick={() => {
                      setSelectedLeftFace0(false)
                      onSelectionChange('leftFace0', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned0}
                    onClick={() => {
                      setSelectedLeftFace0(true)
                      onSelectionChange('leftFace0', true)
                    }}
                  />
                )}

                {selectedLeftFace6 || svgLoader ? (
                  <img
                    src={faceTurnedSelected6}
                    onClick={() => {
                      setSelectedLeftFace6(false)
                      onSelectionChange('leftFace6', false)
                    }}
                  />
                ) : (
                  <img
                    src={faceTurned6}
                    onClick={() => {
                      setSelectedLeftFace6(true)
                      onSelectionChange('leftFace6', true)
                    }}
                  />
                )}
              </div>

              {selectedLeftFace4 || svgLoader ? (
                <img
                  src={faceTurnedSelected4}
                  onClick={() => {
                    setSelectedLeftFace4(false)
                    onSelectionChange('leftFace4', false)
                  }}
                />
              ) : (
                <img
                  src={faceTurned4}
                  onClick={() => {
                    setSelectedLeftFace4(true)
                    onSelectionChange('leftFace4', true)
                  }}
                />
              )}
            </div>
          </CarouselItem>
        </CarouselContent>
        <h2 className="pt-5 text-center font-semibold text-primary">
          Arraste para o lado para mudar a posição do rosto
        </h2>
      </Carousel>
    </div>
  )
}
