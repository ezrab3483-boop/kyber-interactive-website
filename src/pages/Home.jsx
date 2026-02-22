import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./css/Home.css";

function Home() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("home.title");
    }, [t]);

    return (
        <div className="home-page">
            <center>
                <h1>{t("home.welcome")}</h1>
            </center>
        </div>
    );
}

export default Home;