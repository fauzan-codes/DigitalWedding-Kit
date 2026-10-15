const WEDDING_CONFIG = {
    couple: {
        partnerOne: {
            nickname: "Nama1",
            fullName: "Nama Lengkap Pasangan Pertama",
            parents: "Putra dari Bapak dan Ibu ...",
            photo: "src/partner-one.jpg"
        },

        partnerTwo: {
            nickname: "Nama2",
            fullName: "Nama Lengkap Pasangan Kedua",
            parents: "Putri dari Bapak dan Ibu ...",
            photo: "src/partner-two.jpg"
        }
    },

    invitation: {
        pageTitle: "Undangan Pernikahan",
        coverEyebrow: "UNDANGAN PERNIKAHAN",
        heroEyebrow: "KAMI MENGUNDANG ANDA KE PERNIKAHAN",
        tagline: "Satu Hati, Banyak Cerita",
        greetingText: "Dengan penuh syukur, kami mengundang Bapak, Ibu, dan Saudara untuk hadir dan memberikan doa restu pada hari bahagia kami.",
        greetingSign: "Salam hangat dari kami dan keluarga",
        coupleEyebrow: "KEDUA MEMPELAI",
        coupleTitle: "Dua Keluarga, Satu Ikatan",
        defaultGuestName: "Tamu Undangan",
        guestQueryParameter: "to"
    },

    story: {
        titleLineOne: "A little story",
        titleLineTwo: "called us.",
        description: "Ada pertemuan yang terlihat sederhana, sampai waktu menunjukkan bahwa ia sedang membawa kita pulang.",

        stampLabel: "CATATAN KECIL",

        chapters: [
            {
                year: 2018,
                title: "Pertemuan Pertama",
                description: "Di sebuah acara kampus, obrolan singkat berubah menjadi awal dari cerita yang tak pernah kami rencanakan."
            },
            {
                year: 2019,
                title: "Mulai Mengenal",
                description: "Kami belajar mengenal hal-hal kecil, bertumbuh bersama, dan menemukan nyaman dalam kesederhanaan."
            },
            {
                year: 2022,
                title: "Satu Kesepakatan",
                description: "Dengan restu keluarga, kami memilih untuk melangkah lebih jauh dan menjaga cerita ini bersama-sama."
            },
            {
                year: 2026,
                title: "Hari yang Dinanti",
                description: "Sebuah bab baru dimulai. Kali ini, kami ingin merayakannya bersama orang-orang terkasih."
            }
        ]
    },

    wedding: {
        date: "2026-12-30",
        timeZone: "Asia/Jakarta",
        locale: "id-ID",
        utcOffset: "+07:00",
        ceremonyTime: "08:00",
        receptionTime: "11:00"
    },

    venue: {
        building: "Nama Gedung Pernikahan",
        street: "Jalan Contoh Nomor 123",
        district: "",
        city: "Yogyakarta",
        province: "DI Yogyakarta",
        country: "Indonesia",
        postalCode: ""
    }
};

function getConfigValue(path) {
    return path.split(".").reduce((currentValue, key) => {
        if (currentValue == null) {
            return undefined;
        }
        return currentValue[key];
    }, WEDDING_CONFIG);
}

function getWeddingDate() {
    const { date, utcOffset } = WEDDING_CONFIG.wedding;
    return new Date(`${date}T12:00:00${utcOffset}`);
}

function formatWeddingDate() {
    const { locale, timeZone } = WEDDING_CONFIG.wedding;

    return new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone
    }).format(getWeddingDate()).toLocaleUpperCase(locale);
}

function getVenueCityProvince() {
    const { city, province } = WEDDING_CONFIG.venue;
    return [city, province].filter(Boolean).join(", ");
}

function getVenueFullAddress() {
    const {building, street, district, city, province, country, postalCode} = WEDDING_CONFIG.venue;
    return [building, street, district, city, province, postalCode, country].filter(Boolean).join(", ");
}


function getStoryYearRange() {
    const chapters = WEDDING_CONFIG.story?.chapters ?? [];
    const years = chapters.map((chapter) => Number(chapter.year)).filter((year) => Number.isFinite(year));

    if (years.length === 0) {
        return "";
    }

    const firstYear = Math.min(...years);
    const lastYear = Math.max(...years);

    return `${firstYear} — ${lastYear}`;
}

function getVenueMapsUrl() {
    const address = getVenueFullAddress();
    return `https://www.google.com/maps/search/?api=1&query=${
        encodeURIComponent(address)
    }`;
}


function getInitial(name) {
    const firstWord = String(name || "").trim().split(/\s+/)[0] || "";
    return Array.from(firstWord)[0]?.toLocaleUpperCase(WEDDING_CONFIG.wedding.locale) || "";
}


function resolveConfigValue(path) {
    const formattedValues = {
        "wedding.dateLong": formatWeddingDate(),
        "wedding.dayName": new Intl.DateTimeFormat(
            WEDDING_CONFIG.wedding.locale,
            {weekday: "long", timeZone: WEDDING_CONFIG.wedding.timeZone}
        ).format(getWeddingDate()),

        "wedding.ceremonyTimeDisplay":`${WEDDING_CONFIG.wedding.ceremonyTime} WIB`,
        "wedding.receptionTimeDisplay":`${WEDDING_CONFIG.wedding.receptionTime} WIB`,
        "venue.cityProvince": getVenueCityProvince(),
        "venue.fullAddress": getVenueFullAddress(),
        "story.yearRange": getStoryYearRange()
    };

    if (Object.prototype.hasOwnProperty.call(formattedValues, path)) {
        return formattedValues[path];
    }

    return getConfigValue(path);
}

// menerapkan config ke html
function applyWeddingConfig() {
    const { couple, invitation } = WEDDING_CONFIG;
    document.title = `${couple.partnerOne.nickname} & ` + `${couple.partnerTwo.nickname} | ${invitation.pageTitle}`;

    document.querySelectorAll("[data-config]").forEach((element) => {
        const path = element.dataset.config;
        const value = resolveConfigValue(path);

        if (value !== undefined && value !== null) {
            element.textContent = String(value);
        }
    });

    const initialOne = document.getElementById("nav-initial-one");
    const initialTwo = document.getElementById("nav-initial-two");

    if (initialOne) {
        initialOne.textContent = getInitial(couple.partnerOne.nickname);
    }

    if (initialTwo) {
        initialTwo.textContent = getInitial(couple.partnerTwo.nickname);
    }

    document.querySelectorAll("[data-venue-map-link]").forEach((link) => {
        link.href = getVenueMapsUrl();
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    applyPartnerPhotos();
}


function applyPartnerPhotos() {
    document.querySelectorAll("[data-config-photo]").forEach((element) => {
        const partner = getConfigValue(element.dataset.configPhoto);

        if (!partner) {
            return;
        }

        if (partner.photo) {
            element.style.setProperty("--img", `url("${encodeURI(partner.photo)}")`);
        }

        element.setAttribute("aria-label", `Foto ${partner.nickname}`);
    });
}


function renderStoryTimeline() {
    const timeline = document.getElementById("story-timeline");
    if (!timeline) {
        return;
    }

    const chapters = WEDDING_CONFIG.story?.chapters ?? [];
    timeline.replaceChildren();

    chapters.forEach((chapter, index) => {
        const item = document.createElement("article");
        item.className = "story-item";
        item.setAttribute("data-reveal", "");
        item.style.setProperty("--story-delay", `${index * 100}ms`);

        const year = document.createElement("p");
        year.className = "story-year";
        year.textContent = String(chapter.year ?? "");

        const marker = document.createElement("span");
        marker.className = "story-marker";
        marker.setAttribute("aria-hidden", "true");

        const content = document.createElement("div");
        content.className = "story-item-content";

        const label = document.createElement("p");
        label.className = "story-chapter-label";
        label.textContent = `CHAPTER ${String(index + 1).padStart(2, "0")}`;

        const title = document.createElement("h3");
        title.className = "story-item-title";
        title.textContent = chapter.title ?? "";

        const description = document.createElement("p");
        description.className = "story-item-description";
        description.textContent = chapter.description ?? "";

        content.append(label, title, description);
        item.append(year, marker, content);

        timeline.appendChild(item);
    });
}


function startRevealOnScroll(reduceMotion) {
    const items = document.querySelectorAll("[data-reveal]");

    if (!items.length) {
        return;
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }});
    }, { threshold: 0.2 });

    items.forEach((item) => observer.observe(item));
}


function applyGuestName() {
    const guestNameElement = document.getElementById("guest-name");

    if (!guestNameElement) {
        return;
    }

    const {defaultGuestName, guestQueryParameter} = WEDDING_CONFIG.invitation;
    const params = new URLSearchParams(window.location.search);
    const rawName = (params.get(guestQueryParameter) || "").trim();
    const displayName = rawName? rawName.replace(/[-_]+/g, " ").slice(0, 60): defaultGuestName;

    guestNameElement.textContent = displayName;
}


function startCountdown() {
    const countdownElements = document.querySelectorAll("[data-countdown]");
    if (!countdownElements.length) {
        return;
    }

    const { date, ceremonyTime, utcOffset } = WEDDING_CONFIG.wedding;
    const targetDate = new Date(`${date}T${ceremonyTime}:00${utcOffset}`);

    if (Number.isNaN(targetDate.getTime())) {
        console.error("Invalid wedding date or ceremony time.");
        return;
    }

    function updateCountdown() {
        const difference = Math.max(0, targetDate.getTime() - Date.now());
        const totalSeconds = Math.floor(difference / 1000);
        const values = {
            days: Math.floor(totalSeconds / 86400),
            hours: Math.floor((totalSeconds % 86400) / 3600),
            minutes: Math.floor((totalSeconds % 3600) / 60),
            seconds: totalSeconds % 60
        };

        countdownElements.forEach((element) => {const unit = element.dataset.countdown;
            if (Object.prototype.hasOwnProperty.call(values, unit)) {
                const value = values[unit];
                element.textContent = unit === "days"? String(value): String(value).padStart(2, "0");
            }
        });

        if (difference <= 0) {
            window.clearInterval(countdownInterval);
        }
    }

    updateCountdown();
    const countdownInterval = window.setInterval(
        updateCountdown,
        1000
    );
}


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const cover = document.getElementById("invitation-cover");
    const openButton = document.getElementById("open-invitation");
    const heroTitle = document.getElementById("hero-title");
    const nav = document.getElementById("site-nav");
    const main = document.getElementById("main");
    const menu = document.getElementById("menu");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior = reduceMotion ? "auto" : "smooth";
    applyWeddingConfig();
    applyGuestName();
    renderStoryTimeline();
    startCountdown();
    startRevealOnScroll(reduceMotion);

    /* ---------- 1. Open invitation ---------- */
    function openInvitation() {
        if (!cover || !openButton) {
            return;
        }

        body.classList.remove("is-locked");
        body.classList.add("opened");
        window.scrollTo(0, 0);

        if (nav) {
            nav.removeAttribute("inert");
        }

        if (main) {
            main.removeAttribute("inert");
        }

        let finished = false;
        function finish() {
            if (finished) {
                return;
            }

            finished = true;
            cover.hidden = true;

            if (heroTitle) {
                heroTitle.focus({ preventScroll: true });
            }
        }

        cover.addEventListener("transitionend", (event) => {
            if (event.target === cover && event.propertyName === "transform") {
                finish();
            }
        });

        cover.classList.add("leaving");
        window.setTimeout(finish, reduceMotion ? 50 : 1500);
    }

    if (openButton && cover) {
        openButton.addEventListener("click", openInvitation, {once: true});
        openButton.focus({ preventScroll: true });
    }

    /* ---------- 2. Navigation appearance on scroll ---------- */
    if (nav) {
        const updateNavigation = () => {nav.classList.toggle("scrolled", window.scrollY > 40);};
        window.addEventListener("scroll", updateNavigation, {passive: true});
        updateNavigation();
    }

    /* ---------- 3. Smooth scrolling and offcanvas menu ---------- */
    const offcanvas = (window.bootstrap?.Offcanvas && menu)? window.bootstrap.Offcanvas.getOrCreateInstance(menu): null;

    document.querySelectorAll("[data-scroll]").forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetSelector = link.getAttribute("href");
            if (!targetSelector || !targetSelector.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetSelector);
            if (!target) {
                return;
            }

            event.preventDefault();
            const scrollToTarget = () => {target.scrollIntoView({behavior: scrollBehavior, block: "start"});};

            if (menu?.classList.contains("show") && offcanvas) {
                menu.addEventListener("hidden.bs.offcanvas", scrollToTarget, { once: true });
                offcanvas.hide();
            } else {
                scrollToTarget();
            }
        });
    });
});