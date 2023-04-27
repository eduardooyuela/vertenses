import React from "react";
import "../files/css/tema.css"
import "../files/css/variables.css"
import { useState } from "react";
import { useEffect } from "react";
import Tem from "../components/tem";
import temas from "../files/js/variables";
import { temasd } from "../files/js/variables";
import Footer from "../components/Footer";

const Tema = () => { 
    const [tema, setTema] = useState(temasd[0]);

    const hola = (e) => {
        const cs = e.target.value - 1;
        setTema(temasd[cs]);
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>  
            <div className='bar '  >
                <h2>VerbTenses.edu</h2>
                <h2>IN-103</h2>
            </div>
            <div className="container-app">
                <nav className="leftsection">
                    <div className="title">
                        <h1>VerbTenses</h1>
                    </div>
                    <ul className="listverbs">
                            {
                                temas.map((tema) => (
                                    <>
                                        <input type="radio" name="tema" id={tema.id} value={tema.id} onClick={hola} 
                                           
                                        />
                                        <label htmlFor={tema.id}>{tema.name}</label>
                                    </>
                                ))

                            }

                    </ul>

                </nav>
                <div className="rightsection">
                    <Tem tema={tema} />
                    <Footer />
                </div>
                
            </div>

            
        </>
    );
}

export default Tema;