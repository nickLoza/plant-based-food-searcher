import { BsGithub, BsLinkedin } from "react-icons/bs";




const Footer = ()=>{
	return(
		<footer className="footer">
			<h3 className="footer__title">Developed by Nick Loza</h3>
			<ul className="footer__socials">
				<a href="#" className="footer__socials-link">
					<BsGithub/>
				</a>
				<a href="#" className="footer__socials-link">
					<BsLinkedin/>
				</a>
			</ul>
		</footer>
	)
}


export default Footer;