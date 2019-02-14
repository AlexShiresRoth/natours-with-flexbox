import React from 'react';
import '../sass/main.scss';

const Main = (props) => {
    
    return (
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">{props.slogan}</h2>
                </div>
                <div className="row">
                    <div className="column-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You will fall in love with nature</h3>
                            <p className="paragraph">
                                {props.text}
                            </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before </h3>
                            <p className="paragraph">
                                {props.text}
                            </p>
                        <a  href="#" className="btn-text">Learn More &rarr; </a>
                    </div>
                    <div className="column-1-of-2">
                        images
                    </div>
                </div>
            </section>
        </main>
    )

}

export default Main;