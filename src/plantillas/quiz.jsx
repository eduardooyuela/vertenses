import React from "react";
import { useParams } from 'react-router-dom';
import { Quizz } from "../files/js/variables";
import "../files/css/quizz.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";





const Quiz = (props) => {
    const { id } = useParams();

    const [correctas, setCorrectas] = useState(0);
    const [incorrectas, setIncorrectas] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    const [condicion, setCondicion] = useState(false);
    useEffect(() => {
        setCondicion(false);
        setCorrectas(0);
        setIncorrectas(0);
        setPorcentaje(0);
    }, []);




    const calculate = () => {
        setCorrectas(0);
        setIncorrectas(0);
        setPorcentaje(0);

        const questions = document.querySelectorAll(".question");
            let rcorectas = 0;
            let rincorectas = 0;

            questions.forEach((question) => {
                const answer = question.querySelector("input:checked");
                if (answer) {
                   
                    if (answer.value == Quizz[id].preguntas[parseInt(answer.name) - 1].correct) {
                        rcorectas++;
                    } else {
                        rincorectas++;
                    }

                }
            });
        
        let rporcentaje = (rcorectas / (rcorectas + rincorectas)) * 100;
        setCorrectas(rcorectas);
        setIncorrectas(rincorectas);
        setPorcentaje(rporcentaje);
        setCondicion(!condicion);
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
    }





    return (
        <div>
           
            <div className='bar '  >
                <h2>VerbTenses.edu</h2>
                <h2>IN-103</h2>
            </div>
            <div className="quizcontainer">
                <div className="contentquizz">
                <div className="quiz">
                   
                    
                    
                        <div className="resultados">
                        <h1>Quiz: {Quizz[id].title}</h1>
                            {
                        (condicion) ? 
                        
                           <>
                           <hr />
                                <h3>Results</h3>
                                <div className="estadisticas">
                                    <h2>correct: {correctas}</h2>
                                    <h2>incorrect: {incorrectas}</h2>
                                    <h2>qualification: {porcentaje} %</h2>
                                </div>
                                
                                <Link to="/tema"  className="btn btn-primary">Back</Link>
                                <button onClick={() => window.location.reload()} className="btn btn-danger">Retry</button>
                            </>
                        
                        :
                        <>
                            
                            <h2>instructions</h2>
                            <p>Select the answer from the options that you think is correct.</p>  
                        </>
                            }
                        </div>
                    

                </div>
                <div className="quizcontent">
                    <div className="quizquestion">
                        {
                            Quizz[id].preguntas.map((question) => (
                                <div className="question">
                                    <h4>{question.question}</h4>
                                    <div className="quizanswers">
                                        
                                        {
                                                question.answers.map((answer, index) => (
                                                    <div className="quizanswer">
                                                        <input type="radio" name={question.id} value={index} id={`${parseInt(question.id)}/${index} `} 
                                                            disabled={condicion}
                                                            className={(!condicion)? "radiohover": " "}
                                                        />
                                                        <label htmlFor={`${parseInt(question.id)}/${index} `}>{answer}</label>
                                                    </div>
                                                ))
                                            }
                                        
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
                </div>
                <div className="btn" style={{width:"100% !important;"}}>
                    {
                        (!condicion) ?
                        <button className="btn btn-primary" style={{width:"100% !important;"}}
                        onClick={calculate}
                    
                             >Submit</button>
                        :
                        null

                    }
                </div>
            </div>
        </div>
    );
}

export default Quiz;
