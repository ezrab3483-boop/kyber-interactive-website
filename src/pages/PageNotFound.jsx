import { useEffect } from "react";
import "./css/PageNotFound.css";

function PageNotFound() {
    useEffect(() => {
        document.title = "404 - Kyber Interactive";
    }, []);

    return (
        <div className="notfound-page container">
            <h1>tester</h1>
        </div>
    )
}


export default PageNotFound