import React from "react";
import Footer from "../components/Footer";
import "../files/css/index.css";
import { Link } from "react-router-dom";
const Index = () => {
    return (
        <>
            <div className="header">
                <h2>VerbTenses.edu</h2>
                <h2>IN-103</h2>
            </div>
            <div className="container-app">
                <div className="container row2">
                        <div className="row ">
                            <div className="col-md-6 centro">
                                <h1>VerbTenses.edu</h1>
                                <p>
                                On this page, we offer you an introduction to some of the grammatical tenses in English. Learn the fundamentals of verbs in different tenses, from present simple to future simple, in a clear and simple way.
                                </p>
                                <Link to={process.env.PUBLIC_URL +"/tema"} className="btn btn-outline-dark btn-lg">Get Started</Link>
                            </div>
                            <div className="col-md-6">
                                <img src="https://img.freepik.com/vector-premium/hombre-autonomo-sentado-escritorio-trabajando-linea-computadora-portatil-casa_268404-47.jpg?w=2000" alt="undraw-education-f-8ruw" border="0" className="img-fluid" />
                            </div>
                        </div>
                    </div>
            </div>
            <div className="container-app backg" >
                <div className="container row2">
                        <div className="row ">
                            <div className="col-md-6 white">
                                <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-meta_114360-903.jpg?w=740&t=st=1682560425~exp=1682561025~hmac=60fa4c2c0d1589a0f30a61b49b0b4f6e76179694723e89e9f3daefe1e66837a8" alt="undraw-education-f-8ruw" border="0" className="img-fluid" />
                            </div>
                            <div className="col-md-6 centro">
                                <h1>our goal</h1>
                                <p>
                                     Our goal is to help you master these essential aspects of English by providing clear explanations, practical examples, and interactive activities. Explore our resources and improve your skills in verb tenses to communicate confidently in English!
                                </p>
                                <Link to={process.env.PUBLIC_URL +"/tema"} className="btn btn-outline-dark btn-lg">Get Started</Link>
                           </div>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;