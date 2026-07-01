import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Internship</h4>
                <h5>Web Experts Nepal Pvt. Ltd. | Kathmandu</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Assisted in frontend development using React.js. Learned and applied
              component-based architecture, state management, and collaborative development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Developer</h4>
                <h5>Varosa Technology | Kathmandu</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              Developed responsive web applications using React and JavaScript. Integrated
              backend APIs and worked closely with designers to translate Figma designs into
              production-ready interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>readytowork | Remote, Japan</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Developed recruitment platforms (Minnano Driver) using Next.js, TypeScript,
              and TanStack Query. Built enterprise-level inventory management systems (ORD)
              using Laravel, Inertia.js, and Material UI while optimizing performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
