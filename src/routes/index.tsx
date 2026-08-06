import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Truck,
  HeartHandshake,
  Flower2,
  TreePine,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import logo from "@/assets/logo-horizontal.svg.asset.json";
import { BrandMark } from "@/components/BrandMark";

const WHATSAPP = "5528999745252";
const waLink = `https://wa.me/${WHATSAPP}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plano Vida | Atendimento Funerário 24h em Cachoeiro e Marataízes" },
      {
        name: "description",
        content:
          "Estamos com você, 24 horas, em Cachoeiro, Marataízes e região. Referência há mais de duas décadas cuidando de famílias no sul do Espírito Santo.",
      },
      {
        property: "og:title",
        content: "Plano Vida | Atendimento Funerário 24h em Cachoeiro e Marataízes",
      },
      {
        property: "og:description",
        content:
          "Estamos com você, 24 horas, em Cachoeiro, Marataízes e região. Conheça o Plano Vida a partir de R$ 42,50/mês.",
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
    <section className="mx-auto max-w-5xl px-5 pb-16 pt-8 sm:pt-10">
      <header className="mb-14">
        <img src={logo.url} alt="Plano Vida" className="h-10 w-auto sm:h-12" />
      </header>

      <h1 className="max-w-3xl text-3xl leading-tight text-deep sm:text-4xl lg:text-5xl">
        Precisando de atendimento funerário agora?
        <br />
        <span className="mt-3 block text-xl font-semibold leading-snug sm:text-2xl">
          Estamos com você, <span className="text-accent">24 horas</span>, em Cachoeiro,
          Marataízes e região.
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-base text-muted-foreground">
        <strong className="font-semibold text-deep">
          Referência há mais de duas décadas
        </strong>{" "}
        cuidando de famílias no sul do Espírito Santo.
      </p>

      <a
        href={waLink}
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
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-accent px-4 py-2 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Conheça o Plano Vida
          </a>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: MessageCircle, title: "Chame no WhatsApp" },
  { icon: Truck, title: "Nossa equipe se desloca até você" },
  {
    icon: HeartHandshake,
    title: "Cuidamos de toda a estrutura: urna, cerimônia, documentação",
  },
];

function Steps() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <h2 className="text-2xl text-deep sm:text-3xl">Como funciona</h2>

      <ol className="mt-9 grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex items-start gap-4 rounded-md border border-border bg-card p-5"
          >
            <span className="font-display text-4xl font-extrabold leading-none text-accent/40 sm:text-5xl">
              {i + 1}
            </span>
            <div>
              <step.icon className="mb-2 size-5 text-accent" />
              <h3 className="text-base text-deep">{step.title}</h3>
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
    text: "sem burocracia",
  },
  {
    icon: Flower2,
    title: "Estrutura própria",
    text: "preparo do corpo (tanatopraxia), urnas, coroas de flor, kit café, auxílio convalescência",
  },
  {
    icon: TreePine,
    title: "Cemitério parque",
    text: "ambiente acolhedor, arborizado, diferente da imagem tradicional pesada",
  },
];

function WhyUs() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
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

const cities = ["Cachoeiro", "Marataízes", "e região"];

function Trust() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-md bg-deep p-7 text-deep-foreground">
          <BrandMark corner="bl" />
          <div className="relative">
            <ShieldCheck className="size-6 text-accent" />
            <p className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">
              A funerária mais completa da região
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
        </div>
      </div>
    </section>
  );
}

function PlanCta() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-16">
      <div className="relative overflow-hidden rounded-md bg-deep px-7 py-9 text-deep-foreground">
        <BrandMark corner="tr" />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-base text-deep-foreground/85">
            <strong className="font-semibold text-deep-foreground">
              Evite que sua família precise decidir tudo sob pressão.
            </strong>{" "}
            Conheça nossos planos a partir de{" "}
            <strong className="font-semibold text-accent">R$ 42,50/mês</strong>
          </p>
          <a
            href={waLink}
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
    <footer className="mx-auto max-w-5xl border-t border-border px-5 py-8">
      <img src={logo.url} alt="Plano Vida" className="h-9 w-auto" />
    </footer>
  );
}
