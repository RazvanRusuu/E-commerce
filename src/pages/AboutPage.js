import React from "react";
import PageHero from "../components/PageHero";
import about from "../assets/about.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <section className="about">
        <div className="container grid grid-2--cols">
          <div className="about__img-container">
            <img className="about__image" src={about} alt="furniture" />
          </div>
          <article className="about-article">
            <h2 className="heading-secondary">
              Our Story
              <span className="underline u-margin-bottom-medium"></span>
            </h2>
            <p className="paragraph about-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              veniam dolore facere eos tempore numquam aliquid mollitia,
              veritatis officiis obcaecati, cum explicabo animi inventore vitae
              laboriosam nostrum, asperiores expedita enim. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Ut debitis nesciunt omnis,
              nisi nemo ab ex accusantium illum consequuntur aut odio ipsam
              praesentium ea, soluta ad sit maxime, corporis dolore?
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
