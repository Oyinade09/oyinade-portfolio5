import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <div>
          <p className="section--title">My Skills</p>
          <h2 className="skills--section--heading">My Expertise</h2>
        </div>

        <div className="flex items-center object-center gap-x-6 mt-10 justify-center">
          <img
            className="h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40"
            src="/img/react.png"
            alt=""
          />
          <img
            className="h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40"
            src="/img/html.png"
            alt=""
          />
          <img
            className="h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40"
            src="/img/node.png"
            alt=""
          />
          <img
            className="h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40"
            src="/img/css.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
