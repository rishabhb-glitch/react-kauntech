import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles.css";
import {
  FaMobile,
  FaCamera,
  FaQrcode,
  FaEdit,
  FaBullseye,
  FaSync,
  FaRobot,
  FaIdCard,
  FaGlobe,
  FaFileExport,
  FaChartBar,
  FaEnvelope,
  FaComments,
  FaPaperPlane,
  FaBolt,
  FaRuler,
  FaMoon,
  FaSearch,
  FaLock,
  FaApple,
  FaAndroid,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
  FaArrowDown,
} from "react-icons/fa";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);
  const [counters] = useState({
    scanned: 10,
    pending: 0,
    uploaded: 10,
  });
  const [activeTab, setActiveTab] =
    useState("business-card");
  const floatingLanguagesRef = useRef(null);
  const phoneInnerRef = useRef(null);

  // Floating languages data
  const languagesData = {
    hello: [
      { lang: "English", text: "Hello" },
      { lang: "Hindi", text: "नमस्ते" },
      { lang: "Bengali", text: "হ্যালো" },
      { lang: "Telugu", text: "హలో" },
      { lang: "Marathi", text: "नमस्कार" },
      { lang: "Tamil", text: "வணக்கம்" },
      { lang: "Urdu", text: "ہیلو" },
      { lang: "Gujarati", text: "હેલો" },
      { lang: "Kannada", text: "ಹಲೋ" },
      { lang: "Odia", text: "ନମସ୍କାର" },
      { lang: "Malayalam", text: "ഹലോ" },
      { lang: "Punjabi", text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ" },
      { lang: "Assamese", text: "নমস্কাৰ" },
      { lang: "Maithili", text: "नमस्कार" },
      { lang: "Sanskrit", text: "नमस्ते" },
    ],
    namaste: [
      { lang: "Hindi", text: "नमस्ते" },
      { lang: "Sanskrit", text: "नमस्ते" },
      { lang: "Nepali", text: "नमस्ते" },
      { lang: "Marathi", text: "नमस्कार" },
      { lang: "Gujarati", text: "નમસ્તે" },
      { lang: "Bengali", text: "নমস্কার" },
      { lang: "Odia", text: "ନମସ୍କାର" },
      { lang: "Assamese", text: "নমস্কাৰ" },
      { lang: "Punjabi", text: "ਨਮਤੇ" },
      { lang: "Kashmiri", text: "نمستے" },
      { lang: "Sindhi", text: "نمستي" },
      { lang: "Konkani", text: "नमस्कार" },
      { lang: "Tulu", text: "ನಮಸ್ಕಾರ" },
      { lang: "Dogri", text: "नमस्ते" },
      { lang: "Manipuri", text: "ꯅꯃꯁꯇꯦ" },
    ],
    welcome: [
      { lang: "English", text: "Welcome" },
      { lang: "Hindi", text: "स्वागत है" },
      { lang: "Tamil", text: "வரவேற்கிறோம்" },
      { lang: "Telugu", text: "స్వాగతం" },
      { lang: "Kannada", text: "ಸ್ವಾಗತ" },
      { lang: "Malayalam", text: "സ്വാഗതം" },
      { lang: "Bengali", text: "স্বাগতম" },
      { lang: "Marathi", text: "स्वागत आहे" },
      { lang: "Gujarati", text: "સ્વાગત છે" },
      { lang: "Punjabi", text: "ਜੀ ਆਇਆਂ ਨੂੰ" },
      { lang: "Odia", text: "ସ୍ୱାଗତ" },
      { lang: "Assamese", text: "স্বাগতম" },
      { lang: "Urdu", text: "خوش آمدید" },
      { lang: "Sanskrit", text: "स्वागतम्" },
      { lang: "Konkani", text: "स्वागत" },
    ],
    madeInIndia: [
      { lang: "English", text: "Made in India" },
      { lang: "Hindi", text: "भारत में निर्मित" },
      {
        lang: "Tamil",
        text: "இந்தியாவில் தயாரிக்கப்பட்டது",
      },
      {
        lang: "Telugu",
        text: "భారతదేశంలో తయారు చేయబడింది",
      },
      { lang: "Kannada", text: "ಭಾರತದಲ್ಲಿ ತಯಾರಿಸಲಾಗಿದೆ" },
      { lang: "Malayalam", text: "ഇന്ത്യയിൽ നിർമ്മിച്ചത്" },
      { lang: "Bengali", text: "ভারতে তৈরি" },
      { lang: "Marathi", text: "भारतात बनवलेले" },
      { lang: "Gujarati", text: "ભારતમાં બનાવેલ" },
      { lang: "Punjabi", text: "ਭਾਰਤ ਵਿੱਚ ਬਣਿਆ" },
      { lang: "Odia", text: "ଭାରତରେ ନିର୍ମିତ" },
      { lang: "Assamese", text: "ভাৰতত নিৰ্মিত" },
      { lang: "Urdu", text: "بھارت میں تیار" },
      { lang: "Sanskrit", text: "भारते निर्मितम्" },
      { lang: "Konkani", text: "भारतां तयार केल्ले" },
    ],
  };

  // Initialize floating languages
  useEffect(() => {
    const container = floatingLanguagesRef.current;
    if (!container) return;

    const allTexts = [
      ...languagesData.hello.map((item) => ({
        ...item,
        type: "hello",
      })),
      ...languagesData.namaste.map((item) => ({
        ...item,
        type: "namaste",
      })),
      ...languagesData.welcome.map((item) => ({
        ...item,
        type: "welcome",
      })),
      ...languagesData.madeInIndia.map((item) => ({
        ...item,
        type: "made-in-india",
      })),
    ];

    const shuffled = allTexts.sort(
      () => Math.random() - 0.5,
    );

    // Create 50 floating elements
    for (let i = 0; i < 50; i++) {
      const item = shuffled[i % shuffled.length];
      const element = document.createElement("div");
      element.className = `floating-language ${item.type}`;
      element.textContent = item.text;

      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 24 + 16;
      const delay = Math.random() * 20;
      const duration = Math.random() * 10 + 15;

      element.style.left = `${left}%`;
      element.style.top = `${top}%`;
      element.style.fontSize = `${size}px`;
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = `${duration}s`;

      const rotation = Math.random() * 30 - 15;
      element.style.transform = `rotate(${rotation}deg)`;

      container.appendChild(element);
    }
  }, [
    languagesData.hello,
    languagesData.madeInIndia,
    languagesData.namaste,
    languagesData.welcome,
  ]);

  // 3D phone follow cursor
  useEffect(() => {
    const phone = phoneInnerRef.current;
    if (!phone) return;

    const container = phone.closest(".hero-visual");
    if (!container) return;

    const handleMouseMove = (event) => {
      const rect = phone.getBoundingClientRect();
      const x =
        event.clientX - (rect.left + rect.width / 2);
      const y =
        event.clientY - (rect.top + rect.height / 2);
      const rotationY = (x / (rect.width / 2)) * 12;
      const rotationX = -(y / (rect.height / 2)) * 12;

      gsap.to(phone, {
        rotationX,
        rotationY,
        ease: "power3.out",
        duration: 0.35,
      });
    };

    const reset = () => {
      gsap.to(phone, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    container.addEventListener(
      "mousemove",
      handleMouseMove,
    );
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener(
        "mousemove",
        handleMouseMove,
      );
      container.removeEventListener("mouseleave", reset);
    };
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for anchor links
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.textContent);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += step;
              if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target;
              }
            };

            updateCounter();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 },
    );

    const counters =
      document.querySelectorAll(".stat-number");
    counters.forEach((counter) =>
      observer.observe(counter),
    );

    return () => {
      counters.forEach((counter) =>
        observer.unobserve(counter),
      );
    };
  }, []);

  return (
    <>
      {/* Floating Languages Background */}
      <div
        className="floating-languages-container"
        ref={floatingLanguagesRef}
      ></div>

      {/* Navigation */}
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
      >
        <div className="nav-logo">
          <span className="logo-icon">K</span>
          <span className="logo-text">Kauntech</span>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="#features"
              onClick={(e) =>
                handleAnchorClick(e, "#features")
              }
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#translate"
              onClick={(e) =>
                handleAnchorClick(e, "#translate")
              }
            >
              Translate
            </a>
          </li>
          <li>
            <a
              href="#scan"
              onClick={(e) => handleAnchorClick(e, "#scan")}
            >
              Scan
            </a>
          </li>
          <li>
            <a
              href="#automation"
              onClick={(e) =>
                handleAnchorClick(e, "#automation")
              }
            >
              Automation
            </a>
          </li>
          <li>
            <a
              href="#download"
              onClick={(e) =>
                handleAnchorClick(e, "#download")
              }
              className="nav-cta"
            >
              Get the App
            </a>
          </li>
        </ul>
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}
      >
        <ul>
          <li>
            <a
              href="#features"
              onClick={(e) =>
                handleAnchorClick(e, "#features")
              }
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#translate"
              onClick={(e) =>
                handleAnchorClick(e, "#translate")
              }
            >
              Translate
            </a>
          </li>
          <li>
            <a
              href="#scan"
              onClick={(e) => handleAnchorClick(e, "#scan")}
            >
              Scan
            </a>
          </li>
          <li>
            <a
              href="#automation"
              onClick={(e) =>
                handleAnchorClick(e, "#automation")
              }
            >
              Automation
            </a>
          </li>
          <li>
            <a
              href="#download"
              onClick={(e) =>
                handleAnchorClick(e, "#download")
              }
            >
              Get the App
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-orb"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge-container">
              <span className="badge badge-purple">
                Made in India
              </span>
              <span className="badge badge-gold">
                50+ Languages
              </span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">
                Scan Anything.
              </span>
              <span className="title-line highlight">
                Understand Everything.
              </span>
            </h1>
            <p className="hero-subtitle">
              Business cards, documents, and
              signs—translated and organized in seconds.
              AI-powered OCR with auto-export to Excel,
              WhatsApp, Email & Telegram.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">99</span>
                <span className="stat-label">
                  Free Scans
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">
                  Languages
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">
                  Scan Modes
                </span>
              </div>
            </div>
            <div className="hero-ctas">
              <a
                href="#download"
                onClick={(e) =>
                  handleAnchorClick(e, "#download")
                }
                className="btn btn-primary"
              >
                <FaMobile className="btn-icon" />
                Get the App
              </a>
              <a
                href="#features"
                onClick={(e) =>
                  handleAnchorClick(e, "#features")
                }
                className="btn btn-secondary"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div
                className="phone-mockup-inner"
                ref={phoneInnerRef}
              >
                <div className="phone-screen">
                  <div className="app-header">
                    <span className="app-title">
                      Visitor Card Scan
                    </span>
                    <div className="app-stats">
                      <div className="app-stat">
                        <span className="app-stat-number">
                          {counters.scanned}
                        </span>
                        <span className="app-stat-label">
                          Scanned
                        </span>
                      </div>
                      <div className="app-stat">
                        <span className="app-stat-number">
                          {counters.pending}
                        </span>
                        <span className="app-stat-label">
                          Pending
                        </span>
                      </div>
                      <div className="app-stat">
                        <span className="app-stat-number">
                          {counters.uploaded}
                        </span>
                        <span className="app-stat-label">
                          Uploaded
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="app-tabs">
                    <div
                      className={`app-tab ${activeTab === "business-card" ? "active" : ""}`}
                      onClick={() =>
                        setActiveTab("business-card")
                      }
                    >
                      <FaCamera className="tab-icon" />
                      <span>Business Card</span>
                    </div>
                    <div
                      className={`app-tab ${activeTab === "qr-code" ? "active" : ""}`}
                      onClick={() =>
                        setActiveTab("qr-code")
                      }
                    >
                      <FaQrcode className="tab-icon" />
                      <span>QR Code</span>
                    </div>
                    <div
                      className={`app-tab ${activeTab === "manual" ? "active" : ""}`}
                      onClick={() => setActiveTab("manual")}
                    >
                      <FaEdit className="tab-icon" />
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="app-scan-area">
                    <FaCamera className="camera-icon" />
                    <p className="scan-text">
                      Ready to Scan Business Cards
                    </p>
                    <p className="scan-subtext">
                      Position card in frame and capture
                    </p>
                    <button className="scan-btn">
                      Open Camera
                    </button>
                    <button className="gallery-btn">
                      Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card card-1">
              <FaBullseye className="floating-card-icon" />
              <span className="floating-card-text">
                Auto-detect Language
              </span>
            </div>
            <div className="floating-card card-2">
              <FaSync className="floating-card-icon" />
              <span className="floating-card-text">
                Real-time Sync
              </span>
            </div>
            <div className="floating-card card-3">
              <FaRobot className="floating-card-icon" />
              <span className="floating-card-text">
                AI Powered
              </span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Features Mosaic Section */}
      <section className="features" id="features">
        <div className="section-label">CAPABILITIES</div>
        <div className="features-grid">
          <div className="feature-card feature-card-large">
            <div className="feature-icon-wrap">
              <FaIdCard className="feature-icon" />
            </div>
            <h3 className="feature-title">
              Scan Cards, Docs & Signs
            </h3>
            <p className="feature-desc">
              OCR that works on curved cards, glossy paper,
              and handwritten notes. Capture business cards,
              A4 documents, and shop boards with precision.
            </p>
            <div className="feature-visual">
              <div className="scan-demo">
                <div className="scan-line"></div>
                <div className="doc-preview">
                  <div className="doc-line"></div>
                  <div className="doc-line short"></div>
                  <div className="doc-line"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-card feature-card-top">
            <div className="feature-icon-wrap">
              <FaGlobe className="feature-icon" />
            </div>
            <h3 className="feature-title">
              Translate Instantly
            </h3>
            <p className="feature-desc">
              50+ languages, offline-ready. From Hindi to
              Tamil, Bengali to Gujarati— understand every
              word in your language.
            </p>
            <div className="language-bubbles">
              <span className="lang-bubble">हिन्दी</span>
              <span className="lang-bubble">தமிழ்</span>
              <span className="lang-bubble">తెలుగు</span>
              <span className="lang-bubble">മലയാളം</span>
              <span className="lang-bubble">ಕನ್ನಡ</span>
              <span className="lang-bubble">+45</span>
            </div>
          </div>
          <div className="feature-card feature-card-bottom">
            <div className="feature-icon-wrap">
              <FaFileExport className="feature-icon" />
            </div>
            <h3 className="feature-title">
              Export Anywhere
            </h3>
            <p className="feature-desc">
              Sheets, email, WhatsApp, Telegram—automated.
              Your scanned data goes exactly where you need
              it.
            </p>
            <div className="export-icons">
              <div className="export-icon">
                <FaChartBar />
                <small>Sheets</small>
              </div>
              <div className="export-icon">
                <FaEnvelope />
                <small>Email</small>
              </div>
              <div className="export-icon">
                <FaComments />
                <small>WhatsApp</small>
              </div>
              <div className="export-icon">
                <FaPaperPlane />
                <small>Telegram</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Translate Section */}
      <section className="translate-section" id="translate">
        <div className="translate-content">
          <div className="translate-text">
            <span className="section-badge">
              INSTANT TRANSLATE
            </span>
            <h2 className="section-title">
              Read Any Sign in Seconds.
            </h2>
            <p className="section-desc">
              Point your camera at menus, boards, and
              labels—get a clean translation without
              retyping. Perfect for exhibitions, networking
              events, and travel.
            </p>
            <ul className="feature-list">
              <li>
                <FaBolt className="list-icon" />
                <span>
                  Works offline - no internet needed
                </span>
              </li>
              <li>
                <FaRuler className="list-icon" />
                <span>
                  Works at an angle - tilted text detection
                </span>
              </li>
              <li>
                <FaMoon className="list-icon" />
                <span>
                  Works in low light - night mode OCR
                </span>
              </li>
            </ul>
          </div>
          <div className="translate-visual">
            <div className="translate-card">
              <div className="original-text">
                <span className="text-label">Detected</span>
                <p className="text-content">
                  व्यापार कार्ड स्कैनर
                </p>
              </div>
              <div className="arrow-down">
                <FaArrowDown />
              </div>
              <div className="translated-text">
                <span className="text-label">
                  Translated
                </span>
                <p className="text-content">
                  Business Card Scanner
                </p>
              </div>
              <div className="language-indicator">
                <span className="lang-from">Hindi</span>
                <span className="lang-arrow">→</span>
                <span className="lang-to">English</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scan Section */}
      <section className="scan-section" id="scan">
        <h2 className="section-title-center">
          Scan Anything.
        </h2>
        <div className="scan-grid">
          <div className="scan-card">
            <div className="scan-card-image">
              <div className="doc-mockup">
                <div className="doc-page">
                  <div className="doc-header"></div>
                  <div className="doc-body">
                    <div className="doc-line"></div>
                    <div className="doc-line"></div>
                    <div className="doc-line"></div>
                    <div className="doc-line short"></div>
                  </div>
                </div>
                <div className="doc-page stacked">
                  <div className="doc-header"></div>
                  <div className="doc-body">
                    <div className="doc-line"></div>
                    <div className="doc-line"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scan-card-content">
              <h3>Multi-page Documents</h3>
              <p>
                Scan A4 documents, contracts, and forms with
                automatic page detection.
              </p>
            </div>
          </div>
          <div className="scan-card">
            <div className="scan-card-image">
              <div className="card-mockup">
                <div className="business-card">
                  <div className="card-logo">VT</div>
                  <div className="card-info">
                    <div className="card-name">
                      VoltAir Tech
                    </div>
                    <div className="card-company">
                      Kauntech Partner
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scan-card-content">
              <h3>IDs & Business Cards</h3>
              <p>
                Extract contact info instantly from visiting
                cards and ID documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Flow Section */}
      <section
        className="automation-section"
        id="automation"
      >
        <div className="automation-orb"></div>
        <h2 className="section-title-center">
          Scan → Detect → Translate → Send
        </h2>
        <div className="automation-flow">
          <div className="flow-step">
            <div className="step-number">1</div>
            <div className="step-icon">
              <FaCamera />
            </div>
            <h3 className="step-title">Scan</h3>
            <p className="step-desc">
              Point and capture any document or card.
            </p>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="step-number">2</div>
            <div className="step-icon">
              <FaSearch />
            </div>
            <h3 className="step-title">Detect</h3>
            <p className="step-desc">
              OCR reads text instantly with AI precision.
            </p>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="step-number">3</div>
            <div className="step-icon">
              <FaGlobe />
            </div>
            <h3 className="step-title">Translate</h3>
            <p className="step-desc">
              Get it in your preferred language.
            </p>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="step-number">4</div>
            <div className="step-icon">
              <FaFileExport />
            </div>
            <h3 className="step-title">Send</h3>
            <p className="step-desc">
              To Sheets, email, WhatsApp, or Telegram.
            </p>
          </div>
        </div>
        <div className="automation-features">
          <div className="auto-feature">
            <span className="auto-icon">
              <FaBolt />
            </span>
            <span className="auto-text">
              Lightning Fast
            </span>
          </div>
          <div className="auto-feature">
            <span className="auto-icon">
              <FaLock />
            </span>
            <span className="auto-text">
              Secure & Private
            </span>
          </div>
          <div className="auto-feature">
            <span className="auto-icon">
              <FaRobot />
            </span>
            <span className="auto-text">AI Powered</span>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="download-section" id="download">
        <div className="download-content">
          <div className="download-text">
            <h2 className="download-title">
              Get Kauntech Free.
            </h2>
            <p className="download-subtitle">
              99 scans per account. Sync to Google Sheets &
              Telegram. Upgrade to unlock AI automation.
            </p>
            <ul className="download-features">
              <li>
                <span className="check-icon">✓</span>
                <span>OCR for cards, docs, and signs</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>50+ languages supported</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>
                  Auto-export to Sheets, Email, WhatsApp,
                  Telegram
                </span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>99 free scans per account</span>
              </li>
            </ul>
            <div className="download-buttons">
              <a href="#" className="store-btn app-store">
                <span className="store-icon">
                  <FaApple />
                </span>
                <div className="store-text">
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#" className="store-btn play-store">
                <span className="store-icon">
                  <FaAndroid />
                </span>
                <div className="store-text">
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
            <p className="no-card">
              No credit card required.
            </p>
          </div>
          <div className="download-visual">
            <div className="cta-card">
              <div className="cta-card-header">
                <span className="cta-badge">FREE</span>
                <span className="cta-plan">Starter</span>
              </div>
              <div className="cta-card-price">
                <span className="price">₹0</span>
                <span className="period">/month</span>
              </div>
              <ul className="cta-features">
                <li>99 scans</li>
                <li>Google Sheets sync</li>
                <li>Telegram export</li>
                <li>Basic OCR</li>
              </ul>
              <button className="cta-btn">
                Get Started
              </button>
            </div>
            <div className="cta-card premium">
              <div className="cta-card-header">
                <span className="cta-badge premium-badge">
                  PRO
                </span>
                <span className="cta-plan">
                  Automation AI
                </span>
              </div>
              <div className="cta-card-price">
                <span className="price">₹499</span>
                <span className="period">/month</span>
              </div>
              <ul className="cta-features">
                <li>Unlimited scans</li>
                <li>WhatsApp automation</li>
                <li>Email automation</li>
                <li>Excel export</li>
                <li>Priority support</li>
              </ul>
              <button className="cta-btn premium-btn">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">K</span>
              <span className="logo-text">Kauntech</span>
            </div>
            <p className="footer-tagline">
              Scan anything. Understand everything.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li>
                  <a
                    href="#features"
                    onClick={(e) =>
                      handleAnchorClick(e, "#features")
                    }
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#translate"
                    onClick={(e) =>
                      handleAnchorClick(e, "#translate")
                    }
                  >
                    Translate
                  </a>
                </li>
                <li>
                  <a
                    href="#scan"
                    onClick={(e) =>
                      handleAnchorClick(e, "#scan")
                    }
                  >
                    Scan
                  </a>
                </li>
                <li>
                  <a
                    href="#automation"
                    onClick={(e) =>
                      handleAnchorClick(e, "#automation")
                    }
                  >
                    Automation
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 Kauntech. All rights reserved. Made
            with <FaHeart /> in India.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
