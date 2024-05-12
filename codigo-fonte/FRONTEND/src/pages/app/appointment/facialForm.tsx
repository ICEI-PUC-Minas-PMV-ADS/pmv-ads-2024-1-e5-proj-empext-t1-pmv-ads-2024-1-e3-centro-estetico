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

import faceTurnedSelected323131 from '../../../assets/leftFaceSelected/Mask group-3.svg'
import { ReactSVG } from 'react-svg';

interface FacePart {
  id: string;
  defaultImage: string;
  selectedImage: string;
  carousel: string;
}

const faceParts: FacePart[] = [
  // Left Carousel
  { id: 'faceTurned3', defaultImage: faceTurned3, selectedImage: faceTurnedSelected3, carousel: 'left' },
  { id: 'faceTurned8', defaultImage: faceTurned8, selectedImage: faceTurnedSelected8, carousel: 'left' },
  { id: 'faceTurned7', defaultImage: faceTurned7, selectedImage: faceTurnedSelected7, carousel: 'left' },
  { id: 'faceTurned9', defaultImage: faceTurned9, selectedImage: faceTurnedSelected9, carousel: 'left' },
  { id: 'faceTurned2', defaultImage: faceTurned2, selectedImage: faceTurnedSelected2, carousel: 'left' },
  { id: 'faceTurned1', defaultImage: faceTurned1, selectedImage: faceTurnedSelected1, carousel: 'left' },
  { id: 'faceTurned10', defaultImage: faceTurned10, selectedImage: faceTurnedSelected10, carousel: 'left' },
  { id: 'faceTurned5', defaultImage: faceTurned5, selectedImage: faceTurnedSelected5, carousel: 'left' },
  { id: 'faceTurned0', defaultImage: faceTurned0, selectedImage: faceTurnedSelected0, carousel: 'left' },
  { id: 'faceTurned6', defaultImage: faceTurned6, selectedImage: faceTurnedSelected6, carousel: 'left' },
  { id: 'faceTurned4', defaultImage: faceTurned4, selectedImage: faceTurnedSelected4, carousel: 'left' },
  // Front Carousel
  { id: 'frontFace0', defaultImage: face0, selectedImage: faceSelected0, carousel: 'front' },
  { id: 'frontFace9', defaultImage: face9, selectedImage: faceSelected9, carousel: 'front' },
  { id: 'frontFace8', defaultImage: face8, selectedImage: faceSelected8, carousel: 'front' },
  { id: 'frontFace10', defaultImage: face10, selectedImage: faceSelected10, carousel: 'front' },
  { id: 'frontFace11', defaultImage: face11, selectedImage: faceSelected11, carousel: 'front' },
  { id: 'frontFace1', defaultImage: face1, selectedImage: faceSelected1, carousel: 'front' },
  { id: 'frontFace7', defaultImage: face7, selectedImage: faceSelected7, carousel: 'front' },
  { id: 'frontFace6', defaultImage: face6, selectedImage: faceSelected6, carousel: 'front' },
  { id: 'frontFace5', defaultImage: face5, selectedImage: faceSelected5, carousel: 'front' },
  { id: 'frontFace4', defaultImage: face4, selectedImage: faceSelected4, carousel: 'front' },
  { id: 'frontFace3', defaultImage: face3, selectedImage: faceSelected3, carousel: 'front' },
  { id: 'frontFace2', defaultImage: face2, selectedImage: faceSelected2, carousel: 'front' },
  // Right Carousel
  { id: 'faceTurned3', defaultImage: faceTurned3, selectedImage: faceTurnedSelected3, carousel: 'right' },
  { id: 'faceTurned8', defaultImage: faceTurned8, selectedImage: faceTurnedSelected8, carousel: 'right' },
  { id: 'faceTurned7', defaultImage: faceTurned7, selectedImage: faceTurnedSelected7, carousel: 'right' },
  { id: 'faceTurned9', defaultImage: faceTurned9, selectedImage: faceTurnedSelected9, carousel: 'right' },
  { id: 'faceTurned2', defaultImage: faceTurned2, selectedImage: faceTurnedSelected2, carousel: 'right' },
  { id: 'faceTurned1', defaultImage: faceTurned1, selectedImage: faceTurnedSelected1, carousel: 'right' },
  { id: 'faceTurned10', defaultImage: faceTurned10, selectedImage: faceTurnedSelected10, carousel: 'right' },
  { id: 'faceTurned5', defaultImage: faceTurned5, selectedImage: faceTurnedSelected5, carousel: 'right' },
  { id: 'faceTurned0', defaultImage: faceTurned0, selectedImage: faceTurnedSelected0, carousel: 'right' },
  { id: 'faceTurned6', defaultImage: faceTurned6, selectedImage: faceTurnedSelected6, carousel: 'right' },
  { id: 'faceTurned4', defaultImage: faceTurned4, selectedImage: faceTurnedSelected4, carousel: 'right' },
]

interface FacialFormProps {
  faceSelections: { [key: string]: boolean };
  onSelectionChange: (part: string, value: boolean) => void;
}

export function FacialForm({ faceSelections, onSelectionChange }: FacialFormProps) {
  const carouselGroups = faceParts.reduce((groups, part) => {
    if (!groups[part.carousel]) {
      groups[part.carousel] = [];
    }
    groups[part.carousel].push(part);
    return groups;
  }, {} as { [key: string]: FacePart[] });

  return (
    <div className='justify-center flex flex-col pt-8 pb-10'>
      <h1 className="font-semibold text-xl text-center pb-5">
        Toque nas partes do rosto que serão atendidas
      </h1>
      <Carousel className="flex flex-col">
        <CarouselContent>
          {Object.entries(carouselGroups).map(([key, parts]) => (
            <CarouselItem key={key}>
              <div className={`flex flex-col items-center p-0 m-0 ${key === 'right' ? 'scale-x-[-1]' : ''}`}>
                {parts.map(part => (
                  <ReactSVG
                    key={part.id}
                    src={faceSelections[part.id] ? part.selectedImage : part.defaultImage}
                    onClick={() => onSelectionChange(part.id, !faceSelections[part.id])}
                    wrapper="div"
                    className="svg-wrapper"
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <h2 className="text-primary font-semibold text-center pt-5">
          Arraste para o lado para mudar a posição do rosto
        </h2>
      </Carousel>
    </div>
  );
}