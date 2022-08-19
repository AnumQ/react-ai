import "./CV.css";
const CV = () => {
  const getData = async () => {
    try {
      const res = await fetch("cv.json");
      if (res.status === 200) {
        const ss = await res.json();
        console.log(ss);
      }
    } catch (e) {
      console.error("Error fetching cv.json", e);
    }

    return console.log(333);
  };

  getData();
  return (
    <div className="App">
      <div className="sidebar">
        <Spacer height="90" />
        <div>
          <h1 className="name">Anum Qudsia</h1>
        </div>
        <div className="sectionLine"></div>
        <Spacer height="5" />
        <div className="position">
          <p>SENIOR DEVELOPER, CONSULTANT & CEO</p>
        </div>
        <Spacer height="25" />
        <div className="detailsSection">
          <div className="detailsTitle">Details</div>
          <Spacer height="10" />
          <div className="detailsData">Norway</div>
          <div className="detailsData">+47 932 86 096</div>
          <div className="detailsData">
            <a style={{ color: "black" }} href="mailto:hello@anum.io">
              hello@anum.io
            </a>
          </div>
        </div>
        <Spacer height="25" />
        <div className="detailsSection">
          <div className="detailsTitle">Skills</div>
          <Spacer height="10" />
          <div className="detailsData">ReactJS</div>
          <div className="detailsData">NextJS</div>
          <div className="detailsData">Swift</div>
          <div className="detailsData">React Native</div>
          <div className="detailsData">Android & Kotlin</div>
        </div>
        <Spacer height="25" />
        <div className="detailsSection">
          <div className="detailsTitle">Languages</div>
          <Spacer height="10" />
          <div className="detailsData">English</div>
          <div className="langaugeCompetencyBar"></div>
          <Spacer height="5" />
          <div className="detailsData">Norwegian</div>
          <div className="langaugeCompetencyBar"></div>
        </div>
        <Spacer height="35" />
        <div className="detailsSection">
          <div className="detailsTitle">Hobbies</div>
          <div className="detailsData">
            Skydiving, Programming, Reading and Travelling
          </div>
        </div>
      </div>

      <div className="content">
        <Spacer height="100" />
        <div className="contentTitle">Profile</div>
        <Spacer height="20" />
        <div className="sectionText">
          Senior Frontend and Fullstack developer with 8+ years of experience in
          applications development across multiple businesses. At age 25, with 3
          years of experience behind, Anum started her own consultancy firm.
          Thence, she excelled further as developer and also gained skills in
          business management, sales and customer relations. Her portfolio of
          projects demonstrates her willingness to learn new technologies and
          her incredible ability to adapt to new teams and processes.
        </div>
        <Spacer height="10" />

        <div className="sectionText">
          Anum is highly organized, curious and detail oriented person, and has
          proven to be an excellent developer and a valuable asset to the team.
        </div>

        <Spacer height="40" />
        <div className="contentTitle">Employment History</div>
        <Spacer height="12" />
        <div className="sectionTitle">
          Senior Developer, Consultant & CEO, FireTech
        </div>
        <Spacer height="12" />
        <div className="employmentDates">SEPTEMBER 2016 — PRESENT</div>
        <Spacer height="10" />
        <div className="clientName">
          Nova Spektrum (Events, Fairs and Conferences)
        </div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Tech: React, React Native, NextJS, Recoil, Swift, Firebase, Expo
        </div>

        <div className="clinetSectionText">
          • Skills: Manage several apps on several platforms at the same time.
        </div>
        <Spacer height="10" />
        <div className="clientName">Det Norske Turistforening (Tourism)</div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Consult in app architecture and development of UT.no (Swift app).
        </div>
        <div className="clinetSectionText">
          • Skills: App architecture, leading a team and mentoring junior
        </div>
        <Spacer height="10" />
        <div className="clientName">iSNITT (Real-Estate)</div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Develop a portal application to automize processes and workflow.
          Integrate 3rd party API.
        </div>
        <div className="clinetSectionText">
          • Skills: Assist in business analysis, optimize the workflow, manage
          the project, define technologies, design & finally implement the
          fullstack application. Tech: React, Typescript, Firebase, Serverless
          functions, Bootstrap
        </div>
        <Spacer height="10" />
        <div className="clientName">Orbit (Real-Estate)</div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Developed native module in React Native to export the functionality
          from a third party SDK in JAVA to React Native. Never been done
          before.
        </div>
        <Spacer height="10" />
        <div className="clientName">Imal (e-Learning)</div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Web app to assist pupils in reading and writing. Developed in React
          with Firebase Authentication and Firebase Backend. Hosted on Azure.{" "}
          <br />• Helped Client move over to a cheaper hosting and a simpler
          setup for their business needs.
        </div>
        <Spacer height="10" />
        <div className="clientName">Onecall (Telecommunications)</div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Developed the official app using Swift and Kotlin.
        </div>
        <Spacer height="10" />
        <div className="clientName">Storebrand (Insurance services)</div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Mobile app development of MyPension in React-Native.
        </div>
        <Spacer height="10" />
        <div className="clientName">Nets Group (Nordic payments ecosystem)</div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Developed One-Time Passcode in <b>Swift</b>. Added support for
          <b>Accessibility</b> and <b>VoiceOver</b> with dynamic views. Exported
          SDK/lib from Objective-C projects to reuse in the Swift app as
          Framework. Improved UI/UX Design and mentored junior on the team.
        </div>
        <Spacer height="10" />
        <div className="clientName">
          Norgesgruppen Data (Groceries wholesale)
        </div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Upgrade several apps from 32-bit to 64-bit architecture, optimize
          release processes with continuous integration.
        </div>
        <Spacer height="10" />
        <div className="clientName">NRK (Government-owned public TV)</div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Apple tvOS development in Swift 3. REST-API integration for
          favourites feature. Integrated Crashlytics.
        </div>
        <Spacer height="10" />

        <Spacer height="12" />
        <div className="sectionTitle">Consultant, BEKK, Oslo</div>
        <Spacer height="8" />
        <div className="employmentDates">AUGUST 2013 — AUGUST 2016</div>
        <Spacer height="10" />
        <div className="clientName">
          Avinor (Operating all airports in Norway)
        </div>
        <Spacer height="8" />
        <div className="clinetSectionText">
          • Development applications in C#/.NET. Built and released an internal
          app in Xamarin.
        </div>
        <Spacer height="10" />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
};

export const Spacer = ({ height }) => {
  return <div style={{ height: `${height}px` }}></div>;
};
export default CV;
