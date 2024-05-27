import React from "react";
import "./Exp.css";
import { Text, Collapse } from "@nextui-org/react";

function Exp() {
  return (
    <div className="Exp" id="exp">
      <Text
        h1
        css={{
          fontFamily: "Space Grotesk",
          textGradient: "45deg, $blue600 -20%, $pink600 80%",
        }}
      >
        Experience
      </Text>
      <Collapse.Group splitted>
        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="Java Developer"
          subtitle="Orbund Bangladesh Ltd. | Full-time | Jan 2024 - Present"
          expanded
        >
          <Text css={{ fontFamily: "Rubik" }}>
            - Developing the redesigned teacher and admin portal of a student information system using JSP<br />
            - Analyzing JIRA tickets to implement bug fixes and new features with Java and JSP <br />
            - Adhering to agile methodologies to track progress and ensure project alignment <br />
            <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Java · JSP · JavaScript · Servlet · Git
            </Text>
          </Text>
        </Collapse>

        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="Lecturer"
          subtitle="BRAC University | Contractual | Sep 2023 - Dec 2023"
        >
          <Text css={{ fontFamily: "Rubik" }}>
            - Facilitating laboratory sessions for CSE110: Programming Languages
            I, <br />CSE111: ProgrammingLanguages II, and CSE484: Cloud Computing
            courses. <br />
            - Orchestrating the organization and management of lab materials and
            resources. <br />
            - Contributing to the development of problem sets for effective
            course delivery. <br />
            <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Python · OOP · Cloud · Teaching · Communication
            </Text>
          </Text>
        </Collapse>

        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="Software Engineer Intern"
          subtitle="Square Health Ltd. | Internship | Feb 2023 - May 2023"
        >
          <Text css={{ fontFamily: "Rubik" }}>
            - Analyzing system requirement specifications and designing an
            efficient database. <br />
            - Implementing a secure and optimized front end with Angular best
            practices. <br />
            - Ensuring consistent design and responsive UI with PrimeNG and
            Bootstrap. <br />
            <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Angular · TypeScript · Bootstrap · SCSS · PrimeNG ·
              Teamwork · Database Design · Git
            </Text>
          </Text>
        </Collapse>

        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="Student Tutor"
          subtitle="BRAC University | Part-time | Feb 2022 - Dec 2022"
        >
          <Text css={{ fontFamily: "Rubik" }}>
            - Checked assignment scripts. <br />
            - Provided consultation to around 100 students every semester.
            <br />
            - Maintained grade sheets.
            <br />
            - Assisted the faculty in course management.
            <br />
            <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Mathematics · Communication · Management · Research ·
              Teaching · Python
            </Text>
          </Text>
        </Collapse>

        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="UX Engineer Intern"
          subtitle="Penguin.com.bd | Internship | Mar 2021 - May 2021"
        >
          <Text css={{ fontFamily: "Rubik" }}>
            - Designed consumer-facing app UX. <br />
            - Created usable and efficient UI mockups in Figma.
            <br />
            - Developed UI components using React.
            <br />
            <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Web Development · Git · Node.js · JavaScript · Figma ·
              React.js
            </Text>
          </Text>
        </Collapse>

        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="Graphic Designer"
          subtitle="Part-time | 2016 - 2020"
        >
          <Text css={{ fontFamily: "Rubik" }}>
            - Freelance rebranding contract for ATC, a construction company.
            <br />
            - Editor of Scintilla Science Club of St. Joseph Higher Secondary
            School.
            <br />
            - Experience in t-shirt, layout, banner and poster design.
            <br /> <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Adove Illustrator · Adobe Photoshop · Figma
            </Text>
          </Text>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}

export default Exp;
