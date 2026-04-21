// 1. كود لجلب التاريخ والوقت الحاليين
function updateDateTime() {
    const dateElement = document.getElementById('currentDate');
    const now = new Date();
    const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const monthName = months[now.getMonth()];
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;

    dateElement.innerHTML = `Today - ${dayName}, ${day} ${monthName}<br>${hours}:${minutes} ${ampm}`;
}

updateDateTime();
setInterval(updateDateTime, 60000);

// 2. كود تفاعلي لزر "Mark as Taken"
const takenBtn = document.getElementById('takenBtn');
const completedDoses = document.getElementById('completedDoses');
const progressBarFill = document.querySelector('.progress-bar-fill');

takenBtn.addEventListener('click', function() {
    if (!this.classList.contains('taken')) {
        this.innerHTML = "Taken <i class='fa-solid fa-check'></i>";
        this.classList.add('taken');
        completedDoses.innerText = "4"; 
        progressBarFill.style.width = "100%";
        alert("Great job! You took your medication on time.");
    }
});

// 3. الاستدعاء الواقعي للأدوية (هذا ما سيجعل التطبيق حقيقياً!)
// استبدل الدالة القديمة بهذه الدالة المحدثة
function loadRealMedications() {
    const savedMeds = JSON.parse(localStorage.getItem('myMedications')) ||[];
    const todayMedsContainer = document.querySelector('.today-meds');

    if (savedMeds.length > 0) {
        // تعيين الجرعة القادمة
        document.querySelector('.next-dose-card h4').innerText = savedMeds[0].name;
        document.querySelector('.next-dose-card .med-details p').innerText = savedMeds[0].time;

        // تفريغ القائمة الحالية وإنشاء قائمة جديدة بناءً على الداتا
        todayMedsContainer.innerHTML = `
            <div class="section-header">
                <h3 class="section-title">Today's Medications</h3>
            </div>
        `;

        savedMeds.forEach((med, index) => {
            // توزيع الألوان بشكل عشوائي للأيقونات
            const colors =['yellow-bg', 'blue-bg', 'green-bg'];
            const color = colors[index % colors.length];

            const medHTML = `
            <div class="med-item">
                <div class="med-icon ${color}">
                    <i class="fa-solid fa-pills"></i>
                </div>
                <div class="med-details">
                    <h4>${med.name}</h4>
                    <div class="dose-indicators">
                        <span class="indicator green"></span>
                        <span class="indicator blue"></span>
                    </div>
                </div>
                <span class="med-time">${med.time}</span>
            </div>`;
            todayMedsContainer.innerHTML += medHTML;
        });
    }
}

// تشغيل دالة تحميل الأدوية فور فتح الصفحة
loadRealMedications();