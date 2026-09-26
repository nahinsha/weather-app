import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)




// querycleintprover holo tansack query er ekta provider jeta cach memory provide kore jar vitore
// APi theke j data fetch korbo segula memory te store korte pari,,,
// api rcalling,,,error handaling,,loading handling egula she kore



//jodi chai pura system tai query client dara wrap hoye jak taile  querycleintprover dara pura APP
// k wrap korai dibo
//query client cach storage porvide kore
//query client ekta variable toiri korlam jar vitore nootn instance toiri korchi(new QueryClient())
// ei queryClient variable take client props e pass kore dicchi(client={queryClient})
// jate app component e seta use korte pari


//QueryClient() holo tanstack query er ekta component,,j component er vitore  
//transtack query er joto functionality ache segular code likha ache
// new QueryClient() instance e j return value pabo segula  queryClient variable store kore rakhsi
