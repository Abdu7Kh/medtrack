// استدعاء مكتبات Firebase بناءً على الإصدار الموجود في حسابك
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getDatabase, ref, set, get, push, update, onValue } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

// إعدادات مشروعك أنت (كما أرسلتها لي)
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

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// نظام اللغات الشامل لكل خانات التطبيق
const translations = {
    en: {
        login: "Login", email: "Email", password: "Password", forgot: "Forgot password?", signup: "Don't have an account? Sign Up",
        home: "Home", add: "Add", settings: "Settings", aiChat: "AI Chat",
        goodMorning: "Good Morning,", nextDose: "Next Dose", markTaken: "Mark as Taken", inMins: "In 45 minutes",
        todayMeds: "Today's Medications", compliance: "Compliance Status", dosesCompleted: "doses completed today",
        account: "Account", personalInfo: "Personal Information", changePass: "Change Password", notifications: "Notifications", 
        language: "Language", appTheme: "App Theme", themeLight: "Light",
        medicationSec: "Medication", medSchedule: "Medication Schedule", reminders: "Reminders", addMedication: "Add Medication",
        support: "Support", helpFAQ: "Help & FAQ", contactUs: "Contact Us", logout: "Log Out"
    },
    ar: {
        login: "تسجيل الدخول", email: "البريد الإلكتروني", password: "كلمة المرور", forgot: "نسيت كلمة المرور؟", signup: "ليس لديك حساب؟ إنشاء حساب",
        home: "الرئيسية", add: "إضافة", settings: "الإعدادات", aiChat: "المساعد الذكي",
        goodMorning: "صباح الخير،", nextDose: "الجرعة القادمة", markTaken: "تأكيد الأخذ", inMins: "خلال 45 دقيقة",
        todayMeds: "أدوية اليوم", compliance: "حالة الالتزام", dosesCompleted: "جرعات اكتملت اليوم",
        account: "الحساب", personalInfo: "المعلومات الشخصية", changePass: "تغيير كلمة المرور", notifications: "الإشعارات", 
        language: "اللغة", appTheme: "مظهر التطبيق", themeLight: "فاتح",
        medicationSec: "الأدوية", medSchedule: "جدول الأدوية", reminders: "التنبيهات", addMedication: "إضافة دواء جديد",
        support: "الدعم والمساعدة", helpFAQ: "الأسئلة الشائعة", contactUs: "تواصل معنا", logout: "تسجيل الخروج"
    }
};

export function setLanguage(lang) {
    localStorage.setItem('appLang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    location.reload();
}

export function applyLanguage() {
    const lang = localStorage.getItem('appLang') || 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    const texts = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(texts[key]) {
            if(el.tagName === 'INPUT') el.placeholder = texts[key];
            else el.innerText = texts[key];
        }
    });
}