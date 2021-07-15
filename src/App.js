import './App.css'
import {React,useState} from "react";
import axios from "axios";
import QuoteCard from './components/QuoteCard'

const App = ()=>{

const [quote,setQuote] = useState('')

const getNewQuote =()=>{
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
.then(res=> setQuote(res.data[0]))
}

return(
    <div className='App'>
    {quote && <QuoteCard info={quote}/>}
    <button onClick={()=>getNewQuote()}> Get a new quote!</button>
    </div>
)

}




export default App