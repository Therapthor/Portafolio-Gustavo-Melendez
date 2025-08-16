import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =============================================================
   URBAN PORTFOLIO LANDING PAGE (React Single File)
   - Apple-like intro gate + animated background (elegant)
   - Smooth Framer Motion
   - Sections: Videos, Photo Editing, Web Dev, Expertise, Contact, Clients
   ============================================================= */

/* =============================
   === CONFIG — EDIT THIS ONLY ===
   ============================= */
const CONFIG = {
  profilePhoto: "/foto_perfil.JPG", // URL de la foto de perfil (debe estar en la carpeta pública)
  whatsappLink: "https://wa.me/51977430941",

  videos: [
    { title: "Documental - Los Malditos Bayóvar", src: "https://www.youtube.com/embed/22yYXjZf3m0" },
    { title: "Linea de Tiempo de Reels", src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7222694439918432257?compact=1" },
    { title: "Motion Graphics - Video Reflexivo", src: "https://player.vimeo.com/video/1108921499" },
    { title: "Edición Motion Graphics para YouTube", src: "https://www.youtube.com/embed/bbr-6r5AhNg" },
  ],

  photos: [
    { caption: "Juan Espinoza Espinoza", src: "https://media.licdn.com/dms/image/v2/D5622AQF9UJOzeIbmgA/feedshare-shrink_1280/feedshare-shrink_1280/0/1723907128043?e=1758153600&v=beta&t=bU6FAA9xzVfsjXYa-0FB3p4ENLGETZ-IbGW9zRmAwzM" },
    { caption: "Código Procesal Constitucional Comentado", src: "https://media.licdn.com/dms/image/v2/D5622AQHLR33MpJTn0A/feedshare-shrink_1280/feedshare-shrink_1280/0/1730151797854?e=1758153600&v=beta&t=dTG5ZHll0LT4O5TizcX3ivuq8DI1kNzi8LeAxT9Lj_g" },
    { caption: "Mario Vera Novoa", src: "https://framerusercontent.com/images/yWHjmug6TebG6DVGsPKTPs67PQA.png?scale-down-to=1024" },
    { caption: "Portada de Corto/Audiovisual", src: "https://framerusercontent.com/images/4UM2rJXH6oWlgRU7Di0GDOmQ.jpg?scale-down-to=512" },
    { caption: "Fotografía Ficticia", src: "https://framerusercontent.com/images/O8c3VP7AenXFeyL1PSQAGM46Ys.jpg?scale-down-to=1024" },
    { caption: "Modelaje callejero", src: "https://framerusercontent.com/images/q8FLpekukNVA1FGvrIp3IbR2GM.jpg?scale-down-to=1024" },
  ],

  projects: [
    {
      title: "Catálogo de Productos Streaming",
      desc: "Página construida para mostrar productos de streaming de un cliente.",
      link: "https://rampage.pe/",
      img: "https://rampage.pe/logo-liordark.jpg",
    },
  ],

  // Clientes con logos proporcionados (tamaño uniforme aplicado en UI)
  clients: [
    {
      handle: "@einlima",
      url: "https://www.tiktok.com/@einlima",
      logo:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/00439f75e649a496c082da40914df745~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=9b268b61&x-expires=1755500400&x-signature=S4npKJDHqIasuY3HqCLMA1boXTw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    },
    {
      handle: "@institutopacifico.pe",
      url: "https://www.tiktok.com/@institutopacifico.pe",
      logo:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/89063594453b281d3c1c63b223fa613c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=6d865105&x-expires=1755500400&x-signature=rHvuAloTuDCmM82%2F5a20h4ygmk8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    },
    {
      handle: "@pulsoestudio",
      url: "https://www.tiktok.com/@pulsoestudio",
      logo:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c5bb8d7fa482e6db7057891e29ec5c5d~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=33e88748&x-expires=1755500400&x-signature=efgGm5D0r9M7C0EfhyqNinL8uS8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    },
    {
      handle: "@creativamanager",
      url: "https://www.tiktok.com/@creativamanager",
      logo:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4eb5be37391e0a0e62c2d4c3a00cca39~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=40754852&x-expires=1755500400&x-signature=SP%2FLG1pQoe8%2BpWcqRONLqKSE9CE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    },
    {
      handle: "@spiketienda11",
      url: "https://www.tiktok.com/@spiketienda11",
      logo:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9533bb78d1dca748509e687afa2c18f4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=65d1ec83&x-expires=1755500400&x-signature=R8fBF7F1q7%2FSLy7beQ7wtBdUzLo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    },
    {
      handle: "@dealtiendaperu",
      url: "https://www.tiktok.com/@dealtiendaperu",
      logo:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/63da0d6a8c680329a71d1bedc55f424e~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=3ecbe69f&x-expires=1755504000&x-signature=ywXegsfnrFhDxO6biTCk9bdao7M%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    },
  ],

  palette: {
    bg: "#0b0b0f",
    bg2: "#111318",
    accent1: "#00E5FF",
    accent2: "#A855F7",
    accent3: "#24D366",
    text: "#E6E6E6",
    subtext: "#A3A3A3",
    border: "#23252B",
    glow: "rgba(0,229,255,0.25)",
  },
};

const palette = CONFIG.palette;

// TAMAÑOS UNIFORMES
const SIZES = {
  client: 80,   // px (clientes)
  expertise: 56 // px (logos de herramientas)
};

/* =========================
   UTILS Y SUBCOMPONENTES
   ========================= */
const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative scroll-mt-24">
    <div className="mx-auto max-w-6xl px-5 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-semibold tracking-tight"
        style={{ color: palette.text }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-3 max-w-3xl text-base md:text-lg"
          style={{ color: palette.subtext }}
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span
    className="inline-flex items-center rounded-full px-3 py-1 text-sm border backdrop-blur"
    style={{
      borderColor: palette.border,
      color: palette.text,
      background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
    }}
  >
    {children}
  </span>
);

/* ========= BACKGROUND ANIMADO (estilo Apple) ========= */
const AnimatedBackground = ({ intense = false }) => (
  <div
    aria-hidden
    className="fixed inset-0 -z-10 overflow-hidden"
    style={{
      background: `radial-gradient(1200px 600px at 80% 10%, ${palette.accent2}12, transparent),
                   radial-gradient(900px 520px at 12% 88%, ${palette.accent1}14, transparent),
                   linear-gradient(180deg, ${palette.bg}, ${palette.bg2})`,
    }}
  >
    {/* blobs */}
    <motion.div
      className="absolute -top-40 -left-40 rounded-full blur-3xl"
      style={{ background: `${palette.accent2}22`, width: "40rem", height: "40rem" }}
      animate={{ y: [0, 40, -25, 0], x: [0, 14, -18, 0], scale: intense ? [1, 1.12, 1] : [1, 1.06, 1] }}
      transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/2 -right-48 rounded-full blur-3xl"
      style={{ background: `${palette.accent1}22`, width: "36rem", height: "36rem" }}
      animate={{ y: [0, -30, 18, 0], x: [0, -18, 12, 0], scale: intense ? [1, 1.1, 1] : [1, 1.04, 1] }}
      transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
    />
    {/* sheen diagonal */}
    <motion.div
      className="absolute inset-0 opacity-20"
      style={{
        background:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 10px)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
      animate={{ backgroundPositionX: ["0%", "100%"] }}
      transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
    />
    {/* grain */}
    <motion.div
      className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
      }}
      animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
    />
  </div>
);

// Intro gate
const IntroGate = ({ onOpen }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center">
      <AnimatedBackground intense />
      <div className="absolute top-4 left-0 right-0 mx-auto flex max-w-6xl items-center justify-between px-5">
        <div className="text-sm uppercase tracking-[0.2em]" style={{ color: palette.subtext }}>
          Portfolio
        </div>
        <div className="text-sm" style={{ color: palette.subtext }}>
          Design, Video, Animation & Web
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl px-6"
        style={{ color: palette.text }}
      >
        Gustavo Meléndez
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-4 max-w-xl px-6 text-base md:text-lg"
        style={{ color: palette.subtext }}
      >
        Mi trabajo, Mi pasión.
      </motion.p>

      <motion.button
        onClick={onOpen}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="group relative mt-10 rounded-full p-[3px]"
        style={{ background: `conic-gradient(from 0deg, ${palette.accent1}, ${palette.accent2}, ${palette.accent1})` }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{
            background: `conic-gradient(from 0deg, ${palette.accent2}, ${palette.accent1}, ${palette.accent2})`,
            filter: "blur(10px)",
            opacity: 0.6,
          }}
        />
        <div
          className="relative overflow-hidden border rounded-full"
          style={{ borderColor: palette.border, boxShadow: `0 0 0 6px ${palette.bg}`, width: 192, height: 192 }}
        >
          <img src={CONFIG.profilePhoto} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div className="absolute inset-0 ring-1 ring-white/5" />
        </div>
        <span
          className="absolute left-1/2 -translate-x-1/2 text-sm opacity-80 group-hover:opacity-100"
          style={{ color: palette.subtext, bottom: -40 }}
        >
          Click para abrir
        </span>
      </motion.button>

      <div className="absolute bottom-6 text-xs opacity-70" style={{ color: palette.subtext }}>
        Gustavo Meléndez © {new Date().getFullYear()} • Derechos reservados
      </div>
    </div>
  );
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (href, label) => (
    <a href={href} className="text-sm md:text-[15px] px-3 py-2 rounded-md transition-colors" style={{ color: palette.text, opacity: 0.85 }}>
      {label}
    </a>
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(13,13,18,0.75), rgba(13,13,18,0.35))"
          : "linear-gradient(180deg, rgba(13,13,18,0.35), transparent)",
        borderBottom: `1px solid ${palette.border}`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="text-sm uppercase tracking-[0.2em]" style={{ color: palette.subtext }}>
          Portfolio
        </div>
        <nav className="flex items-center gap-1">
          {link("#videos", "Videos")}
          {link("#photo", "Edición de Fotos")}
          {link("#webdev", "Desarrollo Web")}
          {link("#expertise", "Experticia")}
          {link("#contact", "Contacto")}
          {link("#clients", "Mis Clientes")}
        </nav>
      </div>
    </div>
  );
};

const Card = ({ children }) => (
  <div
    className="group relative rounded-2xl p-4 border hover:-translate-y-0.5 transition will-change-transform"
    style={{ borderColor: palette.border, background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))" }}
  >
    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: `0 0 80px ${palette.glow}` }} />
    {children}
  </div>
);

/* ====== VIDEO FRAME ====== */
const VideoFrame = ({ src, title }) => {
  const isEmbed =
    typeof src === "string" &&
    (src.includes("youtube.com/embed/") ||
      src.includes("player.vimeo.com/video/") ||
      src.includes("linkedin.com/embed/"));

  const isFile =
    typeof src === "string" &&
    (src.toLowerCase().endsWith(".mp4") ||
      src.toLowerCase().endsWith(".webm") ||
      src.toLowerCase().endsWith(".ogg"));

  return (
    <Card>
      <div className="aspect-video overflow-hidden rounded-xl border" style={{ borderColor: palette.border }}>
        {src ? (
          isEmbed ? (
            <iframe
              className="h-full w-full"
              src={src}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : isFile ? (
            <video className="h-full w-full object-cover" src={src} controls playsInline />
          ) : (
            <div className="h-full w-full grid place-items-center" style={{ background: `linear-gradient(135deg, ${palette.bg2}, ${palette.bg})` }}>
              <div className="text-center px-4">
                <div className="text-sm" style={{ color: palette.subtext }}>
                  URL no compatible. Usa embed (YouTube/Vimeo/LinkedIn) o archivo .mp4/.webm/.ogg.
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="h-full w-full grid place-items-center" style={{ background: `linear-gradient(135deg, ${palette.bg2}, ${palette.bg})` }}>
            <div className="text-center">
              <div className="text-sm" style={{ color: palette.subtext }}>Add your video URL (CONFIG.videos)</div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 text-sm" style={{ color: palette.text }}>{title}</div>
    </Card>
  );
};

const ImageTile = ({ src, caption }) => (
  <Card>
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition" style={{ background: palette.accent1 }} />
      {src ? (
        <img src={src} alt={caption} className="w-full h-56 object-cover" />
      ) : (
        <div className="w-full h-56 grid place-items-center" style={{ background: `linear-gradient(135deg, ${palette.bg2}, ${palette.bg})` }}>
          <span className="text-sm" style={{ color: palette.subtext }}>Add an image (CONFIG.photos)</span>
        </div>
      )}
    </div>
    <div className="mt-3 text-sm" style={{ color: palette.text }}>{caption}</div>
  </Card>
);

/* ====== PROJECT CARD con imagen ====== */
const ProjectCard = ({ title, desc, link, img }) => (
  <Card>
    <div className="flex flex-col gap-3">
      {img ? (
        <img src={img} alt={title} className="w-full aspect-[16/10] object-cover rounded-lg border" style={{ borderColor: palette.border }} />
      ) : null}
      <div>
        <div className="text-lg font-medium" style={{ color: palette.text }}>
          {title}
        </div>
        <p className="text-sm mt-1" style={{ color: palette.subtext }}>
          {desc}
        </p>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="self-start text-sm underline opacity-80 hover:opacity-100" style={{ color: palette.accent1 }}>
          Visitar
        </a>
      )}
    </div>
  </Card>
);

/* ====== LOGO TILE (Experticia) con fuentes reales + fallback ====== */
const fallbackBadge =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'><rect width='100%' height='100%' fill='#1c1f25'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#A3A3A3' font-family='system-ui' font-size='14'>Logo</text></svg>`
  );

const LogoTile = ({ name, src }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Card>
      <div className="flex flex-col items-center justify-center gap-3 py-6">
        <img
          src={imgSrc}
          alt={name}
          width={SIZES.expertise}
          height={SIZES.expertise}
          style={{ width: SIZES.expertise, height: SIZES.expertise, objectFit: "contain" }}
          onError={() => setImgSrc(fallbackBadge)}
        />
        <div className="text-sm" style={{ color: palette.text }}>{name}</div>
      </div>
    </Card>
  );
};

/* ====== Simple-Icons via jsDelivr (SVG) — más compatible para <img> ======
   Si alguno no carga, se mostrará el fallback.                                */
const EXPERTISE_LOGOS = [
  { name: "Photoshop",         src: "https://images.icon-icons.com/3070/PNG/96/psd_file_design_graphic_digital_artwork_adobe_photoshop_icon_191032.png" },
  { name: "Illustrator",       src: "https://images.icon-icons.com/3070/PNG/96/adobe_illustrator_software_design_graphic_vector_multimedia_icon_191051.png" },
  { name: "Premiere Pro",      src: "https://images.icon-icons.com/3053/PNG/96/adobe_premiere_pro_macos_bigsur_icon_189485.png" },
  { name: "After Effects",     src: "https://images.icon-icons.com/3070/PNG/96/software_multimedia_adobe_after_effect_visual_effect_icon_191053.png" },
  { name: "Lightroom",         src: "https://images.icon-icons.com/3053/PNG/96/adobe_lightroom_macos_bigsur_icon_190441.png" },
  { name: "Audition",          src: "https://images.icon-icons.com/3053/PNG/96/adobe_audition_macos_bigsur_icon_190460.png" },
  { name: "OBS Studio",        src: "https://images.icon-icons.com/3053/PNG/96/obs_macos_bigsur_icon_189890.png" },
  { name: "Visual Studio Code",src: "https://images.icon-icons.com/3660/PNG/96/visual_studio_code_logo_microsoft_vs_icon_228486.png" },
];

/* =========================
   COMPONENTE PRINCIPAL
   ========================= */
export default function PortfolioLanding() {
  const [open, setOpen] = useState(false);

  // Bloquea scroll hasta abrir
  useEffect(() => {
    document.body.style.overflow = open ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Estilo uniforme para avatar de clientes
  const clientAvatarStyle = {
    width: SIZES.client,
    height: SIZES.client,
    borderRadius: "50%",
    objectFit: "cover",
    border: `1px solid ${palette.border}`,
    background: "#0d0f12",
    display: "block",
  };

  return (
    <div
      style={{
        fontFamily:
          'SF Pro Text, SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        background: palette.bg,
      }}
      className="text-[15px] leading-relaxed"
    >
      {!open && <IntroGate onOpen={() => setOpen(true)} />}

      <AnimatePresence>
        {open && (
          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AnimatedBackground />
            <Nav />

            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center">
              <div className="mx-auto max-w-6xl px-5 py-28">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <h1 className="text-4xl md:text-6xl font-semibold tracking-tight" style={{ color: palette.text }}>
                    Creación de piezas audiovisuales y experiencias web
                  </h1>
                  <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: palette.subtext }}>
                    Explora mi trabajo en video, fotografía, desarrollo web y más. Cada proyecto es una historia visual que combina creatividad y técnica.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#videos"><Badge>Videos</Badge></a>
                    <a href="#photo"><Badge>Edición de Fotos</Badge></a>
                    <a href="#webdev"><Badge>Desarrollo Web</Badge></a>
                    <a href="#expertise"><Badge>Experticia</Badge></a>
                    <a href="#contact"><Badge>WhatsApp</Badge></a>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Videos */}
            <Section id="videos" title="Portfolio de Videos" subtitle="Ediciones y producciones recientes.">
              <div className="grid md:grid-cols-2 gap-6">
                {CONFIG.videos.map((v, i) => (
                  <VideoFrame key={i} title={v.title} src={v.src} />
                ))}
              </div>
            </Section>

            {/* Fotos */}
            <Section id="photo" title="Edición de Fotos" subtitle="Retoque profesional, gradación de color y composiciones.">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {CONFIG.photos.map((p, i) => (
                  <ImageTile key={i} caption={p.caption} src={p.src} />
                ))}
              </div>
            </Section>

            {/* Desarrollo Web */}
            <Section id="webdev" title="Desarrollo Web" subtitle="Cada tarjeta muestra para quién fue realizado el trabajo.">
              <div className="grid md:grid-cols-3 gap-6">
                {CONFIG.projects.map((prj, i) => (
                  <ProjectCard key={i} title={prj.title} desc={prj.desc} link={prj.link} img={prj.img} />
                ))}
              </div>
            </Section>

            {/* Experticia (logos reales, tamaño uniforme) */}
            <Section id="expertise" title="Experticia" subtitle="Herramientas y aplicaciones que domino.">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {EXPERTISE_LOGOS.map((tool) => (
                  <LogoTile key={tool.name} name={tool.name} src={tool.src} />
                ))}
              </div>
            </Section>

            {/* Contacto (WhatsApp) */}
            <Section id="contact" title="Contacto" subtitle="Hablemos por WhatsApp.">
              <a
                href={CONFIG.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 border transition hover:-translate-y-0.5"
                style={{
                  borderColor: palette.border,
                  color: palette.text,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                  boxShadow: `0 10px 40px -12px ${palette.accent3}44`,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M27.9 4.1A15.7 15.7 0 0 0 3.6 24.5L2 30l5.7-1.5a15.7 15.7 0 0 0 24.5-13A15.6 15.6 0 0 0 27.9 4.1zm-11 24.6c-2.6 0-5.2-.7-7.4-2.2l-.5-.3-3.4.9.9-3.3-.4-.6a13 13 0 1 1 10.8 5.5zm7.6-9.7c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.8.2-.3.4-1 1.3-1.2 1.6-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.3.3-.4.4-.7.2-.3.1-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.8-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1 0 1.8 1.3 3.5 1.4 3.7.2.3 2.6 4 6.3 5.5.9.4 1.6.6 2.1.8.9.3 1.7.3 2.4.2.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.2-.7-.4z"
                    fill={palette.accent3}
                  />
                </svg>
                <span className="text-base">WhatsApp</span>
              </a>
            </Section>

            {/* Clientes (logo + botón Visit) con tamaño uniforme */}
            <Section id="clients" title="Mis Clientes" subtitle="Cuentas en las que he trabajado.">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {CONFIG.clients.map((c, i) => (
                  <Card key={i}>
                    <div className="flex flex-col items-center text-center gap-3">
                      <img
                        src={c.logo}
                        alt={c.handle}
                        style={clientAvatarStyle}
                        onError={(e) => {
                          e.currentTarget.src = fallbackBadge;
                        }}
                      />
                      <div className="text-sm" style={{ color: palette.text }}>{c.handle}</div>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-4 py-2 rounded-md text-sm border"
                        style={{
                          color: palette.text,
                          borderColor: palette.border,
                          background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                        }}
                      >
                        Visitar
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: palette.border }}>
              <div className="mx-auto max-w-6xl px-5 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm" style={{ color: palette.subtext }}>
                  Gustavo Meléndez © {new Date().getFullYear()} • Todos los derechos reservados
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full" style={{ background: palette.accent1, boxShadow: `0 0 16px ${palette.glow}` }} />
                  <span className="text-sm" style={{ color: palette.subtext }}>Hecho con ❤️</span>
                </div>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
