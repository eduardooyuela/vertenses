import React from "react";
import { Link } from 'react-router-dom';


const Tem = (props) => {
    const variable = props.tema.id - 1;
    return (
        <div>
            <h1>{props.tema.title}</h1>
            <div className="informacion">
                <h2>Formation</h2>
                <hr />
                <p>{props.tema.formation}</p>
            </div>
            
              {
                (props.tema.uses != null) ? 
                <div className="informacion">
                 <h2>Uses</h2> 
                    <hr />
                {
                    props.tema.uses.map((use) => (
                        <>
                            <b>{use.title}</b>
                            <p>{use.description}</p>
                            <p>Exaple: {use.Example}</p>
                        </>
                    ))
    
                } 
                </div>
                
                : null
              }
            {
                (props.tema.Sentencestructure != null) ?
                <div className="informacion">
                    <h2>Sentencestructure</h2>
                    <hr />
                    {
                        props.tema.Sentencestructure.map((sentence) => (
                            <>
                                <b style={{width: "100% !important;" }}>{sentence.title}</b>
                                <p>{sentence.description}</p>
                                <p>Example: {sentence.Example}</p>
                            </>
                        ))

                    }
                </div>
                : null

            }

            <div className="informacion">
            <h2>Examples:</h2>
            <hr />
                <div className="ejemplos">
                    {
                        props.tema.Examples.map((example) => (
                            <div className="ejemplo">
                                <b>{example.title}</b>
                                <p>{example.afirmative}</p>
                                <p>{example.negative}</p>
                                <p>{example.interogative}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Link to={`quiz/${variable}`} className="btn btn-outline-dark btn-lg quizz" onClick={()=>{document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>start test</Link>
        </div>
    );
}

export default Tem;