import React, { useState, useEffect } from 'react';
import { 
  Share2,
  Copy,
  Check,
  ShoppingBag, 
  Menu, 
  X, 
  Search, 
  Lightbulb, 
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
  ArrowLeft
} from 'lucide-react';

/**
 * PORTAL CEM - COOPERATIVA DE ELECTRICIDAD Y OTROS SERVICIOS DE MERCEDES (SAN LUIS) LTDA.
 * Actualización: Reemplazo de logo por el símbolo de los pinos del cooperativismo.
 */
const App = () => {
  // --- ESTADOS ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio'); // 'inicio' o 'beneficios'
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
    { id: 1, name: "Candelabro Premium Oro", price: "$145.900", category: "Colgante Obit", isPremium: true, image: "https://180grados.com.ar/wp-content/uploads/2026/01/Diseno-sin-titulo-2026-01-23T170103.717.jpg.webp" },
    { id: 2, name: "Cable Unipolar 2.5mm 100m", price: "$90.000", category: "Electricidad", isPremium: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPdLxd9Ow4BTNpqDKiwGeuEdFRerLCZbR9A&s" },
    { id: 3, name: "Sigma", price: "$34.000", category: "Artefacto de pared", isPremium: true, image: "https://180grados.com.ar/wp-content/uploads/2024/12/Diseno-sin-titulo-2024-12-10T122943.798.jpg.webp" },
    { id: 4, name: "Térmica Chint 2x25A", price: "$9.200", category: "Instalación", isPremium: false, image: "https://http2.mlstatic.com/D_NQ_NP_755335-MLA99585531334_122025-O.webp" }
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
              <button onClick={handleAdminToggle} className={`hover:text-yellow-400 transition-colors flex items-center font-bold ${isAdminMode ? 'text-yellow-400' : ''}`}>
                <Lock size={12} className="mr-1.5" /> {isAdminMode ? "SALIR ADMIN" : "ACCESO ADMIN"}
              </button>
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
        { name: 'Educación Cooperativa', tab: 'inicio' },
        { name: 'Beneficios', tab: 'beneficios' }
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
      <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl rotate-3 flex items-center justify-center border-b-2 md:border-b-4 border-emerald-800 shadow-lg group-hover:rotate-0 transition-all duration-500 overflow-hidden">
        <img src={LOGO_COOP} alt="Logo CEM" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg md:text-2xl font-black leading-none text-emerald-900 uppercase tracking-tighter">
          COOPERATIVA DE ELECTRICIDAD<span className="text-emerald-600">CEM</span>
        </h1>
        <p className="text-[8px] md:text-xs text-emerald-500 font-black italic tracking-tight uppercase">
          y otros servicios de Villa Mercedes (San Luis) LTDA
        </p>
      </div>
    </div>

    {/* Nav Desktop - Ahora con tus nuevas secciones */}
    <nav className="hidden xl:flex items-center space-x-8">
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
        className="xl:hidden p-2.5 bg-gray-100 rounded-xl text-emerald-900 hover:bg-emerald-100 transition-colors"
      >
        <Menu size={20} />
      </button>
    </div>
  </div>
</header>

<main className="relative">
  {/* VISTA INICIO */}
  {activeTab === 'inicio' && (
    <div className="animate-in fade-in duration-500">
       {/* Aquí va todo tu código de Hero Section, Categorías y Product Grid que ya tienes */}
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

  
  
</main>

      {/* --- Contenido Condicional --- */}
      {activeTab === 'inicio' ? (
        <>
          {/* --- Hero Section --- */}
          <section className="relative h-[700px] flex items-center overflow-hidden bg-emerald-900">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600" 
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
                  LA LUPA DE NUESTRA <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">CIUDAD.</span>
                </h2>
                <p className="text-xl text-emerald-100/70 mb-12 max-w-xl font-medium leading-relaxed italic">
                  Acompañamos el crecimiento de Villa Mercedes con materiales eléctricos certificados, iluminación de vanguardia y el compromiso cooperativo de siempre.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="bg-yellow-400 text-emerald-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all shadow-2xl flex items-center group">
                    VER CATÁLOGO TÉCNICO <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-emerald-950 transition-all">
                    SHOWROOM PREMIUM
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* --- Categorías Destacadas --- */}
          <section className="py-32 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl bg-gray-100">
                <img 
                    src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt="Materiales Eléctricos CEM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent flex flex-col justify-end p-12 text-white">
                  <span className="bg-emerald-600 text-white w-fit px-4 py-1 rounded-full font-black text-[10px] uppercase mb-4 tracking-widest">Técnico & Industrial</span>
                  <h3 className="text-5xl font-black mb-4 uppercase tracking-tighter leading-none">Materiales <br/> Eléctricos</h3>
                  <p className="text-emerald-100/70 mb-8 max-w-xs font-medium italic">Todo para el instalador y grandes obras industriales.</p>
                  <div className="flex items-center font-black text-yellow-400 uppercase tracking-[0.2em] text-xs">
                    Explorar Catálogo <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" size={18}/>
                  </div>
                </div>
              </div>

              <div className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl">
                <img 
                    src="https://180grados.com.ar/wp-content/uploads/2024/06/Diseno-sin-titulo-65.jpg.webp" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt="Iluminación CEM" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent flex flex-col justify-end p-12 text-white">
                  <span className="bg-yellow-400 text-emerald-900 w-fit px-4 py-1 rounded-full font-black text-[10px] uppercase mb-4 tracking-widest">Diseño & Confort</span>
                  <h3 className="text-5xl font-black mb-4 uppercase tracking-tighter leading-none">Iluminación <br/> & Decoración</h3>
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

            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                <div className="max-w-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-[3px] w-12 bg-yellow-500 rounded-full"></div>
                    <span className="text-emerald-900 font-black uppercase tracking-[0.3em] text-[10px]">Catálogo Online</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-emerald-950 tracking-tighter uppercase italic">Productos en Foco</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((p) => (
                  <div key={p.id} className="bg-white/95 backdrop-blur-sm rounded-[3rem] p-6 shadow-xl hover:shadow-2xl transition-all group border border-white/20 flex flex-col relative overflow-hidden">
                    <div className="h-64 rounded-[2.5rem] overflow-hidden relative mb-8">
                      <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt={p.name} />
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
        </>
      ) : (
        /* --- Página de Beneficios --- */
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <section className="bg-emerald-900 py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="container mx-auto px-4 relative">
              <button 
                onClick={() => setActiveTab('inicio')}
                className="flex items-center text-emerald-300 font-black text-[10px] uppercase tracking-widest mb-12 hover:text-white transition-colors group"
              >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
              </button>
              <div className="max-w-4xl">
                <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-8">
                  SER ASOCIADO <br/>
                  <span className="text-yellow-400">TIENE PREMIO.</span>
                </h2>
                <p className="text-2xl text-emerald-100/70 font-medium italic max-w-2xl leading-relaxed">
                  Formar parte de la Cooperativa CEM no solo es apoyar el crecimiento local, sino también acceder a beneficios exclusivos en cada una de sus compras.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 -mt-32">
              
              {/* Card 1: Descuento Principal */}
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-4 transition-transform duration-500">
                <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Percent size={48} strokeWidth={3} />
                </div>
                <h3 className="text-4xl font-black text-emerald-950 uppercase tracking-tighter mb-4">7% OFF</h3>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-6 italic">En todas las compras</p>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Presentando en dni, obtenga un 7% de descuento directo en cualquier producto de nuestro catálogo, sin montos mínimos.
                </p>
              </div>

              {/* Card 2: Promociones Especiales */}
              <div className="bg-emerald-800 rounded-[3rem] p-12 shadow-2xl flex flex-col items-center text-center text-white group hover:-translate-y-4 transition-transform duration-500">
                <div className="w-24 h-24 bg-emerald-700 text-yellow-400 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Gift size={48} strokeWidth={3} />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">PROMOS</h3>
                <p className="text-emerald-400 font-bold uppercase text-[10px] tracking-[0.2em] mb-6 italic">Eventos Exclusivos</p>
                <p className="text-emerald-100/70 leading-relaxed font-medium">
                  Acceso prioritario a preventas, liquidaciones de temporada y eventos especiales de diseño en nuestro Showroom Premium.
                </p>
              </div>

              {/* Card 3: Cómo Asociarse */}
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-4 transition-transform duration-500">
                <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={48} strokeWidth={3} />
                </div>
                <h3 className="text-4xl font-black text-emerald-950 uppercase tracking-tighter mb-4">ASOCIARSE</h3>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-6 italic">Simple y Rápido</p>
                <p className="text-gray-600 leading-relaxed font-medium mb-8">
                  Cualquier vecino de Villa Mercedes puede ser parte. Solo necesita presentar su DNI y un servicio en nuestras oficinas o vía digital.
                </p>
                <a 
                  href={`https://wa.me/${WA_ASOCIARSE}?text=Hola!%20Me%20interesa%20información%20para%20asociarme%20a%20la%20Cooperativa%20CEM.`}
                  target="_blank"
                  className="w-full py-5 bg-emerald-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center group"
                >
                  <MessageCircle size={18} className="mr-2" /> Consultar por WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-32 max-w-5xl mx-auto bg-gray-50 rounded-[4rem] p-16 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Contacto Directo</span>
                <h4 className="text-5xl font-black text-emerald-950 uppercase tracking-tighter italic mb-8">¿Aún no eres parte?</h4>
                <p className="text-gray-600 text-lg font-medium italic mb-10 leading-relaxed">
                  Sumate hoy mismo y empezá a disfrutar de los beneficios de pertenecer a la cooperativa que impulsa Villa Mercedes. Nuestro equipo te asesorará en el proceso.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white px-8 py-4 rounded-2xl border border-gray-200 flex items-center">
                    <Phone size={20} className="text-emerald-600 mr-4" />
                    <span className="font-black text-emerald-950">2657 393070</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-emerald-100 rounded-[3rem] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Atención CEM"
                />
                <div className="absolute inset-0 bg-emerald-900/20"></div>
              </div>
            </div>
          </section>
        </div>
      )}

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
                    <img src={item.image} className="w-24 h-24 object-cover rounded-2xl shadow-sm" alt={item.name} />
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
                <div className="w-16 h-16 bg-white rounded-2xl rotate-6 flex items-center justify-center border-2 border-yellow-500 shadow-2xl cursor-pointer overflow-hidden" onClick={() => setActiveTab('inicio')}>
                   <img src={LOGO_COOP} alt="Logo CEM" className="w-full h-full object-cover" />
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
            <h5 className="text-white font-black text-2xl mb-12 uppercase tracking-tighter border-l-4 border-yellow-400 pl-6">Servicios</h5>
            <ul className="space-y-6">
              {['Atención a Empresas', 'Showroom Premium', 'Materiales Eléctricos', 'Proyectos Especiales'].map(item => (
                <li key={item}>
                  <button onClick={() => setActiveTab('inicio')} className="flex items-center group text-emerald-100/60 hover:text-white transition-all font-bold uppercase text-[11px] tracking-widest text-left">
                    <ChevronRight size={16} className="mr-3 text-yellow-500 group-hover:translate-x-2 transition-transform" /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-16 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-emerald-700/60">
            &copy; 2026 Cooperativa de Electricidad y otros servicios de Mercedes (San Luis) Ltda.
          </p>
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
            <div className="w-64 h-64 bg-yellow-400 rounded-full border-[10px] border-emerald-700 flex items-center justify-center shadow-2xl rotate-3">
               <div className="flex space-x-3 items-end">
                  <div className="w-12 h-28 bg-emerald-800 rounded-t-full"></div>
                  <div className="w-12 h-28 bg-emerald-800 rounded-t-full"></div>
               </div>
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
      { cargo: "Vicepresidente", nombre: "Antonio Payero" },
      { cargo: "Secretaria", nombre: "María Evelyn Becerra" },
      { cargo: "Pro-secretaria", nombre: "Hilda Violeta Monje" },
      { cargo: "Tesorero", nombre: "Alfredo Lazaro Carrascull" },
      { cargo: "Pro-tesorero", nombre: "Hector Gregorio Aguzzi" }
    ],
    vocales: ["Francisco Luis Saibene", "Osvaldo Ricardo Phillpott", "Jorge Omar De La Rocha", "Gabriel Enrique Ponisio"],
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
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800 mb-6 flex items-center">
                    <div className="w-6 h-[2px] bg-emerald-800 mr-3"></div> Vocales Titulares
                  </h4>
                  <ul className="space-y-3">
                    {consejoActual.vocales.map((v, i) => (
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
          <p className="max-w-2xl text-emerald-100/60 font-medium italic">"Militantes del cooperativismo al servicio de Villa Mercedes."</p>
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
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      {/* HEADER BENEFICIOS */}
      <section className="bg-emerald-900 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-[100px] opacity-20 -mr-20 -mt-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => setActiveTab('inicio')} 
            className="flex items-center text-emerald-300 font-black text-[10px] uppercase mb-12 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2"/> Volver al Inicio
          </button>
          <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-none mb-6">
            SER ASOCIADO <br/><span className="text-yellow-400">TIENE PREMIO.</span>
          </h2>
          <p className="text-emerald-100/60 font-bold uppercase tracking-widest text-xs">Beneficios exclusivos para miembros de la cooperativa</p>
        </div>
      </section>

      {/* TARJETAS DE BENEFICIOS */}
      <section className="container mx-auto px-4 -mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl flex flex-col items-center text-center border border-gray-100 hover:translate-y-[-10px] transition-transform">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
            <Percent size={32} />
          </div>
          <h3 className="text-4xl font-black mb-4 uppercase italic tracking-tighter text-emerald-950">7% OFF</h3>
          <p className="text-gray-500 font-medium text-sm">Descuento directo en todas tus compras de materiales eléctricos presentando tu carnet.</p>
        </div>

        <div className="bg-emerald-800 p-12 rounded-[3rem] shadow-2xl text-white flex flex-col items-center text-center border border-emerald-700 hover:translate-y-[-10px] transition-transform">
          <div className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center text-yellow-400 mb-6 shadow-inner">
            <Gift size={32} />
          </div>
          <h3 className="text-4xl font-black mb-4 uppercase italic tracking-tighter">PROMOS</h3>
          <p className="text-emerald-100/70 font-medium text-sm">Acceso prioritario a preventas de luminaria y eventos exclusivos en nuestro Showroom.</p>
        </div>

        <div className="bg-white p-12 rounded-[3rem] shadow-2xl flex flex-col items-center text-center border border-gray-100 hover:translate-y-[-10px] transition-transform">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-4xl font-black mb-4 uppercase italic tracking-tighter text-emerald-950">UNIRSE</h3>
          <p className="text-gray-500 font-medium text-sm mb-6">¿Aún no eres parte? Sumate hoy mismo a la comunidad cooperativa.</p>
          <a 
            href={`https://wa.me/${WA_ASOCIARSE}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-4 bg-emerald-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-emerald-700 transition-colors"
          >
            Pedir Información
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;