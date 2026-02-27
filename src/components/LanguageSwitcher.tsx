"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";

const locales = ["en-US", "fr"];

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Remove current locale from path
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-gray-300 hover:text-white transition"
      >
        <Globe size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-gray-900 border border-gray-800 rounded-md shadow-lg w-32">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}${pathWithoutLocale}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-800"
            >
              {locale === "en-US" ? "English (US)" : "Français"}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}