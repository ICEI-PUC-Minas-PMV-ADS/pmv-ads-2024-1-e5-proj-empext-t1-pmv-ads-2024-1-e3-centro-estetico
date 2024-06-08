// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

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
  onSelectionChange: (part: string, value: boolean) => void
  onBodyMeasuresChange: (part: string, value: number) => void
}

export function BodyForm({ onSelectionChange, onBodyMeasuresChange }: BodyFormProps) {

  const [selectedFrontBody0, setSelectedFrontBody0] = useState<boolean>(false)
  const [selectedFrontBody1, setSelectedFrontBody1] = useState<boolean>(false)
  const [selectedFrontBody2, setSelectedFrontBody2] = useState<boolean>(false)
  const [selectedFrontBody3, setSelectedFrontBody3] = useState<boolean>(false)
  const [selectedFrontBody4, setSelectedFrontBody4] = useState<boolean>(false)
  const [selectedFrontBody5, setSelectedFrontBody5] = useState<boolean>(false)
  const [selectedFrontBody6, setSelectedFrontBody6] = useState<boolean>(false)
  const [selectedFrontBody7, setSelectedFrontBody7] = useState<boolean>(false)
  const [selectedFrontBody8, setSelectedFrontBody8] = useState<boolean>(false)
  const [selectedFrontBody9, setSelectedFrontBody9] = useState<boolean>(false)
  const [selectedFrontBody10, setSelectedFrontBody10] = useState<boolean>(false)
  const [selectedFrontBody11, setSelectedFrontBody11] = useState<boolean>(false)
  const [selectedFrontBody12, setSelectedFrontBody12] = useState<boolean>(false)
  const [selectedFrontBody13, setSelectedFrontBody13] = useState<boolean>(false)
  const [selectedFrontBody14, setSelectedFrontBody14] = useState<boolean>(false)
  const [selectedFrontBody15, setSelectedFrontBody15] = useState<boolean>(false)
  const [selectedFrontBody16, setSelectedFrontBody16] = useState<boolean>(false)
  const [selectedFrontBody17, setSelectedFrontBody17] = useState<boolean>(false)
  const [selectedFrontBody18, setSelectedFrontBody18] = useState<boolean>(false)
  const [selectedFrontBody19, setSelectedFrontBody19] = useState<boolean>(false)
  const [selectedFrontBody20, setSelectedFrontBody20] = useState<boolean>(false)
  const [selectedFrontBody21, setSelectedFrontBody21] = useState<boolean>(false)

  const [selectedBackBody1, setSelectedBackBody1] = useState<boolean>(false)
  const [selectedBackBody2, setSelectedBackBody2] = useState<boolean>(false)
  const [selectedBackBody3, setSelectedBackBody3] = useState<boolean>(false)
  const [selectedBackBody4, setSelectedBackBody4] = useState<boolean>(false)
  const [selectedBackBody5, setSelectedBackBody5] = useState<boolean>(false)
  const [selectedBackBody6, setSelectedBackBody6] = useState<boolean>(false)
  const [selectedBackBody7, setSelectedBackBody7] = useState<boolean>(false)
  const [selectedBackBody8, setSelectedBackBody8] = useState<boolean>(false)
  const [selectedBackBody9, setSelectedBackBody9] = useState<boolean>(false)
  const [selectedBackBody10, setSelectedBackBody10] = useState<boolean>(false)
  const [selectedBackBody11, setSelectedBackBody11] = useState<boolean>(false)
  const [selectedBackBody12, setSelectedBackBody12] = useState<boolean>(false)
  const [selectedBackBody13, setSelectedBackBody13] = useState<boolean>(false)
  const [selectedBackBody14, setSelectedBackBody14] = useState<boolean>(false)
  const [selectedBackBody15, setSelectedBackBody15] = useState<boolean>(false)
  const [selectedBackBody16, setSelectedBackBody16] = useState<boolean>(false)
  const [selectedBackBody17, setSelectedBackBody17] = useState<boolean>(false)
  const [selectedBackBody18, setSelectedBackBody18] = useState<boolean>(false)
  const [selectedBackBody19, setSelectedBackBody19] = useState<boolean>(false)
  const [selectedBackBody20, setSelectedBackBody20] = useState<boolean>(false)
  const [selectedBackBody21, setSelectedBackBody21] = useState<boolean>(false)



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
        Toque nas partes do corpo que serão atendidas
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
                {selectedFrontBody13 || svgLoader ? (
                  <img
                    src={frontBodySelected13}
                    onClick={() => {
                      setSelectedFrontBody13(false)
                      onSelectionChange('frontBody13', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody13}
                    onClick={() => {
                      setSelectedFrontBody13(true)
                      onSelectionChange('frontBody13', true)
                    }}
                  />
                )}

                {selectedFrontBody7 || svgLoader ? (
                  <img
                    src={frontBodySelected7}
                    onClick={() => {
                      setSelectedFrontBody7(false)
                      onSelectionChange('frontBody7', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody7}
                    onClick={() => {
                      setSelectedFrontBody7(true)
                      onSelectionChange('frontBody7', true)
                    }}
                  />
                )}

                {selectedFrontBody8 || svgLoader ? (
                  <img
                    src={frontBodySelected8}
                    onClick={() => {
                      setSelectedFrontBody8(false)
                      onSelectionChange('frontBody8', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody8}
                    onClick={() => {
                      setSelectedFrontBody8(true)
                      onSelectionChange('frontBody8', true)
                    }}
                  />
                )}

                {selectedFrontBody15 || svgLoader ? (
                  <img
                    src={frontBodySelected15}
                    onClick={() => {
                      setSelectedFrontBody15(false)
                      onSelectionChange('frontBody15', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody15}
                    onClick={() => {
                      setSelectedFrontBody15(true)
                      onSelectionChange('frontBody15', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">

                {selectedFrontBody14 || svgLoader ? (
                  <img
                    src={frontBodySelected14}
                    onClick={() => {
                      setSelectedFrontBody14(false)
                      onSelectionChange('frontBody14', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody14}
                    onClick={() => {
                      setSelectedFrontBody14(true)
                      onSelectionChange('frontBody14', true)
                    }}
                  />
                )}

                {selectedFrontBody6 || svgLoader ? (
                  <img
                    src={frontBodySelected6}
                    onClick={() => {
                      setSelectedFrontBody6(false)
                      onSelectionChange('frontBody6', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody6}
                    onClick={() => {
                      setSelectedFrontBody6(true)
                      onSelectionChange('frontBody6', true)
                    }}
                  />
                )}

                {selectedFrontBody21 || svgLoader ? (
                  <img
                    src={frontBodySelected21}
                    onClick={() => {
                      setSelectedFrontBody21(false)
                      onSelectionChange('frontBody21', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody21}
                    onClick={() => {
                      setSelectedFrontBody21(true)
                      onSelectionChange('frontBody21', true)
                    }}
                  />
                )}

                {selectedFrontBody4 || svgLoader ? (
                  <img
                    src={frontBodySelected4}
                    onClick={() => {
                      setSelectedFrontBody4(false)
                      onSelectionChange('frontBody4', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody4}
                    onClick={() => {
                      setSelectedFrontBody4(true)
                      onSelectionChange('frontBody4', true)
                    }}
                  />
                )}

                {selectedFrontBody16 || svgLoader ? (
                  <img
                    src={frontBodySelected16}
                    onClick={() => {
                      setSelectedFrontBody16(false)
                      onSelectionChange('frontBody16', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody16}
                    onClick={() => {
                      setSelectedFrontBody16(true)
                      onSelectionChange('frontBody16', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">

                {selectedFrontBody17 || svgLoader ? (
                  <img
                    src={frontBodySelected17}
                    onClick={() => {
                      setSelectedFrontBody17(false)
                      onSelectionChange('frontBody17', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody17}
                    onClick={() => {
                      setSelectedFrontBody17(true)
                      onSelectionChange('frontBody17', true)
                    }}
                  />
                )}

                {selectedFrontBody5 || svgLoader ? (
                  <img
                    src={frontBodySelected5}
                    onClick={() => {
                      setSelectedFrontBody5(false)
                      onSelectionChange('frontBody5', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody5}
                    onClick={() => {
                      setSelectedFrontBody5(true)
                      onSelectionChange('frontBody5', true)
                    }}
                  />
                )}

                {selectedFrontBody18 || svgLoader ? (
                  <img
                    src={frontBodySelected18}
                    onClick={() => {
                      setSelectedFrontBody18(false)
                      onSelectionChange('frontBody18', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody18}
                    onClick={() => {
                      setSelectedFrontBody18(true)
                      onSelectionChange('frontBody18', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">

                {selectedFrontBody19 || svgLoader ? (
                  <img
                    src={frontBodySelected19}
                    onClick={() => {
                      setSelectedFrontBody19(false)
                      onSelectionChange('frontBody19', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody19}
                    onClick={() => {
                      setSelectedFrontBody19(true)
                      onSelectionChange('frontBody19', true)
                    }}
                  />
                )}

                {selectedFrontBody3 || svgLoader ? (
                  <img
                    src={frontBodySelected3}
                    onClick={() => {
                      setSelectedFrontBody3(false)
                      onSelectionChange('frontBody3', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody3}
                    onClick={() => {
                      setSelectedFrontBody3(true)
                      onSelectionChange('frontBody3', true)
                    }}
                  />
                )}

                {selectedFrontBody2 || svgLoader ? (
                  <img
                    src={frontBodySelected2}
                    onClick={() => {
                      setSelectedFrontBody2(false)
                      onSelectionChange('frontBody2', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody2}
                    onClick={() => {
                      setSelectedFrontBody2(true)
                      onSelectionChange('frontBody2', true)
                    }}
                  />
                )}

                {selectedFrontBody20 || svgLoader ? (
                  <img
                    src={frontBodySelected20}
                    onClick={() => {
                      setSelectedFrontBody20(false)
                      onSelectionChange('frontBody20', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody20}
                    onClick={() => {
                      setSelectedFrontBody20(true)
                      onSelectionChange('frontBody20', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">

                {selectedFrontBody10 || svgLoader ? (
                  <img
                    src={frontBodySelected10}
                    onClick={() => {
                      setSelectedFrontBody10(false)
                      onSelectionChange('frontBody10', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody10}
                    onClick={() => {
                      setSelectedFrontBody10(true)
                      onSelectionChange('frontBody10', true)
                    }}
                  />
                )}

                {selectedFrontBody11 || svgLoader ? (
                  <img
                    src={frontBodySelected11}
                    onClick={() => {
                      setSelectedFrontBody11(false)
                      onSelectionChange('frontBody11', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody11}
                    onClick={() => {
                      setSelectedFrontBody11(true)
                      onSelectionChange('frontBody11', true)
                    }}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">

                {selectedFrontBody12 || svgLoader ? (
                  <img
                    src={frontBodySelected12}
                    onClick={() => {
                      setSelectedFrontBody12(false)
                      onSelectionChange('frontBody12', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody12}
                    onClick={() => {
                      setSelectedFrontBody12(true)
                      onSelectionChange('frontBody12', true)
                    }}
                  />
                )}

                {selectedFrontBody9 || svgLoader ? (
                  <img
                    src={frontBodySelected9}
                    onClick={() => {
                      setSelectedFrontBody9(false)
                      onSelectionChange('frontBody9', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody9}
                    onClick={() => {
                      setSelectedFrontBody9(true)
                      onSelectionChange('frontBody9', true)
                    }}
                  />
                )}
              </div>

              <div className="m-0 flex p-0">

                {selectedFrontBody0 || svgLoader ? (
                  <img
                    src={frontBodySelected0}
                    onClick={() => {
                      setSelectedFrontBody0(false)
                      onSelectionChange('frontBody0', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody0}
                    onClick={() => {
                      setSelectedFrontBody0(true)
                      onSelectionChange('frontBody0', true)
                    }}
                  />
                )}

                {selectedFrontBody1 || svgLoader ? (
                  <img
                    src={frontBodySelected1}
                    onClick={() => {
                      setSelectedFrontBody1(false)
                      onSelectionChange('frontBody1', false)
                    }}
                  />
                ) : (
                  <img
                    src={frontBody1}
                    onClick={() => {
                      setSelectedFrontBody1(true)
                      onSelectionChange('frontBody1', true)
                    }}
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
                {selectedBackBody1 || svgLoader ? (
                  <img
                    src={backBodySelected1}
                    onClick={() => {
                      setSelectedBackBody1(false)
                      onSelectionChange('backBody1', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody1}
                    onClick={() => {
                      setSelectedBackBody1(true)
                      onSelectionChange('backBody1', true)
                    }}
                  />
                )}

                {selectedBackBody2 || svgLoader ? (
                  <img
                    src={backBodySelected2}
                    onClick={() => {
                      setSelectedBackBody2(false)
                      onSelectionChange('backBody2', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody2}
                    onClick={() => {
                      setSelectedBackBody2(true)
                      onSelectionChange('backBody2', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {selectedBackBody20 || svgLoader ? (
                  <img
                    src={backBodySelected20}
                    onClick={() => {
                      setSelectedBackBody20(false)
                      onSelectionChange('backBody20', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody20}
                    onClick={() => {
                      setSelectedBackBody20(true)
                      onSelectionChange('backBody20', true)
                    }}
                  />
                )}

                {selectedBackBody3 || svgLoader ? (
                  <img
                    src={backBodySelected3}
                    onClick={() => {
                      setSelectedBackBody3(false)
                      onSelectionChange('backBody3', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody3}
                    onClick={() => {
                      setSelectedBackBody3(true)
                      onSelectionChange('backBody3', true)
                    }}
                  />
                )}

                {selectedBackBody18 || svgLoader ? (
                  <img
                    src={backBodySelected18}
                    onClick={() => {
                      setSelectedBackBody18(false)
                      onSelectionChange('backBody18', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody18}
                    onClick={() => {
                      setSelectedBackBody18(true)
                      onSelectionChange('backBody18', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {selectedBackBody21 || svgLoader ? (
                  <img
                    src={backBodySelected21}
                    onClick={() => {
                      setSelectedBackBody21(false)
                      onSelectionChange('backBody21', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody21}
                    onClick={() => {
                      setSelectedBackBody21(true)
                      onSelectionChange('backBody21', true)
                    }}
                  />
                )}

                {selectedBackBody4 || svgLoader ? (
                  <img
                    src={backBodySelected4}
                    onClick={() => {
                      setSelectedBackBody4(false)
                      onSelectionChange('backBody4', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody4}
                    onClick={() => {
                      setSelectedBackBody4(true)
                      onSelectionChange('backBody4', true)
                    }}
                  />
                )}

                {selectedBackBody19 || svgLoader ? (
                  <img
                    src={backBodySelected19}
                    onClick={() => {
                      setSelectedBackBody19(false)
                      onSelectionChange('backBody19', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody19}
                    onClick={() => {
                      setSelectedBackBody19(true)
                      onSelectionChange('backBody19', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {selectedBackBody13 || svgLoader ? (
                  <img
                    src={backBodySelected13}
                    onClick={() => {
                      setSelectedBackBody13(false)
                      onSelectionChange('backBody13', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody13}
                    onClick={() => {
                      setSelectedBackBody13(true)
                      onSelectionChange('backBody13', true)
                    }}
                  />
                )}

                {selectedBackBody7 || svgLoader ? (
                  <img
                    src={backBodySelected7}
                    onClick={() => {
                      setSelectedBackBody7(false)
                      onSelectionChange('backBody7', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody7}
                    onClick={() => {
                      setSelectedBackBody7(true)
                      onSelectionChange('backBody7', true)
                    }}
                  />
                )}

                {selectedBackBody10 || svgLoader ? (
                  <img
                    src={backBodySelected10}
                    onClick={() => {
                      setSelectedBackBody10(false)
                      onSelectionChange('backBody10', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody10}
                    onClick={() => {
                      setSelectedBackBody10(true)
                      onSelectionChange('backBody10', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {selectedBackBody12 || svgLoader ? (
                  <img
                    src={backBodySelected12}
                    onClick={() => {
                      setSelectedBackBody12(false)
                      onSelectionChange('backBody12', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody12}
                    onClick={() => {
                      setSelectedBackBody12(true)
                      onSelectionChange('backBody12', true)
                    }}
                  />
                )}

                {selectedBackBody14 || svgLoader ? (
                  <img
                    src={backBodySelected14}
                    onClick={() => {
                      setSelectedBackBody14(false)
                      onSelectionChange('backBody14', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody14}
                    onClick={() => {
                      setSelectedBackBody14(true)
                      onSelectionChange('backBody14', true)
                    }}
                  />
                )}

                {selectedBackBody16 || svgLoader ? (
                  <img
                    src={backBodySelected16}
                    onClick={() => {
                      setSelectedBackBody16(false)
                      onSelectionChange('backBody16', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody16}
                    onClick={() => {
                      setSelectedBackBody16(true)
                      onSelectionChange('backBody16', true)
                    }}
                  />
                )}

                {selectedBackBody11 || svgLoader ? (
                  <img
                    src={backBodySelected11}
                    onClick={() => {
                      setSelectedBackBody11(false)
                      onSelectionChange('backBody11', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody11}
                    onClick={() => {
                      setSelectedBackBody11(true)
                      onSelectionChange('backBody11', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {selectedBackBody15 || svgLoader ? (
                  <img
                    src={backBodySelected15}
                    onClick={() => {
                      setSelectedBackBody15(false)
                      onSelectionChange('backBody15', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody15}
                    onClick={() => {
                      setSelectedBackBody15(true)
                      onSelectionChange('backBody15', true)
                    }}
                  />
                )}

                {selectedBackBody17 || svgLoader ? (
                  <img
                    src={backBodySelected17}
                    onClick={() => {
                      setSelectedBackBody17(false)
                      onSelectionChange('backBody17', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody17}
                    onClick={() => {
                      setSelectedBackBody17(true)
                      onSelectionChange('backBody17', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {selectedBackBody9 || svgLoader ? (
                  <img
                    src={backBodySelected9}
                    onClick={() => {
                      setSelectedBackBody9(false)
                      onSelectionChange('backBody9', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody9}
                    onClick={() => {
                      setSelectedBackBody9(true)
                      onSelectionChange('backBody9', true)
                    }}
                  />
                )}

                {selectedBackBody5 || svgLoader ? (
                  <img
                    src={backBodySelected5}
                    onClick={() => {
                      setSelectedBackBody5(false)
                      onSelectionChange('backBody5', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody5}
                    onClick={() => {
                      setSelectedBackBody5(true)
                      onSelectionChange('backBody5', true)
                    }}
                  />
                )}

              </div>

              <div className="m-0 flex p-0">
                {selectedBackBody6 || svgLoader ? (
                  <img
                    src={backBodySelected6}
                    onClick={() => {
                      setSelectedBackBody6(false)
                      onSelectionChange('backBody6', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody6}
                    onClick={() => {
                      setSelectedBackBody6(true)
                      onSelectionChange('backBody6', true)
                    }}
                  />
                )}

                {selectedBackBody8 || svgLoader ? (
                  <img
                    src={backBodySelected8}
                    onClick={() => {
                      setSelectedBackBody8(false)
                      onSelectionChange('backBody8', false)
                    }}
                  />
                ) : (
                  <img
                    src={backBody8}
                    onClick={() => {
                      setSelectedBackBody8(true)
                      onSelectionChange('backBody8', true)
                    }}
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
                type="number"
                step="0.01"
                min="0"
                placeholder="Medida (cm)"
                onChange={(e) => onBodyMeasuresChange('abdomenTop', e.target.value)}
              />
            </div>

            <div className="pt-4 flex">
              <label className="block text-sm font-medium self-center">
                Cintura - umbilical:
              </label>
              <input
                className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                type="number"
                step="0.01"
                min="0"
                placeholder="Medida (cm)"
                onChange={(e) => onBodyMeasuresChange('waist', e.target.value)}
              />
            </div>

            <div className="pt-4 flex">
              <label className="block text-sm font-medium self-center">
                Abdômen - umbilical (5 cm abaixo):
              </label>
              <input
                className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                type="number"
                step="0.01"
                min="0"
                placeholder="Medida (cm)"
                onChange={(e) => onBodyMeasuresChange('abdomenBottom', e.target.value)}
              />
            </div>

            <div className="pt-4 flex">
              <label className="block text-sm font-medium self-center">
                Quadril - linha do trocânter maior:
              </label>
              <input
                className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                type="number"
                step="0.01"
                min="0"
                placeholder="Medida (cm)"
                onChange={(e) => onBodyMeasuresChange('hip', e.target.value)}
              />
            </div>

            <div className="pt-8 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Coxa Proximal - ponto médio entre o trocânter maior e a base da patela
              </label>
              <div className='flex justify-evenly'>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary'>D:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('upperLegProxRight', e.target.value)}
                  />
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('upperLegProxLeft', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Coxa Média - ponto médio entre a região inguinal e a base da patela
              </label>
              <div className='flex justify-evenly'>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary'>D:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('mediumLegRight', e.target.value)}
                  />
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('mediumLegLeft', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Coxa Distal - imediatamente acima da base da patela
              </label>
              <div className='flex justify-evenly'>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary'>D:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('distalLegRight', e.target.value)}
                  />
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('distalLegLeft', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Perna - ponto médio entre a fossa poplítea e calcâneo
              </label>
              <div className='flex justify-evenly'>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary'>D:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('legRight', e.target.value)}
                  />
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('legLeft', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Braço - ponto médio entre acrômio de tróclea
              </label>
              <div className='flex justify-evenly'>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary'>D:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('armRight', e.target.value)}
                  />
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('armLeft', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col">
              <label className="block text-sm font-medium self-center">
                Peitoral - prega axilar (5 cm abaixo)
              </label>
              <div className='flex justify-evenly'>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary'>D:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal bg-background w-full"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('chestRight', e.target.value)}
                  />
                </div>
                <div className='flex pt-3'>
                  <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                  <input
                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal bg-background w-full"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Medida (cm)"
                    onChange={(e) => onBodyMeasuresChange('chestLeft', e.target.value)}
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