// ==UserScript==
// @name         Spotify Downloader - Download Spotify Songs to MP3 - Spotriff
// @name:ar      مُحمِّل Spotify - تحميل أغاني Spotify بصيغة MP3 - Spotriff
// @name:bg      Spotify изтегляч - Изтегляне на Spotify песни в MP3 - Spotriff
// @name:cs      Spotify Downloader - Stažení skladeb ze Spotify do MP3 - Spotriff
// @name:da      Spotify-downloader - Download Spotify-sange til MP3 - Spotriff
// @name:de      Spotify-Downloader – Spotify-Songs als MP3 herunterladen – Spotriff
// @name:el      Λήψη Spotify - Κατεβάστε τραγούδια Spotify σε MP3 - Spotriff
// @name:en      Spotify Downloader - Download Spotify Songs to MP3 - Spotriff
// @name:eo      Spotify-elŝutilo - Elŝutu Spotify-kantojn al MP3 - Spotriff
// @name:es      Descargador de Spotify - Descarga canciones de Spotify a MP3 - Spotriff
// @name:es-419  Descargador de Spotify - Descarga canciones de Spotify a MP3 - Spotriff
// @name:fi      Spotify-lataaja - Lataa Spotify-kappaleita MP3-muodossa - Spotriff
// @name:fr      Téléchargeur Spotify - Téléchargez des chansons Spotify en MP3 - Spotriff
// @name:fr-CA   Téléchargeur Spotify - Téléchargez des chansons Spotify en MP3 - Spotriff
// @name:he      מוריד Spotify - הורדת שירי Spotify ל-MP3 - Spotriff
// @name:hr      Spotify preuzimač - Preuzmite Spotify pjesme u MP3 - Spotriff
// @name:hu      Spotify letöltő - Spotify dalok letöltése MP3-ba - Spotriff
// @name:id      Pengunduh Spotify - Unduh lagu Spotify ke MP3 - Spotriff
// @name:it      Downloader Spotify - Scarica brani Spotify in MP3 - Spotriff
// @name:ja      Spotifyダウンローダー - Spotifyの曲をMP3でダウンロード - Spotriff
// @name:ka      Spotify ჩამოტვირთვა - Spotify სიმღერების MP3-ში ჩამოტვირთვა - Spotriff
// @name:ko      Spotify 다운로더 - Spotify 노래를 MP3로 다운로드 - Spotriff
// @name:nb      Spotify-nedlaster - Last ned Spotify-sanger til MP3 - Spotriff
// @name:nl      Spotify-downloader - Download Spotify-nummers naar MP3 - Spotriff
// @name:pl      Pobieracz Spotify - Pobieraj utwory ze Spotify do MP3 - Spotriff
// @name:pt-BR   Baixador do Spotify - Baixe músicas do Spotify em MP3 - Spotriff
// @name:ro      Descărcător Spotify - Descarcă melodii Spotify în MP3 - Spotriff
// @name:ru      Загрузчик Spotify - Скачивание песен Spotify в MP3 - Spotriff
// @name:sv      Spotify-nedladdare - Ladda ner Spotify-låtar till MP3 - Spotriff
// @name:th      ดาวน์โหลด Spotify - ดาวน์โหลดเพลง Spotify เป็น MP3 - Spotriff
// @name:tr      Spotify İndirici - Spotify şarkılarını MP3 olarak indirin - Spotriff
// @name:uk      Завантажувач Spotify - Завантаження пісень Spotify у MP3 - Spotriff
// @name:ug      Spotify چۈشۈرگۈچ - Spotify ناخشىلىرىنى MP3 فورماتىدا چۈشۈرۈش - Spotriff
// @name:vi      Trình tải Spotify - Tải bài hát Spotify sang MP3 - Spotriff
// @name:zh-CN   Spotify下载器 - 免费下载Spotify歌曲为MP3 - Spotriff
// @name:zh-TW   Spotify下載器 - 免費下載Spotify歌曲為MP3 - Spotriff
// @namespace    spotriff_userscript_v
// @author       Spotriff.com
// @version      1.1.1
// @icon         https://www.google.com/s2/favicons?domain=spotify.com&sz=64
// @description  Download Spotify songs, albums, and playlists to MP3 for free with Spotriff. Fast, high-quality Spotify downloader with no registration or software installation required.
// @description:ar    حمّل أغاني Spotify والألبومات وقوائم التشغيل بصيغة MP3 مجانًا مع Spotriff. مُحمِّل Spotify سريع وعالي الجودة دون تسجيل أو تثبيت برامج.
// @description:bg    Изтеглете безплатно песни, албуми и плейлисти от Spotify в MP3 с Spotriff. Бърз и висококачествен Spotify изтегляч без регистрация или инсталиране на софтуер.
// @description:cs    Stáhněte si zdarma skladby, alba a playlisty ze Spotify do MP3 pomocí Spotriff. Rychlý vysoce kvalitní Spotify downloader bez registrace a instalace softwaru.
// @description:da    Download Spotify-sange, -albums og -playlister til MP3 gratis med Spotriff. Hurtig, højkvalitets Spotify-downloader uden registrering eller softwareinstallation.
// @description:de    Laden Sie Spotify-Songs, -Alben und -Playlists kostenlos als MP3 mit Spotriff herunter. Schneller, hochwertiger Spotify-Downloader ohne Registrierung oder Softwareinstallation.
// @description:el    Κατεβάστε δωρεάν τραγούδια, άλμπουμ και playlists από Spotify σε MP3 με το Spotriff. Γρήγορος, υψηλής ποιότητας λήπτης Spotify χωρίς εγγραφή ή εγκατάσταση λογισμικού.
// @description:en    Download Spotify songs, albums, and playlists to MP3 for free with Spotriff. Fast, high-quality Spotify downloader with no registration or software installation required.
// @description:eo    Elŝutu senkoste kantojn, albumojn kaj ludlistojn el Spotify al MP3 per Spotriff. Rapida, altkvalita Spotify-elŝutilo sen registrado aŭ programinstalaĵo.
// @description:es    Descarga gratis canciones, álbumes y listas de reproducción de Spotify en MP3 con Spotriff. Descargador de Spotify rápido y de alta calidad sin registro ni instalación de software.
// @description:es-419 Descarga gratis canciones, álbumes y listas de reproducción de Spotify en MP3 con Spotriff. Descargador de Spotify rápido y de alta calidad sin registro ni instalación de software.
// @description:fi    Lataa Spotify-kappaleita, -albumeita ja -soittolistoja MP3-muodossa ilmaiseksi Spotriffin avulla. Nopea, korkealaatuinen Spotify-lataaja ilman rekisteröitymistä tai ohjelmiston asennusta.
// @description:fr    Téléchargez gratuitement des chansons, albums et playlists Spotify en MP3 avec Spotriff. Téléchargeur Spotify rapide et de haute qualité, sans inscription ni installation de logiciel.
// @description:fr-CA Téléchargez gratuitement des chansons, albums et listes de lecture Spotify en MP3 avec Spotriff. Téléchargeur Spotify rapide et de haute qualité, sans inscription ni installation de logiciel.
// @description:he    הורידו בחינם שירים, אלבומים ופלייליסטים מ-Spotify ל-MP3 עם Spotriff. מוריד Spotify מהיר ואיכותי ללא הרשמה או התקנת תוכנה.
// @description:hr    Besplatno preuzmite Spotify pjesme, albume i playliste u MP3 formatu pomoću Spotriffa. Brz, visokokvalitetan Spotify preuzimač bez registracije ili instalacije softvera.
// @description:hu    Töltse le ingyen a Spotify dalokat, albumokat és lejátszási listákat MP3 formátumban a Spotriff segítségével. Gyors, kiváló minőségű Spotify letöltő regisztráció és szoftvertelepítés nélkül.
// @description:id    Unduh lagu, album, dan playlist Spotify ke MP3 secara gratis dengan Spotriff. Pengunduh Spotify yang cepat dan berkualitas tinggi tanpa registrasi atau instalasi perangkat lunak.
// @description:it    Scarica gratuitamente brani, album e playlist di Spotify in MP3 con Spotriff. Downloader Spotify veloce e di alta qualità senza registrazione o installazione di software.
// @description:ja    SpotriffでSpotifyの曲、アルバム、プレイリストを無料でMP3形式でダウンロード。登録やソフトウェアのインストール不要の高速・高品質なSpotifyダウンローダーです。
// @description:ka    Spotriff-ით უფასოდ ჩამოტვირთეთ Spotify-ის სიმღერები, ალბომები და პლეილისტები MP3-ში. სწრაფი, მაღალი ხარისხის Spotify ჩამოტვირთვა რეგისტრაციისა და პროგრამის დაყენების გარეშე.
// @description:ko    Spotriff로 Spotify 노래, 앨범, 재생 목록을 무료로 MP3로 다운로드하세요. 회원가입이나 소프트웨어 설치 없이 빠르고 고품질의 Spotify 다운로더입니다.
// @description:nb    Last ned Spotify-sanger, -album og -spillelister til MP3 gratis med Spotriff. Rask, høykvalitets Spotify-nedlaster uten registrering eller programvareinstallasjon.
// @description:nl    Download gratis Spotify-nummers, -albums en -afspeellijsten naar MP3 met Spotriff. Snelle, hoogwaardige Spotify-downloader zonder registratie of software-installatie.
// @description:pl    Pobieraj za darmo utwory, albumy i playlisty ze Spotify do MP3 za pomocą Spotriff. Szybki, wysokiej jakości pobieracz Spotify bez rejestracji i instalacji oprogramowania.
// @description:pt-BR Baixe músicas, álbuns e playlists do Spotify em MP3 gratuitamente com o Spotriff. Baixador de Spotify rápido e de alta qualidade, sem cadastro ou instalação de software.
// @description:ro    Descărcați gratuit melodii, albume și playlisturi Spotify în MP3 cu Spotriff. Descărcător Spotify rapid și de înaltă calitate, fără înregistrare sau instalare de software.
// @description:ru    Бесплатно скачивайте песни, альбомы и плейлисты Spotify в MP3 с помощью Spotriff. Быстрый, высококачественный загрузчик Spotify без регистрации и установки программ.
// @description:sv    Ladda ner Spotify-låtar, -album och spellistor till MP3 gratis med Spotriff. Snabb, högkvalitativ Spotify-nedladdare utan registrering eller programinstallation.
// @description:th    ดาวน์โหลดเพลง อัลบั้ม และเพลย์ลิสต์ Spotify เป็น MP3 ฟรีด้วย Spotriff ตัวดาวน์โหลด Spotify ที่รวดเร็ว คุณภาพสูง ไม่ต้องลงทะเบียนหรือติดตั้งซอฟต์แวร์
// @description:tr    Spotriff ile Spotify şarkılarını, albümlerini ve çalma listelerini ücretsiz olarak MP3'e indirin. Kayıt veya yazılım kurulumu gerektirmeyen hızlı, yüksek kaliteli Spotify indirici.
// @description:uk    Безкоштовно завантажуйте пісні, альбоми та плейлисти Spotify у MP3 за допомогою Spotriff. Швидкий, високоякісний завантажувач Spotify без реєстрації та встановлення програмного забезпечення.
// @description:ug    Spotriff ئارقىلىق Spotify ناخشىلىرى، ئالبوملىرى ۋە قويۇش تىزىملىكلىرىنى ھەقسىز MP3 فورماتىدا چۈشۈرۈڭ. تىز ۋە يۇقىرى سۈپەتلىك Spotify چۈشۈرگۈچى، خەتلەشتۈرۈش ۋە يۇمشاق دېتال ئورنىتىشنى تەلەپ قىلمايدۇ.
// @description:vi    Tải miễn phí bài hát, album và playlist Spotify sang MP3 với Spotriff. Trình tải Spotify nhanh, chất lượng cao, không cần đăng ký hay cài đặt phần mềm.
// @description:zh-CN 使用 Spotriff 免费将 Spotify 歌曲、专辑和播放列表下载为 MP3。快速高质量的 Spotify 下载器，无需注册或安装软件。
// @description:zh-TW 使用 Spotriff 免費將 Spotify 歌曲、專輯和播放清單下載為 MP3。快速高品質的 Spotify 下載器，無需註冊或安裝軟體。
// @match        https://open.spotify.com/*
// @noframes
// @license      MIT
// @grant        GM_openInTab
// @grant        GM.openInTab
// ==/UserScript==

(function () {
    'use strict';

    let debounceTimer = null;
    let playerAnchorPollTimer = null;
    let pendingPlayerAnchor = null;

    function extractTrackIds() {
        const ids = new Set();
        document.querySelectorAll('aside a[href]').forEach((link) => {
            const href = link.getAttribute('href');
            if (!href) return;

            const uriMatch = href.match(/spotify:track:([a-zA-Z0-9]+)/);
            const webMatch = href.match(/track\/([a-zA-Z0-9]+)/);

            if (uriMatch) ids.add(uriMatch[1]);
            if (webMatch) ids.add(webMatch[1]);
        });
        return [...ids];
    }

    function buildDownloadUrl(trackId) {
        return `https://www.spotriff.com/en?no=100&url=https://open.spotify.com/track/${trackId}`;
    }

    function createDownloadSvg(color = '#1ed760', size = 20) {
        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('class', 'icon');
        svg.setAttribute('viewBox', '0 0 1045 1024');
        svg.setAttribute('xmlns', svgNS);
        svg.setAttribute('width', String(size));
        svg.setAttribute('height', String(size));

        [
            'M503.806 583.233c2.47 3.347 5.795 5.422 9.469 5.422s6.998-2.075 9.469-5.422l198.018-268.933c1.328-1.81 1.849-4.715 1.142-7.332-0.731-2.595-2.454-4.194-4.279-4.194h-128.113v-273.353c0-5.11-1.351-10.221-4.047-14.059-2.702-3.922-6.252-5.881-9.787-5.881h-124.78c-3.534 0-7.084 1.949-9.787 5.881-2.704 3.844-4.047 8.956-4.047 14.059v273.353h-128.121c-1.825 0-3.55 1.6-4.279 4.194-0.706 2.618-0.208 5.508 1.142 7.332l198.002 268.933z',
            'M881.309 622.062l-119.507-82.941h-74.672l125.271 101.382-137.726-1.804c-3.992 0-9.729 3.849-11.538 7.051l-38.258 92.528h-224.016l-38.258-92.528c-1.793-3.201-7.531-7.051-11.539-7.051h-136.904l124.469-99.578h-74.705l-119.49 82.941c-18.657 11.196-29.868 36.961-24.864 57.311l22.155 121.494c5.036 20.335 27.247 36.962 49.375 36.962h643.554c22.112 0 44.34-16.627 49.375-36.962l22.128-121.494c5.020-20.35-6.175-46.117-24.848-57.311v0 0z'
        ].forEach((d) => {
            const path = document.createElementNS(svgNS, 'path');
            path.setAttribute('d', d);
            path.setAttribute('fill', color);
            svg.appendChild(path);
        });

        return svg;
    }

    function createDownloadButton(sourceButton, removeAttributes=false, svgSize=20, onClick) {
        const button = sourceButton.cloneNode(false);
        
        if(removeAttributes){
            const className = button.getAttribute('class');
            [...button.attributes].forEach((attr) => {
                button.removeAttribute(attr.name);
            });
            if (className) {
                button.setAttribute('class', className);
            }
        }
        button.style.cursor = 'pointer';
        button.setAttribute('userscript-v', 'true');
        button.appendChild(createDownloadSvg("#1ed760", svgSize));
        button.addEventListener('click', onClick);
        return button;
    }


    function openInTab(url, options = { active: true, insert: true, setParent: true }){
        if (typeof GM_openInTab === "function") {
            GM_openInTab(url, options);
        } else {
            GM.openInTab(url, options);
        }
    }

    function isVisible(el) {
        if (!el?.isConnected) return false;
        const { width, height } = el.getBoundingClientRect();
        if (width === 0 || height === 0) return false;
        const style = getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden';
    }

    function findPlayerAnchor() {
        const selectors = [
            '[data-testid="fullscreen-mode-button"]',
            '[data-testid="pip-toggle-button"]',
        ];

        for (const selector of selectors) {
            const anchor = document.querySelector(selector);
            if (anchor && isVisible(anchor)) return anchor;
        }
        return null;
    }

    function stopPlayerAnchorPoll() {
        if (!playerAnchorPollTimer) return;
        clearTimeout(playerAnchorPollTimer);
        playerAnchorPollTimer = null;
    }

    function getPlayerAnchor() {
        const pollMs = 500;
        const timeoutMs = 10000;

        const anchor = findPlayerAnchor();
        if (anchor) return Promise.resolve(anchor);
        if (pendingPlayerAnchor) return pendingPlayerAnchor;

        pendingPlayerAnchor = new Promise((resolve) => {
            let elapsed = 0;
            const poll = () => {
                playerAnchorPollTimer = null;

                const found = findPlayerAnchor();
                if (found) {
                    pendingPlayerAnchor = null;
                    resolve(found);
                    return;
                }

                elapsed += pollMs;
                if (elapsed >= timeoutMs) {
                    pendingPlayerAnchor = null;
                    resolve(null);
                    return;
                }

                playerAnchorPollTimer = setTimeout(poll, pollMs);
            };

            stopPlayerAnchorPoll();
            playerAnchorPollTimer = setTimeout(poll, pollMs);
        });

        return pendingPlayerAnchor;
    }

    async function injectPlayer() {
        const anchor = await getPlayerAnchor();
        if (!anchor?.parentElement) return;
        if (anchor.parentElement.querySelector('button[userscript-v="true"]')) return;

        const button = createDownloadButton(anchor, true, 30, ()=>{
            const ids = extractTrackIds();
            const trackId = ids.length ? ids[0] : null;

            if (!trackId) return;
            openInTab(buildDownloadUrl(trackId));
        });
        anchor.parentElement.insertBefore(button, anchor.parentElement.firstChild);
        stopPlayerAnchorPoll();
    }

    function extractTrackIdFromElement(el) {
        const scope = el.closest('[role="row"]') || el;

        for (const link of scope.querySelectorAll('a[href]')) {
            const href = link.getAttribute('href');
            if (!href) continue;

            const uriMatch = href.match(/spotify:track:([a-zA-Z0-9]+)/);
            if (uriMatch) return uriMatch[1];

            const webMatch = href.match(/track\/([a-zA-Z0-9]+)/);
            if (webMatch) return webMatch[1];
        }

        return null;
    }

    function injectTracklist() {
        document.querySelectorAll('[data-testid="tracklist-row"]:not([track-userscript-v="true"])').forEach((tracklist) => {
            tracklist.setAttribute('track-userscript-v', 'true');

            const gridcells = tracklist.querySelectorAll('[role="gridcell"]');
            const gridcell = gridcells[gridcells.length - 1];
            if (!gridcell) return;

            const sourceButton = gridcell.querySelector('button');
            if (!sourceButton) return;

            const button = createDownloadButton(sourceButton, false, 18, (e) => {
                e.stopPropagation();
                e.preventDefault();

                const trackId = extractTrackIdFromElement(gridcell);
                if (!trackId) return;
                openInTab(buildDownloadUrl(trackId));
            });

            gridcell.insertBefore(button, gridcell.firstChild);
           
        });
    }

    function scheduleInject() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(()=>{
            injectPlayer();
            injectTracklist();
        }, 300);
    }

    function init() {
        new MutationObserver(scheduleInject).observe(document.body, {
            childList: true,
            subtree: true
        });
        scheduleInject();
    }

    init();
})();
