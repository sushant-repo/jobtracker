import { Link, useHref } from "react-router-dom"
import { capitalize } from "../utilities/text";
export default function Breadcrumb() {
    const breadcrumbStyle = {
        fontSize: "0.8em",
    }
    const href = useHref();

    const parts = href.split("/").filter(Boolean);

    return (<>
    <div style={breadcrumbStyle}>
    {parts.map((part, index) => {
        const path = "/" + parts.slice(0, index + 1).join("/");
        return <>
        {index !== parts.length - 1 ? <Link key={index} to={path}>{capitalize(part)}</Link> : <span key={index}>{capitalize(part)}</span>}{index < parts.length - 1 && "/"}</>
    })}
    </div>
    </>);
}