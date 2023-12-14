import React from "react";
import { Link } from "react-router-dom";

type Language = "Javascript" | "Typescript" | "Vue";

type RepositoryItemProps = {
    name: string;
    visibility: boolean;
    description: string;
    language: Language;
};

type LanguageColorObject = {
    [key in Language]: string;
};

const languageColor: LanguageColorObject = {
    Javascript: "#f1e05a",
    Typescript: "#3178c6",
    Vue: "#41b883",
};

function RepositoryItem({
    name,
    visibility,
    description,
    language,
}: RepositoryItemProps) {
    return (
        <li className="py-4">
            <Link
                className="text-[20px] font-semibold text-[#0969da] hover:underline mr-2"
                to={`/repositories/${name}`}
            >
                {name}
            </Link>
            <span className="rounded-xl border-gray-200 border-solid border px-2 text-[#656d76] font-medium">
                {visibility ? "Private" : "Public"}
            </span>
            <p className="text-[#7e6d76] mb-2">{description}</p>
            <div className="text-[#7e6d76] text-[12px] flex items-center gap-x-1">
                <span
                    className="w-3 h-3 rounded-full bg-black inline-block border-[0.8px] border-solid border-gray-100"
                    style={{
                        backgroundColor: languageColor[language],
                    }}
                ></span>
                {language}
            </div>
        </li>
    );
}

export { RepositoryItem as default };

export type { RepositoryItemProps };
