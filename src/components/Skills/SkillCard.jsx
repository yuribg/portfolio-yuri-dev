import "./Skills.css";
export default function SkillCard({skillName, skillUrl}) {
  return (
    <div className="skill">
    <img src={skillUrl} alt={skillName}/>
    <p>{skillName}</p>
    </div>
  )
}
