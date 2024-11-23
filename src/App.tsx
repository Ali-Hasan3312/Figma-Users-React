import { IoIosSearch } from "react-icons/io";
import './App.css'
import lela from "./assets/pexels-moose-photos-170195-1036622.jpg"
import annie from './assets/pexels-pixabay-371160.jpg'
import amy from './assets/pexels-tomaz-barcellos-999425-1987301.jpg'
import jesus from './assets/mens/pexels-chloekalaartist-1043473.jpg'
import robert from './assets/mens/pexels-italo-melo-881954-2379004.jpg'
import anthony from './assets/mens/pexels-olly-842811.jpg'
function App() {
  

  return (
   <div className='py-12 bg-slate-100 flex items-center justify-center'>
   <div className='py-8 w-[80%] rounded-lg shadow-lg bg-white px-4'>
   <h1 className=' m-8 font-bold text-2xl'>Users</h1>
   <div className="flex items-center justify-between px-8">
    <div className="h-12 w-48 border relative rounded border-gray-300">
      <IoIosSearch className=" absolute top-3 left-2 text-2xl" />
      <input type="text" placeholder="Search Users" className="absolute outline-none left-12 w-[68%] top-3" />
    </div>
    <nav className="flex items-center justify-center gap-8">
      <button>Reputation</button>
      <button className=" px-2 py-2 bg-blue-400 text-white rounded">New Users</button>
      <button>Vectors</button>
      <button>Editors</button>
      <button>Moderators</button>
    </nav>
   </div>
   <div className=" m-8 flex gap-4">
    <div className="h-[200px] w-[320px] rounded-lg bg-slate-50">
    <div className="pt-4 flex gap-4 justify-center">
      <img src={lela} className="h-24 w-24 object-cover rounded-full" alt="" />
      <div className="flex flex-col ">
        <h2 className=" text-lg font-bold">Lelah Nichols</h2>
        <span className=" font-medium">Troy, MI</span>
        <div className="flex items-center justify-center gap-2 mt-8 text-sm">
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">clothes</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">stem</button>
        </div>
      </div>
    </div>
    </div>
    
    <div className="h-[200px] w-[320px] rounded-lg bg-slate-50 border border-blue-400 shadow-lg">
    <div className="pt-4 flex flex-wrap gap-4 justify-center">
      <img src={jesus} className="h-24 w-24 object-cover rounded-full" alt="" />
      <div className="flex flex-col ">
        <h2 className=" text-lg font-bold">Jesus Weiss</h2>
        <span className=" font-medium">Fort Worth, TX</span>
        <div className="grid grid-cols-2 items-center justify-center gap-2 mt-8 text-sm">
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">headset</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">gadget</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">speed</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">winter</button>
        </div>
      </div>
    </div>
    </div>
    <div className="h-[200px] w-[320px] rounded-lg bg-slate-50">
    <div className="pt-4 flex gap-4 justify-center">
      <img src={annie} className="h-24 w-24 object-cover rounded-full" alt="" />
      <div className="flex flex-col ">
        <h2 className=" text-lg font-bold">Annie Rice</h2>
        <span className=" font-medium">Austin, TX</span>
        <div className="grid grid-cols-2 items-center justify-center gap-1 mt-8 text-sm">
          <button className=" border border-blue-500 rounded-3xl font-medium px-1 bg-white text-blue-500">road</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-1 bg-white text-blue-500">mountain</button>
          <button className=" border border-blue-500 rounded-3xl font-medium bg-white text-blue-500">trip</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-1 bg-white text-blue-500">earth</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-1 bg-white text-blue-500">nature</button>
        </div>
      </div>
    </div>
    </div>
   
   </div>
   <div className=" mx-8 -mt-4 flex gap-2">
    <div className="h-[200px] w-[320px] rounded-lg bg-slate-50">
    <div className="pt-4 flex gap-4 justify-center">
      <img src={robert} className="h-24 w-24 object-cover rounded-full" alt="" />
      <div className="flex flex-col ">
        <h2 className=" text-lg font-bold">Robert Brower</h2>
        <span className=" font-medium">Cincinnati, OH</span>
        <div className="grid grid-cols-2 items-center justify-center gap-1 mt-8 text-sm">
          <button className=" border border-blue-500 rounded-3xl font-medium px-1 bg-white text-blue-500">maintenence</button>
          <button className=" border border-blue-500 rounded-3xl font-medium bg-white text-blue-500">gears</button>
          <button className=" border border-blue-500 rounded-3xl font-medium bg-white text-blue-500">frames</button>
          <button className=" border border-blue-500 rounded-3xl font-medium bg-white text-blue-500">repair</button>
        </div>
      </div>
    </div>
    </div>
    
    <div className="h-[200px] w-[320px] rounded-lg bg-slate-50">
    <div className="pt-4 flex flex-wrap gap-4 justify-center">
      <img src={amy} className="h-24 w-24 object-cover rounded-full" alt="" />
      <div className="flex flex-col ">
        <h2 className=" text-lg font-bold">Amy Campbell</h2>
        <span className=" font-medium">Warrior, AL</span>
        <div className="flex items-center justify-center gap-2 mt-8 text-sm">
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">music</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">disks</button>
        </div>
      </div>
    </div>
    </div>
    <div className="h-[200px] w-[320px] rounded-lg bg-slate-50">
    <div className="pt-4 flex gap-4 justify-center">
      <img src={anthony} className="h-24 w-24 object-cover rounded-full" alt="" />
      <div className="flex flex-col ">
        <h2 className=" text-lg font-bold">Anthony S. Morin</h2>
        <span className=" font-medium">Lyndhurst, NJ</span>
        <div className="flex items-center justify-center gap-2 mt-8 text-sm">
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">Vintage</button>
          <button className=" border border-blue-500 rounded-3xl font-medium px-2 bg-white text-blue-500">electric</button>
        </div>
      </div>
    </div>
    </div>
   </div>
   </div>
   </div>
  )
}

export default App
