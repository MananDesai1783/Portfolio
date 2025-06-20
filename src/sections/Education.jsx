import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="space-y-8 text-gray-800 dark:text-gray-300">
          <div>
            <h3 className="text-xl font-semibold">
              RUTGERS UNIVERSITY, STATE UNIVERSITY OF NEW JERSEY
            </h3>
            <p className="italic">Master of Science in Data Science (Major in Data Analytics)</p>
            <p>2023 – 2024</p>
            <p>GPA: 3.89 / 4.00</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              UNIVERSITY OF MUMBAI, INDIA
            </h3>
            <p className="italic">
              Bachelor of Technology in Electronics Engineering (Major) & Data Science Graduate (Minor)
            </p>
            <p>2019 – 2023</p>
            <p>GPA: 3.65 / 4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
