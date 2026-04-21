document.getElementById('setupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع تحديث الصفحة

    // جمع بيانات الأدوية الـ 4 من الحقول
    const medications =[
        { name: document.getElementById('med1Name').value, time: document.getElementById('med1Time').value },
        { name: document.getElementById('med2Name').value, time: document.getElementById('med2Time').value },
        { name: document.getElementById('med3Name').value, time: document.getElementById('med3Time').value },
        { name: document.getElementById('med4Name').value, time: document.getElementById('med4Time').value }
    ];

    // حفظ الأدوية في "ذاكرة المتصفح/الجوال" (Local Storage) لكي لا تضيع
    // نستخدم JSON.stringify لتحويل البيانات إلى نص يمكن حفظه
    localStorage.setItem('myMedications', JSON.stringify(medications));

    alert("Medications saved successfully!");
    
    // الانتقال إلى الصفحة الرئيسية
    window.location.href = "home.html";
});