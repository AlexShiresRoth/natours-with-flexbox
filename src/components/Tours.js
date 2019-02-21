import React from 'react';
import '../sass/main.scss';

const Tours = (props) => {

    return(
        <section className="section-tours">
               <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">{props.slogan}</h2>
                </div>

                <div className="row">
                    <div className="column-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                FRONT
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                BACK
                            </div>
                        </div>
                    </div>
                    <div className="column-1-of-3">
                        <div className="card">
                            dasdsad
                        </div>
                    </div>
                    <div className="column-1-of-3">
                        <div className="card">
                            dasdsad
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Tours;
