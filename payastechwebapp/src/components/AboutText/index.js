import { React, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Video from "../../videos/videoBg1.mp4";
import { Background, VideoBg, Separator } from "./AboutTextElements";
import BackToTopButton from "../BackToTopButton";

const AboutText = () => {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const companies = [
    {
      id: 1,
      comp: "Microsoft",
    },
    {
      id: 2,
      comp: "Google",
    },
    {
      id: 3,
      comp: "Oracle",
    },
    {
      id: 4,
      comp: "Accenture",
    },
    {
      id: 5,
      comp: "Capgemini",
    },
    {
      id: 6,
      comp: "Wipro",
    },
    {
      id: 7,
      comp: "Infosys",
    },
  ];

  const fullCompaniesList = [...companies, ...companies, ...companies];

  return (
    <div className="mainContainer relative overflow-hidden">
      <Background>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </Background>
      <div className="relative max-w-7xl mx-auto p-6 rounded-lg bg-transparent">
        <div className=" dmSans flex justify-center items-center flex-wrap gap-4 my-8">
          <div className="hover-property bg-green-500 text-white text-center p-6 rounded-lg shadow-lg w-64">
            <i class="fa-solid fa-graduation-cap mr-2" />
            100% Placements Assistance
          </div>
          <div className="hover-property bg-green-500 text-center text-white p-6 rounded-lg shadow-lg w-64">
            <i class="fa-solid fa-trophy mr-2" />
            Real-Time Projects
          </div>
          <div className="hover-property bg-green-500 text-center text-white p-6 rounded-lg shadow-lg w-64">
            <i class="fa-solid fa-flag mr-2" /> Internships
          </div>
          <div className="hover-property text-center bg-green-500 text-white p-6 rounded-lg shadow-lg w-64">
            <i class="fa-regular fa-pen-to-square mr-2" />
            Live Coding
          </div>
        </div>
        <Separator />
        <h1 className="mt-7 dmSans text-xl text-white leading-relaxed mb-6">
          Who Are We?
        </h1>
        <p className="dmSans text-lg text-white leading-relaxed mb-6">
          Conceived in 2000, incorporated in 2016,{" "}
          <strong>Payas Technologies</strong> has been the Pioneer in{" "}
          <strong>Delivering High-Quality</strong>,{" "}
          <strong>Cost-Effective Training</strong>,{" "}
          <strong>Recruitment </strong>
          and <strong>Placements</strong> in the IT Industry.{" "}
          <strong>Payas Technologies</strong> is now a firmly established IT
          Hub, till date trained well over <strong>15000+ individuals</strong>,
          who are now Domain experts with more than <strong>3,500+</strong>{" "}
          students across the globe. Our cost effective and real time live
          project-based training methods differentiate us from others. We
          provide Industry-oriented courses and Placements and make students get
          trained with modern and advanced technology and also offer placements
          for students who excel with the IT training.
        </p>

        <ul className="list-disc list-inside text-white space-y-3 pl-4">
          <li className="text-lg font-semibold">
            1500+ Clients all over India and Globe
          </li>
          <li className="text-lg font-semibold">
            1000+ Associates across globe.
          </li>
          <li className="text-lg font-semibold">20+ IT Trainers</li>
          <li className="text-lg font-semibold">Secure Data Center</li>
          <li className="text-lg font-semibold">
            Confidential and Secure data access.
          </li>
        </ul>

        <h1 className="mt-7 dmSans text-xl text-white leading-relaxed mb-6">
          Our Services:
        </h1>
        <ul className="list-disc list-inside text-white space-y-3 pl-4">
          <li className="text-lg font-semibold">
            <strong>IT Training</strong>: Payas offers end to end training of
            all courses and real-time projects making students create their own
            ideas.
          </li>
          <li className="text-lg font-semibold">
            <strong>IT Recruitment</strong>: We recruit candidates for those,
            who perform well with their training and have a vast knowledge in IT
            ethics.
          </li>
          <li className="text-lg font-semibold">
            <strong>IT Placement</strong>: Payas ensures placement to
            candidates, who perform well with their training and real-time
            projects.{" "}
          </li>
          <li className="text-lg font-semibold">
            <strong>IT Development</strong>: We develop and carve candidates to
            build software and develop them on their own by our high-quality
            training methods.
          </li>
          <li className="text-lg font-semibold">
            <strong>Digital Marketing</strong>: Payas is specialized with
            Digital marketing having marketing domain experts to get exposed
            with Marketing strategies.
          </li>
        </ul>

        <h1 className="mt-7 dmSans text-xl text-white leading-relaxed mb-6">
          Why Payas Technologies?
        </h1>
        <ul className="list-disc list-inside text-white space-y-3 pl-4">
          <li className="text-lg font-semibold">
            <strong>Experience</strong>: 20+ years of experience in IT Training,
            Recruitment and Development.
          </li>
          <li className="text-lg font-semibold">
            <strong>PAN India Presence</strong>: Working on different projects
            across country.
          </li>
          <li className="text-lg font-semibold">
            We are Technology Driven and are updated with new sources.
          </li>
          <li className="text-lg font-semibold">
            We have a team of 100+ Domain Experts.
          </li>
          <li className="text-lg font-semibold">
            <strong>Process Centric</strong>: Payas follows process-based
            approach to achieve commitment.
          </li>
        </ul>

        <h1 className="mt-7 dmSans font-bold text-xl text-white leading-relaxed mb-6">
          Vision:
        </h1>
        <p className="text-lg text-white leading-relaxed">
          Excel in Online Service solutions, sharing knowledge, deliver values,
          innovate to grow and diversify our business.
        </p>

        <h1 className="mt-7 dmSans font-bold text-xl text-white leading-relaxed mb-6">
          Mission:
        </h1>
        <p className="text-lg text-white leading-relaxed">
          Online Tech solutions and Cost-effective training methods to enhance
          the business of our customers and High-quality training to students,
          whilst creating technologies that benefit both our customers and
          environment
        </p>

        <h1 className="mt-7 dmSans text-xl text-white leading-relaxed mb-6">
          Training Activities:
        </h1>
        <ul className="list-disc list-inside text-white space-y-3 pl-4">
          <li className="text-lg font-semibold">
            <strong>GAP Analysis</strong>: Understand the current process,
            identify the gaps and prepare training module to address the gaps.
          </li>
          <li className="text-lg font-semibold">
            <strong>Training Module Designing</strong>: Latest training modules
            as per the Global industry trends and requirements ethics.
          </li>
          <li className="text-lg font-semibold">
            <strong>Impart the Training</strong>: Training conducted by
            Qualified Trainers resulting in:
            <ul className="list-disc list-inside pl-6 mt-2">
              <li>Improved skill set</li>
              <li>Better Productivity</li>
              <li>Happy Learning</li>
            </ul>
          </li>
          <li className="text-lg font-semibold">
            <strong>Certification</strong>: Post training certification done
          </li>
        </ul>

        <h1 className="mt-7 dmSans text-xl text-white leading-relaxed mb-6 text-center">
          MNC's Offering Placements
        </h1>
        {/* <ul className="list-disc list-inside text-white space-y-3 pl-4">
          <li className="text-lg font-semibold">
            <strong>Microsoft</strong>
          </li>
          <li className="text-lg font-semibold">
            <strong>Google</strong>
          </li>
          <li className="text-lg font-semibold">
            <strong>Oracle</strong>
          </li>
          <li className="text-lg font-semibold">
            <strong>Accenture</strong>
          </li>
          <li className="text-lg font-semibold">
            <strong>Capgemini</strong>
          </li>
          <li className="text-lg font-semibold">
            <strong>Wipro</strong>
          </li>
          <li className="text-lg font-semibold">
            <strong>Infosys and more...</strong>
          </li>
        </ul> */}

        {/* <section ref={targetref} className="relative h-[300vh] bg-neutral-900">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-purple-600">
            <div className="flex gap-4">
              <motion.div style={{x}} className="flex gap-4">
                {companies.map((company) => (
                  <div key={company.id} className="text-lg text-white">
                    {company.comp}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section> */}

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ whiteSpace: "nowrap" }} // Ensures that items are treated as inline
          >
            {fullCompaniesList.map((company) => (
              <div
                key={company.id}
                className="bg-green-500 text-white text-center font-bold p-4 rounded-lg shadow-lg w-64 inline-block"
              >
                {company.comp}
              </div>
            ))}
          </motion.div>
        </div>

        {/* <div className="dmSans flex justify-center items-center flex-wrap gap-4 my-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="hover-property bg-green-500 text-white text-center p-6 rounded-lg shadow-lg w-64"
            >
              {company.comp}
            </div>
          ))}
        </div> */}
      </div>
      <BackToTopButton />
    </div>
  );
};

export default AboutText;

// tailwind css explanation:
// max-w-3xl:  Limits the width of the content to a maximum of 3xl
// mx-auto: centers the div horizontally
// leading-relaxed: increases the line height for a more relaxed and readable paragraph
// list-disc: display bullet points for list items
// list-inside: positions the bullet points inside the list container
// space-y-3: Adds vertical spacing (0.75rem) between each list item.
