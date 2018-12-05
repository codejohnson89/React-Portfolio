import React from 'react';


const Footer = () => (
    <footer>
    <div className="row">
        <div className="col-sm-6 text-center">
            <img id="logo" className="img-responsive" src="img/logo-white.png" />
            <p>Rather you want lessons in latin dancing or need a website built. <a className="btn btn-dark" href="mailto:info@micahjjohnson.com">Lets talk about it!</a></p>
        </div>
        <div className="col-sm-6 text-center">
            <h3>Follow Me</h3>
            <a href="//github.com/codejohnson89"><i className="fab fa-github-square"></i></a>
            <a href="//twitter.com/EZbucketz_89"><i className="fab fa-twitter-square"></i></a>
            <a href="//www.linkedin.com/in/micah-johnson-344b7a56/"><i className="fab fa-linkedin"></i></a>
            <a href="//www.instagram.com/code_salsa/"><i className="fab fa-instagram"></i></a>
        </div>

    </div>
</footer>
);

export default Footer;