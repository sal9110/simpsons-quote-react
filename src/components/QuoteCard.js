import './QuoteCard.css' 

const QuoteCard =({info})=>{

return (
    <div className="wrapper">
        <h1 className="name">{info.character}</h1>
        <img className="image" src={info.image} alt="simpson character"/>
        <p className="quote">{info.quote}</p>
    </div>
)
} 

export default QuoteCard