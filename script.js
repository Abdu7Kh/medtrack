// هذا الكود وظيفته إظهار وإخفاء كلمة المرور عند الضغط على أيقونة العين

// تحديد العناصر من الـ HTML
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

// إضافة حدث عند الضغط على العين
togglePassword.addEventListener('click', function () {
    // التحقق من نوع الحقل الحالي
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    // تغيير نوع الحقل (من كلمة سر إلى نص عادي أو العكس)
    passwordInput.setAttribute('type', type);
    
    // تغيير شكل الأيقونة
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// لمنع تحديث الصفحة عند الضغط على زر تسجيل الدخول (مؤقتاً حتى نبرمج الانتقال للصفحة الثانية)
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // منع السلوك الافتراضي
    alert('تم تسجيل الدخول بنجاح! سيتم تحويلك للصفحة الرئيسية.');
    // هنا لاحقاً سنضع كود الانتقال لصفحة home.html
    window.location.href = "setup.html";
});