import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Users,
  Calendar,
  Gift,
  CreditCard,
  Megaphone,
  Search,
  MessageSquareReply,
  TrendingUp,
  BarChart3,
  FileSpreadsheet,
  Smartphone,
  Clock,
  Download,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Zap,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Monitor,
  Wifi,
  Phone,
  UserPlus,
  ThumbsUp,
} from "lucide-react";

const DOWNLOAD_URL =
  "https://github.com/goiascontab-ui/LeadMachinePRO/releases/latest/download/LeadMachinePRO-Setup.exe";
const WHATSAPP_URL = "https://wa.me/5562994075710";

// Framer variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center">
            <Zap size={16} className="text-black" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Lead Machine <span className="text-[#22c55e]">PRO</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={DOWNLOAD_URL}
            data-testid="nav-download-button"
            className="flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-sm px-4 py-2 rounded-lg transition-all hover:scale-105 active:scale-95"
          >
            <Download size={14} />
            Baixar Grátis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="mobile-menu-button"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0f0f0f] border-b border-white/5 px-4 pb-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-white/70 hover:text-white text-sm border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={DOWNLOAD_URL}
              className="mt-3 flex items-center justify-center gap-2 bg-[#22c55e] text-black font-semibold text-sm px-4 py-3 rounded-lg"
            >
              <Download size={14} />
              Baixar Grátis para Windows
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#22c55e]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-4 py-1.5 text-[#22c55e] text-xs font-semibold mb-6 uppercase tracking-widest"
          >
            <Zap size={12} />
            Para Windows — Grátis para começar
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6"
          >
            Pare de perder
            <br />
            <span className="gradient-text green-glow-text">clientes e dinheiro</span>
            <br />
            por falta de tempo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            O Lead Machine PRO faz tudo pelo WhatsApp enquanto você trabalha ou descansa —
            cobra, parabeniza, divulga e ainda busca novos clientes pra você. <span className="text-white/80 font-semibold">Automático, sem complicação.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a
              href={DOWNLOAD_URL}
              data-testid="hero-download-button"
              className="flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-base px-7 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#22c55e]/25"
            >
              <Download size={18} />
              Baixar Grátis para Windows
            </a>
            <a
              href="#planos"
              data-testid="hero-plans-button"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all"
            >
              Ver Planos
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-5 mt-8 justify-center lg:justify-start"
          >
            {["100% Gratuito para começar", "Não precisa saber de tecnologia", "Instala em 2 minutos"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle2 size={14} className="text-[#22c55e]" />
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Mock UI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 max-w-sm lg:max-w-md w-full"
        >
          <div className="relative">
            {/* Main card */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-5 glow-border">
              {/* Window header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-white/30 font-mono">Lead Machine PRO</span>
              </div>
              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                      <Users size={14} className="text-[#22c55e]" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-medium">Clientes cadastrados</p>
                      <p className="text-[10px] text-white/40">Atualizado agora</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#22c55e]">247</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <MessageCircle size={14} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-medium">Mensagens enviadas hoje</p>
                      <p className="text-[10px] text-white/40">Automático</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-400">182</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <Gift size={14} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-medium">Aniversariantes hoje</p>
                      <p className="text-[10px] text-white/40">Mensagem enviada</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-yellow-400">3</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                      <CreditCard size={14} className="text-[#22c55e]" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-medium">Cobranças do dia</p>
                      <p className="text-[10px] text-white/40">Enviadas automaticamente</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#22c55e]">12</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/5">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[10px] text-white/40">WhatsApp conectado e funcionando</span>
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, y: 10, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-[#1a1a1a] border border-[#22c55e]/30 rounded-xl p-3 shadow-xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} className="text-black" />
              </div>
              <div>
                <p className="text-[10px] text-white/50">Cobrança enviada</p>
                <p className="text-xs text-white font-medium">Maria Silva</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-[#1a1a1a] border border-[#22c55e]/30 rounded-xl p-3 shadow-xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                <Gift size={14} className="text-black" />
              </div>
              <div>
                <p className="text-[10px] text-white/50">Aniversario hoje!</p>
                <p className="text-xs text-white font-medium">Joao Pereira</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <Download size={24} className="text-[#22c55e]" />,
      title: "Baixe o programa",
      desc: "Clique no botão e baixe o instalador para Windows. É gratuito e não precisa de cartão.",
    },
    {
      num: "02",
      icon: <Monitor size={24} className="text-[#22c55e]" />,
      title: "Instale no seu computador",
      desc: "Instala como qualquer programa — próximo, próximo, concluir. Pronto em menos de 2 minutos.",
    },
    {
      num: "03",
      icon: <MessageCircle size={24} className="text-[#22c55e]" />,
      title: "Conecte seu WhatsApp",
      desc: "Abra o programa, escaneie o QR code com o celular e pronto! Já começa a trabalhar por você.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-3">
              Mais simples do que você imagina
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              3 passos e pronto.<br />Sem precisar saber de tecnologia.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Se você sabe usar o WhatsApp no celular, você consegue usar o Lead Machine PRO. É assim de simples.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-[#22c55e]/30 to-transparent" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative text-center"
              >
                <div className="inline-flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-[#111] border border-[#22c55e]/20 flex items-center justify-center green-glow">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 bg-[#22c55e] text-black text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: <Users size={20} className="text-[#22c55e]" />,
      title: "Cadastro de Clientes",
      desc: "Salve nome, WhatsApp, aniversário e dia de pagamento de cada cliente.",
    },
    {
      icon: <Calendar size={20} className="text-[#22c55e]" />,
      title: "Agendamento com Lembrete",
      desc: "O cliente recebe a confirmação do horário pelo WhatsApp, sem você fazer nada.",
    },
    {
      icon: <Gift size={20} className="text-yellow-400" />,
      title: "Feliz Aniversario Automatico",
      desc: "No dia do aniversário do cliente, ele recebe uma mensagem especial de você.",
    },
    {
      icon: <CreditCard size={20} className="text-blue-400" />,
      title: "Cobrança Automática",
      desc: "No dia do vencimento, o programa avisa o cliente para você. Nunca mais esquecer.",
    },
    {
      icon: <Megaphone size={20} className="text-orange-400" />,
      title: "Disparos em Massa",
      desc: "Mande promoções para toda a sua lista em 1 clique. Rápido e simples.",
    },
    {
      icon: <Search size={20} className="text-pink-400" />,
      title: "Novos Clientes Todo Dia",
      desc: "O programa encontra milhares de pessoas na sua cidade que ainda não te conhecem. Você acorda com uma lista nova de contatos pronta.",
    },
    {
      icon: <MessageSquareReply size={20} className="text-purple-400" />,
      title: "Resposta Automática",
      desc: "Responde quem manda mensagem para você enquanto você está ocupado.",
    },
    {
      icon: <TrendingUp size={20} className="text-[#22c55e]" />,
      title: "Follow-up Automático",
      desc: "Sequência de mensagens no dia 1, dia 3, dia 7... tudo sem você lembrar.",
    },
    {
      icon: <BarChart3 size={20} className="text-blue-400" />,
      title: "Relatório de Resultados",
      desc: "Veja quantas mensagens foram enviadas, recebidas e atendidas.",
    },
    {
      icon: <FileSpreadsheet size={20} className="text-yellow-400" />,
      title: "Importar Lista Excel",
      desc: "Já tem clientes numa planilha? Sobe tudo de uma vez para o programa.",
    },
    {
      icon: <Smartphone size={20} className="text-[#22c55e]" />,
      title: "Múltiplos WhatsApps",
      desc: "Conecte até 3 números ao mesmo tempo. Ideal para equipes.",
    },
    {
      icon: <Clock size={20} className="text-orange-400" />,
      title: "Campanhas Agendadas",
      desc: "Programe envios para datas futuras. Crie uma vez e esqueça.",
    },
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-[#080808] relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-3">
              Tudo que você precisava em um só lugar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Um programa. Mil problemas resolvidos.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Tudo que você faz hoje no braço — cobrar, lembrar, divulgar, responder — o Lead Machine PRO faz sozinho enquanto você cuida do seu negócio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                data-testid={`feature-card-${i}`}
                className="bg-[#111] border border-white/5 hover:border-[#22c55e]/20 rounded-xl p-5 group transition-all duration-300 hover:bg-[#131a13]"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-[#22c55e]/10 flex items-center justify-center mb-4 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Benefits ─────────────────────────────────────────────────────────────────
function Benefits() {
  const items = [
    {
      icon: <Search size={28} className="text-[#22c55e]" />,
      headline: "Milhares de clientes novos esperando por você",
      body: "Enquanto você dorme, o programa busca pessoas na sua cidade que precisam do que você oferece. Você acorda com uma lista cheia de novos contatos para abordar.",
    },
    {
      icon: <CreditCard size={28} className="text-[#22c55e]" />,
      headline: "Nunca mais perca uma cobrança",
      body: "O programa avisa o cliente no dia do vencimento automaticamente. Você recebe em dia sem precisar ligar, cobrar ou se preocupar.",
    },
    {
      icon: <Megaphone size={28} className="text-[#22c55e]" />,
      headline: "Sua promoção chega pra todo mundo em segundos",
      body: "Criou uma oferta? Um clique e centenas de clientes recebem a mensagem no WhatsApp deles. É como ter uma equipe de vendas trabalhando por você.",
    },
    {
      icon: <Gift size={28} className="text-[#22c55e]" />,
      headline: "Seu cliente nunca vai te esquecer",
      body: "Aniversário, lembrete de agendamento, follow-up após compra... o programa cuida do relacionamento com cada cliente sem você precisar lembrar de nada.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22c55e]/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-3">
              Por que quem usa não larga
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Você já trabalha demais.<br />Deixa o programa trabalhar por você.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Salão, clínica, loja, academia, oficina — qualquer negócio que depende de WhatsApp precisa do Lead Machine PRO.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-5 bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 hover:border-[#22c55e]/20 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center group-hover:bg-[#22c55e]/15 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{item.headline}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Checkout Modal ───────────────────────────────────────────────────────────
const EDGE_URL = "https://ibjpqlublpptcbluhqnt.supabase.co/functions/v1";

type CheckoutStep = "form" | "pix" | "card_redirect" | "success" | "error";

interface CheckoutModalProps {
  plan: string; // "pro" | "promax"
  billing: string; // "mensal" | "trimestral" | "anual"
  planName: string;
  price: string;
  onClose: () => void;
}

function CheckoutModal({ plan, billing, planName, price, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<CheckoutStep>("form");
  const [whatsapp, setWhatsapp] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [qrText, setQrText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const [polling, setPolling] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const featureTier = plan === "promax" ? "pro_max" : "pro";
  const planoKey = billing; // mensal | trimestral | anual

  useEffect(() => {
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, []);

  async function handlePix() {
    const wpp = whatsapp.replace(/\D/g, "");
    if (wpp.length < 10) return;

    try {
      const res = await fetch(`${EDGE_URL}/criar-pix`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plano: planoKey,
          feature_tier: featureTier,
          hwid: "SITE_PURCHASE",
          whatsapp: wpp,
        }),
      });
      const data = await res.json();
      if (!data.ok || (!data.qr_code && !data.qr_base64)) {
        setErrorMsg(data.error || "Erro ao gerar Pix. Tente novamente.");
        setStep("error");
        return;
      }
      setQrCode(data.qr_base64 || data.qr_code_base64 || "");
      setQrText(data.qr_code || "");
      setPaymentId(data.payment_id || "");
      setStep("pix");
      startPolling(data.payment_id);
    } catch {
      setErrorMsg("Erro de conexão. Verifique sua internet e tente novamente.");
      setStep("error");
    }
  }

  async function handleCard() {
    const wpp = whatsapp.replace(/\D/g, "");
    if (wpp.length < 10) return;

    try {
      const res = await fetch(`${EDGE_URL}/criar-pix`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "criar_checkout_cartao",
          plano: planoKey,
          feature_tier: featureTier,
          hwid: "SITE_PURCHASE",
          whatsapp: wpp,
        }),
      });
      const data = await res.json();
      if (data.init_point) {
        window.open(data.init_point, "_blank");
        setStep("card_redirect");
        if (data.payment_id) startPolling(data.payment_id);
      } else {
        setErrorMsg(data.error || "Erro ao gerar checkout. Tente novamente.");
        setStep("error");
      }
    } catch {
      setErrorMsg("Erro de conexão. Tente novamente.");
      setStep("error");
    }
  }

  function startPolling(pid: string) {
    setPolling(true);
    pollRef.current = setInterval(async () => {
      try {
        const res = await fetch(`${EDGE_URL}/criar-pix`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "status", payment_id: pid }),
        });
        const data = await res.json();
        if (data.status === "approved") {
          clearInterval(pollRef.current!);
          setPolling(false);
          setStep("success");
        }
      } catch { /* ignora erro de rede no polling */ }
    }, 3000);
  }

  function copyPix() {
    navigator.clipboard.writeText(qrText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const wppFormatted = whatsapp.replace(/\D/g, "");
  const wppValid = wppFormatted.length >= 10;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-[#111] border border-white/10 rounded-2xl p-6 w-full max-w-md relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors">
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-[#22c55e] flex items-center justify-center">
              <Zap size={12} className="text-black" />
            </div>
            <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Lead Machine PRO</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Plano {planName} — <span className="text-[#22c55e]">{price}<span className="text-sm font-normal text-white/40">/{billing === "mensal" ? "mês" : billing === "trimestral" ? "trim." : "ano"}</span></span>
          </h3>
        </div>

        {/* Step: form */}
        {step === "form" && (
          <div className="space-y-4">
            <div>
              <label className="text-xs text-white/50 mb-1.5 block">Seu WhatsApp (para receber a chave de ativação)</label>
              <input
                type="tel"
                placeholder="(62) 99999-9999"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#22c55e]/50"
              />
              <p className="text-xs text-white/30 mt-1.5">Após o pagamento, sua chave de ativação será enviada para este número.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handlePix}
                disabled={!wppValid}
                className="flex flex-col items-center gap-1.5 bg-[#00b4d8]/10 border border-[#00b4d8]/30 hover:border-[#00b4d8]/60 rounded-xl p-4 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-bold text-white">Pagar com Pix</span>
                <span className="text-xs text-white/40">Aprovação imediata</span>
              </button>
              <button
                onClick={handleCard}
                disabled={!wppValid}
                className="flex flex-col items-center gap-1.5 bg-[#6c63ff]/10 border border-[#6c63ff]/30 hover:border-[#6c63ff]/60 rounded-xl p-4 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="text-2xl">💳</span>
                <span className="text-sm font-bold text-white">Cartão de crédito</span>
                <span className="text-xs text-white/40">Parcele em até 12x</span>
              </button>
            </div>
          </div>
        )}

        {/* Step: pix */}
        {step === "pix" && (
          <div className="space-y-4 text-center">
            <p className="text-sm text-white/60">Escaneie o QR Code ou copie o código Pix:</p>
            {qrCode && (
              <img src={`data:image/png;base64,${qrCode}`} alt="QR Code Pix" className="w-48 h-48 mx-auto rounded-xl bg-white p-2" />
            )}
            {qrText && (
              <button
                onClick={copyPix}
                className="w-full bg-[#22c55e]/10 border border-[#22c55e]/30 hover:border-[#22c55e]/60 text-[#22c55e] text-sm font-bold py-3 rounded-xl transition-all"
              >
                {copied ? "✓ Copiado!" : "Copiar código Pix"}
              </button>
            )}
            <p className="text-xs text-white/30 flex items-center justify-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${polling ? "bg-yellow-400 animate-pulse" : "bg-white/20"}`} />
              Aguardando pagamento...
            </p>
          </div>
        )}

        {/* Step: card redirect */}
        {step === "card_redirect" && (
          <div className="text-center space-y-4 py-4">
            <div className="text-4xl">💳</div>
            <p className="text-white font-bold">Checkout aberto em nova aba</p>
            <p className="text-sm text-white/50">Complete o pagamento na página do Mercado Pago. Assim que aprovado, sua chave será enviada no WhatsApp.</p>
            <p className="text-xs text-white/30 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Aguardando confirmação...
            </p>
          </div>
        )}

        {/* Step: success */}
        {step === "success" && (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} className="text-[#22c55e]" />
            </div>
            <p className="text-white font-extrabold text-lg">Pagamento confirmado! 🎉</p>
            <p className="text-sm text-white/60">
              Sua chave de ativação foi enviada para o WhatsApp <span className="text-white font-bold">{whatsapp}</span>.
            </p>
            <p className="text-xs text-white/40">Instale o programa, abra a tela de ativação e cole a chave recebida.</p>
            <a
              href={DOWNLOAD_URL}
              className="block w-full text-center bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-sm py-3 rounded-xl transition-all"
            >
              Baixar Lead Machine PRO
            </a>
          </div>
        )}

        {/* Step: error */}
        {step === "error" && (
          <div className="text-center space-y-4 py-4">
            <div className="text-4xl">⚠️</div>
            <p className="text-white font-bold">Algo deu errado</p>
            <p className="text-sm text-white/50">{errorMsg}</p>
            <button onClick={() => setStep("form")} className="w-full border border-white/20 text-white/70 text-sm py-3 rounded-xl hover:border-white/40 transition-all">
              Tentar novamente
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
type BillingCycle = "mensal" | "trimestral" | "anual";

const prices: Record<string, Record<BillingCycle, string>> = {
  free:  { mensal: "R$ 0",   trimestral: "R$ 0",   anual: "R$ 0"   },
  pro:   { mensal: "R$ 47",  trimestral: "R$ 117",  anual: "R$ 397" },
  promax:{ mensal: "R$ 97",  trimestral: "R$ 247",  anual: "R$ 697" },
};

function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("mensal");
  const [checkout, setCheckout] = useState<{ plan: string; name: string } | null>(null);

  const plans = [
    {
      key: "free",
      name: "Grátis",
      popular: false,
      features: [
        "Cadastro de clientes (CRM)",
        "Agendamento com lembrete",
        "Aviso de aniversário automático",
        "Cobrança automática",
        "1 WhatsApp conectado",
        "Ver até 10 contatos encontrados/dia",
        "Enviar até 10 mensagens/dia",
      ],
      cta: "Baixar Grátis",
      ctaLink: DOWNLOAD_URL,
      ctaVariant: "outline",
    },
    {
      key: "pro",
      name: "Pro",
      popular: true,
      features: [
        "Tudo do Grátis",
        "Busca ilimitada de contatos",
        "Envio ilimitado de mensagens",
        "Automações sem limite",
        "Relatório de resultados",
        "Importar lista (Excel)",
        "Suporte pelo WhatsApp",
      ],
      cta: "Assinar Pro",
      ctaLink: DOWNLOAD_URL,
      ctaVariant: "solid",
    },
    {
      key: "promax",
      name: "Pro Max",
      popular: false,
      features: [
        "Tudo do Pro",
        "3 WhatsApps conectados",
        "Ideal para agências e revendedores",
        "Suporte prioritário",
      ],
      cta: "Assinar Pro Max",
      ctaLink: DOWNLOAD_URL,
      ctaVariant: "outline",
    },
  ];

  const cycles: { key: BillingCycle; label: string }[] = [
    { key: "mensal", label: "Mensal" },
    { key: "trimestral", label: "Trimestral" },
    { key: "anual", label: "Anual" },
  ];

  return (
    <section id="planos" className="py-24 bg-[#080808] relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="inline-block text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-3">
              Comece de graça
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Planos e Preços
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Baixe grátis e comece a usar hoje. Faça upgrade dentro do programa quando quiser.
            </p>
          </motion.div>

          {/* Billing toggle */}
          <motion.div variants={fadeUp} className="flex justify-center mb-12">
            <div className="bg-[#111] border border-white/10 rounded-xl p-1 flex gap-1">
              {cycles.map((c) => (
                <button
                  key={c.key}
                  data-testid={`billing-${c.key}`}
                  onClick={() => setBilling(c.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    billing === c.key
                      ? "bg-[#22c55e] text-black"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {c.label}
                  {c.key === "trimestral" && (
                    <span className="ml-1.5 text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded-full font-bold">
                      -17%
                    </span>
                  )}
                  {c.key === "anual" && (
                    <span className="ml-1.5 text-[10px] bg-yellow-500 text-black px-1.5 py-0.5 rounded-full font-bold">
                      -30%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.key}
                variants={fadeUp}
                data-testid={`plan-card-${plan.key}`}
                className={`relative rounded-2xl p-6 flex flex-col ${
                  plan.popular
                    ? "bg-[#0d1f0d] popular-glow"
                    : "bg-[#111] border border-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22c55e] text-black text-xs font-black px-4 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} fill="black" />
                    Mais Popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">
                      {prices[plan.key][billing]}
                    </span>
                    {prices[plan.key][billing] !== "R$ 0" && (
                      <span className="text-white/40 text-xs">
                        /{billing === "mensal" ? "mês" : billing === "trimestral" ? "trim." : "ano"}
                      </span>
                    )}
                  </div>
                  {prices[plan.key][billing] === "R$ 0" && (
                    <p className="text-xs text-[#22c55e] mt-1">Para sempre grátis</p>
                  )}
                </div>

                <ul className="flex-1 space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-white/60">
                      <CheckCircle2 size={13} className="text-[#22c55e] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.ctaVariant === "solid" ? (
                  <button
                    onClick={() => setCheckout({ plan: plan.key, name: plan.name })}
                    data-testid={`plan-cta-${plan.key}`}
                    className="w-full text-center bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-sm py-3 rounded-xl transition-all hover:scale-105 active:scale-95"
                  >
                    {plan.cta}
                  </button>
                ) : plan.key === "free" ? (
                  <a
                    href={DOWNLOAD_URL}
                    data-testid={`plan-cta-${plan.key}`}
                    className="w-full text-center border border-[#22c55e]/50 hover:border-[#22c55e] text-[#22c55e] font-bold text-sm py-3 rounded-xl transition-all hover:scale-105 active:scale-95 block"
                  >
                    {plan.cta}
                  </a>
                ) : plan.ctaVariant === "outline" ? (
                  <button
                    onClick={() => setCheckout({ plan: plan.key, name: plan.name })}
                    data-testid={`plan-cta-${plan.key}`}
                    className="w-full text-center border border-[#22c55e]/50 hover:border-[#22c55e] text-[#22c55e] font-bold text-sm py-3 rounded-xl transition-all hover:scale-105 active:scale-95"
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <div className="w-full text-center bg-white/5 text-white/30 text-sm py-3 rounded-xl cursor-default">
                    {plan.cta}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeUp} className="text-center text-white/30 text-sm mt-8">
            <Shield size={12} className="inline mr-1.5" />
            Pagamento via Mercado Pago (Pix instantâneo ou cartão de crédito).
            <span className="ml-2 text-white/40">
              Chave de ativação enviada no WhatsApp após confirmação.
            </span>
          </motion.p>
        </AnimatedSection>
      </div>

      {checkout && (
        <CheckoutModal
          plan={checkout.plan}
          billing={billing}
          planName={checkout.name}
          price={prices[checkout.plan]?.[billing] ?? ""}
          onClose={() => setCheckout(null)}
        />
      )}
    </section>
  );
}

// ─── Social Proof ─────────────────────────────────────────────────────────────
function SocialProof() {
  const depoimentos = [
    {
      nome: "Ana Paula",
      negocio: "Salão de Beleza",
      texto: "Antes eu ficava horas mandando mensagem de cobrança uma por uma. Hoje o programa faz tudo sozinho e ainda me avisa quando o cliente confirma. Não consigo imaginar trabalhar sem ele.",
      estrelas: 5,
    },
    {
      nome: "Carlos Mendes",
      negocio: "Oficina Mecânica",
      texto: "Achei que ia ser complicado, mas instalei em menos de 5 minutos. Semana passada mandei promoção pra mais de 300 clientes de uma vez. Nunca conseguiria fazer isso sozinho.",
      estrelas: 5,
    },
    {
      nome: "Fernanda Lima",
      negocio: "Clínica de Estética",
      texto: "O programa encontra clientes novos pra mim todo dia. Minha agenda que ficava vazia agora está sempre cheia. Foi a melhor coisa que fiz pro meu negócio.",
      estrelas: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22c55e]/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="inline-block text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-3">
              Quem já usa recomenda
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Negócios que mudaram com o Lead Machine PRO
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              De salão a oficina — qualquer negócio que depende de WhatsApp cresce com o programa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#22c55e]/20 transition-all"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: d.estrelas }).map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-white/70 leading-relaxed flex-1">"{d.texto}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e] font-bold text-sm">
                    {d.nome[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{d.nome}</p>
                    <p className="text-xs text-white/40">{d.negocio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#111] border border-white/5 rounded-2xl p-8"
          >
            {[
              { num: "10.000+", label: "Mensagens enviadas por dia" },
              { num: "98%", label: "Usuários recomendam o programa" },
              { num: "2 min", label: "Para instalar e começar a usar" },
              { num: "Grátis", label: "Para começar, sem cartão" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#22c55e] mb-1">{s.num}</p>
                <p className="text-xs text-white/40 leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "O programa precisa de internet para funcionar?",
      a: "Sim, o Lead Machine PRO precisa de internet para enviar as mensagens pelo WhatsApp. Mas a conexão não precisa ser de alta velocidade — funciona bem até em internet mais simples.",
    },
    {
      q: "Funciona no celular?",
      a: "Não, o Lead Machine PRO é um programa para computadores com Windows. O celular só precisa estar com o WhatsApp ligado para o programa conseguir enviar as mensagens.",
    },
    {
      q: "Posso usar mais de um numero de WhatsApp?",
      a: "Sim! No plano Grátis e Pro você conecta 1 número de WhatsApp. No plano Pro Max você conecta até 3 números ao mesmo tempo — ideal para agências.",
    },
    {
      q: "Como faço o pagamento dos planos pagos?",
      a: "O pagamento é feito dentro do próprio programa, depois de instalar. Aceitamos Pix e cartão de crédito pelo Mercado Pago.",
    },
    {
      q: "Preciso saber mexer em computador?",
      a: "Não precisa de nenhum conhecimento técnico! O Lead Machine PRO foi feito para ser simples como um aplicativo de celular. Se você sabe usar o WhatsApp, você consegue usar o programa.",
    },
    {
      q: "Tenho um código de desconto — onde uso?",
      a: "Instale o programa normalmente e, na tela de planos dentro do programa, há um campo para digitar o código de desconto. O desconto é aplicado na hora.",
    },
    {
      q: "Preciso deixar o computador ligado para as mensagens saírem?",
      a: "Sim, para o programa enviar mensagens automaticamente, o computador precisa estar ligado e o programa aberto. Mas para mensagens agendadas, funciona em segundo plano sem atrapalhar o uso normal.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="inline-block text-[#22c55e] text-xs font-bold uppercase tracking-widest mb-3">
              Tira-dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-white/50">
              Dúvidas que quase todo mundo tem antes de começar.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                data-testid={`faq-item-${i}`}
                className="bg-[#111] border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                >
                  <span className="text-sm font-semibold text-white/90">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 text-white/40 transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22c55e]/5 to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center">
              <Zap size={32} className="text-[#22c55e]" />
            </div>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Seu negócio pode estar gerando<br />
            <span className="gradient-text green-glow-text">muito mais do que gera hoje</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Cada dia sem o Lead Machine PRO é um dia com clientes sendo esquecidos, cobranças perdidas e promoções que nunca saíram. Baixe agora — é de graça.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DOWNLOAD_URL}
              className="flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#22c55e]/25"
            >
              <Download size={18} />
              Baixar Grátis para Windows
            </a>
            <a
              href="#planos"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all"
            >
              Ver os Planos
              <ArrowRight size={16} />
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="text-white/30 text-sm mt-6 flex items-center justify-center gap-2">
            <CheckCircle2 size={14} className="text-[#22c55e]" />
            Grátis para começar · Sem cartão · Instala em 2 minutos · Funciona no Windows
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#22c55e] flex items-center justify-center">
              <Zap size={18} className="text-black" />
            </div>
            <div>
              <p className="font-bold text-white text-base leading-tight">
                Lead Machine <span className="text-[#22c55e]">PRO</span>
              </p>
              <p className="text-xs text-white/30">Automatize seu WhatsApp</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href={DOWNLOAD_URL}
              data-testid="footer-download-link"
              className="flex items-center gap-2 text-white/50 hover:text-[#22c55e] transition-colors"
            >
              <Download size={14} />
              Baixar para Windows
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-link"
              className="flex items-center gap-2 text-white/50 hover:text-[#22c55e] transition-colors"
            >
              <Phone size={14} />
              Suporte pelo WhatsApp
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-xs text-white/20">
              &copy; {new Date().getFullYear()} Lead Machine PRO. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-xs text-white/30">
              <a href="/privacidade.html" className="hover:text-white/60 transition-colors">Política de Privacidade</a>
              <a href="/termos.html" className="hover:text-white/60 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp ─────────────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300 }}
      className="fixed bottom-6 right-6 z-50 group"
      title="Falar com suporte"
    >
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20bd5a] flex items-center justify-center shadow-lg shadow-[#25d366]/30 transition-all hover:scale-110 active:scale-95">
          <MessageCircle size={26} className="text-white" />
        </div>
        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#111] border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Falar com suporte
        </span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
      </div>
    </motion.a>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Benefits />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
