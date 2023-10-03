import "./feature.scss";

export const Feature = () => {
  return (
    <div className="feature">
      <div className="feature_head">
        <div className="feature_text">
          <h3>Features</h3>
          <p>Key Highlights of Our Extension</p>
        </div>
      </div>
      
      <div className="feature_content">
        <div className="feature_check_list">
          <div className="feature_check">
            <img
              src="/images/colored_circle.svg"
              alt="colored circle"
              className="check_icon"
            />
            <div className="check_text">
              <h4>Simple Screen Recording</h4>
              <p>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="feature_check">
            <img
              src="/images/circle_up.svg"
              alt="cicrle icon"
              className="check_icon"
            />
            <div className="check_text">
              <h4>Easy-to-Share URL</h4>
              <p>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="feature_check">
            <img
              src="/images/circle_refresh.svg"
              alt="cicrle refresh icon"
              className="check_icon"
            />
            <div className="check_text">
              <h4>Revisit Recordings</h4>
              <p>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>

        <div className="feature_video">
            <img src="/images/video-cover.png" alt="video placeholder" />
        </div>
      </div>
    </div>
  );
};
