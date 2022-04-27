import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
 
import App from './components/App';


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode> 
    <ChakraProvider>
      <App /> 
    </ChakraProvider>
  </React.StrictMode>
);



 




// import React from 'react';
// import ReactDOM from 'react-dom/client'; 
// import App from './App';
// import reportWebVitals from './reportWebVitals'; 
// import { ChakraProvider } from '@chakra-ui/react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode> 
//     <ChakraProvider>
//       <App /> 
//     </ChakraProvider>
//   </React.StrictMode>
// );


// reportWebVitals();
 