import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks"; 

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%] space-y-3">
            <p className="headtext">Technical Skillset</p>
            <p className="subtext">
              <strong>Languages & Databases:</strong> SQL, Python, R, PostgreSQL, Oracle, SQL Server, MySQL, MS Access, Git
            </p>
            <p className="subtext">
              <strong>Cloud & Visualization:</strong> AWS (S3, EC2, Glue, Athena, Redshift), Power BI, Tableau, Azure, Google Data Studio
            </p>
            <p className="subtext">
              <strong>ETL & Big Data:</strong> Databricks, PySpark, Snowflake, Informatica, Talend, MongoDB, Alteryx
            </p>
            <p className="subtext">
              <strong>Project & DevOps:</strong> Agile (Scrum), JIRA, Confluence, Bitbucket, Jenkins, Azure DevOps
            </p>
            <p className="subtext">
              <strong>Certifications:</strong> AWS Data Analytics Certified, Tableau Desktop Specialist, Google DA Certified, McKinsey Forward
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="absolute top-5 text-2xl font-semibold text-gray-600 text-center">
              Turning Raw Data into Strategic Decisions
            </p>

            <Card
              style={{ rotate: "15deg", top: "20%", left: "10%" }}
              text="Exploratory Analysis"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "60%", left: "15%" }}
              text="SQL Automation"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "10%", left: "55%" }}
              text="Data Cleaning"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", left: "65%" }}
              text="KPIs & Metrics"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "35%", left: "35%" }}
              text="Business Insights"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "20%", left: "75%" }}
              image="assets/logos/python.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "55%", left: "40%" }}
              image="assets/logos/sql.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "75%", left: "80%" }}
              image="assets/logos/powerbi.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in New York (EST), and open to remote and hybrid work across time zones
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <p className="text-center text-white text-lg">
              Email me at{" "}
              <CopyEmailButton email="mananpdesai1783@gmail.com" />
            </p>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="coding point of view"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Manan Desai, </p>
            <p className="subtext">
              Data Analyst & Strategic Researcher passionate about turning complex data into actionable insights using Python, SQL, AWS, Power BI and Tableau.
              Currently expanding expertise in artificial intelligence to drive smarter healthcare and finance solutions
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
      </div> {/* <-- Close the main grid container div */}
    </section>
  );
};

export default About;

