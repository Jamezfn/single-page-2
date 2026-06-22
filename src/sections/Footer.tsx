import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { link } from "fs";

const footerLinks = [
	{
		title: 'YouTube',
		href: '#',
	},
	{
		title: 'Twitter',
		href: '#',
	},
	{
		title: 'Instagram',
		href: '#',
	},
	{
		title: 'LinkedIn',
		href: '#',
	},
]

export const Footer = () => {
    return (
		<footer className="relative -z-10 overflow-x-clip">
			<div className="absolute h-100 w-400 bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 mask-[radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
			<div className="container">
				<div className="border-t border-foreground/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
					<div className="text-foreground/40">&copy; 2026. All right reserved.</div>
					<nav className="flex flex-col md:flex-row items-center gap-8">
						{footerLinks.map(link =>(
							<a key={link.title} href={link.href} className="inline-flex items-center gap-1.5">
								<span className="font-semibold">{link.title}</span>
								<FontAwesomeIcon icon={faArrowUp} className="flex items-center size-4 rotate-45" />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
