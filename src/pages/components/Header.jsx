import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Header.css";
import i18n from "../../i18n"; // adjust path

function Header() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isLoggedIn = false; // Replace with your auth logic

  // Available languages
  const languages = [
    { code: "en-US", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
  ];

  // Change language and update URL
  const changeLanguage = (code) => {
    if (code === i18n.language) return; // do nothing if same
    i18n.changeLanguage(code);
    // Update the URL while keeping the same path after /lang
    const currentPath = window.location.pathname.split("/").slice(2).join("/");
    navigate(`/${code}/${currentPath}`);
  };

  return (
    <Navbar expand="lg" variant="dark" className="main-navbar" fixed="top">
      <Container fluid className="px-4 px-lg-5">
        {/* Brand */}
        <Navbar.Brand as={Link} to={`/${lang}`} className="brand">
          <span className="brand-logo">Kyber Interactive</span> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-collapse" />

        <Navbar.Collapse id="main-navbar-collapse">
          {/* Left nav */}
          <Nav className="me-auto ms-lg-5 align-items-center gap-1">
            



          </Nav>

          {/* Right nav */}
          <Nav className="align-items-center right-buttons gap-2">
            {/* Language Dropdown */}
            <NavDropdown
              align="end"
              className="language-dropdown"
              menuVariant="dark"
              title={
                <>
                  <i className="bi bi-globe me-1"></i>
                  
                </>
              }
            >
              {languages.map((lng) => (
                <NavDropdown.Item
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  active={i18n.language === lng.code}
                >
                  {lng.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Support button */}
            <Nav.Link
              href="https://support.blizzard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="support-btn nav-item"
            >
              <i className="bi bi-question-circle me-1"></i> {t("nav.support") || "Support"}
            </Nav.Link>

            {/* Account Dropdown */}
            <NavDropdown
              align="end"
              className="account-dropdown"
              menuVariant="dark"
              title={
                <>
                  <i className="bi bi-person-circle me-1"></i>
                  <span className="d-none d-lg-inline">{t("nav.account")}</span>
                </>
              }
            >
              {!isLoggedIn && (
                <>
                  <NavDropdown.Item as={Link} to={`/${lang}/login`}>
                    <i className="bi bi-box-arrow-in-right me-2"></i> {t("nav.login") || "Log In"}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </>
              )}

              <NavDropdown.Item as={Link} to={`/${lang}/settings`}>
                <i className="bi bi-gear me-2"></i> {t("nav.settings") || "Account Settings"}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/${lang}/redeem`}>
                <i className="bi bi-grid-3x3-gap me-2"></i> {t("nav.redeem") || "Redeem Code"}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;