import '../styles/globals.css' ;
import react  from 'react';


function MyApp({ Component, pageProps }) {
  return (
 <div className=' '> 
    
     
   <Component {...pageProps} />
   
   
   </div>
  


);
  };

export default MyApp
