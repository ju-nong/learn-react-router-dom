import React from "react";

type SelectBoxList = {
    label: string;
    value: string;
    active: boolean;
};

type SelectBoxProps = {
    name: string;
    list: SelectBoxList[];
};

function SelectBox({ name, list = [] }: SelectBoxProps) {
    return (
        <details>
            <summary>
                {name}
                <svg
                    fill="#656d76"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                >
                    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                </svg>
            </summary>
            <ul>
                {list.map(({ label, value, active }) => (
                    <li key={value}>
                        <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className={active ? "show" : ""}
                        >
                            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                        {label}
                    </li>
                ))}
            </ul>
        </details>
    );
}

export { SelectBox as default };

export type { SelectBoxProps };