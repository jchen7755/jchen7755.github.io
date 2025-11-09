import React from 'react';

export default function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <a href="https://webpages.charlotte.edu/jchen84/">UNCC Webspace</a>
        {' | '}
        <a href="https://github.com/jchen7755">GitHub</a>
        {' | '}
        <a href="https://jchen7755.github.io/">GitHub Pages</a>
        {' | '}
        <a href="https://jchen7755.github.io/itis3135/">Course Page</a>
        {' | '}
        <a href="https://www.freecodecamp.org/johnnychen">FreeCodeCamp</a>
        {' | '}
        <a href="https://www.codecademy.com/profiles/jchen7755">Codecademy</a>
        {' | '}
        <a href="https://www.linkedin.com/in/thejohnnychen/">LinkedIn</a>
      </nav>
      <div className="footer-info">
        <p>Page Built by <a href="https://judgycat.com/">Judgy Cat Enterprise</a> © 2025</p>
        <div className="validation-badges">
          <a href="https://validator.w3.org/check?uri=referer">
            <span className="validation-badge">HTML5 Valid</span>
          </a>
          {' | '}
          <a href="https://jigsaw.w3.org/css-validator/check/referer">
            <span className="validation-badge">CSS Valid</span>
          </a>
        </div>
      </div>
    </footer>
  );
}