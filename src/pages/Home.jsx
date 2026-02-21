import { useEffect } from "react";
import "./css/Home.css";

function Home() {
    useEffect(() => {
        document.title = "Home - Kyber Interactive";
    }, []);

    return (
        <div className="home-page">
            <center><h1>Welcome to Kyber Interactive</h1></center>
        </div>
    )
}

export default Home