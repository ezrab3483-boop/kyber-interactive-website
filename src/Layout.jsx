import { Outlet, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./pages/components/Header";

const supportedLanguages = ["en-US", "fr"];

function Layout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to="/en-US" replace />;
  }

  useEffect(() => {
    console.log("Changing language to:", lang); // 👈 Add this
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div>
        <Header />
        <Outlet />
    </div>
  );
}

export default Layout;