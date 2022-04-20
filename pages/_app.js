import '../styles/globals.css' ;
import react  from 'react';

function MyApp({ Component, pageProps }) {
  return (
 <div > 
 
    
     
   <Component {...pageProps} />
   
   
   </div>
  


);
  };

export default MyApp
