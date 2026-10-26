const WEDDING_CONFIG = {
    couple: {
        partnerOne: {
            nickname: "Raffi",
            fullName: "Raffi Ahmad",
            parents: "Putra dari Bapak Munawar Ahmad dan Ibu Amy Qanita",
            photo: "src/Raffi Ahmad.png"
        },

        partnerTwo: {
            nickname: "Nagita",
            fullName: "Nagita Slavina",
            parents: "Putri dari Bapak Gideon Tengker dan Ibu Rieta Amilia Beta",
            photo: "src/Nagita Slavina.png"
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
                year: 2004,
                title: "Pertemuan Pertama",
                description: "Dipertemukan di depan kamera saat membintangi sinetron remaja yang sama, tanpa pernah menyangka itu adalah awal dari takdir kami."
            },
            {
                year: 2013,
                title: "Mulai Mengenal",
                description: "Setelah bertahun-tahun menjalani hidup masing-masing, obrolan singkat yang tak sengaja membawa kami belajar mengenal kenyamanan baru."
            },
            {
                year: 2026,
                title: "Satu Kesepakatan",
                description: "Tanpa proses pacaran yang lama, dengan restu penuh dari kedua keluarga, kami mantap memilih untuk melangkah ke pelaminan."
            },
            {
                year: 2026,
                title: "Hari yang Dinanti",
                description: "Sebuah bab baru resmi dimulai di Jakarta dan Bali. Janji suci terucap untuk merayakan selamanya bersama orang-orang terkasih."
            }
        ]
    },

    event: {
        titleLineOne: "The day",
        titleLineTwo: "we say yes.",
        subtitle: "Dengan restu dan doa keluarga, kami menantikan kehadiran Anda.",
        countdownLabel: "MENUJU HARI BAHAGIA",
        countdownNote: "Sampai jumpa di hari yang kami nantikan.",
        cardLabel: "Hari Pernikahan",
        eyebrow: "AKAD NIKAH",
        cardTitle: "Awal Sebuah Janji",
        dressCode: "BUSANA: FORMAL / TRADISIONAL",
        dressEyebrow: "BUSANA NUSANTARA",
        dressNote: "Kami akan senang bila Anda mengenakan batik, kebaya, atau busana adat dari daerah Anda masing-masing."
    },

    location: {
        eyebrow: "TEMUKAN KAMI",
        titleLineOne: "Meet us where",
        titleLineTwo: "stories gather.",
        description: "Kami memilih sebuah ruang yang hangat untuk menyambut keluarga dan sahabat. Simpan alamat ini agar perjalanan Anda lebih mudah.",
        addressLabel: "TEMPAT ACARA",
        mapCaption: "Peta dapat digeser dan diperbesar."
    },

    wishes: {
        titleLineOne: "Kind words,",
        titleLineTwo: "kept with care.",
        subtitle: "Tinggalkan ucapan dan doa untuk kami. Setiap kata akan kami simpan dengan baik.",
        storageKey: "wedding.wishes",
        maxNameLength: 40,
        maxMessageLength: 280,
        samples: [
            {
                name: "Ardiansyah Dheva",
                message: "Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
                date: "2026-10-24"
            },
            {
                name: "Galang Paling Gacor",
                message: "Akhirnya! Bahagia selalu untuk kalian berdua.",
                date: "2026-10-19"
            },
            {
                name: "Mamah Agnes",
                message: "Akhirnya sah juga! Selamat ya...",
                date: "2026-10-05"
            },
            {
                name: "your best friend",
                message: "Selamat ya! Sampai jumpa di hari bahagia kalian.",
                date: "2026-09-30"
            },
            {
                name: "Tante Rina",
                message: "Doa terbaik untuk kalian berdua. Semoga selalu rukun, saling menyayangi, dan diberkahi sepanjang hidup.",
                date: "2026-09-06"
            }
        ]
    },

    nusantara: {
        aksaraWelcome: "ꦱꦸꦒꦼꦁꦫꦮꦸꦃ",
        aksaraThanks: "ꦩꦠꦸꦂꦤꦸꦮꦸꦤ꧀"
    },

    closing: {
        eyebrow: "SAMPAI DI HARI BAHAGIA",
        titleLineOne: "Terima kasih telah",
        titleLineTwo: "menjadi bagian cerita.",
        text: "Merupakan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
        // credit: "DIBUAT DENGAN CINTA & RASA",
        shareText: "Kami mengundang Anda ke hari pernikahan kami."
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
        building: "Hotel The Ritz-Carlton",
        street: " Jl. Jenderal Sudirman Kav. 52-53",
        district: "Kebayoran Baru",
        city: "Jakarta Selatan",
        province: "DKI Jakarta",
        country: "Indonesia",
        postalCode: "12190",

        mapEmbedUrl: ""
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

function formatWeddingDate(upperCase = true) {
    const { locale, timeZone } = WEDDING_CONFIG.wedding;

    const text = new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone
    }).format(getWeddingDate());

    return upperCase ? text.toLocaleUpperCase(locale) : text;
}

function formatWeddingDateShort() {
    const [year, month, day] = WEDDING_CONFIG.wedding.date.split("-");
    return `${day} · ${month} · ${year}`;
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

function getVenueMapEmbedUrl() {
    const { mapEmbedUrl } = WEDDING_CONFIG.venue;

    if (mapEmbedUrl) {
        return mapEmbedUrl;
    }

    return `https://maps.google.com/maps?q=${encodeURIComponent(getVenueFullAddress())}&z=15&output=embed`;
}


function getInitial(name) {
    const firstWord = String(name || "").trim().split(/\s+/)[0] || "";
    return Array.from(firstWord)[0]?.toLocaleUpperCase(WEDDING_CONFIG.wedding.locale) || "";
}

function getCopyrightText() {
    const { couple, wedding } = WEDDING_CONFIG;
    const year = wedding.date.split("-")[0];

    return `${couple.partnerOne.nickname} & ${couple.partnerTwo.nickname} © ${year}`.toLocaleUpperCase(wedding.locale);
}


function resolveConfigValue(path) {
    const formattedValues = {
        "wedding.dateLong": formatWeddingDate(),
        "wedding.dateFull": formatWeddingDate(false),
        "wedding.dateShort": formatWeddingDateShort(),
        "wedding.dayName": new Intl.DateTimeFormat(
            WEDDING_CONFIG.wedding.locale,
            {weekday: "long", timeZone: WEDDING_CONFIG.wedding.timeZone}
        ).format(getWeddingDate()),

        "wedding.ceremonyTimeDisplay":`${WEDDING_CONFIG.wedding.ceremonyTime} WIB`,
        "wedding.receptionTimeDisplay":`${WEDDING_CONFIG.wedding.receptionTime} WIB`,
        "venue.cityProvince": getVenueCityProvince(),
        "venue.cityUpper": String(WEDDING_CONFIG.venue.city).toLocaleUpperCase(WEDDING_CONFIG.wedding.locale),
        "venue.buildingCity": [WEDDING_CONFIG.venue.building, WEDDING_CONFIG.venue.city].filter(Boolean).join(", "),
        "venue.fullAddress": getVenueFullAddress(),
        "story.yearRange": getStoryYearRange(),
        "closing.copyright": getCopyrightText()
    };

    if (Object.prototype.hasOwnProperty.call(formattedValues, path)) {
        return formattedValues[path];
    }

    return getConfigValue(path);
}


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

    document.querySelectorAll("[data-venue-map-embed]").forEach((frame) => {
        frame.src = getVenueMapEmbedUrl();
    });

    applyPartnerPhotos();
}


function applyPartnerPhotos() {
    document.querySelectorAll("[data-config-photo]").forEach((element) => {
        const partner = getConfigValue(element.dataset.configPhoto);
        if (!partner) return;

        if (partner.photo) {
            const photoUrl = new URL(partner.photo, document.baseURI).href;
            element.style.setProperty("--img", `url("${photoUrl}")`);
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

    let countdownInterval = null;

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

        if (difference <= 0 && countdownInterval !== null) {
            window.clearInterval(countdownInterval);
        }
    }

    updateCountdown();
    countdownInterval = window.setInterval(
        updateCountdown,
        1000
    );
}


let savedWishes = readSavedWishes();

function readSavedWishes() {
    try {
        const data = JSON.parse(window.localStorage.getItem(WEDDING_CONFIG.wishes.storageKey));
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return [];
    }
}

function saveWish(wish) {
    savedWishes = [wish, ...savedWishes].slice(0, 50);

    try {
        window.localStorage.setItem(WEDDING_CONFIG.wishes.storageKey, JSON.stringify(savedWishes));
    } catch (error) {
    }
}

function formatWishDate(value) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    const { locale, timeZone } = WEDDING_CONFIG.wedding;

    return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone
    }).format(date);
}

function renderWishes() {
    const list = document.getElementById("wishes-list");
    const count = document.getElementById("wishes-count");

    if (!list) {
        return;
    }

    const wishes = [...savedWishes, ...WEDDING_CONFIG.wishes.samples];
    list.replaceChildren();

    if (count) {
        count.textContent = `UCAPAN · ${wishes.length}`;
    }

    wishes.forEach((wish) => {
        const item = document.createElement("li");
        item.className = "wish-item";

        const head = document.createElement("div");
        head.className = "wish-head";

        const name = document.createElement("strong");
        name.className = "wish-name";
        name.textContent = wish.name;

        const date = document.createElement("span");
        date.className = "wish-time";
        date.textContent = formatWishDate(wish.date);

        const message = document.createElement("p");
        message.className = "wish-message";
        message.textContent = wish.message;

        head.append(name, date);
        item.append(head, message);
        list.appendChild(item);
    });
}

function initWishes() {
    const form = document.getElementById("wishes-form");

    if (!form) {
        return;
    }

    const nameInput = document.getElementById("wish-name");
    const messageInput = document.getElementById("wish-message");
    const counter = document.getElementById("wish-counter");
    const status = document.getElementById("wishes-status");
    const list = document.getElementById("wishes-list");

    const { maxNameLength, maxMessageLength } = WEDDING_CONFIG.wishes;

    nameInput.maxLength = maxNameLength;
    messageInput.maxLength = maxMessageLength;
    counter.textContent = String(maxMessageLength);

    // Nama tamu dari URL (?to=...) dipakai sebagai isian awal
    const guestName = (document.getElementById("guest-name")?.textContent || "").trim();
    if (guestName && guestName !== WEDDING_CONFIG.invitation.defaultGuestName) {
        nameInput.value = guestName.slice(0, maxNameLength);
    }

    function showStatus(text, type) {
        status.textContent = text;
        status.className = "wishes-status" + (type ? ` is-${type}` : "");
    }

    messageInput.addEventListener("input", () => {
        counter.textContent = String(maxMessageLength - messageInput.value.length);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !message) {
            showStatus("Mohon isi nama dan ucapan Anda.", "error");
            (name ? messageInput : nameInput).focus();
            return;
        }

        saveWish({ name, message, date: new Date().toISOString() });
        renderWishes();

        messageInput.value = "";
        counter.textContent = String(maxMessageLength);
        list.scrollTop = 0;
        showStatus("Terima kasih, ucapan Anda sudah tersimpan.", "success");
    });

    renderWishes();
}


function setupShareButton() {
    const button = document.getElementById("share-invitation");
    const label = document.getElementById("share-label");

    if (!button || !label) {
        return;
    }

    const defaultLabel = label.textContent;

    button.addEventListener("click", async () => {
        const url = new URL(window.location.href);
        url.search = "";
        url.hash = "";

        const shareUrl = url.toString();

        try {
            if (navigator.share) {
                await navigator.share({
                    title: document.title,
                    text: WEDDING_CONFIG.closing.shareText,
                    url: shareUrl
                });
                return;
            }

            await navigator.clipboard.writeText(shareUrl);
            label.textContent = "Tautan tersalin";
            window.setTimeout(() => { label.textContent = defaultLabel; }, 2200);
        } catch (error) {
            if (error && error.name === "AbortError") {
                return;
            }

            window.prompt("Salin tautan undangan:", shareUrl);
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const cover = document.getElementById("invitation-cover");
    const openButton = document.getElementById("open-invitation");
    const heroTitle = document.getElementById("hero-title");
    const nav = document.getElementById("site-nav");
    const main = document.getElementById("main");
    const footer = document.getElementById("site-footer");
    const menu = document.getElementById("menu");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior = reduceMotion ? "auto" : "smooth";
    applyWeddingConfig();
    applyGuestName();
    renderStoryTimeline();
    startCountdown();
    setupShareButton();
    initWishes();
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

        if (footer) {
            footer.removeAttribute("inert");
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

    if (nav) {
        const updateNavigation = () => {nav.classList.toggle("scrolled", window.scrollY > 40);};
        window.addEventListener("scroll", updateNavigation, {passive: true});
        updateNavigation();
    }

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