export default function Items({name, isPacked}) {
    return <li>{name} {isPacked? "✅" : ""}</li>
}