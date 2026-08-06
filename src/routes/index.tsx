import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Truck,
  HeartHandshake,
  Flower2,
  TreePine,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "@/assets/logo-horizontal.svg.asset.json";
import { BrandMark } from "@/components/BrandMark";

const WHATSAPP = "5528999745252";
const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plano Vida | Atendimento Funerário 24h em Cachoeiro e Marataízes" },
      {
        name: "description",
        content:
          "Atendimento funerário 24 horas em Cachoeiro de Itapemirim, Marataízes e região. Mais de 25 anos cuidando de famílias com acolhimento. Fale agora no WhatsApp.",
      },
      {
        property: "og:title",
        content: "Plano Vida | Atendimento Funerário 24h no sul do Espírito Santo",
      },
      {
        property: "og:description",
        content:
          "Estamos com você, 24 horas. Estrutura própria, atendimento humanizado e planos a partir de R$ 42,50/mês.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Hero />
      <Steps />
      <WhyUs />
      <Trust />
      <PlanCta />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:pt-10">
      <header className="mb-12 flex items-center justify-between gap-4">
        <img src={logo.url} alt="Plano Vida" className="h-10 w-auto sm:h-12" />
        <a
          href={`tel:+${WHATSAPP}`}
          className="hidden items-center gap-2 text-sm font-semibold text-deep sm:inline-flex"
        >
          <Phone className="size-4 text-accent" />
          (28) 99974-5252
        </a>
      </header>

      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-md bg-deep/5 px-3 py-1.5 text-sm font-semibold text-deep">
            <Clock className="size-4 text-accent" />
            Atendimento <span className="text-accent">24 horas</span>
          </span>

          <h1 className="mt-5 text-3xl leading-tight text-deep sm:text-4xl lg:text-5xl">
            Precisando de atendimento funerário agora?
            <br />
            <span className="mt-3 block text-xl font-semibold leading-snug sm:text-2xl">
              Estamos com você, 24 horas, em Cachoeiro, Marataízes e região.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            <strong className="font-semibold text-deep">
              Referência há mais de duas décadas
            </strong>{" "}
            cuidando de famílias no sul do Espírito Santo.
          </p>

          <a
            href={waLink("Olá, preciso de atendimento funerário agora.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-5" />
            Falar agora no WhatsApp
          </a>

          <div className="relative mt-8 max-w-md overflow-hidden rounded-md bg-deep p-5 text-deep-foreground">
            <BrandMark corner="br" />
            <div className="relative">
              <h2 className="text-base">Prefere se planejar com antecedência?</h2>
              <p className="mt-1.5 text-sm text-deep-foreground/70">
                Planos preventivos para toda a família, sem pressa e sem pressão.
              </p>
              <a
                href={waLink("Olá, quero conhecer o Plano Vida.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-accent px-4 py-2 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Conheça o Plano Vida
              </a>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-md bg-deep p-7 text-deep-foreground">
          <BrandMark corner="tr" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Em um momento assim
            </p>
            <p className="mt-3 text-base text-deep-foreground/85">
              Você não precisa resolver nada sozinho. Nossa equipe assume a{" "}
              <strong className="font-semibold text-deep-foreground">
                documentação, a estrutura e a cerimônia
              </strong>{" "}
              — para que a sua família tenha tempo de se despedir.
            </p>
            <ul className="mt-6 space-y-3 border-t border-deep-foreground/15 pt-5 text-sm">
              {[
                "Equipe pronta a qualquer hora do dia ou da noite",
                "Estrutura própria, sem intermediários",
                "Cemitério parque arborizado e acolhedor",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-deep-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: MessageCircle,
    title: "Chame no WhatsApp",
    text: "Uma mensagem é suficiente. Atendemos a qualquer hora, todos os dias.",
  },
  {
    icon: Truck,
    title: "Nossa equipe se desloca até você",
    text: "Vamos ao hospital, à residência ou onde você estiver na região.",
  },
  {
    icon: HeartHandshake,
    title: "Cuidamos de toda a estrutura",
    text: "Urna, cerimônia e documentação resolvidos por nós, do início ao fim.",
  },
];

function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-2xl text-deep sm:text-3xl">Como funciona</h2>
      <p className="mt-2 max-w-xl text-base text-muted-foreground">
        Três passos simples. O resto é <strong className="font-semibold text-deep">com a gente</strong>.
      </p>

      <ol className="mt-9 grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-md border border-border bg-card p-5"
          >
            <span className="font-display text-4xl font-extrabold leading-none text-accent/40 sm:text-5xl">
              {i + 1}
            </span>
            <div>
              <step.icon className="mb-2 size-5 text-accent" />
              <h3 className="text-base text-deep">{step.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

const reasons = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Sem burocracia e sem letras miúdas. Explicamos cada passo com calma e resolvemos o que for necessário.",
  },
  {
    icon: Flower2,
    title: "Estrutura própria",
    text: "Preparo do corpo (tanatopraxia), urnas, coroas de flor, kit café e auxílio convalescência — tudo com a nossa equipe.",
  },
  {
    icon: TreePine,
    title: "Cemitério parque",
    text: "Um ambiente acolhedor e arborizado, diferente da imagem tradicional. Um lugar tranquilo para visitar e lembrar.",
  },
];

function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="max-w-2xl text-2xl text-deep sm:text-3xl">
        Referência na região há mais de <span className="text-accent">25 anos</span>
      </h2>

      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {reasons.map((r) => (
          <article key={r.title} className="rounded-md border border-border bg-card p-6">
            <span className="inline-flex size-10 items-center justify-center rounded-md bg-deep">
              <r.icon className="size-5 text-accent" />
            </span>
            <h3 className="mt-4 text-base text-deep">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const cities = ["Cachoeiro de Itapemirim", "Marataízes", "e região"];

function Trust() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div className="relative overflow-hidden rounded-md bg-deep p-7 text-deep-foreground">
          <BrandMark corner="bl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-md border border-accent/50 px-3 py-1 text-sm font-bold text-accent">
              <ShieldCheck className="size-4" />
              Selo de confiança
            </span>
            <p className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">
              A funerária mais completa da região
            </p>
            <p className="mt-3 text-sm text-deep-foreground/75">
              Mais de duas décadas ao lado das famílias do sul do Espírito Santo, com
              estrutura própria e equipe disponível{" "}
              <strong className="font-semibold text-deep-foreground">24 horas</strong>.
            </p>
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-7">
          <h3 className="flex items-center gap-2 text-base text-deep">
            <MapPin className="size-5 text-accent" />
            Área de atendimento
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cities.map((c) => (
              <li
                key={c}
                className="rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold text-deep"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Não sabe se atendemos a sua cidade?{" "}
            <a
              href={waLink("Olá, vocês atendem na minha cidade?")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-4"
            >
              Fale com a nossa equipe
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function PlanCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div className="relative overflow-hidden rounded-md bg-deep px-7 py-9 text-deep-foreground">
        <BrandMark corner="tr" />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-xl leading-snug sm:text-2xl">
              Evite que sua família precise decidir tudo sob pressão.
            </h2>
            <p className="mt-3 text-base text-deep-foreground/80">
              Conheça nossos planos a partir de{" "}
              <strong className="font-semibold text-accent">R$ 42,50/mês</strong>.
            </p>
          </div>
          <a
            href={waLink("Olá, quero conhecer o Plano Vida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-5" />
            Quero conhecer o Plano Vida
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-border px-5 py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <img src={logo.url} alt="Plano Vida" className="h-9 w-auto" />
        <p className="text-sm text-muted-foreground">
          Atendimento 24h ·{" "}
          <a href={`tel:+${WHATSAPP}`} className="font-semibold text-deep">
            (28) 99974-5252
          </a>
        </p>
      </div>
    </footer>
  );
}
