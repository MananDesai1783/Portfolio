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
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Manan Desai</p>
            <p className="subtext">
             Data Analyst & Strategic Researcher passionate about turning complex data into actionable insights using Python, SQL, AWS, Power BI and Tableau. Currently expanding expertise in artificial intelligence to drive smarter healthcare and finance solutions
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
{/* Grid 2 */}
<div className="grid-default-color grid-2">
  <div
    ref={grid2Container}
    className="flex items-center justify-center w-full h-full"
  >
    <p className="flex items-end text-5xl text-gray-500">
      Data Analysis 
    </p>

    <Card
      style={{ rotate: "75deg", top: "30%", left: "20%" }}
      text="Manipulate"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "-30deg", top: "60%", left: "45%" }}
      text="Data Viz"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
      text="Data Cleaning"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "-45deg", top: "55%", left: "0%" }}
      text="KPIs"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "20deg", top: "10%", left: "38%" }}
      text="EDA"
      containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in New York (EST), and open to remote and hybrid work 
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
<div className="grid-default-color grid-5 relative flex items-center px-6">
  <div className="z-10 w-[65%] pr-6 text-sm leading-snug">
    <p className="headtext mb-2 text-base">Technical Skillset</p>
    <p className="subtext mb-1">
      <strong>Languages & Databases:</strong> SQL, Python, R, PostgreSQL, Oracle, SQL Server, MySQL, MS Access, Git
    </p>
    <p className="subtext mb-1">
      <strong>Cloud & Visualization:</strong> AWS (S3, EC2, Glue, Athena, Redshift), Power BI, Tableau, Azure, Google Data Studio
    </p>
    <p className="subtext mb-1">
      <strong>ETL & Big Data:</strong> Databricks, PySpark, Snowflake, Informatica, Talend, MongoDB, Alteryx
    </p>
    <p className="subtext mb-1">
      <strong>Project & DevOps:</strong> Agile (Scrum), JIRA, Confluence, Bitbucket, Jenkins, Azure DevOps
    </p>
    <p className="subtext">
      <strong>Certifications:</strong> AWS Data Analytics Certified, Tableau Desktop Specialist, Google DA Certified, McKinsey Forward
    </p>
  </div>
  <div className="w-[35%] flex justify-center scale-90 md:scale-95">
    <Frameworks />
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
