import React from "react";
import { SearchBar, SelectBoxContainer } from "../../components/stars";

function Starts() {
    return (
        <main className="stars-container ">
            <div className="pt-4 inline-block mr-4">
                <SearchBar />
            </div>
            <SelectBoxContainer />
        </main>
    );
}

export { Starts as default };
