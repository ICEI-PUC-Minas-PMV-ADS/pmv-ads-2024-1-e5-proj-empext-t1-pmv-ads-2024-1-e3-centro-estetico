// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import frontBody0 from '../../../assets/frontBody/Mask group.svg'
import frontBody1 from '../../../assets/frontBody/Mask group-1.svg'
import frontBody2 from '../../../assets/frontBody/Mask group-2.svg'
import frontBody3 from '../../../assets/frontBody/Mask group-3.svg'
import frontBody4 from '../../../assets/frontBody/Mask group-4.svg'
import frontBody5 from '../../../assets/frontBody/Mask group-5.svg'
import frontBody6 from '../../../assets/frontBody/Mask group-6.svg'
import frontBody7 from '../../../assets/frontBody/Mask group-7.svg'
import frontBody8 from '../../../assets/frontBody/Mask group-8.svg'
import frontBody9 from '../../../assets/frontBody/Mask group-9.svg'
import frontBody10 from '../../../assets/frontBody/Mask group-10.svg'
import frontBody11 from '../../../assets/frontBody/Mask group-11.svg'
import frontBody12 from '../../../assets/frontBody/Mask group-12.svg'
import frontBody13 from '../../../assets/frontBody/Mask group-13.svg'
import frontBody14 from '../../../assets/frontBody/Mask group-14.svg'
import frontBody15 from '../../../assets/frontBody/Mask group-15.svg'
import frontBody16 from '../../../assets/frontBody/Mask group-16.svg'
import frontBody17 from '../../../assets/frontBody/Mask group-17.svg'
import frontBody18 from '../../../assets/frontBody/Mask group-18.svg'
import frontBody19 from '../../../assets/frontBody/Mask group-19.svg'
import frontBody20 from '../../../assets/frontBody/Mask group-20.svg'
import frontBody21 from '../../../assets/frontBody/Mask group-21.svg'
import frontBody22 from '../../../assets/frontBody/Mask group-22.svg'

import frontBodySelected0 from '../../../assets/frontBodySelected/Mask group.svg'
import frontBodySelected1 from '../../../assets/frontBodySelected/Mask group-1.svg'
import frontBodySelected2 from '../../../assets/frontBodySelected/Mask group-2.svg'
import frontBodySelected3 from '../../../assets/frontBodySelected/Mask group-3.svg'
import frontBodySelected4 from '../../../assets/frontBodySelected/Mask group-4.svg'
import frontBodySelected5 from '../../../assets/frontBodySelected/Mask group-5.svg'
import frontBodySelected6 from '../../../assets/frontBodySelected/Mask group-6.svg'
import frontBodySelected7 from '../../../assets/frontBodySelected/Mask group-7.svg'
import frontBodySelected8 from '../../../assets/frontBodySelected/Mask group-8.svg'
import frontBodySelected9 from '../../../assets/frontBodySelected/Mask group-9.svg'
import frontBodySelected10 from '../../../assets/frontBodySelected/Mask group-10.svg'
import frontBodySelected11 from '../../../assets/frontBodySelected/Mask group-11.svg'
import frontBodySelected12 from '../../../assets/frontBodySelected/Mask group-12.svg'
import frontBodySelected13 from '../../../assets/frontBodySelected/Mask group-13.svg'
import frontBodySelected14 from '../../../assets/frontBodySelected/Mask group-14.svg'
import frontBodySelected15 from '../../../assets/frontBodySelected/Mask group-15.svg'
import frontBodySelected16 from '../../../assets/frontBodySelected/Mask group-16.svg'
import frontBodySelected17 from '../../../assets/frontBodySelected/Mask group-17.svg'
import frontBodySelected18 from '../../../assets/frontBodySelected/Mask group-18.svg'
import frontBodySelected19 from '../../../assets/frontBodySelected/Mask group-19.svg'
import frontBodySelected20 from '../../../assets/frontBodySelected/Mask group-20.svg'
import frontBodySelected21 from '../../../assets/frontBodySelected/Mask group-21.svg'

import backBody0 from '../../../assets/backBody/Mask group.svg'
import backBody1 from '../../../assets/backBody/Mask group-1.svg'
import backBody2 from '../../../assets/backBody/Mask group-2.svg'
import backBody3 from '../../../assets/backBody/Mask group-3.svg'
import backBody4 from '../../../assets/backBody/Mask group-4.svg'
import backBody5 from '../../../assets/backBody/Mask group-5.svg'
import backBody6 from '../../../assets/backBody/Mask group-6.svg'
import backBody7 from '../../../assets/backBody/Mask group-7.svg'
import backBody8 from '../../../assets/backBody/Mask group-8.svg'
import backBody9 from '../../../assets/backBody/Mask group-9.svg'
import backBody10 from '../../../assets/backBody/Mask group-10.svg'
import backBody11 from '../../../assets/backBody/Mask group-11.svg'
import backBody12 from '../../../assets/backBody/Mask group-12.svg'
import backBody13 from '../../../assets/backBody/Mask group-13.svg'
import backBody14 from '../../../assets/backBody/Mask group-14.svg'
import backBody15 from '../../../assets/backBody/Mask group-15.svg'
import backBody16 from '../../../assets/backBody/Mask group-16.svg'
import backBody17 from '../../../assets/backBody/Mask group-17.svg'
import backBody18 from '../../../assets/backBody/Mask group-18.svg'
import backBody19 from '../../../assets/backBody/Mask group-19.svg'
import backBody20 from '../../../assets/backBody/Mask group-20.svg'
import backBody21 from '../../../assets/backBody/Mask group-21.svg'


import backBodySelected1 from '../../../assets/backBodySelected/Mask group-1.svg'
import backBodySelected2 from '../../../assets/backBodySelected/Mask group-2.svg'
import backBodySelected3 from '../../../assets/backBodySelected/Mask group-3.svg'
import backBodySelected4 from '../../../assets/backBodySelected/Mask group-4.svg'
import backBodySelected5 from '../../../assets/backBodySelected/Mask group-5.svg'
import backBodySelected6 from '../../../assets/backBodySelected/Mask group-6.svg'
import backBodySelected7 from '../../../assets/backBodySelected/Mask group-7.svg'
import backBodySelected8 from '../../../assets/backBodySelected/Mask group-8.svg'
import backBodySelected9 from '../../../assets/backBodySelected/Mask group-9.svg'
import backBodySelected10 from '../../../assets/backBodySelected/Mask group-10.svg'
import backBodySelected11 from '../../../assets/backBodySelected/Mask group-11.svg'
import backBodySelected12 from '../../../assets/backBodySelected/Mask group-12.svg'
import backBodySelected13 from '../../../assets/backBodySelected/Mask group-13.svg'
import backBodySelected14 from '../../../assets/backBodySelected/Mask group-14.svg'
import backBodySelected15 from '../../../assets/backBodySelected/Mask group-15.svg'
import backBodySelected16 from '../../../assets/backBodySelected/Mask group-16.svg'
import backBodySelected17 from '../../../assets/backBodySelected/Mask group-17.svg'
import backBodySelected18 from '../../../assets/backBodySelected/Mask group-18.svg'
import backBodySelected19 from '../../../assets/backBodySelected/Mask group-19.svg'
import backBodySelected20 from '../../../assets/backBodySelected/Mask group-20.svg'
import backBodySelected21 from '../../../assets/backBodySelected/Mask group-21.svg'

interface BodyFormProps {
  bodySelections: {
    backBody0?: boolean;
    backBody1?: boolean;
    backBody2?: boolean;
    backBody3?: boolean;
    backBody4?: boolean;
    backBody5?: boolean;
    backBody6?: boolean;
    backBody7?: boolean;
    backBody8?: boolean;
    backBody9?: boolean;
    backBody10?: boolean;
    backBody11?: boolean;
    backBody12?: boolean;
    backBody13?: boolean;
    backBody14?: boolean;
    backBody15?: boolean;
    backBody16?: boolean;
    backBody17?: boolean;
    backBody18?: boolean;
    backBody19?: boolean;
    backBody20?: boolean;
    backBody21?: boolean;
    frontBody0?: boolean;
    frontBody1?: boolean;
    frontBody2?: boolean;
    frontBody3?: boolean;
    frontBody4?: boolean;
    frontBody5?: boolean;
    frontBody6?: boolean;
    frontBody7?: boolean;
    frontBody8?: boolean;
    frontBody9?: boolean;
    frontBody10?: boolean;
    frontBody11?: boolean;
    frontBody12?: boolean;
    frontBody13?: boolean;
    frontBody14?: boolean;
    frontBody15?: boolean;
    frontBody16?: boolean;
    frontBody17?: boolean;
    frontBody18?: boolean;
    frontBody19?: boolean;
    frontBody20?: boolean;
    frontBody21?: boolean;
    abdomenTop?: number;       
    abdomenBottom?: number;
    waist?: number;             
    hip?: number;               
    upperLegProxRight?: number; 
    upperLegProxLeft?: number;  
    mediumLegRight?: number;    
    mediumLegLeft?: number;     
    distalLegRight?: number;    
    distalLegLeft?: number;     
    legRight?: number;          
    legLeft?: number;           
    armRight?: number;          
    armLeft?: number;           
    chestRight?: number;        
    chestLeft?: number;  
  }
}


export function ViewBodyForm({ bodySelections }: BodyFormProps) {

  const [isHidden, setIsHidden] = useState<string>('hidden')

  useEffect(() => {
    setIsHidden('')
  }, []);


  return (

    <div className='justify-center flex flex-col pt-8 pb-10'>

      <h1 className="font-semibold text-xl text-center pb-5">
        As partes do corpo que foram atendidas estão marcadas
      </h1>

      <Carousel className="flex flex-col">
        <CarouselContent>
          <CarouselItem key="1">
            <div
              className={`m-0 flex flex-col items-center p-0 ${isHidden}`}
            >
              <img
                src={frontBody22}
              />

              <div className="m-0 flex p-0">
                {bodySelections.frontBody13 ? (
                  <img
                    src={frontBodySelected13}
                  />
                ) : (
                  <img
                    src={frontBody13}
                  />
                )}

                {bodySelections.frontBody7 ? (
                  <img
                    src={frontBodySelected7}
                  />
                ) : (
                  <img
                    src={frontBody7}
                  />
                )}

                {bodySelections.frontBody8 ? (
                  <img
                    src={frontBodySelected8}
                  />
                ) : (
                  <img
                    src={frontBody8}
                  />
                )}

                {bodySelections.frontBody15 ? (
                  <img
                    src={frontBodySelected15}
                  />
                ) : (
                  <img
                    src={frontBody15}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">

                {bodySelections.frontBody14 ? (
                  <img
                    src={frontBodySelected14}
                  />
                ) : (
                  <img
                    src={frontBody14}
                  />
                )}

                {bodySelections.frontBody6 ? (
                  <img
                    src={frontBodySelected6}
                  />
                ) : (
                  <img
                    src={frontBody6}
                  />
                )}

                {bodySelections.frontBody21 ? (
                  <img
                    src={frontBodySelected21}
                  />
                ) : (
                  <img
                    src={frontBody21}
                  />
                )}

                {bodySelections.frontBody4 ? (
                  <img
                    src={frontBodySelected4}
                  />
                ) : (
                  <img
                    src={frontBody4}
                  />
                )}

                {bodySelections.frontBody16 ? (
                  <img
                    src={frontBodySelected16}
                  />
                ) : (
                  <img
                    src={frontBody16}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">

                {bodySelections.frontBody17 ? (
                  <img
                    src={frontBodySelected17}
                  />
                ) : (
                  <img
                    src={frontBody17}
                  />
                )}

                {bodySelections.frontBody5 ? (
                  <img
                    src={frontBodySelected5}
                  />
                ) : (
                  <img
                    src={frontBody5}
                  />
                )}

                {bodySelections.frontBody18 ? (
                  <img
                    src={frontBodySelected18}
                  />
                ) : (
                  <img
                    src={frontBody18}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">

                {bodySelections.frontBody19 ? (
                  <img
                    src={frontBodySelected19}
                  />
                ) : (
                  <img
                    src={frontBody19}
                  />
                )}

                {bodySelections.frontBody3 ? (
                  <img
                    src={frontBodySelected3}
                  />
                ) : (
                  <img
                    src={frontBody3}
                  />
                )}

                {bodySelections.frontBody2 ? (
                  <img
                    src={frontBodySelected2}
                  />
                ) : (
                  <img
                    src={frontBody2}
                  />
                )}

                {bodySelections.frontBody20 ? (
                  <img
                    src={frontBodySelected20}
                  />
                ) : (
                  <img
                    src={frontBody20}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">

                {bodySelections.frontBody10 ? (
                  <img
                    src={frontBodySelected10}
                  />
                ) : (
                  <img
                    src={frontBody10}
                  />
                )}

                {bodySelections.frontBody11 ? (
                  <img
                    src={frontBodySelected11}
                  />
                ) : (
                  <img
                    src={frontBody11}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">

                {bodySelections.frontBody12 ? (
                  <img
                    src={frontBodySelected12}
                  />
                ) : (
                  <img
                    src={frontBody12}
                  />
                )}

                {bodySelections.frontBody9 ? (
                  <img
                    src={frontBodySelected9}
                  />
                ) : (
                  <img
                    src={frontBody9}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">

                {bodySelections.frontBody0 ? (
                  <img
                    src={frontBodySelected0}
                  />
                ) : (
                  <img
                    src={frontBody0}
                  />
                )}

                {bodySelections.frontBody1 ? (
                  <img
                    src={frontBodySelected1}
                  />
                ) : (
                  <img
                    src={frontBody1}
                  />
                )}
              </div>


            </div>
          </CarouselItem>

          <CarouselItem key="2">
            <div className={`m-0 flex flex-col items-center p-0 ${isHidden}`}>

              <img
                src={backBody0}
              />

              <div className="m-0 flex p-0">
                {bodySelections.backBody1 ? (
                  <img
                    src={backBodySelected1}
                  />
                ) : (
                  <img
                    src={backBody1}
                  />
                )}

                {bodySelections.backBody2 ? (
                  <img
                    src={backBodySelected2}
                  />
                ) : (
                  <img
                    src={backBody2}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {bodySelections.backBody20 ? (
                  <img
                    src={backBodySelected20}
                  />
                ) : (
                  <img
                    src={backBody20}
                  />
                )}

                {bodySelections.backBody3 ? (
                  <img
                    src={backBodySelected3}
                  />
                ) : (
                  <img
                    src={backBody3}
                  />
                )}

                {bodySelections.backBody18 ? (
                  <img
                    src={backBodySelected18}
                  />
                ) : (
                  <img
                    src={backBody18}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {bodySelections.backBody21 ? (
                  <img
                    src={backBodySelected21}
                  />
                ) : (
                  <img
                    src={backBody21}
                  />
                )}

                {bodySelections.backBody4 ? (
                  <img
                    src={backBodySelected4}
                  />
                ) : (
                  <img
                    src={backBody4}
                  />
                )}

                {bodySelections.backBody19 ? (
                  <img
                    src={backBodySelected19}
                  />
                ) : (
                  <img
                    src={backBody19}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {bodySelections.backBody13 ? (
                  <img
                    src={backBodySelected13}
                  />
                ) : (
                  <img
                    src={backBody13}
                  />
                )}

                {bodySelections.backBody7 ? (
                  <img
                    src={backBodySelected7}
                  />
                ) : (
                  <img
                    src={backBody7}
                  />
                )}

                {bodySelections.backBody10 ? (
                  <img
                    src={backBodySelected10}
                  />
                ) : (
                  <img
                    src={backBody10}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {bodySelections.backBody12 ? (
                  <img
                    src={backBodySelected12}
                  />
                ) : (
                  <img
                    src={backBody12}
                  />
                )}

                {bodySelections.backBody14 ? (
                  <img
                    src={backBodySelected14}
                  />
                ) : (
                  <img
                    src={backBody14}
                  />
                )}

                {bodySelections.backBody16 ? (
                  <img
                    src={backBodySelected16}
                  />
                ) : (
                  <img
                    src={backBody16}
                  />
                )}

                {bodySelections.backBody11 ? (
                  <img
                    src={backBodySelected11}
                  />
                ) : (
                  <img
                    src={backBody11}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {bodySelections.backBody15 ? (
                  <img
                    src={backBodySelected15}
                  />
                ) : (
                  <img
                    src={backBody15}
                  />
                )}

                {bodySelections.backBody17 ? (
                  <img
                    src={backBodySelected17}
                  />
                ) : (
                  <img
                    src={backBody17}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {bodySelections.backBody9 ? (
                  <img
                    src={backBodySelected9}
                  />
                ) : (
                  <img
                    src={backBody9}
                  />
                )}

                {bodySelections.backBody5 ? (
                  <img
                    src={backBodySelected5}
                  />
                ) : (
                  <img
                    src={backBody5}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {bodySelections.backBody6 ? (
                  <img
                    src={backBodySelected6}
                  />
                ) : (
                  <img
                    src={backBody6}
                  />
                )}

                {bodySelections.backBody8 ? (
                  <img
                    src={backBodySelected8}
                  />
                ) : (
                  <img
                    src={backBody8}
                  />
                )}

              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <h2 className="pt-5 text-center font-semibold text-primary pb-8">
          Arraste para o lado para mudar o lado do corpo
        </h2>
      </Carousel>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold no-underline">Medidas Corporais</AccordionTrigger>
          <AccordionContent>
            <div className="pt-4 flex">
              <label className="block text-sm font-medium self-center">
                Abdômen - umbilical (5 cm acima):
              </label>
              <input
                className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                readOnly={true}
                value={bodySelections.abdomenTop}
              />
            </div>

            <div className="pt-4 flex">
              <label className="block text-sm font-medium self-center">
                Cintura - umbilical:
              </label>
              <input
                className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                value={bodySelections.waist}
                readOnly={true}
              />
            </div>

            <div className="pt-4 flex">
              <label className="block text-sm font-medium self-center">
                Abdômen - umbilical (5 cm abaixo):
              </label>
              <input
                className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                value={bodySelections.abdomenBottom}
                readOnly={true}
              />
            </div>

            <div className="pt-4 flex">
              <label className="block text-sm font-medium self-center">
                Quadril - linha do trocânter maior:
              </label>
              <input
                className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                value={bodySelections.hip}
                readOnly={true}
              />
            </div>

            <div className="pt-8 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Coxa Proximal - ponto médio entre o trocânter maior e a base da patela
              </label>
              <div className='flex justify-evenly'>
                <div>
                  <div className='flex pt-3'>
                    <h2 className='self-center font-semibold text-primary'>D:</h2>
                    <input
                      className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                      value={bodySelections.upperLegProxRight}
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    value={bodySelections.upperLegProxLeft}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Coxa Média - ponto médio entre a região inguinal e a base da patela
              </label>
              <div className='flex justify-evenly'>
                <div>
                  <div className='flex pt-3'>
                    <h2 className='self-center font-semibold text-primary'>D:</h2>
                    <input
                      className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                      value={bodySelections.mediumLegRight}
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    value={bodySelections.mediumLegLeft}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Coxa Distal - imediatamente acima da base da patela
              </label>
              <div className='flex justify-evenly'>
                <div>
                  <div className='flex pt-3'>
                    <h2 className='self-center font-semibold text-primary'>D:</h2>
                    <input
                      className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                      value={bodySelections.distalLegRight}
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    value={bodySelections.distalLegLeft}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Perna - ponto médio entre a fossa poplítea e calcâneo
              </label>
              <div className='flex justify-evenly'>
                <div>
                  <div className='flex pt-3'>
                    <h2 className='self-center font-semibold text-primary'>D:</h2>
                    <input
                      className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                      value={bodySelections.legRight}
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    value={bodySelections.legLeft}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Braço - ponto médio entre acrômio de tróclea
              </label>
              <div className='flex justify-evenly'>
                <div>
                  <div className='flex pt-3'>
                    <h2 className='self-center font-semibold text-primary'>D:</h2>
                    <input
                      className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                      value={bodySelections.armRight}
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    value={bodySelections.armLeft}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Peitoral - prega axilar (5 cm abaixo)
              </label>
              <div className='flex justify-evenly'>
                <div>
                  <div className='flex pt-3'>
                    <h2 className='self-center font-semibold text-primary'>D:</h2>
                    <input
                      className="ml-2 text-sm rounded-lg px-2 py-1 font-normal bg-background w-full"
                      value={bodySelections.chestRight}
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal bg-background w-full"
                    value={bodySelections.chestLeft}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>

          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>

  )

}