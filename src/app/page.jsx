import Image from "next/image";
import Link from "next/link";

export default function Home( {about, projects, contact} ) {
  return (
    <div className="flex flex-col p-8 m-4 ">
      <div className="bg-red-500 w-1/2 h-1/2">
        {about}
        <p className="text-xl text-center">About</p>
        <Link className="text-gray-500 text-xs" href="/about">About</Link>
        <div className="flex justify-center gap-4"> 
          <h1 className="text-4xl font-bold">김태영</h1>
          {/* 내 사진 넣기 */}
          <Image src="/vercel.svg" alt="" width={30} height={30} />
          <p className="text-lg">Software Engineer</p>
        </div>
        <div>
          <p className="text-lg">I am a software engineer who is passionate about web development and design.</p>
          
        </div>
      </div>
    </div>
  );
}
