import { useEffect, useState } from "react";
import Player from "./Player";

export default function Players() {
    const [players, setPlayers] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPlayers(data))
        }, []);

    return (
        <div>
            <h3>Player Name</h3>
            <ul>
                { players.map(player => <Player player={player} /> ) }
            </ul>
        </div>
    )

}