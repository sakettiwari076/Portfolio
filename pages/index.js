import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../public/theim.png'

export default function Home() {
  return (

  <div>


  
    <div className='container px-2 pt-2 text-white '>
    
        <div className='flex justify-center pt-64 ml-72 '>
          <p className='text-4xl tracking-wide font-mono  	'>HI THERE , I 'M <h1 className='text-9xl font-bold 
            '>saket tiwari.</h1> <p className='text-3xl pt-7 tracking-wide text-green-500 font-mono '>WEB DEVELOPER  { " + "}OPEN SOURCE ENTHUSIAST </p> </p> 
              <div className='w-72 h-40'>
            <img src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535720d39923630d5487d7_peep-47.svg  ' className='img1'></img>
            </div>

        </div>
       <div className='flex justify-center text-2xl font-mono pt-10 mr-36 '>
       <p className=''>Developer with working experience in REACT JS ,<br></br> NEXT JS , VCS-GIT & GITHUB ,<br></br>  BOOTSTRAP 5 , TAILWIND CSS and HTML CSS and JAVASCRIPT <br></br> AUTH0 , GOOGLE ANALYTICS and now working on MERN STACK ..<br></br>
       </p>
       </div>
       <div className='flex justify-center margin2 py-10 '>
       <button className="h-10 rounded-full  px-20 m-2 pt text-black text-xl font-mono font-extrabold  transition-colors duration-150 bg-green-500  focus:shadow-outline hover:bg-green-800">Contact me</button>

</div>
       
      </div>
      </div>
  )
}
