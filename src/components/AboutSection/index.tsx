import "./style.scss"
import aboutPic from "../../assets/images/aboutPic.jpg"

export default function AboutSection(){
  return(
    <div className="aboutSection-body">

        <div className="aboutText">
          <h3>Sobre nós</h3>
          <h4>Entenda quem somos e por que existimos</h4>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>

        <img src={aboutPic} alt="" />

      </div>
  )

}