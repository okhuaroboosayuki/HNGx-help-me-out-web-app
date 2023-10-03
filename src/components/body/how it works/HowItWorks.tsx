import "./how-it-works.scss";

export const HowItWorks = () => {
  return (
    <div className="works">
      <h3>How it works</h3>

      <div className="how_works">
        <div className="record card">
          <div className="number">1</div>
          <div className="text">
            <h4>Record Screen</h4>
            <p>
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
          </div>
          <img src="/images/recorded_1.png" alt="image of a recorded video" />
        </div>
        <div className="share card">
          <div className="number">2</div>
          <div className="text">
            <h4>Share Your Recording</h4>
            <p>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
          </div>
          <img src="/images/recorded_2.png" alt="image of a recorded video" />
        </div>
        <div className="learn card">
          <div className="number">3</div>
          <div className="text">
            <h4>Learn Effortlessly</h4>
            <p>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
          </div>
          <img src="/images/recorded_3.png" alt="image of a recorded video" />
        </div>
      </div>
    </div>
  );
};
