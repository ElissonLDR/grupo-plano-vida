import { createFileRoute } from "@tanstack/react-router";
import {
  Truck,
  HeartHandshake,
  Flower2,
  TreePine,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import logo from "@/assets/logotipo-plano-vida-horizontal.svg";
import frota from "@/assets/frota.png";
import salaVelorio from "@/assets/sala-velorio.png";
import cemiterioParque from "@/assets/cemiterio-parque.png";
import bannerCta from "@/assets/banner-cta.png";
import bannerCtaMobile from "@/assets/banner-cta-mobile.png";
import { BrandMark } from "@/components/BrandMark";

const WHATSAPP = "5528999745252";
const waMessage = encodeURIComponent(
  "Olá, gostaria de mais informações sobre o atendimento do Plano Vida.",
);
const waLink = `https://wa.me/${WHATSAPP}?text=${waMessage}`;
const HERO_VIDEO =
  "https://grupoplanovida.com.br/wp-content/uploads/2024/11/INSTITUCIONAL-PLANO-VIDA-24-3-2.mp4#t=1";

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
          "Estamos com você, 24 horas, em Cachoeiro, Marataízes e região. Referência há mais de duas décadas cuidando de famílias no sul do Espírito Santo.",
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
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1ebe57]"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-[oklch(0.279_0.033_173)]/75"
        aria-hidden="true"
      />

      <BrandMark corner="left" className="opacity-[0.12]" />
      <BrandMark corner="right" className="opacity-[0.12]" />

      <div className="relative z-10 flex flex-1 flex-col">
        <header className="flex justify-center px-5 pt-8 sm:pt-10">
          <img
            src={logo}
            alt="Plano Vida"
            className="h-12 w-auto brightness-0 invert sm:h-14 animate-[fade-up_0.7s_ease-out]"
          />
        </header>

        <div className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-5 py-16 text-center">
          <h1 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl animate-[fade-up_0.8s_ease-out_0.1s_both]">
            Precisando de atendimento funerário agora?
            <br />
            <span className="mt-4 block text-xl font-semibold leading-snug text-white/95 sm:text-2xl">
              Estamos com você, <span className="text-accent">24 horas</span>, em
              Cachoeiro, Marataízes e região.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/80 animate-[fade-up_0.8s_ease-out_0.2s_both]">
            <strong className="font-semibold text-white">
              Referência há mais de duas décadas
            </strong>{" "}
            cuidando de famílias no sul do Espírito Santo.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-sm transition-colors hover:bg-[oklch(0.55_0.13_61)] animate-[fade-up_0.8s_ease-out_0.3s_both]"
          >
            <WhatsAppIcon className="size-5" />
            Falar agora no WhatsApp
          </a>

          <div className="relative mt-8 w-full max-w-md overflow-hidden rounded-md bg-deep p-5 text-deep-foreground animate-[fade-up_0.8s_ease-out_0.4s_both]">
            <div className="relative flex flex-col items-center text-center">
              <h2 className="text-base">Prefere se planejar com antecedência?</h2>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-accent px-4 py-2 text-sm font-bold text-accent transition-colors hover:border-[oklch(0.55_0.13_61)] hover:bg-[oklch(0.55_0.13_61)] hover:text-accent-foreground"
              >
                Conheça o Plano Vida
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: WhatsAppIcon, title: "Chame no WhatsApp" },
  { icon: Truck, title: "Nossa equipe se desloca até você" },
  {
    icon: HeartHandshake,
    title: "Cuidamos de toda a estrutura: urna, cerimônia, documentação",
  },
];

function Steps() {
  return (
    <section className="relative overflow-hidden">
      <BrandMark corner="left" />
      <BrandMark corner="right" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-16">
        <h2 className="text-2xl text-deep sm:text-3xl">Como funciona</h2>

        <ol className="mt-9 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex items-start gap-4 rounded-md border border-border bg-card p-5"
            >
              <span className="font-display text-6xl font-extrabold leading-none text-accent/40 sm:text-7xl">
                {i + 1}
              </span>
              <div>
                <step.icon className="mb-2 size-5 text-accent" />
                <h3 className="text-base text-deep">{step.title}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "sem burocracia",
    image: frota,
    alt: "Frota de atendimento Plano Vida",
  },
  {
    icon: Flower2,
    title: "Estrutura própria",
    text: "preparo do corpo (tanatopraxia), urnas, coroas de flor, kit café, auxílio convalescência",
    image: salaVelorio,
    alt: "Sala de velório moderna do Plano Vida",
  },
  {
    icon: TreePine,
    title: "Cemitério parque",
    text: "ambiente acolhedor, arborizado, diferente da imagem tradicional pesada",
    image: cemiterioParque,
    alt: "Cemitério parque Plano Vida",
  },
];

function WhyUs() {
  return (
    <section className="relative overflow-hidden">
      <BrandMark corner="left" />
      <BrandMark corner="right" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-16">
        <h2 className="max-w-2xl text-2xl text-deep sm:text-3xl">
          Referência na região há mais de <span className="text-accent">25 anos</span>
        </h2>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {reasons.map((r) => (
            <article
              key={r.title}
              className="overflow-hidden rounded-md border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.image}
                  alt={r.alt}
                  className="h-full w-full scale-110 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-deep">
                  <r.icon className="size-5 text-accent" />
                </span>
                <h3 className="mt-4 text-base text-deep">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const cities = ["Cachoeiro", "Marataízes", "e região"];

function Trust() {
  return (
    <section className="relative overflow-hidden">
      <BrandMark corner="left" />
      <BrandMark corner="right" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md bg-deep p-7 text-deep-foreground">
            <ShieldCheck className="size-6 text-accent" />
            <p className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">
              A funerária mais completa da região
            </p>
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
      </div>
    </section>
  );
}

function PlanCta() {
  return (
    <section className="relative overflow-hidden pb-16">
      <BrandMark corner="left" />
      <BrandMark corner="right" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5">
        <div className="relative overflow-hidden rounded-md">
          {/* Mobile: banner vertical + texto no topo */}
          <div className="relative md:hidden">
            <img
              src={bannerCtaMobile}
              alt=""
              aria-hidden="true"
              className="aspect-[3/5] min-h-[640px] w-full object-cover object-bottom"
            />
            <div className="absolute inset-x-0 top-0 flex flex-col items-start gap-4 px-6 pt-8 pb-6 text-deep">
              <h2 className="text-2xl font-bold leading-snug">
                Evite que sua família precise decidir tudo sob pressão.
              </h2>
              <p className="text-base font-semibold text-deep">
                Conheça nossos planos a partir de
                <br />
                <strong className="mt-1 inline-block rounded-sm bg-accent px-1.5 py-0.5 font-bold text-accent-foreground">
                  R$ 42,50/mês
                </strong>
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-4 py-3 text-[14px] font-bold text-accent-foreground transition-colors hover:bg-[oklch(0.55_0.13_61)]"
              >
                <WhatsAppIcon className="size-4" />
                Quero conhecer o Plano Vida
              </a>
            </div>
          </div>

          {/* Desktop: fundo + texto à direita mais visível */}
          <div className="relative hidden min-h-[520px] items-center justify-end overflow-hidden md:flex lg:min-h-[600px]">
            <img
              src={bannerCta}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-left"
            />
            <div className="relative z-10 mr-6 flex w-full max-w-lg flex-col items-start gap-6 rounded-md bg-[#edf6f3]/55 px-8 py-10 text-left text-deep shadow-sm backdrop-blur-sm lg:mr-10 lg:max-w-xl lg:px-12 lg:py-12">
              <h2 className="text-2xl font-bold leading-snug lg:text-3xl">
                Evite que sua família precise decidir tudo sob pressão.
              </h2>
              <p className="text-base font-semibold text-deep">
                Conheça nossos planos a partir de{" "}
                <strong className="font-bold text-[oklch(0.48_0.12_55)]">
                  R$ 42,50/mês
                </strong>
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition-colors hover:bg-[oklch(0.55_0.13_61)]"
              >
                <WhatsAppIcon className="size-5" />
                Quero conhecer o Plano Vida
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] border-t border-border px-5 py-8">
      <img src={logo} alt="Plano Vida" className="h-9 w-auto" />
    </footer>
  );
}
