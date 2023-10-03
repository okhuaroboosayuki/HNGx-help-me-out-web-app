import "./hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_text_wrapper">
        <div className="text_container">
          <h3 className="hero_text_heading">Show Them Don’t Just Tell</h3>
          <p className="hero_text">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <a href="http://" className="hero_cta">
            <p className="hero_cta_text">Install HelpMeOut</p>
            <span>
              <img src="/images/arrow-right.svg" alt="arrow right" />
            </span>
          </a>
        </div>
      </div>
      <div className="hero_pics_wrapper">
        <div className="grid_col-1">
          <img
            src="/images/old-woman-with-laptop.png"
            alt="old woman with laptop"
            loading="lazy"
          />
        </div>
        <div className="grid_col-2">
          <img
            src="/images/girl-with-phone.png"
            alt="girl smiling at phone in her hand"
            loading="lazy"
          />
        </div>
        <div className="grid_col-3">
          <img
            src="/images/father-and-son.png"
            alt="father and son talking"
            loading="lazy"
          />
        </div>
        <div className="grid_col-4">
          <img src="/images/dots_one.png" alt="thick dots" loading="lazy" />
        </div>
        <div className="grid_col-5">
          <img src="/images/dots_faded.png" alt="faded dots" loading="lazy" />
        </div>
      </div>
    </div>
  );
};
