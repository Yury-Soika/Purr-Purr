"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Coffee, Heart, MapPin, Menu as MenuIcon, Phone, PawPrint, Instagram, X, Leaf } from "lucide-react";
import { categories, menu, type Category, type Lang } from "./menu";
import { HTML_LANG, LANG_LABELS, LANGS } from "./i18n/types";
import { ruVocabulary } from "./i18n/ru";

const base = process.env.NEXT_PUBLIC_BASE_PATH || process.env.DEMO_BASE_PATH || "";
const instagram = "https://www.instagram.com/purrpurr.wawa/";
const facebook = "https://www.facebook.com/Purr.Purr.Cat.Cafe.Warsaw/";
const maps = "https://www.google.com/maps/search/?api=1&query=Purr+Purr+Pokorna+2+Warszawa";
const storageKey = "purr_purr_lang";
const lunchSets = [
  { image: "lunch-bibimbap", label: ["Poniedziałek · Bibimbap", "Monday · Bibimbap", "Понедельник · Пибимбап"] },
  { image: "lunch-kimbap", label: ["Wtorek · Kimbap", "Tuesday · Kimbap", "Вторник · Кимбап"] },
  { image: "lunch-soba", label: ["Środa · Soba", "Wednesday · Soba", "Среда · Соба"] },
  { image: "lunch-mandu", label: ["Czwartek · Mandu", "Thursday · Mandu", "Четверг · Манду"] },
  { image: "lunch-purramen", label: ["Piątek · Purramen", "Friday · Purramen", "Пятница · Purramen"] },
] as const;

function Cat({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 320 200" fill="none" aria-hidden="true">
    <path d="M66 144C18 159 14 92 43 77C67 65 75 90 63 99C53 108 47 100 49 94" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    <path d="M67 145C47 119 73 57 137 57C188 57 222 95 227 128L256 143C270 152 249 166 223 165H94C77 165 69 156 67 145Z" fill="#daba8d" stroke="currentColor" strokeWidth="3" />
    <path d="M195 97L195 49L228 68C239 65 249 67 257 70L281 56L278 99C301 136 273 156 239 153C205 152 178 134 195 97Z" fill="#daba8d" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M207 107Q214 116 222 106M252 106Q259 116 266 105M235 121L240 125L245 120M240 125Q239 134 231 129M240 125Q243 134 250 129M183 118L210 123M187 136L210 130M269 122L298 115M270 130L296 135" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M111 61L113 88M132 59L140 86M156 64L169 91M217 71L223 85M235 68L238 83M252 72L251 86" stroke="#956844" strokeWidth="9" strokeLinecap="round" />
    <path d="M132 145Q157 153 182 143M61 173H290" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M83 26H96L84 42H98M111 8H122L112 20H124" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("pl");
  const [category, setCategory] = useState<Category>("bowls");
  const [navOpen, setNavOpen] = useState(false);
  const en = lang === "en";
  const ru = lang === "ru";
  const languageIndex = lang === "pl" ? 0 : lang === "en" ? 1 : 2;
  const t = (pl: string, english: string) => ru ? (ruVocabulary[pl] ?? pl) : en ? english : pl;
  const changeLanguage = (next: Lang) => {
    setLang(next);
    try { window.localStorage.setItem(storageKey, next); } catch { /* ignore storage errors */ }
  };
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      // The first client render restores the visitor's explicit language choice.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved && LANGS.includes(saved as Lang)) setLang(saved as Lang);
    } catch { /* ignore storage errors */ }
  }, []);
  useEffect(() => { document.documentElement.lang = HTML_LANG[lang]; }, [lang]);
  useEffect(() => {
    if (!navOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setNavOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [navOpen]);
  const nav = [["about", t("Nasze miejsce", "Our place")], ["menu", "Menu"], ["cats", t("Kocia Strefa", "Cat Zone")], ["visit", t("Odwiedź nas", "Visit us")]];

  return <>
    <a href="#main" className="skip-link">{t("Przejdź do treści", "Skip to content")}</a>
    <div className="topbar"><span>{t("Mała przerwa. Dużo mruczenia.", "A little pause. A lot of purring.")}</span><span className="topbar-location">{t("WARSZAWA · MURANÓW", "WARSAW · MURANÓW")}</span></div>
    <header className="header">
      <div className="shell nav-row">
        <a href="#" className="brand" aria-label="Purr Purr"><PawPrint strokeWidth={1.5} /><span>purr purr<span className="brand-sub">{t("KOCIA KAWIARNIA I KUCHNIA AZJATYCKA", "CAT CAFÉ & ASIAN KITCHEN")}</span></span></a>
        <nav className="desktop-nav" aria-label={t("Nawigacja główna", "Main navigation")}>{nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="nav-actions"><div className="language" aria-label={t("Język strony", "Site language")}>{LANGS.map((code, index) => <span className="language-option" key={code}><button aria-pressed={lang === code} onClick={() => changeLanguage(code)}>{LANG_LABELS[code]}</button>{index < LANGS.length - 1 && <span aria-hidden="true">/</span>}</span>)}</div><a className="nav-visit" href="#visit">{t("Wpadnij do nas", "Come say hello")} <ArrowUpRight size={15} /></a><button className="mobile-toggle" onClick={() => setNavOpen(!navOpen)} aria-expanded={navOpen} aria-controls="mobile-nav" aria-label={navOpen ? t("Zamknij nawigację", "Close navigation") : t("Otwórz nawigację", "Open navigation")}>{navOpen ? <X /> : <MenuIcon />}</button></div>
      </div>
      {navOpen && <nav id="mobile-nav" className="mobile-nav" aria-label={t("Nawigacja mobilna", "Mobile navigation")}>{nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setNavOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}</nav>}
    </header>

    <main id="main">
      <section className="hero shell">
        <div className="hero-copy"><p className="eyebrow"><span className="small-line" /> {t("TWOJA PRZYTULNA CHWILA W WARSZAWIE", "YOUR COZY LITTLE CORNER OF WARSAW")}</p>
          <h1>{t("Dobra kawa.", "Good coffee.")}<br />{t("Miękkie łapki.", "Soft paws.")}<br /><em>{t("Zostań chwilę.", "Stay a little.")}</em></h1>
          <p className="hero-description">{t("Azjatyckie smaki, coś słodkiego i kocie towarzystwo. Na Pokornej zwalniamy tempo — filiżanka po filiżance.", "Asian flavors, a little something sweet, and feline company. On Pokorna Street, we take life a little slower — one cup at a time.")}</p>
          <div className="hero-buttons"><a href="#menu" className="button primary">{t("Zajrzyj do menu", "Explore the menu")} <ArrowUpRight size={19} /></a><a href="#cats" className="text-link">{t("Poznaj Kocią Strefę", "Meet the Cat Zone")} <PawPrint size={17} /></a></div>
          <div className="hero-footnote"><MapPin size={16} /><span>Pokorna 2/U4, Warszawa</span><span className="dot">·</span><span>{t("Kocia Strefa 12+", "Cat Zone 12+")}</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-photo"><Image src={`${base}/images/taiyaki.webp`} alt={t("Taiyaki Purr Purr — japońskie słodkości na pomarańczowym fotelu", "Purr Purr taiyaki — Japanese treats on an orange armchair")} fill priority sizes="(max-width: 760px) 90vw, 45vw" /></div>
          <div className="round-stamp"><PawPrint size={27} strokeWidth={1.4} /><span>{t("kawa · koty", "coffee · cats")}<br />{t("i comfort food", "& comfort food")}</span></div>
          <div className="cat-note"><Cat /><span>{t("tu można zwolnić", "slow days, happy paws")}</span><Heart size={15} /></div>
          <span className="hero-sparkle" aria-hidden="true">✳</span>
        </div>
        <a href="#about" className="scroll-cue"><ArrowDown size={15} /> {t("ROZGOŚĆ SIĘ", "MAKE YOURSELF AT HOME")}</a>
      </section>

      <div className="ribbon" aria-hidden="true"><span>HAYB {t("KAWA SPECIALTY", "SPECIALTY COFFEE")}</span><PawPrint /><span>MOYA MATCHA</span><PawPrint /><span>{t("AZJATYCKIE COMFORT FOOD", "ASIAN COMFORT FOOD")}</span><PawPrint /><span>{t("DOBRE TOWARZYSTWO", "GOOD COMPANY")}</span><PawPrint /></div>

      <section id="about" className="about shell section-pad">
        <div><p className="eyebrow">{t("NIE TYLKO KAWIARNIA", "MORE THAN A COFFEE STOP")}</p><h2>{t("Trochę Azji.", "A taste of Asia.")}<br />{t("Dużo ciepła.", "A lot of warmth.")}<br /><em>{t("Całe mnóstwo mruczenia.", "Plenty of purring.")}</em></h2></div>
        <div className="about-copy"><p>{t("Są miejsca, do których wpadasz po kawę. I takie, w których chcesz zostać trochę dłużej. Purr Purr to zaproszenie do tej drugiej kategorii.", "Some places are for a quick coffee. Others make you want to linger a little longer. Purr Purr is an invitation to do just that.")}</p><p>{t("W menu spotykają się japońskie i koreańskie inspiracje: od onigiri i bibimbapu po matchę i ciepłe taiyaki. A w Kociej Strefie? Czas płynie w kocim tempie.", "Japanese and Korean inspiration meets on the menu: from onigiri and bibimbap to matcha and warm taiyaki. And in the Cat Zone? Time moves at a cat’s pace.")}</p><div className="about-values"><span><Coffee /> {t("Kawa specialty", "Specialty coffee")}</span><span><Leaf /> {t("Opcje wege", "Veggie options")}</span><span><PawPrint /> {t("Kocia Strefa", "Cat Zone")}</span></div></div>
      </section>

      <section className="favorites section-pad"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{t("NA CO MASZ DZIŚ OCHOTĘ?", "WHAT ARE YOU IN THE MOOD FOR?")}</p><h2>{t("Małe przyjemności.", "Little pleasures.")} <em>{t("Wielki apetyt.", "Big appetite.")}</em></h2></div><a href="#menu" className="text-link">{t("Zobacz menu", "See the menu")} <ArrowUpRight size={17} /></a></div>
        <div className="favorite-grid">
          {[
            { img: "lunch-bibimbap", title: t("Lunch w Purr Purr", "Lunch at Purr Purr"), tag: t("PON.–PT. · 12:00–15:00", "MON–FRI · 12:00–15:00"), price: "41", desc: t("Danie dnia, miso, Ice Tea i lody. Na zdjęciu: poniedziałkowy zestaw z bibimbapem.", "Daily main, miso, Ice Tea and ice cream. Pictured: Monday’s bibimbap lunch set."), cat: "bowls" as Category },
            { img: "latte", title: t("Kwiatowe latte", "Flower latte"), tag: t("TWOJA CHWILA SPOKOJU", "YOUR MOMENT OF CALM"), price: "24", desc: t("Róża, lawenda, jaśmin czy poziomka? Twoja kawa ma dziś kwiatowy nastrój.", "Rose, lavender, jasmine or wild strawberry? Give your coffee a floral twist."), cat: "coffee" as Category },
            { img: "taiyaki", title: "Taiyaki", tag: t("JESZCZE COŚ SŁODKIEGO", "SAVE ROOM FOR SOMETHING SWEET"), price: "27", desc: t("Japońskie rybki z mleczną czekoladą lub mochi azuki. Podwójna przyjemność.", "Japanese fish-shaped treats with milk chocolate or mochi azuki. Twice as nice."), cat: "sweet" as Category },
          ].map((item, i) => <a href="#menu" onClick={() => setCategory(item.cat)} className={`favorite-card favorite-${i}`} key={item.title}><div className="favorite-image"><span className="food-number">0{i + 1}</span><Image src={`${base}/images/${item.img}.webp`} alt={item.title} fill sizes="(max-width: 760px) 90vw, 33vw" /></div><div className="favorite-content"><p className="eyebrow">{item.tag}</p><div className="favorite-title"><h3>{item.title}</h3><span>{t("od", "from")} {item.price} zł</span></div><p>{item.desc}</p><span className="food-arrow"><ArrowUpRight size={20} /></span></div></a>)}
        </div></div></section>

      <section id="menu" className="menu-section shell section-pad">
        <div className="section-heading"><div><p className="eyebrow">{t("PROSTO Z NASZEJ KARTY", "STRAIGHT FROM OUR MENU")}</p><h2>{t("Coś dobrego", "Something good")}<br /><em>{t("dla każdego nastroju.", "for every mood.")}</em></h2></div><a className="button outline" href={`${base}/menu-purr-purr.pdf`} target="_blank" rel="noopener noreferrer">{t("Pełne menu PDF · PL / EN", "Full PDF menu · PL / EN")} <ArrowDownToLine size={17} /></a></div>
        <div className="menu-tabs" role="group" aria-label={t("Kategorie menu", "Menu categories")}>{categories.map(c => <button key={c.id} aria-pressed={category === c.id} onClick={() => setCategory(c.id)}>{c.label[languageIndex]}</button>)}</div>
        <div className="menu-items" aria-live="polite" aria-atomic="true">{menu[category].map(item => {
          const title = ru && item.ru ? item.ru : en && item.en ? item.en : item.name;
          return <article className={`menu-item${item.images?.length ? " menu-item-with-images" : ""}`} key={item.name}>
            {item.images?.length ? <div className={`menu-photo-grid menu-photo-grid-${item.images.length}`}>{item.images.map((imageName, index) => <div className="menu-photo" key={imageName}><Image src={`${base}/images/menu/${imageName}.webp`} alt={`${title}${item.images && item.images.length > 1 ? ` · ${index + 1}` : ""}`} fill sizes="(max-width: 760px) 90vw, 45vw" /></div>)}</div> : null}
            <div className="menu-item-copy"><div className="menu-item-title"><h3>{title}</h3><span>{item.price} <small>zł</small></span></div><p>{item.description[languageIndex]}</p></div>
          </article>;
        })}</div>
        <p className="menu-disclaimer">{t("Dania, warianty i ceny przenieśliśmy z dostarczonej karty Purr Purr. Dostępność potwierdź na miejscu. O alergeny zapytaj obsługę.", "Dishes, options and prices were transferred from the supplied Purr Purr menu. Confirm availability at the café and ask the team about allergens.")}</p>
        <div className="lunch-banner"><div className="lunch-main"><div className="lunch-symbol"><Coffee size={31} strokeWidth={1.2} /></div><div><p className="eyebrow">{t("PONIEDZIAŁEK–PIĄTEK · 12:00–15:00", "MONDAY–FRIDAY · 12:00–15:00")}</p><h3>{t("Przerwa na lunch? Mamy pomysł.", "Lunch break? We have a little idea.")}</h3><p>{t("Danie dnia + miso + Ice Tea + lody. Wersja wege lub mięsna.", "Daily main + miso + Ice Tea + ice cream. Veggie or meat option.")}</p></div><div className="lunch-price">41 / 43 <span>zł</span><small>{t("wege / mięsny", "veggie / meat")}</small></div><a href={`${base}/menu-purr-purr.pdf#page=3`} target="_blank" rel="noopener noreferrer" aria-label={t("Zobacz zestawy lunchowe w PDF", "See lunch sets in the PDF")}><ArrowUpRight size={27} /></a></div><div className="lunch-photos">{lunchSets.map(set => <figure className="lunch-photo" key={set.image}><Image src={`${base}/images/menu/${set.image}.webp`} alt={set.label[languageIndex]} fill sizes="(max-width: 760px) 50vw, 20vw" /><figcaption>{set.label[languageIndex]}</figcaption></figure>)}</div></div>
      </section>

      <section id="cats" className="cat-section section-pad"><div className="shell cat-layout"><div className="cat-illustration"><p className="eyebrow">{t("TU RZĄDZĄ KOTY", "THE CATS ARE IN CHARGE HERE")}</p><Cat /><p>{t("Mniej pośpiechu.", "Less rushing.")}<br /><em>{t("Więcej mrrrr.", "More purrrr.")}</em></p><span className="cat-age">12+</span><span className="cat-tiny-paw"><PawPrint size={42} strokeWidth={1} /></span></div>
        <div className="cat-copy"><p className="eyebrow">{t("GOŚCIE W KOCIM ŚWIECIE", "GUESTS IN A CAT’S WORLD")}</p><h2>{t("Ich dom.", "Their home.")}<br /><em>{t("Twoja miła chwila.", "Your happy place.")}</em></h2><p>{t("Kocia Strefa to spokojne miejsce dla gości od 12. roku życia. Dajmy kotom przestrzeń i pozwólmy im decydować, kiedy mają ochotę na towarzystwo.", "The Cat Zone is a calm space for guests aged 12 and over. Give the cats room and let them decide when they would like some company.")}</p><ol className="cat-steps">{[
          [t("Zamów przy barze", "Order at the bar"), t("Każda osoba przy stoliku składa zamówienie i odbiera numerek.", "Everyone at the table places an order and picks up a number.")],
          [t("Poczekaj na zaproszenie", "Wait for an invitation"), t("Obsługa zaprosi Cię do środka. Większe grupy odwiedzają koty po dwie osoby.", "The team will invite you in. Larger groups visit the cats two people at a time.")],
          [t("Poznaj kocie zasady", "Read the Cat Zone rules"), t("Przed wejściem zapoznaj się z regulaminem na miejscu. Spokój kotów jest najważniejszy.", "Read the rules at the café before entering. The cats’ comfort comes first.")],
        ].map(([title, text], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol><a href={`${base}/menu-purr-purr.pdf#page=${en ? "12" : "2"}`} className="text-link" target="_blank" rel="noopener noreferrer">{t("Wskazówki w karcie menu", "Visit guidance in the menu")} <ArrowUpRight size={17} /></a></div>
      </div></section>

      <section id="visit" className="visit shell section-pad"><div className="visit-copy"><p className="eyebrow">{t("DO ZOBACZENIA NA MURANOWIE", "SEE YOU IN MURANÓW")}</p><h2>{t("Wpadnij na kawę.", "Come for coffee.")}<br /><em>{t("Zostań dla klimatu.", "Stay for the feeling.")}</em></h2><p>{t("Na kawę solo, lunch we dwoje albo chwilę z książką. Znajdziesz nas przy ulicy Pokornej, niedaleko metra Dworzec Gdański.", "A solo coffee, lunch for two or a quiet chapter of your book. Find us on Pokorna Street, near Dworzec Gdański metro station.")}</p><div className="visit-address"><MapPin size={24} strokeWidth={1.5} /><div><strong>Pokorna 2/U4</strong><span>{t("00-199 Warszawa · Muranów", "00-199 Warsaw · Muranów")}</span></div></div><div className="visit-buttons"><a href={maps} className="button primary" target="_blank" rel="noopener noreferrer">{t("Pokaż trasę", "Get directions")} <ArrowUpRight size={18} /></a><a className="text-link" href="tel:+48573538888"><Phone size={16} /> +48 573 538 888</a></div></div>
        <div className="visit-card"><span className="visit-card-pin" aria-hidden="true" /><p className="eyebrow">{t("ZAPLANUJ SWOJĄ CHWILĘ", "MAKE A LITTLE TIME")}</p><h3>{t("Zanim wpadniesz", "Before you pop in")}</h3><div className="visit-info"><Coffee strokeWidth={1.3} /><div><h4>{t("Godziny i aktualności", "Hours & what’s new")}</h4><p>{t("Aktualne godziny otwarcia i zmiany w menu sprawdź na Instagramie lub telefonicznie.", "Check Instagram or call for current opening hours and menu updates.")}</p></div></div><div className="visit-info"><PawPrint strokeWidth={1.3} /><div><h4>{t("Kocia Strefa: 12+", "Cat Zone: 12+")}</h4><p>{t("O dostępność miejsc i wizyty większą grupą zapytaj obsługę przed przyjściem.", "Ask the team about available space and group visits before you arrive.")}</p></div></div><a href={instagram} target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={19} /> @purrpurr.wawa <ArrowUpRight size={18} /></a><a href={facebook} target="_blank" rel="noopener noreferrer" className="social-link">Facebook <ArrowUpRight size={18} /></a></div>
      </section>
      <section className="closing"><PawPrint size={24} strokeWidth={1.3} /><p>{t("Dobre rzeczy dzieją się", "Good things happen")} <em>{t("bez pośpiechu.", "when you slow down.")}</em></p><a href={instagram} target="_blank" rel="noopener noreferrer">{t("Codzienność Purr Purr na Instagramie", "A little everyday Purr Purr on Instagram")} <ArrowUpRight size={16} /></a></section>
    </main>
    <footer className="footer shell"><a className="brand footer-brand" href="#"><PawPrint strokeWidth={1.4} /> purr purr</a><p>Pokorna 2/U4 · Warszawa</p><div><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a><a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a><a href={`${base}/menu-purr-purr.pdf`} target="_blank" rel="noopener noreferrer">Menu PDF</a></div></footer>
    <div className="demo-note">{t("Niezależny projekt demonstracyjny", "Independent website concept")} · <a href="https://demo.plexrs.com/">PlexRS</a> · {t("Nieoficjalna strona Purr Purr", "Not the official Purr Purr website")}</div>
  </>;
}
