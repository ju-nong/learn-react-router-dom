import { useEffect, useState } from "react";
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
    const [loaded, setLoaded] = useState(false);
    const [stars, setStars] = useState<StarItemProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const star = await fetchStars();

            setStars(star);
            setLoaded(true);
        };

        fetchData();
    }, []);

    return (
        <main className="stars-container pt-4">
            <div className="flex flex-wrap gap-y-2">
                <div className="mr-4">
                    <SearchBar />
                </div>
                <SelectBoxContainer />
            </div>
            {loaded ? <StarList list={stars} /> : null}
        </main>
    );
}

export { Stars as default };
