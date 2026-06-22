import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
    	return (
			<div className="py-16 pt-12 lg:py-24 pt-20">
				<div className="container">
					<div className="bg-linear-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
						<div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
						<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
							<div className="">
								<h2 className="font-serif text-2xl md:text-3xl">Let's create somthing amazing together</h2>
								<p className="text-sm mt-2 md:text-base">
									Ready to bring your next project to life? Let's connect and discuss how I can help you acheive your goals.
								</p>
							</div>
							<div>
								<button className="text-foreground bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
									<span className="font-semibold">Contact Me</span>
									<FontAwesomeIcon icon={faArrowUp} className="flex items-center size-4 rotate-45" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};
