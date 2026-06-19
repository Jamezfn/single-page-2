type Prop = {
    title: string;
    eyebrow: string;
    description: string;
};

export default function SectionHeader({ title, eyebrow, description }: Prop) {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
            <p className="text-center md:text-lg lg:text-xl text-foreground/60 mt-4 max-w-md mx-auto">{description}</p>
        </>
    );
}
