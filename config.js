// استدعاء مكتبات Firebase الحديثة
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set, get, push, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// إعدادات قاعدة البيانات الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyCwFqNPtxDFwlBSgzF72DmK8Lgs8THH2vE",
  databaseURL: "https://smart-pharmcy-5e908-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// ==========================================
// نظام اللغات (عربي / إنجليزي)
// ==========================================
const translations = {
    en: {
        loginText: "Login",
        emailPlaceholder: "Email",
        passPlaceholder: "Password",
        nextDose: "Next Dose",
        markTaken: "Mark as Taken",
        todayMeds: "Today's Medications",
        compliance: "Compliance Status",
        dosesCompleted: "doses completed today",
        home: "Home",
        settings: "Settings",
        aiAsisstant: "AI Chat"
    },
    ar: {
        loginText: "تسجيل الدخول",
        emailPlaceholder: "البريد الإلكتروني",
        passPlaceholder: "كلمة المرور",
        nextDose: "الجرعة القادمة",
        markTaken: "تم أخذ الدواء",
        todayMeds: "أدوية اليوم",
        compliance: "حالة الالتزام",
        dosesCompleted: "جرعات مكتملة اليوم",
        home: "الرئيسية",
        settings: "الإعدادات",
        aiAsisstant: "المساعد الذكي"
    }
};

export function setLanguage(lang) {
    localStorage.setItem('appLang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; // تغيير اتجاه الشاشة
    applyTranslations(lang);
}

function applyTranslations(lang) {
    const texts = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(texts[key]) {
            if(el.tagName === 'INPUT') el.placeholder = texts[key];
            else el.innerText = texts[key];
        }
    });
}

// تطبيق اللغة عند فتح التطبيق
const currentLang = localStorage.getItem('appLang') || 'en';
applyTranslations(currentLang);
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';