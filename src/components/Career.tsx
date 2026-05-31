import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science Engineering</h4>
                <h5>Government Polytechnic Manesar</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing a Diploma in Computer Science Engineering (2023 – Present),
              developing strong foundations in programming, IT infrastructure, and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th Standard</h4>
                <h5>HMP Sr. Secondary School</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed 10th Standard with 74% marks, building a solid academic foundation
              with a focus on science and mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Python Course (3 Months)</h4>
                <h5>GradGuru Innovations</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Completed a certified AI Python course covering machine learning fundamentals,
              data analysis, and intelligent system design using Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
