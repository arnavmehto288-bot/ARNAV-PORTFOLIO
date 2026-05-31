import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (!box.length) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let tween = gsap.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  let st = ScrollTrigger.create({
    trigger: ".work-section",
    start: "top top",
    end: () => `+=${translateX}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    id: "work",
    animation: tween,
    onRefresh: () => {
      setTranslateX();
      tween.vars.x = -translateX;
      tween.invalidate();
    },
  });

  return () => {
    tween.kill();
    st.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "Customer Churn Prediction",
              category: "Machine Learning",
              tools: "Python, Scikit-learn, Pandas",
              image: "/images/churn_prediction.png",
            },
            {
              title: "House Price Prediction",
              category: "Machine Learning",
              tools: "Python, Regression, NumPy",
              image: "/images/house_price_prediction.png",
            },
            {
              title: "Movie Recommendation System",
              category: "Recommender System",
              tools: "Python, Content-Based Filtering",
              image: "/images/movie_recommender.png",
            },
            {
              title: "Credit Card Fraud Detection",
              category: "Machine Learning",
              tools: "Python, Scikit-learn, Pandas",
              image: "/images/fraud_detection.png",
            },
            {
              title: "NLP Sentiment Analysis",
              category: "Natural Language Processing",
              tools: "Python, NLP, NLTK",
              image: "/images/sentiment_analysis.png",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
