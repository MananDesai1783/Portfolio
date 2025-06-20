import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="c-space max-w-7xl mx-auto px-4 py-10"  // same spacing & container as other sections
    >
      <h2 className="section-title text-3xl font-bold mb-8 text-white">
        Education
      </h2>
      <div className="space-y-8 text-neutral-300">
        <div>
          <h3 className="text-xl font-semibold text-white">
            RUTGERS UNIVERSITY, STATE UNIVERSITY OF NEW JERSEY
          </h3>
          <p>Master of Science in Data Science (Major in Data Analytics)</p>
          <p className="italic text-sm">2023 – 2024</p>
          <p>GPA: 3.89 / 4.00</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            UNIVERSITY OF MUMBAI, INDIA
          </h3>
          <p>
            Bachelor of Technology in Electronics Engineering (Major) & Data
            Science Graduate (Minor)
          </p>
          <p className="italic text-sm">2019 – 2023</p>
          <p>GPA: 3.65 / 4.00</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
