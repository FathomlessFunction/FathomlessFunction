import { useState } from 'react'
import heroImg from './assets/hero.png'
import githubLogo from './assets/Copilot_Icon_White_Clearspace.png'
import viteLogo from './assets/vite.svg'
import './App.css'

enum SKILL_TYPE {
  PROGRAMMING_LANGUAGE,
  INFRASTRUCTURE,
  CI_CD,
  OS,
  DATA,
  TECH_HOBBIES
}

function App() {

  const [count, setCount] = useState(0)
  const [viewingField, setViewingField] = useState(SKILL_TYPE.PROGRAMMING_LANGUAGE)

  const skillList = {
    [SKILL_TYPE.PROGRAMMING_LANGUAGE] : [
      "Python",
      "C#",
      "Java",
      "Typescript/Javascript",
      "Bash"
    ],
    [SKILL_TYPE.INFRASTRUCTURE] : [
      "AWS",
      "Azure",
      "Kubernetes/EKS/K9s",
      "Debugging servers via the terminal",
      "Docker",
      "Terraform",
      "ARM/Bicep",
      "Cloudformation",
      "Helmcharts"
    ],
    [SKILL_TYPE.CI_CD] : [
      "Github Actions",
      "ArgoCD",
      "Jenkins",
      "TeamCity"
    ],
    [SKILL_TYPE.OS]: [
      "Linux",
      "Mac",
      "Windows",
    ],
    [SKILL_TYPE.DATA]: [
      "Kafka",
      "SQL"
    ],
    [SKILL_TYPE.TECH_HOBBIES] : [
      "Game Dev",
      "Web Dev (eg React)"
    ]
  }

  return (
    <>
      <h1 className="text-left p-4">FathomlessFunction</h1>

      <div className="text-left p-4">
        <h2>About me</h2>
        <p>Hello! I'm a senior security software dev, who has been working in the field for about 5 years now.</p>
        <p>I love tech because it's a field that's always changing; I like the way it challenges you, and how everything you build is a puzzle that needs solving.</p>
        <br />
        <p>Because of that, I tend to dabble a lot, and know about a variety of technologies. <br />Click on the buttons below to see my skills in each area!</p>
      </div>

      <div>
        {Object.keys(skillList).map((item, index) => (
          <button 
            className = "bg-purple-500 hover:bg-purple-700 text-gray-200 font-bold py-2 px-4 m-2"
            onClick={() => setViewingField(item)}>
              {SKILL_TYPE[item]}
            </button>
        ))}

      </div>

      <div className = "pb-4">
        {skillList[viewingField].map((item, index) => (
          <div>{item}</div>
        ))}
      </div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Github</h2>
          <p>My repository, with little projects I have worked on</p>
          <ul>
            <li>
              <a href="https://github.com/FathomlessFunction" target="_blank">
                <img className="button-icon" src={githubLogo} alt="" />
                Link to my Github
              </a>
            </li>
          </ul>
        </div>
        {/* <div id="social">
          
        </div> */}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
