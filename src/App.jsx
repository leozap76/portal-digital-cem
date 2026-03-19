import React, { useState, useEffect, useRef } from 'react';
import imagenNegocio from './mi_negocio1.webp';

import { 
  Share2,
  Copy,
  Check,
  ShoppingBag, 
  Menu, 
  X, 
  Search, 
  Lightbulb, 
  ChevronLeft, 
  Sparkles,
  Zap, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram,
  ShoppingCart,
  MessageCircle,
  Upload,
  Database,
  Star,
  ArrowRight,
  Clock,
  Lock,
  Percent,
  Key,
  ShieldCheck,
  CheckCircle2,
  Gift,
  ArrowLeft,
  ExternalLink,
  Users,
  Award,
  BadgeCheck,
  Trophy,
  Heart
  
} from 'lucide-react';

/**
 * PORTAL CEM - COOPERATIVA DE ELECTRICIDAD Y OTROS SERVICIOS DE MERCEDES (SAN LUIS) LTDA.
 * Actualización: Reemplazo de logo por el símbolo de los pinos del cooperativismo.
 */
// VISTA DE MATERIALES (Marcas)
const VistaMateriales = ({ alVolver }) => {
  // Función para generar iniciales elegantes si no hay logo
  const getIniciales = (nombre) => {
    return nombre.slice(0, 2).toUpperCase();
  };

  const marcas = [
    { nombre: "Sica", logo: "/logos/logoSica.webp" },
    { nombre: "Siemens", logo: "/logos/logoSiemens.webp" },
    { nombre: "Schneider",logo: "/logos/logoScneider.webp" },
    { nombre: "Jeluz", logo: "/logos/logoJeluz.webp" },
    { nombre: "Baw", logo: "/logos/logoBaw.webp" },
    { nombre: "Conextube", logo: "/logos/logoConextube.webp" },
    { nombre: "Zoloda", logo: "/logos/logoZoloda.webp" },
    { nombre: "Imsa", logo: "/logos/LogoImsa.webp" },
    { nombre: "Argenplast", logo: "/logos/logoArgenplast.webp" },
    { nombre: "Kalop", logo: "/logos/logoKalop.webp" },
    { nombre: "Genrod", logo: "/logos/logoGenrod.webp" },
    { nombre: "Macroled", logo: "/logos/logoMacroled.webp" },
    { nombre: "Phillips", logo: "/logos/logoPhillips.webp" },
    { nombre: "Tacoma", logo: "/logos/logoTacoma.webp" },
  ];

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-700">
      {/* HEADER DE MARCAS */}
      <div className="bg-emerald-950 py-20 px-6 text-center relative overflow-hidden">
        <button 
          onClick={alVolver} 
          className="absolute top-8 left-8 flex items-center text-emerald-400 hover:text-white transition-colors font-black uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} className="mr-2" /> Volver al Inicio
        </button>
        
        <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Garantía de Calidad</span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          Marcas <span className="text-emerald-400">Líderes</span>
        </h2>
      </div>

      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-gray-400 font-bold uppercase text-[11px] tracking-[0.3em] mb-12">
          Proveedores oficiales de materiales eléctricos
        </p>

        {/* GRID DE MARCAS - Minimalismo Puro */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {marcas.map((marca, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-50 border border-gray-100 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center min-h-[180px] hover:bg-emerald-900 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/20"
            >
              {/* Espacio para el Logo */}
              <div className="w-full h-12 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                {marca.logo ? (
                  <img 
                    src={marca.logo} 
                    alt={marca.nombre} 
                    className="max-h-full max-w-[120px] object-contain grayscale group-hover:grayscale-0 group-hover:brightness-0 group-hover:invert transition-all" 
                  />
                ) : (
                  <div className="w-12 h-12 rounded-2xl border-2 border-gray-200 group-hover:border-emerald-700 flex items-center justify-center">
                    <span className="text-xl font-black text-gray-300 group-hover:text-yellow-400 italic">
                      {getIniciales(marca.nombre)}
                    </span>
                  </div>
                )}
              </div>

              {/* Nombre de la Marca */}
              <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                {marca.nombre}
              </span>
            </div>
          ))}

          {/* Tarjeta de Cierre Especial */}
          <div className="bg-yellow-400 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center min-h-[180px]">
            <Zap size={24} className="text-emerald-950 mb-3" />
            <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-950 leading-tight">
              Y más de 100 <br/> proveedores locales
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const VistaEleguirnos = ({ alVolver }) => {
  const diferenciales = [
    {
      icono: <Trophy className="text-yellow-500" size={40} />,
      titulo: "Años de Trayectoria",
      desc: "Décadas iluminando Mercedes y la región con compromiso cooperativo."
    },
    {
      icono: <Users className="text-blue-500" size={40} />,
      titulo: "Equipo Especializado",
      desc: "Asesoramiento técnico profesional para cada etapa de tu proyecto."
    },
    {
      icono: <Database className="text-emerald-500" size={40} />,
      titulo: "Variedad de Stock",
      desc: "El mayor inventario de materiales eléctricos y de seguridad de la zona."
    },
    {
      icono: <BadgeCheck className="text-purple-500" size={40} />,
      titulo: "Calidad Certificada",
      desc: "Solo trabajamos con marcas líderes que cumplen normas IRAM y certificaciones internacionales."
    },
    {
      icono: <Percent className="text-orange-500" size={40} />,
      titulo: "Precios Competitivos",
      desc: "Al ser una cooperativa, nuestro objetivo es el beneficio del socio y el cliente."
    },
    {
      icono: <Heart className="text-red-500" size={40} />,
      titulo: "Responsabilidad Social",
      desc: "Tu compra vuelve a la comunidad a través de mejores servicios y obras locales."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white animate-in slide-in-from-right duration-500">
      <header className="p-6 md:p-10 flex items-center justify-between border-b border-white/10">
        <button 
          onClick={alVolver} 
          className="flex items-center text-white/50 hover:text-white transition-all font-black uppercase text-[10px] tracking-[0.4em] group"
        >
          <ChevronLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Volver
        </button>
        <div className="text-right">
          <p className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[10px]">Institucional</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <ShieldCheck className="text-emerald-500" size={32} />
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            La confianza <br />
            <span className="text-transparent font-outline-white">de ser Socios</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Elegir a la CEM no es solo una compra, es formar parte de una institución que reinvierte en tu ciudad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciales.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-900/50 border border-white/5 p-10 rounded-[3rem] hover:border-emerald-500/30 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {item.icono}
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-emerald-400 transition-colors">
                {item.titulo}
              </h3>
              <p className="text-neutral-500 font-bold text-sm leading-relaxed uppercase tracking-widest">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-emerald-600 rounded-[3rem] relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-4xl font-black uppercase italic tracking-tighter text-white mb-4">¿Necesitaa alguna consulta o presupuesto ?</h4>
              <p className="text-emerald-100 font-bold uppercase tracking-widest text-xs">Nuestro equipo técnico está listo para ayudarte.</p>
            </div>
            <button 
  onClick={() => window.open('https://wa.me/5492657393070?text=Hola!%20Deseo%20hablar%20con%20un%20asesor%20de%20la%20CEM', '_blank')}
  className="bg-neutral-950 text-white px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-emerald-950 transition-all shadow-2xl"
>
  Hablar con un asesor
</button>
          </div>
          <Zap className="absolute -right-20 -bottom-20 text-emerald-500/20" size={400} />
        </div>
      </main>
    </div>
  );
};

const VistaIluminacion = ({ alVolver }) => {
  // Datos actualizados con los nombres exactos y los links directos a 180 Grados
  const colecciones = [
    {
      id: 1,
      titulo: "Colgantes",
      imagen: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80&w=800",
      descripcion: "Líneas puras para comedores y espacios de doble altura.",
      link: "https://180grados.com.ar/product-category/iluminacion-interior/colgantes/"
    },
    {
      id: 2,
      titulo: "Apliques de Interior",
      imagen: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800",
      descripcion: "Luz indirecta para realzar texturas en muros y pasillos.",
      link: "https://180grados.com.ar/product-category/iluminacion-interior/apliques-de-interior/"
    },
    {
      id: 3,
      titulo: "Artefactos de Pared",
      imagen: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=800",
      descripcion: "Resistencia y diseño para jardines y fachadas modernas.",
      link: "https://180grados.com.ar/product-category/iluminacion-exterior/artefactos-de-pared/"
    }
  ];

  const abrirCatalogoCompleto = () => {
    window.open('https://180grados.com.ar/', '_blank');
  };

  const abrirSeccion = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white animate-in fade-in duration-1000">
      {/* HEADER PREMIUM */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con overlay oscuro */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Showroom de Iluminación"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/60 to-neutral-950"></div>
        </div>

        <button 
          onClick={alVolver} 
          className="absolute top-10 left-10 z-20 flex items-center text-white/50 hover:text-white transition-all font-black uppercase text-[10px] tracking-[0.4em] group"
        >
          <ChevronLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Volver
        </button>

        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Lightbulb size={20} className="text-yellow-400" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">
            180° <span className="text-transparent text-outline-white">Grados</span>
          </h1>
          <p className="text-yellow-400 font-bold uppercase tracking-[0.6em] text-xs">Iluminación de Diseño</p>
        </div>
      </header>

      {/* SECCIÓN DE COLECCIONES */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
              La luz como <span className="text-emerald-500">Arquitectura</span>
            </h2>
            <p className="text-neutral-500 font-medium leading-relaxed">
              En alianza con 180 Grados, ofrecemos soluciones lumínicas que transforman espacios ordinarios en experiencias visuales únicas. Calidad premium para proyectos exigentes.
            </p>
          </div>
          <button 
            onClick={abrirCatalogoCompleto}
            className="flex items-center text-xs font-black uppercase tracking-widest border-b-2 border-yellow-400 pb-2 hover:text-yellow-400 transition-all"
          >
            Ver catálogo oficial <ChevronRight size={14} className="ml-2" />
          </button>
        </div>

        {/* GRID DE PRODUCTOS / CATEGORÍAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colecciones.map((col) => (
            <div 
              key={col.id} 
              onClick={() => abrirSeccion(col.link)}
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-neutral-900 border border-transparent hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={col.imagen} 
                  alt={col.titulo} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2 group-hover:text-yellow-400 transition-colors">
                  {col.titulo}
                </h3>
                <p className="text-xs text-neutral-400 font-medium leading-tight opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  {col.descripcion}
                </p>
                {/* Indicador de link externo cambiado a ArrowRight para evitar errores de importación */}
                <div className="mt-4 flex items-center text-[9px] font-black uppercase tracking-widest text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Ver en tienda <ArrowRight size={10} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA: ASESORAMIENTO LUMÍNICO */}
      <section className="container mx-auto px-6 pb-32">
        <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
            <Sparkles size={180} />
          </div>
          <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 relative z-10 leading-none">
            ¿Necesitás un proyecto <br className="hidden md:block"/> de iluminación?
          </h3>
          <p className="text-emerald-100 font-bold uppercase tracking-widest text-[10px] mb-10 max-w-md">
            Nuestro equipo técnico diseña la distribución de luz ideal para tu hogar o empresa sin costo adicional.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5492657393070?text=Hola! Busco asesoramiento premium para un proyecto de iluminación 180.', '_blank')}
            className="bg-white text-emerald-950 font-black px-12 py-5 rounded-2xl uppercase text-xs tracking-widest hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-2xl flex items-center"
          >
            <MessageCircle size={18} className="mr-3" /> Hablar con un Especialista
          </button>
        </div>
      </section>
    </div>
  );
};

const CarruselProductos = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Si no hay imágenes o solo hay una, no hacemos nada
    if (!images || images.length <= 1) return;

    // Cambiar la foto cada 3 segundos (3000 ms)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return <div className="w-full h-full bg-slate-200"></div>;

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Producto ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } group-hover:scale-110 transition-transform`}
        />
      ))}
      
      {/* Puntitos indicadores abajo (opcional) */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


const App = () => {
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  
const productosRef = useRef(null);
  // --- ESTADOS ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');

 useEffect(() => {
  window.scrollTo(0, 0);
}, [seccionActiva]);

   // 'inicio' o 'beneficios'
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  
  // Estados de Seguridad
  const [adminKey, setAdminKey] = useState("1234");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authInput, setAuthInput] = useState("");
  const [authError, setAuthError] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);
  const [newPassInput, setNewPassInput] = useState("");

  const volverAlInicio = () => setSeccionActiva('inicio');

  
  
  // --- FUNCIONALIDAD COMPARTIR ---
  const [copied, setCopied] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const handleShare = () => {
    const currentUrl = window.location.href;
    const textArea = document.createElement("textarea");
    textArea.value = currentUrl;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar link', err);
    }
    document.body.removeChild(textArea);
  };

  // --- CONFIGURACIÓN ---
  const WA_CONSULTAS = "5492657393070";
  const WA_EMPRESAS = "5492657652584";
  const WA_ASOCIARSE = "5492657393070";
  const LOGO_COOP = "https://playocoop.com.ar/assets/img/simbolos/pinos.jpg";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- LÓGICA ADMIN ---
  const handleAdminToggle = () => {
    if (isAdminMode) {
      setIsAdminMode(false);
      setShowChangePass(false);
    } else {
      setShowAuthModal(true);
      setAuthInput("");
      setAuthError(false);
    }
  };

  const attemptLogin = () => {
    if (authInput === adminKey) {
      setIsAdminMode(true);
      setShowAuthModal(false);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const changePassword = () => {
    if (newPassInput.length > 0) {
      setAdminKey(newPassInput);
      setShowChangePass(false);
      setNewPassInput("");
    }
  };

  // --- LÓGICA DE CARRITO ---
  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const sendWhatsApp = (number) => {
    if (cart.length === 0) return;
    const items = cart.map(i => `- ${i.name} (${i.price})`).join('\n');
    const total = cart.reduce((acc, curr) => acc + parseInt(curr.price.replace('.','').replace('$','')), 0);
    const message = encodeURIComponent(`Hola CEM! Me interesa consultar por los siguientes productos:\n\n${items}\n\nTotal estimado: $${total.toLocaleString()}\n\n¿Tienen stock disponible?`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

 const featuredProducts = [
  { 
    id: 1, 
    name: "colgante Garrid", 
    category: "Colgante Obit", 
    price: "Consultar precio",
    isPremium: true, 
    images: [
      "https://180grados.com.ar/wp-content/uploads/2024/05/Diseno-sin-titulo-2025-09-10T120028.672.jpg.webp",
      "https://180grados.com.ar/wp-content/uploads/2025/04/Diseno-sin-titulo-2025-04-21T125216.274.jpg.webp",
      "https://180grados.com.ar/wp-content/uploads/2025/04/Diseno-sin-titulo-2025-04-21T125239.966.jpg.webp",
      "https://180grados.com.ar/wp-content/uploads/2025/04/Diseno-sin-titulo-2025-04-21T125227.909.jpg.webp" // Foto 2
    ] 
  },
  { 
    id: 2, 
    name: "Aplique linea TAB", 
    category: "Artefactos de pared",
    price: "Consultar precio",
    isPremium: true, 
    images: [
      "https://180grados.com.ar/wp-content/uploads/2025/10/Diseno-sin-titulo-2025-10-03T131714.337.jpg",
      "https://180grados.com.ar/wp-content/uploads/2025/10/Diseno-sin-titulo-2025-10-01T142301.630.jpg",
      "https://180grados.com.ar/wp-content/uploads/2025/10/Diseno-sin-titulo-2025-10-01T142253.365.jpg",
       // Foto 2
    ] 
  },
  { 
    id: 3, 
    name: "Multimetro digital BAW MS-05", 
    category: "Instrumentos de medicion", 
    price: "Consultar precio",
    isPremium: true, 
    images: [
      "https://bawelectric.com/imagenes/productos/2026-01/4409-bawms05.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_2X_723184-MLA107195247145_022026-F.webp",
      "https://bawelectric.com/imagenes/archivos/2026-01/236-flyers-comercial-multimetro-smart-bawms05.jpg" // Foto 2
    ] 
  },
  { 
    id: 4, 
    name: "Conector tiras led", 
    category: "Instalación", 
    price: "Consultar precio",
    isPremium: false, 
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpXwDD45PY49NuoqwKw4wBD_zg6hdwW95PXOcDlnAxuX3oCFvYt9TjDRz01xf1m581GKhohgESwCGN3Bj89XUUYzU3XqOlLQ",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHHHMhiiPmROLTWR6WB9SH6bxOd071sM1I_-EaY1ZjVj0J1YckQKEbMMenx0vRiL4PB_M6fe9xCApg5FBnzPpgxWqlt-PH8zmwPBOUHYpXRhSgX41Cez4gyw" // Foto 2
    ] 
  },

   { 
    id: 5, 
    name: "Baluns para cámaras", 
    category: "Instalación", 
    price: "Consultar precio",
    isPremium: false, 
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYuj_dalh6T2_7kGtK4SlnUX16JwtI24GDGZCzzj2-Fr5F_TgEffqhl_BGpWMM7ORT2J6Gne_iyRwkWURQW_2w-4p4nNQjRg",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShY5axmIZ5dqao7TDNcQUU5m_HxkJFgcOMNYBFTzG7jkNtEy8m_R4QyhQyQvDScLSTEGEN_fn0SLURAV86tTOmhAmfMTIMfv_EYLDqeBR-2M4DQvqbuEs0lV4" // Foto 2
    ] 
  },

  { 
    id: 6, 
    name: "Linea Jeluz Mito", 
    category: "Instalación", 
    price: "Consultar precio",
    isPremium: false, 
    images: [
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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" // Foto 2
    ] 
  }
];

  return (
    <>
      {/* --- BOTÓN FLOTANTE COMPARTIR --- */}
      <div className="fixed bottom-8 left-8 z-[100] flex items-center">
        <button 
          onClick={handleShare}
          onMouseEnter={() => setShowShareTooltip(true)}
          onMouseLeave={() => setShowShareTooltip(false)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform active:scale-90 ${copied ? 'bg-green-500' : 'bg-emerald-900 hover:bg-emerald-800'}`}
        >
          {copied ? <Check className="text-white" size={24} /> : <Share2 className="text-white" size={24} />}
        </button>
        {showShareTooltip && (
          <div className="ml-4 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100">
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900">
              {copied ? '¡Link Copiado!' : 'Compartir con cliente'}
            </p>
          </div>
        )}
      </div>

      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-yellow-200">
        
        {/* --- Modal Autenticación Admin (Sin cambios) --- */}
        {showAuthModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm" onClick={() => setShowAuthModal(false)}></div>
            <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 animate-in zoom-in duration-300">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter">Acceso de Gestión</h3>
                <p className="text-sm text-gray-500 font-medium">Ingrese la clave de administrador</p>
              </div>

              <div className="space-y-4">
                <input 
                  type="password"
                  value={authInput}
                  onChange={(e) => setAuthInput(e.target.value)}
                  placeholder="••••"
                  className={`w-full text-center text-3xl tracking-[1em] py-4 bg-gray-50 rounded-2xl border-2 focus:ring-4 transition-all outline-none ${authError ? 'border-red-500 bg-red-50 ring-red-100' : 'border-emerald-100 focus:border-emerald-500 ring-emerald-50'}`}
                  onKeyPress={(e) => e.key === 'Enter' && attemptLogin()}
                  autoFocus
                />
                {authError && <p className="text-red-600 text-[10px] font-black uppercase text-center tracking-widest">Clave incorrecta</p>}
                
                <button 
                  onClick={attemptLogin}
                  className="w-full py-4 bg-emerald-800 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-xl active:scale-95"
                >
                  Ingresar
                </button>
                <button 
                  onClick={() => setShowAuthModal(false)}
                  className="w-full text-gray-400 font-bold uppercase text-[10px] tracking-widest hover:text-gray-600"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Botón WhatsApp Flotante (Sin cambios) */}
        <a 
          href={`https://wa.me/${WA_CONSULTAS}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-subtle"
        >
          <MessageCircle size={32} />
        </a>

        {/* --- Top Bar (Sin cambios) --- */}
        <div className="bg-emerald-950 text-white py-2 px-4 text-[10px] md:text-[11px] uppercase tracking-widest hidden md:block">
          <div className="container mx-auto flex justify-between items-center opacity-80">
            <div className="flex items-center space-x-6">
               <span className="flex items-center font-bold text-yellow-400"><MapPin size={12} className="mr-1.5"/> Villa Mercedes, San Luis</span>
               <span className="flex items-center"><Clock size={12} className="mr-1.5"/> Lunes a Viernes de 08:30 - 18:30 / Sabados de 8:15 - 12:45</span>
            </div>
            <div className="flex space-x-6 items-center">
              
              <div className="h-3 w-[1px] bg-white/20"></div>
              <button 
                onClick={() => setActiveTab('beneficios')}
                className={`font-bold flex items-center hover:text-white transition-colors ${activeTab === 'beneficios' ? 'text-yellow-400' : 'text-emerald-400'}`}
              >
                <Percent size={12} className="mr-1"/> BENEFICIOS ASOCIADOS
              </button>
            </div>
          </div>
        </div>

        {/* --- Admin Panel (Sin cambios) --- */}
        {isAdminMode && (
          <div className="bg-yellow-50 border-b-2 border-yellow-200 p-4 sticky top-0 md:top-[35px] z-[55] animate-in slide-in-from-top duration-300">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-emerald-800 rounded-lg text-white">
                  <Database size={20} />
                </div>
                <div>
                  <p className="font-black text-xs uppercase text-emerald-900 leading-none">Gestión de Catálogo</p>
                  <p className="text-[10px] text-emerald-600 font-bold italic tracking-tight">Clave activa: {adminKey.replace(/./g, '*')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {showChangePass ? (
                  <div className="flex items-center bg-white border border-yellow-300 rounded-xl px-4 py-1.5 shadow-sm">
                    <input 
                      type="password" 
                      placeholder="Nueva clave" 
                      className="text-xs font-bold outline-none w-24"
                      value={newPassInput}
                      onChange={(e) => setNewPassInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && changePassword()}
                    />
                    <button onClick={changePassword} className="text-emerald-700 hover:text-emerald-900 ml-2 font-black text-[10px] uppercase tracking-tighter">Aplicar</button>
                    <button onClick={() => setShowChangePass(false)} className="text-gray-400 hover:text-gray-600 ml-2"><X size={14}/></button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowChangePass(true)}
                    className="flex items-center px-4 py-2 bg-white border border-emerald-200 text-emerald-800 rounded-xl hover:bg-emerald-100 transition-all font-bold text-xs uppercase tracking-widest"
                  >
                    <Key size={14} className="mr-2" /> Seguridad
                  </button>
                )}

                <label className="flex items-center px-6 py-2.5 bg-emerald-800 text-white rounded-xl cursor-pointer hover:bg-emerald-700 transition-all shadow-lg active:scale-95 group">
                  <Upload size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" />
                  <span className="font-bold text-xs uppercase tracking-widest">Cargar CSV</span>
                  <input type="file" accept=".csv" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* --- Navigation (MEJORADO RESPONSIVE) --- */}
        {/* --- MENÚ LATERAL MÓVIL (DRAWER) --- */}
<div className={`fixed inset-0 z-[150] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
  {/* Overlay oscuro */}
  <div 
    className={`absolute inset-0 bg-emerald-950/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
    onClick={() => setIsMenuOpen(false)}
    
  ></div>
  
  {/* Panel del Menú */}
  <div className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl p-8 transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className="flex justify-between items-center mb-12">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900">Menú</span>
      <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-100 rounded-full text-emerald-900">
        <X size={20} />
      </button>
    </div>
    
    <nav className="flex flex-col space-y-6">
      {[
        { name: 'Inicio', tab: 'inicio' },
        { name: 'Quienes Somos', tab: 'nosotros' },
        { name: 'Cooperativismo', tab: 'cooperativismo' },
        { name: 'Consejo de Administración', tab: 'consejo' },
        { name: 'Educación Cooperativa', tab: 'educacion' },
        { name: 'Beneficios', tab: 'beneficios' },
        { name: 'Clientes', tab: 'clientes' }

      ].map((item) => (
        <button 
          key={item.name}
          onClick={() => { setActiveTab(item.tab); setIsMenuOpen(false); }}
          className="text-left font-black text-sm uppercase tracking-widest text-emerald-950 hover:text-emerald-600 transition-colors border-b border-gray-50 pb-2"
        >
          {item.name}
        </button>
      ))}
    </nav>
  </div>
</div>

{/* --- HEADER --- */}
<header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-white py-4 md:py-6'}`}>
  <div className="container mx-auto px-4 flex justify-between items-center">
    <div className="flex items-center space-x-2 md:space-x-4 group cursor-pointer" onClick={() => setActiveTab('inicio')}>
      <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500">
  <img 
    src="/logos/LogoCoop.webp" 
    alt="Logo CEM" 
    className="w-full h-full object-contain" 
  />
</div>
      <div className="flex flex-col">
        <h1 className="text-lg md:text-2xl font-black leading-none text-emerald-900 uppercase tracking-tighter">
          COOPERATIVA DE ELECTRICIDAD<span className="text-emerald-600"> CEM</span>
        </h1>
        <p className="text-[8px] md:text-xs text-emerald-500 font-black italic tracking-tight uppercase">
          y otros servicios de Villa Mercedes (San Luis) LTDA
        </p>
      </div>
    </div>

    {/* Nav Desktop - Ahora con tus nuevas secciones */}
    <nav className="hidden  ">
      {[
        'Inicio', 
        'Quienes Somos', 
        'Cooperativismo', 
        'Consejo', 
        'Educación'
      ].map((item) => (
        <button 
          key={item} 
          onClick={() => setActiveTab('inicio')}
          className="relative font-black text-[10px] uppercase tracking-widest text-gray-500 hover:text-emerald-800 transition-colors group"
        >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full"></span>
        </button>
      ))}
    </nav>

    <div className="flex items-center space-x-2">
      <button 
        onClick={() => setIsCartOpen(true)}
        className="group flex items-center space-x-2 bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2.5 rounded-xl font-black transition-all shadow-xl active:scale-95 relative overflow-hidden"
      >
        <ShoppingCart size={18} className="relative z-10" />
        <span className="relative z-10 bg-yellow-400 text-emerald-900 text-[9px] px-2 py-0.5 rounded-full font-bold">
          {cart.length}
        </span>
      </button>
      
      <button 
        onClick={() => setIsMenuOpen(true)}
        
      >
        <Menu size={20} />
      </button>
    </div>
  </div>
</header>

<main className="relative">
  {/* VISTA INICIO */}
  {activeTab === 'inicio' && seccionActiva === 'inicio' &&(
    <div className="animate-in fade-in duration-500">
       {/* --- Hero Section --- */}
          <section className="relative h-[700px] flex items-center overflow-hidden bg-emerald-900">
            <div className="absolute inset-0">
              <img 
                src={imagenNegocio}
                className="w-full h-full object-cover opacity-20 scale-110"
                alt="Showroom CEM"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/60 to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 relative flex items-center gap-20">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20">
                  <Star size={16} className="text-yellow-400" fill="currentColor" />
                  <span className="text-white font-black text-[10px] uppercase tracking-[0.3em]">Showroom Premium e Industrial</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">
                  LA LUZ DE NUESTRA <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">CIUDAD.</span>
                </h2>
                <p className="text-xl text-emerald-100/70 mb-12 max-w-xl font-medium leading-relaxed italic">
                  Acompañamos el crecimiento de Villa Mercedes con materiales eléctricos certificados, iluminación de vanguardia y el compromiso cooperativo de siempre.
                </p>
                <div className="flex flex-wrap gap-6">
                 <button  
  onClick={() => setSeccionActiva('eleguirnos')} 
  className="bg-yellow-400 text-emerald-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all shadow-2xl flex items-center group"
>
  POR QUE ELEGUIRNOS  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
</button>
                  <button 
  onClick={() => productosRef.current?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-emerald-950 transition-all transform hover:scale-105 ring-offset-2 active:scale-95 flex items-center gap-3 animate-pulse"
>
  <Lightbulb size={24} className="text-yellow-400" />
  NOVEDADES
</button>
                </div>
              </div>
            </div>
          </section>
          {/* --- Categorías Destacadas --- */}
          <section className="py-32 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl bg-gray-100" onClick={() => setSeccionActiva('materiales')}>
                
                <img 
                    src="/logos/fondoElectr.webp"  
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt="Materiales Eléctricos CEM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent flex flex-col justify-end p-12 text-white">
                  <span className="bg-emerald-600 text-white w-fit px-4 py-1 rounded-full font-black text-[10px] uppercase mb-4 tracking-widest">Técnico & Industrial</span>
                  <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter leading-none">Materiales <br/> Eléctricos</h3>
                  <p className="text-emerald-100/70 mb-8 max-w-xs font-medium italic">Todo para el instalador y grandes obras industriales.</p>
                  <div className="flex items-center font-black text-yellow-400 uppercase tracking-[0.2em] text-xs">
                    Explorar Catálogo <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" size={18}/>
                  </div>
                </div>
              </div>

              <div className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl" onClick={() => setSeccionActiva('iluminacion')}>
                
                <img 
                    src="/logos/fondoilumin.webp" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt="Iluminación CEM" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent flex flex-col justify-end p-12 text-white">
                  <span className="bg-yellow-400 text-emerald-900 w-fit px-4 py-1 rounded-full font-black text-[10px] uppercase mb-4 tracking-widest">Diseño & Confort</span>
                  <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter leading-none">Iluminación <br/> & Decoración</h3>
                  <p className="text-emerald-100/70 mb-8 max-w-xs font-medium italic">Visite nuestro showroom para conocer las últimas tendencias.</p>
                  <div className="flex items-center font-black text-yellow-400 uppercase tracking-[0.2em] text-xs">
                    Ver Colección <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" size={18}/>
                  </div>
                </div>
             
              </div>
            </div>
          </section>
          {/* --- Product Grid --- */}
          <section className="relative py-32 overflow-hidden min-h-[900px] flex items-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://180grados.com.ar/wp-content/uploads/2024/06/Diseno-sin-titulo-65.jpg.webp" 
                className="w-full h-full object-cover opacity-90"
                alt="Fondo Cooperativa CEM"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-emerald-950/90"></div>
            </div>

<section ref={productosRef} className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                <div className="max-w-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-[3px] w-12 bg-yellow-500 rounded-full"></div>
                    <span className="text-emerald-900 font-black uppercase tracking-[0.3em] text-[10px]">Catálogo Online</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-emerald-950 tracking-tighter uppercase italic">Productos en Promoción</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((p) => (
                  <div key={p.id} className="bg-white/95 backdrop-blur-sm rounded-[3rem] p-6 shadow-xl hover:shadow-2xl transition-all group border border-white/20 flex flex-col relative overflow-hidden">
                    <div className="h-64 rounded-[2.5rem] overflow-hidden relative mb-8">
                      <CarruselProductos images={p.images} />
                      {p.isPremium && (
                        <div className="absolute top-5 left-5 bg-yellow-400 text-emerald-950 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                          PREMIUM
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em] mb-2 block opacity-60">{p.category}</span>
                      <h4 className="text-2xl font-bold text-emerald-950 mb-6 leading-tight group-hover:text-emerald-600 transition-colors uppercase tracking-tighter">{p.name}</h4>
                      <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                        <span className="text-3xl font-black text-emerald-900 tracking-tighter italic">{p.price}</span>
                        <button  
                        
                          onClick={() => addToCart(p)}
                          className="w-16 h-16 bg-emerald-50 text-emerald-900 hover:bg-yellow-400 hover:shadow-xl hover:scale-105 rounded-2xl transition-all flex items-center justify-center active:scale-95"
                          
                        >
                          <ShoppingCart size={24} />
                          
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
</section>
          </section>
       {/* (Mantén los bloques de las líneas 319 a 505) */}
    </div>
  )}

  {/* VISTA BENEFICIOS */}
  {activeTab === 'beneficios' && (
    <BeneficiosView WA_ASOCIARSE={WA_ASOCIARSE} setActiveTab={setActiveTab} />
  )}

  {/* VISTA COOPERATIVISMO */}
  {activeTab === 'cooperativismo' && (
    <CooperativismoView />
  )}

  {/* VISTA Consejo */}
  {activeTab === 'consejo' && <ConsejoView />}

  {/* VISTA Nosotros */}
  {activeTab === 'nosotros' && <NosotrosView />}

  {/* NUEVA VISTA DE EDUCACIÓN */}
  {activeTab === 'educacion' && <EducacionView />}
 
 {/* NUEVA VISTA DE CLIENTES */}
{activeTab === 'clientes' && <ClientesView />}
  
  {/* NUEVA VISTA DE MATERIALES */}
{seccionActiva === 'materiales' && (
  <VistaMateriales alVolver={() => setSeccionActiva('inicio')} />
)}

{/* NUEVA VISTA DE POR QUE ELEGUIRNOS */}
{seccionActiva === 'eleguirnos' && (
  <VistaEleguirnos alVolver={() => setSeccionActiva('inicio')} />
)}

{/* NUEVA VISTA DE ILUMINACIÓN */}
{seccionActiva === 'iluminacion' && (
  <VistaIluminacion alVolver={() => setSeccionActiva('inicio')} />
)}
  
</main>

     

      {/* --- Cart Sidebar --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-md" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-3xl font-black text-emerald-950 uppercase tracking-tighter italic">Mi Pedido</h3>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Consultar Disponibilidad</p>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-3 hover:bg-gray-100 rounded-full transition-colors"><X size={32}/></button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={48} className="text-gray-300" />
                  </div>
                  <p className="text-emerald-950 font-black text-lg uppercase tracking-tighter">Tu pedido está vacío</p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-5 p-5 bg-gray-50 rounded-[2rem] group border border-transparent hover:border-emerald-100 transition-all">
                    {/* Cambiamos item.image por item.images[0] */}
<img 
  src={item.images && item.images[0] ? item.images[0] : item.image} 
  className="w-24 h-24 object-cover rounded-2xl shadow-sm" 
  alt={item.name} 
/>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-900 leading-tight text-lg uppercase tracking-tighter">{item.name}</h4>
                      <p className="text-emerald-700 font-black text-lg italic mt-1">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(idx)} className="text-red-400 hover:text-red-600 transition-colors p-2"><X size={20} /></button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-10 space-y-4">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none">Subtotal Consultivo</span>
                  <span className="text-3xl font-black text-emerald-900 tracking-tighter italic">Pedido Activo</span>
                </div>
                <button 
                  onClick={() => sendWhatsApp(WA_CONSULTAS)}
                  className="w-full py-6 bg-green-500 hover:bg-green-600 text-white rounded-[2rem] font-black text-lg flex items-center justify-center space-x-3 shadow-2xl transition-all active:scale-95"
                >
                  <MessageCircle size={28} fill="currentColor"/>
                  <span>CONSULTAR STOCK</span>
                </button>
                <p className="text-[9px] text-center font-bold text-gray-400 uppercase tracking-widest italic">* Su pedido será procesado por el equipo comercial de CEM.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- Footer --- */}
      <footer className="bg-emerald-950 text-white/40 pt-32 pb-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-24 mb-24">
          <div>
             <div className="flex items-center space-x-5 mb-12">
                <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500">
  <img 
    src="/logos/LogoCoop.webp" 
    alt="Logo CEM" 
    className="w-full h-full object-contain" 
  />
</div>
                <div>
                  <h4 className="text-white text-3xl font-black leading-none uppercase tracking-tighter italic">CEM</h4>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-emerald-400 mt-1">Villa Mercedes (SL)</p>
                </div>
             </div>
             <p className="mb-12 text-xl text-emerald-100/60 leading-relaxed italic font-medium">
               "Llevamos más de medio siglo iluminando el crecimiento de nuestra ciudad con el compromiso de siempre."
             </p>
          </div>

          <div>
            <h5 className="text-white font-black text-2xl mb-12 uppercase tracking-tighter border-l-4 border-yellow-400 pl-6">Donde Estamos</h5>
            <div className="space-y-10">
               <div className="flex items-start space-x-6">
                 <div className="p-4 bg-emerald-900 rounded-2xl text-yellow-400 shadow-lg"><MapPin size={28} /></div>
                 <div>
                    <p className="text-emerald-50 font-black text-lg leading-tight mb-1">Casa Central</p>
                    <p className="text-emerald-100/60 font-medium">Av. Mitre 1466, Villa Mercedes (SL).</p>
                 </div>
               </div>
            </div>
          </div>

          <div>
            {/* --- SECCIÓN DE LINKS (Sustituye aquí) --- */}
<ul className="space-y-6">
  {(() => {
    // Definimos los botones aquí para que el código sea ultra-limpio
    const footerLinks = [
    { 
        label: 'Atención a Empresas', 
        action: () => {
          setActiveTab('clientes'); // Primero cambia la vista para que el usuario vea la sección
          window.open('https://wa.me/5492657652584?text=Hola!%20Solicito%20atención%20especializada%20para%20mi%20empresa.', '_blank');
        } 
      },
      { label: 'Sala de exposicion', action: () => setSeccionActiva('iluminacion')},
      { label: 'Materiales Eléctricos', action: () => setSeccionActiva('materiales') },
      { label: 'Proyectos Especiales', action: () => window.open('https://wa.me/5492657393070', '_blank') }
    ];

    return footerLinks.map((item) => (
      <li key={item.label}>
        <button 
          onClick={item.action} 
          className="flex items-center group text-emerald-100/60 hover:text-white transition-all font-bold uppercase text-[11px] tracking-widest text-left outline-none"
        >
          <ChevronRight 
            size={16} 
            className="mr-3 text-yellow-500 group-hover:translate-x-2 transition-transform" 
          /> 
          {item.label}
        </button>
      </li>
    ));
  })()}
</ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-16 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-emerald-700/60">
            &copy; 2026 Cooperativa de Electricidad y otros servicios de Mercedes (San Luis) Ltda.
          </p>
          {/* Datos del Productor Centrados y Protegidos de Traducción */}
      <div className="flex items-center justify-center space-x-1">
        <span>Desarrollado por</span>
        <a 
          href="https://digitallab.com.ar" 
          target="_blank" 
          rel="noopener noreferrer" 
          translate="no"
          className="font-semibold text-white hover:text-blue-400 transition-all border-b border-transparent hover:border-blue-400 notranslate"
        >
          Digitallab
        </a>
      </div>
        </div>
        
        
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 10px;
        }
      `}} />
    </div>
    </>
  );
  
};
const CooperativismoView = () => {
  return (
    <div className="bg-white min-h-screen pb-20 animate-in slide-in-from-bottom-4 duration-700">
      {/* HERO INSTITUCIONAL */}
      <section className="relative py-24 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Doctrina Social</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">
            El Movimiento <span className="text-emerald-400">Cooperativo</span>
          </h2>
          <p className="max-w-4xl mx-auto text-emerald-100/80 leading-relaxed font-medium text-sm md:text-base italic">
            "Una fuerza económica que extiende sus beneficios a la base de la pirámide, propiciando la inclusión y el desarrollo social."
          </p>
        </div>
      </section>

      {/* TEXTO INTRODUCTORIO */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
            El movimiento cooperativo es la doctrina que define la cooperación de sus integrantes en el rango económico y social como medio para que los productores y consumidores obtengan un beneficio mayor para la satisfacción de sus necesidades. Está representado a una escala mundial a través de la Alianza Cooperativa Internacional.
          </p>
          <div className="h-1 w-20 bg-yellow-400 rounded-full mb-12"></div>
        </div>
      </section>

      {/* VALORES - GRID MODERNO */}
      <section className="container mx-auto px-4 pb-24">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-12 text-emerald-950 border-l-4 border-emerald-500 pl-6">Valores Éticos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { t: "Apoyo Mutuo", d: "Solución de problemas comunes.", icon: <ShieldCheck /> },
            { t: "Esfuerzo Propio", d: "Fuerza de voluntad para alcanzar metas.", icon: <Zap /> },
            { t: "Democracia Directa", d: "Toma de decisiones colectivas.", icon: <CheckCircle2 /> },
            { t: "Equidad", d: "Justa distribución de excedentes.", icon: <Percent /> },
            { t: "Solidaridad", d: "Apoyo a la familia y comunidad.", icon: <Gift /> },
            { t: "Igualdad", d: "Iguales deberes y derechos.", icon: <Star /> }
          ].map((v, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-[2.5rem] hover:bg-emerald-800 hover:text-white transition-all duration-300 group">
              <div className="text-emerald-600 group-hover:text-yellow-400 mb-6 transition-colors">
                {v.icon}
              </div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-3">{v.t}</h4>
              <p className="opacity-60 text-[11px] font-bold leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIMBOLOGÍA: LOS DOS PINOS */}
      <section className="container mx-auto px-4 py-20 bg-emerald-50 rounded-[4rem]">
        <div className="flex flex-col lg:flex-row items-center gap-16 p-8 md:p-16">
          <div className="w-full lg:w-1/3 flex justify-center">
            {/* Logo Cooperativo Visual en CSS */}
            <div className="w-60 h-60 bg-yellow-400 rounded-full border-[0px] border-emerald-700 flex items-center justify-center shadow-2xl rotate-3 overflow-hidden">
   {/* Reemplazamos los rectángulos verdes por tu imagen real */}
   <img 
     src="/logos/LogoCoop.webp" 
     alt="Logo Cooperativa" 
     className="w-60 h-60 object-contain -rotate-3" 
   />
</div>
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-4xl font-black uppercase tracking-tighter text-emerald-950 mb-6">Símbolo de los <span className="text-emerald-600">Dos Pinos</span></h3>
            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              Creado en 1920, representa la vida, la hermandad y la unión. El círculo indica la universalidad del movimiento, mientras que los colores verde y amarillo evocan la naturaleza y la energía del sol.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-emerald-100">
                <span className="text-[10px] font-black uppercase text-yellow-500">Círculo</span>
                <p className="text-[11px] font-bold text-emerald-900">Vida eterna y el mundo.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-emerald-100">
                <span className="text-[10px] font-black uppercase text-emerald-500">Verde</span>
                <p className="text-[11px] font-bold text-emerald-900">Principio vital natural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ConsejoView = () => {
  const consejoActual = {
    mesa: [
      { cargo: "Presidente", nombre: "Juan Antonio Renaudo" },
      { cargo: "Vicepresidente", nombre: " Héctor Gregorio Aguzzi" },
      { cargo: "Secretaria", nombre: "María Evelyn Becerra" },
      { cargo: "Pro-secretario", nombre: "Gabriel Enrique Ponisio" },
      { cargo: "Tesorero", nombre: "Alfredo Lazaro Carrascull" },
      { cargo: "Pro-tesorero", nombre: "Osvaldo Phillpott" }
    ],
    vocalest: ["Francisco Luis Saibene", "Antonio Payero", "Jorge Omar De La Rocha", "Carmen Adrian Rivero"],
    vocaless: ["Hilda Violeta Monje", "Roque Alfredo Sosa", "Roberto Francisco Capra"],
    otros: [
      { cargo: "Síndico Titular", nombre: "Julio Gaston Dayenoff" },
      { cargo: "Síndico Suplente", nombre: "Luis Alberto Medina" },
      { cargo: "Gerente", nombre: "Nilda Ines Alaniz" }
    ]
  };

  return (
    <div className="bg-white min-h-screen pb-20 animate-in fade-in duration-700">
      {/* HEADER SECCIÓN */}
      <section className="py-20 bg-emerald-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">Consejo de <span className="text-yellow-400">Administración</span></h2>
          <p className="text-emerald-100/60 uppercase tracking-[0.3em] text-[10px] font-bold">Liderazgo y Compromiso Cooperativo</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* COLUMNA IZQUIERDA: HISTÓRICO 1952 */}
          <div className="lg:col-span-1">
            <div className="bg-amber-50 rounded-[2.5rem] p-8 border border-amber-200/50 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Clock size={80} /></div>
              <h3 className="text-amber-900 font-black uppercase text-xl mb-6 flex items-center">
                <Star size={20} className="mr-2 fill-amber-900"/> Primer Consejo (1952)
              </h3>
              <div className="space-y-4 text-amber-800/80">
                {[
                  {c: "Presidente", n: "José Miro Puig"},
                  {c: "Vicepresidente", n: "Santiago Besso"},
                  {c: "Secretario", n: "Segundo Zacarías Amaya"},
                  {c: "Tesorero", n: "Rogelio Ponisio"},
                  {c: "Gerente", n: "Roberto F. Andrada"}
                ].map((item, i) => (
                  <div key={i} className="border-b border-amber-200 pb-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-amber-600">{item.c}</p>
                    <p className="font-bold text-sm">{item.n}</p>
                  </div>
                ))}
                <p className="text-[10px] italic mt-6 font-medium leading-relaxed">
                  Honor y gratitud a quienes sentaron las bases de nuestra Cooperativa hace más de 70 años.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: ACTUALIDAD 2024/2025 */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="flex justify-between items-end mb-10 border-b-2 border-emerald-50 pb-6">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-emerald-950">Gestión Actual</h3>
                  <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest">Periodo 2024 / 2025</p>
                </div>
                <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-2xl text-[10px] font-black uppercase">Activo</div>
              </div>

              {/* Mesa Directiva */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {consejoActual.mesa.map((m, i) => (
                  <div key={i} className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-800 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={20}/>
                    </div>
                    <div className="ml-4">
                      <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{m.cargo}</p>
                      <p className="font-black text-emerald-950 text-sm uppercase">{m.nombre}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vocales y Otros */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                 <div className="mt-10 mb-6"> 
  <h3 className="mt-16 mb-4 text-xl font-bold uppercase tracking-wider">
  Vocales Titulares
</h3>
</div>
                  <ul className="space-y-3">
                    {consejoActual.vocalest.map((v, i) => (
                      <li key={i} className="text-sm font-bold text-gray-600 flex items-center uppercase">
                        <ChevronRight size={14} className="mr-2 text-yellow-500"/> {v}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 mb-6"> 
  <h3 className="mt-16 mb-4 text-xl font-bold uppercase tracking-wider">
  Vocales Suplentes
</h3>
</div>
                  <ul className="space-y-3">
                    {consejoActual.vocaless.map((v, i) => (
                      <li key={i} className="text-sm font-bold text-gray-600 flex items-center uppercase">
                        <ChevronRight size={14} className="mr-2 text-yellow-500"/> {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                   {consejoActual.otros.map((o, i) => (
                     <div key={i} className="p-4 border-l-4 border-yellow-400 bg-yellow-50/50 rounded-r-2xl">
                        <p className="text-[9px] font-black uppercase text-yellow-700 mb-1">{o.cargo}</p>
                        <p className="font-black text-emerald-900 text-sm uppercase">{o.nombre}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const NosotrosView = () => {
  const hitos = [
    { año: "1952", t: "Fundación", d: "Crisis energética en Villa Mercedes. Nace la Cooperativa el 13 de julio." },
    { año: "1960", t: "Resiliencia", d: "Ante trabas políticas, se inicia la venta de materiales eléctricos." },
    { año: "1963", t: "Compromiso", d: "Socios prestan dinero sin interés para comprar la sede actual." },
    { año: "Actualidad", t: "Crecimiento", d: "Líderes en el rubro, manteniendo vivos los valores de los pioneros." }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 animate-in slide-in-from-bottom-4 duration-700">
      {/* HEADER HISTÓRICO */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-[100px]"></div>
          
        </div>
        <div className="container mx-auto px-4 relative z-10">
          
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-4 tracking-tighter">Quiénes <span className="text-yellow-400">Somos</span></h2>
          <p className="max-w-2xl text-emerald-100/60 font-medium italic">"Cooperativistas al servicio de Villa Mercedes y de toda la provincia."</p>
        </div>
      </section>

      {/* CONTENIDO HISTÓRICO */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
            <p className="text-xl text-emerald-900 font-black uppercase italic tracking-tighter border-b-2 border-yellow-400 pb-2 inline-block">Nuestra Trayectoria</p>
            <p>
              En los albores de 1950, la ciudad padecía serios problemas de energía. Un grupo de vecinos decidió afrontar la cuestión y el 13 de julio de 1952 crearon la Cooperativa CEM.
            </p>
            <div className="bg-emerald-900 text-white p-8 rounded-[3rem] shadow-2xl rotate-1">
              <h4 className="font-black uppercase text-yellow-400 mb-2">Un acto de fe</h4>
              <p className="text-sm italic font-medium">
                "En 1963, para comprar el edificio de Av. Mitre 1474, un grupo de socios prestó el dinero sin cobrar ningún interés. Ese compromiso social es el que nos guía hoy."
              </p>
            </div>
            <p>
              A lo largo de estos 60 años, hemos sobrevivido y crecido gracias a la confianza de los villamercedinos, entendiendo que la economía debe estar al servicio del hombre.
            </p>
          </div>

          {/* LÍNEA DE TIEMPO VISUAL */}
          <div className="space-y-12 border-l-4 border-emerald-50 pl-10 ml-4 relative">
            {hitos.map((h, i) => (
              <div key={i} className="relative group">
                {/* El puntito de la línea */}
                <div className="absolute -left-[54px] top-0 w-10 h-10 bg-white border-4 border-emerald-500 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-lg rotate-45">
                   <div className="-rotate-45"><Star size={14}/></div>
                </div>
                <span className="text-emerald-500 font-black italic text-2xl mb-1 block">{h.año}</span>
                <h4 className="font-black uppercase text-emerald-950 text-sm mb-2">{h.t}</h4>
                <p className="text-xs text-gray-400 font-bold leading-relaxed">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
const BeneficiosView = ({ WA_ASOCIARSE, setActiveTab }) => {
  return (
    <div className="bg-emerald-50 min-h-screen py-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-5xl font-black text-emerald-950 uppercase tracking-tighter italic mb-4">Beneficios para <span className="text-emerald-600">Asociados</span></h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Exclusivo para la comunidad CEM</p>
      </div>
      <div className="container mx-auto px-4 max-w-4xl bg-white p-12 rounded-[3rem] shadow-xl text-center border border-emerald-100">
         <Percent size={60} className="text-yellow-500 mx-auto mb-8" />
         <h3 className="text-3xl font-black text-emerald-900 mb-6 uppercase tracking-tighter">7% DE DESCUENTO ADICIONAL</h3>
         <p className="text-gray-600 mb-10 leading-relaxed font-medium italic">
           Todos nuestros asociados disfrutan de un beneficio exclusivo en la compra de materiales eléctricos e iluminación en nuestro showroom. 
         </p>
         <div className="flex flex-wrap justify-center gap-4">
           <a  target="_blank" className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-lg flex items-center">
            Visitanos y asociate!
           </a>
           <button onClick={() => setActiveTab('inicio')} className="bg-gray-100 text-emerald-950 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-200 transition-all">
             Volver al Inicio
           </button>
         </div>
      </div>
    </div>
  );
};

const EducacionView = () => {
  return (
    <div className="bg-white min-h-screen pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER SECCIÓN */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-[100px] translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Formación y Futuro</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-4 tracking-tighter">Educación <span className="text-emerald-400">Cooperativa</span></h2>
          <p className="max-w-3xl text-emerald-100/60 font-medium italic leading-relaxed">
            "La educación es un derecho esencial que permite lograr mayor conciencia de los derechos y obligaciones en los asociados."
          </p>
        </div>
      </section>

      {/* BLOQUE INTRODUCTORIO */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="h-1 w-20 bg-yellow-400 rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              La educación cooperativa debe orientarse a generar conciencia entre los asociados y la comunidad sobre la importancia de la cooperación y la ayuda mutua.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Buscamos la organización comunitaria para la transformación de las condiciones de vida de las personas, logradas mediante la creación y participación en empresas cooperativas.
            </p>
          </div>
          <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 relative">
            <Lightbulb className="text-yellow-500 mb-6" size={40} />
            <h4 className="text-emerald-900 font-black uppercase text-xl mb-4 tracking-tighter">Nuestra Institución</h4>
            <p className="text-emerald-800/70 text-sm font-medium leading-relaxed italic">
              El programa de Educación Cooperativa cuenta con el respaldo unánime del Consejo de Administración y se implementa en forma continua desde inicios de este nuevo siglo.
            </p>
          </div>
        </div>
      </section>

      {/* GRID DE ACTIVIDADES Y ALIANZAS */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1: Biblioteca Rivadavia */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Database size={24} />
            </div>
            <h5 className="font-black uppercase text-emerald-950 text-sm mb-4">Alianza Cultural</h5>
            <p className="text-xs text-gray-500 font-bold leading-relaxed">
              Las actividades se implementan a través de la Biblioteca e Instituto de Cultura Popular "Bernardino Rivadavia", apoyando activamente su sostenimiento.
            </p>
          </div>

          {/* Tarjeta 2: Talleres Escolares */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Star size={24} />
            </div>
            <h5 className="font-black uppercase text-emerald-950 text-sm mb-4">Escuelas y Talleres</h5>
            <p className="text-xs text-gray-500 font-bold leading-relaxed">
              Realizamos talleres en escuelas primarias y secundarias haciendo eje en el desarrollo de los valores del Cooperativismo.
            </p>
          </div>

          {/* Tarjeta 3: Capacitación Oficios */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h5 className="font-black uppercase text-emerald-950 text-sm mb-4">Oficios y Práctica</h5>
            <p className="text-xs text-gray-500 font-bold leading-relaxed">
              Incluimos capacitación en oficios como Electricidad Domiciliaria, funciones de títeres y talleres para padres.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DESTACADA: CENTRO DE EDUCACIÓN */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-emerald-900 rounded-[4rem] p-10 md:p-20 text-white flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-4 block">Mención Especial</span>
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 italic">Centro de Educación Cooperativa</h3>
            <p className="text-emerald-100/70 leading-relaxed mb-8">
              Ubicado en el Aula 1 de la Biblioteca "Bernardino Rivadavia", este espacio ha sido especialmente ambientado para la formación. Su inauguración contó con la presencia de especialistas como el Dr. Marcelo Leonardo García.
            </p>
            <div className="flex items-center space-x-4">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-widest">
                +100 Asistentes
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-widest">
                Artistas Locales
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 aspect-video bg-emerald-800 rounded-[3rem] overflow-hidden border-8 border-emerald-800/50 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Educación CEM"
            />
          </div>
        </div>
      </section>

      {/* CIERRE ÉTICO */}
      <section className="container mx-auto px-4 py-10 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-emerald-900 text-xl font-black italic leading-relaxed">
            "El espíritu cooperativista está presente en nuestro accionar cotidiano, trabajando por nuevas generaciones de argentinos más solidarios e involucrados."
          </p>
        </div>
      </section>
    </div>
  );
};



// --- NUEVO COMPONENTE: ClientesView ---
const ClientesView = () => {
  // Función para obtener iniciales (Ej: "Glucovil Argentina SA" -> "GA")
  const getIniciales = (nombre) => {
    return nombre
      .split(' ')
      .filter(palabra => palabra.length > 2) // Ignora "de", "sa", "la"
      .map(palabra => palabra[0])
      .slice(0, 2)
      .join('');
  };

  const categoriasClientes = [
    {
      titulo: "Grandes Industrias",
      items: [
        { nombre: "GLUCOVIL ARGENTINA SA", logo: "logos/logoGlucovil.webp" }, // Si dejas el logo vacío "", usará las iniciales
        { nombre: "LEDESMA SAAI", logo: "logos/LogoLedesma.webp" },
        { nombre: "COMPLEJO NIZA SA", logo: "logos/logoNiza.webp" },
        { nombre: "EMPRESA YPF", logo: "logos/logoYpf.webp" },
        { nombre: "ANTIGUAS ESTANCIAS DON ROBERTO", logo: "logos/logoDonroberto.webp" }
      ]
    },
    {
      titulo: "Organismos y Universidades",
      items: [
        { nombre: "MUNICIPALIDAD DE VILLA MERCEDES", logo: "logos/logoMuniVM.webp" },
        { nombre: "MUNICIPALIDAD DE JUSTO DARACT", logo: "logos/logoMuniDaract.webp" },
        { nombre: "MUNICIPALIDAD DE JUAN JORBA", logo: "logos/logoMuniJorba.webp" },
        { nombre: "UNIVERSIDAD NACIONAL DE SAN LUIS", logo: "logos/logoUNSL.webp" },
        { nombre: "UNIVERSIDAD NACIONAL DE VILLA MERCEDES", logo: "logos/logoUNVM.webp" },
        { nombre: "UNIVERSIDAD PROVINCIAL DE OFICIOS", logo: "logos/logoUpro.webp" }
      ]
    },
    {
      titulo: "Empresas y Comercios",
      items: [
        { nombre: "PARRILLA REPUESTOS", logo: "logos/LogoParrilla.webp" },
        { nombre: "REBOTTARO REPUESTOS", logo: "" },
        { nombre: "THOR AUTOMATIZACION INDUSTRIAL", logo: "logos/logoThor.webp" }
      ]
    },
    /*{
      titulo: "Profesionales e Instaladores",
      items: [
        { nombre: "INSTALACIONES ELECTRICAS IDEM", logo: "" },
        { nombre: "JORGE BARRERA INSTALACIONES", logo: "" },
        { nombre: "ELECTRO SAN LUIS", logo: "" }
      ]
    }*/
  ];

  return (
    <div className="bg-white min-h-screen pb-20 animate-in fade-in duration-700">
      {/* HERO SECCIÓN */}
      <section className="py-24 bg-white text-emerald-950 relative border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <span className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Trayectoria y Confianza</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6 tracking-tighter">
  Nuestros <span style={{ WebkitTextStroke: '2px #10b981', color: 'transparent' }}>Clientes</span>
</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* GRID DE CLIENTES */}
      <section className="container mx-auto px-4 py-20">
        {categoriasClientes.map((cat, idx) => (
          <div key={idx} className="mb-24">
            <h3 className="text-gray-400 font-black uppercase tracking-[0.3em] text-[11px] mb-12 text-center">{cat.titulo}</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-[3rem] overflow-hidden">
              {cat.items.map((cliente, cIdx) => (
                <div 
                  key={cIdx} 
                  className="group bg-white p-10 flex flex-col items-center justify-center text-center min-h-[220px] transition-all duration-500 hover:bg-emerald-950"
                >
                  {/* LOGO O INICIALES */}
                  <div className="w-full h-20 flex items-center justify-center mb-6">
                    <div className="transition-all duration-500 transform group-hover:scale-110">
                      {cliente.logo ? (
                        <img 
                          src={cliente.logo} 
                          alt={cliente.nombre} 
                          className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:brightness-0 group-hover:invert transition-all"
                        />
                      ) : (
                        <div className="w-16 h-16 border-2 border-gray-100 group-hover:border-emerald-800 flex items-center justify-center rounded-2xl transition-colors">
                          <span className="text-2xl font-black text-gray-200 group-hover:text-white tracking-tighter uppercase italic">
                            {getIniciales(cliente.nombre)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-yellow-400 transition-colors duration-500 leading-tight">
                    {cliente.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CIERRE "Y USTED" */}
      <section className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-emerald-950 rounded-[4rem] p-16 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-5xl md:text-8xl font-black uppercase italic mb-6 tracking-tighter text-white transition-transform group-hover:scale-105 duration-700">
              ... y <span className="text-yellow-400">Usted?</span>
            </h3>
            <p className="text-emerald-100/50 font-bold mb-10 uppercase tracking-[0.3em] text-xs">
              Únase a las empresas líderes que ya confían en la CEM
            </p>
            <button 
  onClick={() => window.open(`https://wa.me/5492657652584?text=${encodeURIComponent('Hola! Vengo desde el portal de la CEM. Me interesa recibir asesoramiento corporativo para mi empresa.')}`, '_blank')}
  className="bg-white text-emerald-950 font-black px-12 py-5 rounded-2xl uppercase text-xs tracking-widest hover:bg-yellow-400 transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
>
  Solicitar Asesoramiento Corporativo
</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const productosShowroom = [
  {
    id: 1,
    nombre: "Cable Unipolar 2.5mm",
    categoria: "Conductores",
    descripcion: "Normalizado IRAM, ideal para instalaciones domiciliarias.",
    imagen: "/img/cable-25.jpg" // Asegúrate de subir la foto a la carpeta public/img
  },
  {
    id: 2,
    nombre: "Panel LED 18W",
    categoria: "Iluminación",
    descripcion: "Luz fría/cálida, alta eficiencia energética para oficinas.",
    imagen: "/img/panel-led.jpg"
  },
  {
    id: 3,
    nombre: "Interruptor Termomagnético 2x20A",
    categoria: "Protección",
    descripcion: "Protección confiable para circuitos eléctricos.",
    imagen: "/img/termica.jpg"
  }
];



export default App;