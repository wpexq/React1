import { heroes } from "./HeroesData";

export default function MovieHereoes() {
    const filterTests = heroes.filter(hero => 
        hero.name === "토니 스타크"
    );
    const listHereoes = filterTests.map(hero =>
        <li>
            <p>{hero.name}의 배역은 {hero.casting} 입니다</p>
        </li>
    )
    return (
        <section>
            <h1>영화 속 영웅들</h1>
            <ul>{listHereoes}</ul>
        </section>
    )
}