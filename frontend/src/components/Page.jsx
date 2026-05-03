import { useHref } from "react-router-dom";
import Button from "./Button";
import "./Page.css";
import { useEffect } from "react";
import Breadcrumb from "./Breadcrumb";

export default function Page({title, children}){

    return (
        <section>
            <header style={{margin: "24px 0", borderBottom: "1px solid #ccc", paddingBottom: "8px"}}>
                <div>
                    <strong>{title}</strong>
                    <Breadcrumb />
                </div>
            </header>
            <main>
                {children}
            </main>
        </section>
    )
}