import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
    SearchBar,
    SelectBoxContainer,
    StarList,
    StarItemProps,
} from "../../components/stars";

async function fetchStars(): Promise<StarItemProps[]> {
    const reponse = await fetch(`https://api.github.com/users/ju-nong/starred`);

    return await reponse.json();
}

function Stars() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [loaded, setLoaded] = useState(false);
    const [stars, setStars] = useState<StarItemProps[]>([]);

    const [keyword, setKeyword] = useState("");
    const searched = useMemo(
        () =>
            stars.filter(
                (star) =>
                    star.owner.login.includes(keyword) ||
                    star.name.includes(keyword) ||
                    star.description.includes(keyword),
            ),
        [stars, keyword],
    );

    useEffect(() => {
        const fetchData = async () => {
            const star = await fetchStars();

            setStars(star);
            setLoaded(true);
        };

        fetchData();

        const keyword = searchParams.get("keyword");
        if (keyword) {
            setKeyword(keyword);
        }
    }, []);

    function handleSubmit(keyword: string) {
        setKeyword(keyword);

        setSearchParams((searchParams) => ({ ...searchParams, keyword }));
    }

    return (
        <main className="stars-container pt-4">
            <div className="flex flex-wrap gap-y-2">
                <div className="mr-4">
                    <SearchBar onSubmit={handleSubmit} />
                </div>
                <SelectBoxContainer />
            </div>
            {loaded ? <StarList list={searched} /> : null}
        </main>
    );
}

export { Stars as default };
