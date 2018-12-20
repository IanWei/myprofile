import React from 'react';
import Composition from '../Other/Composition';

const SectionAbout = props => {
  return (
    <section className="section section-about" id="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Read more about me
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Enjoy being a software engineer</h3>
          <p className="paragraph">
            I’m so glad that I can be a software engineer since my major was in electrical engineering, not in
            information technology.
          </p>
          <p className="paragraph">
            In the period of university, I found that programming is amazing and attractive. It gave me a sense of
            achievement once I completed a certain function with a piece of code because debugging is annoying to every
            programmer. For example, killing a bug is like defeating an enemy in a game. Fixing a function, like
            defeating a boss in the final mission!
          </p>
          <p className="paragraph">
            Currently, I horn my skills in front-end developing areas. Familiar with JavaScript, HTML, CSS. Have
            experience on building responsive websites with the ReactJS framework, combining with Redux to control
            states among components effectively.
          </p>
          <p className="paragraph">
            Have 3 years experience as a front-end developer in a Peer-to-Peer Lending company in Shenzhen. Responsible
            for building an interactive and responsive website with HTML5, SASS, AJAX, and JQuery. In addition, also
            experienced reconstructing website with ReactJS and Webpack.
          </p>
          <p className="paragraph">
            I pave my way for becoming a full-stack developer. By using my spare time to enhance my back-end knowledge
            and dive in deeper to explore more about Node JS, Mongo DB, and Next JS.
          </p>
        </div>
        <div className="col-1-of-2">
          <Composition/>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;