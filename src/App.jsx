import React,{useEffect,useMemo,useState} from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
import "./app.css"
function App() {
  const[userName,setUserName]=useState(null);
  const [questionNumber,setQuestionNumber] = useState(1);
  const[timeOut,setTimeOut]= useState(false);
  const[stop,setStop]= useState(false);
  const[earned,setEarned]=useState("$ 0");

  const data =[
    {
      id:1,
      question:"Rolex is a company that specification in what type of product?",
      answers:[
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Computer",
          correct: false,
        },
        {
          text: "Car",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

  ];
  const moneyPyramid = useMemo(()=>
    [
      {id: 1,amount:"$1"},
      {id: 2,amount:"$10"},
      {id: 3,amount:"$100"},
      {id: 4,amount:"$1000"},
      {id: 5,amount:"$10000"},
      {id: 6,amount:"$100000"},
      {id: 7,amount:"$1000000"},
      {id: 8,amount:"$10000000"},
      {id: 9,amount:"$100000000"},
      {id: 10,amount:"$1000000000"},
      {id: 11,amount:"$10000000000"},
      {id: 12,amount:"$100000000000"},
      {id: 13,amount:"$1000000000000"},
      {id: 14,amount:"$10000000000000"},
      {id: 15,amount:"$100000000000000"},
    ].reverse(),
   []);    

  useEffect(()=>{
    questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount)
  },[moneyPyramid,questionNumber]);
  return (
    <div className="app">
      
      {userName ? (
        <>
         <div className="main">
        {stop ? <h1 className="endText">You earned {earned}</h1> :(
        <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} />
          </div>
        </div>
        <div className="bottom">
           <Trivia data={data} setStop={setStop} setTimeOut={setTimeOut} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
        </div>
        </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m)=>(
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>          
  

        </>

      ) : <Start setUserName={setUserName}/>}
      
  </div>   
  ) ;
  }
export default App;
