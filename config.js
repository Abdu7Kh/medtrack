// استدعاء مكتبات Firebase الحديثة
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set, get, push, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// إعدادات قاعدة البيانات الخاصة بك
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBBRfP_vYUg_cL2XJEoWQ7P0AhrdagVFL0",
    authDomain: "medtrack-ad70e.firebaseapp.com",
    databaseURL: "https://medtrack-ad70e-default-rtdb.firebaseio.com",
    projectId: "medtrack-ad70e",
    storageBucket: "medtrack-ad70e.firebasestorage.app",
    messagingSenderId: "1005427328405",
    appId: "1:1005427328405:web:afeac50ac507d65512a29c",
    measurementId: "G-PVGZWJ4V08"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
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