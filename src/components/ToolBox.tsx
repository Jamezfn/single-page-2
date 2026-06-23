import React, { Fragment } from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

type Prop = {
    items: {
        title: string;
        iconType: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
    className?: string;
    itemWrapperClassName?: string;
};

export default function ToolBox({ items, className, itemWrapperClassName }: Prop) {
    return (
        <div className={twMerge("mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex gap-6 pr-6 flex-none py-0.5", itemWrapperClassName)}>
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        {items.map(item => (
                            <div key={item.title} className="inline-flex gap-4 items-center py-2 px-3 outline-2 outline-foreground/10 rounded-lg">
                                <TechIcon component={item.iconType}/>
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
