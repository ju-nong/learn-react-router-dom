import { Link, useParams } from "react-router-dom";

function Detail() {
    const params = useParams<{
        name: string;
    }>();

    return (
        <div className="pt-4">
            <Link
                className="text-[20px] font-semibold hover:underline"
                to={`/repositories/${params.name}`}
            >
                {params.name}
            </Link>

            <a
                href={`https://github.com/ju-nong/${params.name}`}
                target="_blank"
                className="text-center w-full block"
            >
                Github
            </a>
        </div>
    );
}

export { Detail as default };
