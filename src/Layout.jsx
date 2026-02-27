import { Outlet, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const supportedLanguages = ["en-US", "fr", "nl"];

function Layout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to="/en-US" replace />;
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div>
        <Outlet />
    </div>
  );
}

export default Layout;