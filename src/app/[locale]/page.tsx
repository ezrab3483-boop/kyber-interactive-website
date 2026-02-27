export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const content = {
    "en-US": {
      title: "Kyber Interactive",
      description:
        "We build next-generation multiplayer experiences powered by cutting-edge technology.",
    },
    fr: {
      title: "Kyber Interactive",
      description:
        "Nous développons des expériences multijoueurs nouvelle génération propulsées par une technologie de pointe.",
    },
  };

  const t = content[locale as "en-US" | "fr"] ?? content["en-US"];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-bold mb-6">{t.title}</h1>
      <p className="text-xl text-gray-400 max-w-2xl">
        {t.description}
      </p>
    </main>
  );
}