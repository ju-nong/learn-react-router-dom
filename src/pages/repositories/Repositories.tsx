import React from "react";

import { RepositoryItem } from "../../components/repositories";
import type { RepositoryItemProps } from "../../components/repositories";

const repositories: RepositoryItemProps[] = [
    {
        name: "learn-react-router-dom",
        visibility: false,
        description: "리액트 라우터 돔 맛보기",
        language: "Typescript",
    },
    {
        name: "dual-window-interactions",
        visibility: false,
        description: "두 개의 윈도우를 이용한 상호작용",
        language: "Vue",
    },
    {
        name: "vue-infinite-scroll-sample",
        visibility: false,
        description: "",
        language: "Vue",
    },
    {
        name: "christmast-tree",
        visibility: false,
        description: "",
        language: "Vue",
    },
];

function Repositories() {
    return (
        <ul>
            {repositories.map((repository) => (
                <RepositoryItem {...repository} key={repository.name} />
            ))}
        </ul>
    );
}

export { Repositories as default };
