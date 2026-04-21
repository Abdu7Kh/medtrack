const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const micBtn = document.getElementById('micBtn');

// إعدادات التعرف على الصوت
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'ar-SA'; // يدعم العربي والإنجليزي بناءً على لهجة المتحدث
recognition.continuous = false;

// إضافة رسالة للشاشة
function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    msgDiv.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// النطق الصوتي للذكاء الاصطناعي
function speak(text, lang) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang === 'ar' ? 'ar-SA' : 'en-US';
    window.speechSynthesis.speak(speech);
}

// محرك الذكاء الاصطناعي (المحاكي الذكي)
function getAIResponse(text) {
    let response = "";
    let lang = "en";
    const lowerText = text.toLowerCase();

    if (lowerText.includes('صداع') || lowerText.includes('headache')) {
        response = "إذا كنت تعاني من الصداع، يمكنك أخذ الباراسيتامول (Paracetamol). ولكن إذا استمر، يرجى استشارة الطبيب. If you have a headache, you can take Paracetamol.";
        lang = 'ar';
    } else if (lowerText.includes('ضغط') || lowerText.includes('blood pressure')) {
        response = "يرجى الالتزام بمواعيد أدوية الضغط الخاصة بك المسجلة في التطبيق. Please stick to your blood pressure medication schedule.";
        lang = 'ar';
    } else if (lowerText.includes('أدوية اليوم') || lowerText.includes('my meds')) {
        response = "لقد قمت بتسجيل 4 أدوية اليوم، يرجى التحقق من الشاشة الرئيسية. You have 4 meds scheduled today.";
        lang = 'ar';
    } else {
        response = "عذراً، أنا مساعد افتراضي للأدوية. هل يمكنك توضيح الأعراض أكثر؟ I am a medication assistant, can you clarify?";
        lang = 'ar';
    }

    setTimeout(() => {
        addMessage(response, 'ai');
        speak(response, lang);
    }, 1000);
}

// عند الضغط على إرسال
sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (text) {
        addMessage(text, 'user');
        userInput.value = '';
        getAIResponse(text);
    }
});

// عند الضغط على المايك (التحدث)
micBtn.addEventListener('click', () => {
    micBtn.classList.add('recording');
    recognition.start();
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    micBtn.classList.remove('recording');
    addMessage(transcript, 'user');
    getAIResponse(transcript);
};

recognition.onerror = () => {
    micBtn.classList.remove('recording');
    alert("عذراً، لم أتمكن من سماعك بوضوح.");
};