import React from 'react';




const Projects = () => (
    <section id="sectionFour">
        <h2 className="text-center project-header">A Few of My Projects</h2>
        <p className="text-center">Here are just a few of my projects. Some are still a working progress but nonetheless avaiable to show case. If you would like to get a copy of my resume for yourself please click below for the available format.</p>
        <div className="text-center">
            <a className="btn btn-primary resume" href="Resume.docx">Download .DOCX</a>
            <a className="btn btn-primary resume" href="Resume.pdf">Download .PDF</a>
        </div>
        <div className="container myWork">
            <div className="row">
                <div className="col-md-4">
                    <a href="https://codejohnson89.github.io/HomePriceIndex/" target="_blank">
                        <img className="img-fluid" src="/img/hpi.jpg" alt="First slide"/>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://codejohnson89.github.io/dominoes/" target="_blank">
                        <img className="img-fluid" src="/img/dominoes.jpg" alt="Second slide"/>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="https://codejohnson89.github.io/loanAppUpdate/StartLoanApp.html" target="_blank">
                        <img className="img-fluid" src="/img/loanapp.jpg" alt="Third slide"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;