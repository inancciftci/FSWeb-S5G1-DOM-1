const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

// NAV LINKS

const navLinks = document.querySelectorAll("nav > a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navLinks[i].classList.add("italic");
}

//LOGO-IMG

const logoImg = document.querySelector("#logo-img");
logoImg.setAttribute("src", `${siteContent.images["logo-img"]}`);

//CTA SECTION

const ctaSection = document.querySelectorAll(".cta-text > h1,button");

ctaSection[0].textContent = siteContent.cta.h1;
ctaSection[1].textContent = siteContent.cta.button;

const ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute("src", `${siteContent.images["cta-img"]}`);

//MAIN CONTENT

const mainContentText = document.querySelectorAll(".text-content p,h4");
const mainContent = siteContent["ana-içerik"];
const mainContentArr = [];
for (let content in mainContent) {
  mainContentArr.push(mainContent[content]);
}
for (let i = 0; i < mainContentText.length; i++) {
  mainContentText[i].textContent = mainContentArr[i];
}
const contentImage = document.querySelector(".middle-img");
contentImage.setAttribute("src", siteContent.images["accent-img"]);

// CONTACT SECTION

const contactSectionHeading = document.querySelector(".contact h4");
const contactSectionP = document.querySelectorAll(".contact p");
contactSectionHeading.textContent = siteContent.iletisim["iletişim-h4"];
contactSectionP[0].textContent = siteContent.iletisim.adres;
contactSectionP[1].textContent = siteContent.iletisim.telefon;
contactSectionP[2].textContent = siteContent.iletisim.email;

// FOOTER SECTION

const footerLink = document.querySelector("footer > a");
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold");
