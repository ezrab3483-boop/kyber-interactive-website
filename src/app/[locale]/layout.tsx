import Link from "next/link";
import { CircleHelp, User } from "lucide-react";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const locales = ["en-US", "fr"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="flex items-center px-8 py-4 border-b border-gray-800">
        
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-xl font-bold tracking-wide"
        >
          Kyber Interactive
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-8 ml-auto">
          
          {/* 🌍 Language Switcher */}
          <LanguageSwitcher currentLocale={locale} />

          {/* Support */}
          <Link
            href={`/${locale}/support`}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <CircleHelp size={18} />
            Support
          </Link>

          {/* Account */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <User size={18} />
              Account
            </button>

            <div className="absolute right-0 mt-2 hidden group-hover:block bg-gray-900 border border-gray-800 rounded-md shadow-lg w-40">
              <Link
                href={`/${locale}/login`}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Login
              </Link>
              <Link
                href={`/${locale}/register`}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Register
              </Link>
            </div>
          </div>

        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
}