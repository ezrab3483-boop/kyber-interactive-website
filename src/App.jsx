import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Register from "./pages/Register";










import Layout from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

const supportedLanguages = ["en-US", "fr"];

function detectBrowserLanguage() {
  const browserLang = navigator.language; // ex: "fr-FR", "en-GB"

  // Exact match first
  if (supportedLanguages.includes(browserLang)) {
    return browserLang;
  }

  // Fallback by language prefix
  if (browserLang.startsWith("fr")) return "fr";

  return "en-US"; // default fallback
}

function App() {
  const detectedLang = detectBrowserLanguage();

  return (
    <Router>
      <Routes>

        {/* Root → auto detect */}
        <Route
          path="/"
          element={<Navigate to={`/${detectedLang}`} replace />}
        />

        {/* Language wrapper */}
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>


        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}

export default App;