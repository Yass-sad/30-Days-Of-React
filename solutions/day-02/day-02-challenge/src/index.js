import React from 'react';
import ReactDOM from 'react-dom';
import Yassine from './Images/Yassine.jpg'
import './index.css'

const UserImage = (
  <div>
    <img src={Yassine} alt='Bogoss' />
  </div>
)
const UserInfo = (
  <div>
    <h3> Yassine SADDIKI</h3>
    <p> CEO/Founder of YASSTIK MEDIA</p>
  </div>
)
const SkillList = ['HTML', 'CSS', 'JavaScript', 'node', 'git', 'MySql']
const SkillSet = ({ Skills }) => {
  return (
    <div>
      {Skills.map((skill, index) => (
        <span key={index} className='skills'>
          {skill}
        </span>
      )

      )}
    </div>
  )
}
const SkillInfo = (
  <div>
    <div>
      <h4> SKILLS </h4>
      <SkillSet Skills={SkillList} />
    </div>
  </div>

)
const footer = (
  <div>
    <p> Joined on Aug, 2023</p>

  </div>
)
const app = (
  <div className='App'>
    {UserImage}
    {UserInfo}
    {SkillInfo}
    {footer}
  </div>
)
ReactDOM.render(app, document.getElementById('root'))
