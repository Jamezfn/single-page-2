export const Header = () => {
	return (
		<div className="flex justify-center items-center relative top-3">
			<nav className="flex gap-1 p-0.5 border border-foreground/15 bg-foreground/10 backdrop-blur rounded-full">
				<a href="#" className="nav-item">Home</a>
				<a href="#" className="nav-item">Projects</a>
				<a href="#" className="nav-item">About</a>
				<a href="#" className="nav-item bg-foreground text-background hover:bg-foreground/70 hover:text-background">Contact</a>
			</nav>
		</div>
	);
};
