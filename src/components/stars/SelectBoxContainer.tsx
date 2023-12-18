import React from "react";
import SelectBox, { SelectBoxProps } from "./SelectBox";

const selectBoxes: SelectBoxProps[] = [
    {
        name: "Type",
        list: [
            {
                label: "All",
                value: "all",
                active: true,
            },
            {
                label: "Public",
                value: "public",
                active: false,
            },
            {
                label: "Private",
                value: "private",
                active: false,
            },
        ],
    },
    {
        name: "Language",
        list: [
            {
                label: "All languages",
                value: "all",
                active: true,
            },
            {
                label: "JavaScript",
                value: "javaScript",
                active: false,
            },
            {
                label: "TypeScript",
                value: "typeScript",
                active: false,
            },
        ],
    },
    {
        name: "Sort by",
        list: [
            {
                label: "Recently starred",
                value: "recent",
                active: true,
            },
            {
                label: "Most forks",
                value: "fork",
                active: false,
            },
            {
                label: "Most stars",
                value: "star",
                active: false,
            },
        ],
    },
];

function SelectBoxContainer() {
    return (
        <div className="inline-flex gap-x-2">
            {selectBoxes.map((selectBox) => (
                <SelectBox {...selectBox} key={selectBox.name} />
            ))}
        </div>
    );
}

export { SelectBoxContainer as default };
