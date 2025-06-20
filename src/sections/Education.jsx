import React from "react";

const Education = () => {
  return (
    <section id="education" className="container mx-auto max-w-7xl px-4 my-20">
      <h2 className="text-3xl font-bold mb-8">Education</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold">RUTGERS UNIVERSITY, STATE UNIVERSITY OF NEW JERSEY</h3>
        <p>Master of Science in Data Science (Major in Data Analytics)</p>
        <p>2023 – 2024</p>
        <p>GPA: 3.89 / 4.00</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">UNIVERSITY OF MUMBAI, INDIA</h3>
        <p>Bachelor of Technology in Electronics Engineering (Major) & Data Science Graduate (Minor)</p>
        <p>2019 – 2023</p>
        <p>GPA: 3.65 / 4.00</p>
      </div>
    </section>
  );
};

export default Education;
