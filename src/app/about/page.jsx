'use client'

import ContactLinks from '@/components/Links/contactLinks/contactLinks'
import Image from 'next/image'
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableColumn,
  TableRow,
  getKeyValue
} from '@nextui-org/table'
import { rows, columns } from '@/constants/technology'
import TechTable from '@/components/TechTable/techTable'

const About = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-[1200px] text-center border-solid border-2 p-4">
        <div className="flex justify-center gap-4">
          <h1 className="text-4xl font-bold">김태영</h1>
          {/* 내 사진 넣기 */}
          <Image className="items-center" src="/images/email.svg" alt="" width={30} height={30} />
        </div>
        <div className='flex justify-center m-3'>
          <p className="text-lg">열정적인 신입 소프트웨어 엔지니어입니다.</p>
        </div>
        <div className='grid grid-cols-4'>
          <div className='border-b-2 py-3'>
            <p className='font-bold p-2'>생 년 월 일</p>
            <p>1997.10.22</p>
            <p className='border-b-2 border-dotted pb-3'><br></br></p>
            <p className='pt-3 font-bold'>Email</p>
            <p>qwez0498@gmail.com</p>
          </div>
          <div className='border-b-2 py-3'>
            <p className='font-bold p-2'>학력 사항</p>
            <p>2016.03 ~ 2020.02</p>
            <p className='border-dotted border-b-2 pb-3'>경남 정보 대학교(반도체 전자)</p>
            <p className='pt-3'>2013.03 ~ 2016.02</p>
            <p>부산 중앙 고등학교(이과)</p>
          </div>
          <div className='border-b-2 py-3'>
            <p className='font-bold p-2'>병역 사항</p>
            <p> 2017.01.23 ~ 2018.10.20</p>
            <p className='border-b-2 border-dotted pb-3'>육군 병장(전역)</p>
          </div>
          <div className='border-b-2 py-3'>
            <p className='font-bold p-2'>교육 이수</p>
            <p>2022.12 ~ 2023.06</p>
            <p className='border-dotted border-b-2 pb-3'>핀테크 디지털 금융서비스 자바 개발자</p>
            <p className='pt-3'>2022.06 ~ 2023.09</p>
            <p>Intel AI future workforce</p>
          </div>
        </div>
        <div className='p-4 flex justify-center border-b-2'>
          <TechTable />
        </div>
        {/* Contact Link */}
        <div className='flex gap-4 p-4'>
          <ContactLinks />
        </div>
      </div>
    </div>
  )
}

export default About