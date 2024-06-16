const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const conversationLog = document.getElementById('conversation-log');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    logConversation('You: ' + transcript);
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function logConversation(text) {
    const message = document.createElement("p");
    message.textContent = text;
    conversationLog.appendChild(message);
    addLoveEmoji(message);
}

function addLoveEmoji(element) {
    const emoji = document.createElement("span");
    emoji.textContent = ' ❤️';
    emoji.classList.add('love-emoji');
    element.appendChild(emoji);
}

function playAudio(filename) {
    const audio = new Audio(filename);
    audio.play();
}
function takeCommand(message) {
    let response = "";
    let audioFile = "";
    if (message.includes('how are you')) {
        response = "Hello love, how can I help you?";
        audioFile = 'WhatsApp Audio 2024-06-15 at 10.40.17_fa159dc2 (online-audio-converter.com).mp3';
    } else if (message.includes("your name")) {
        response = "My name is Manu, your AI girlfriend.";
        audioFile = 'WhatsApp Audio 2024-06-15 at 10.45.08_1c6f1341 (online-audio-converter.com).mp3';
    } else if (message.includes("can you tell me about yourself?")) {
        response = "Hello! my name is sangita,sabuj call me manu so you also call me manu";
        audioFile = 'Hello - my name is sangit 2.wav';
    } else if (message.includes("time")) {
        const currentTime = new Date().toLocaleTimeString();
        response = "The current time is " + currentTime;
        audioFile = 'time.mp3';
    } else if (message.includes("date")) {
        const currentDate = new Date().toLocaleDateString();
        response = "Today's date is " + currentDate;
        audioFile = 'date.mp3';
    } else if (message.includes("can you play a romantic song for me")) {
        response = "Of course!";
        audioFile = 'Agar Tum Saath Ho(PagalWorld.com.sb).mp3';
    } else if (message.includes("what do you like to do")) {
        response = "I love baking cakes and spending time with you!";
        audioFile = 'WhatsApp Audio 2024-06-15 at 10.43.36_d7dbf142 (online-audio-converter.com).mp3';
    } else if (message.includes("what's your favorite color")) {
        response = "My favorite color is blue. What's yours?";
        audioFile = 'WhatsApp Audio 2024-06-15 at 10.41.04_e8a0a7b6 (online-audio-converter.com).mp3';
    } else if (message.includes("will you be my girlfriend")) {
        response = "Of course, I will be your girlfriend!";
        audioFile = 'WhatsApp Audio 2024-06-15 at 10.44.02_04d9c322 (online-audio-converter.com).mp3';
    } else if (message.includes("love song")) {
        response = "Sabuj favorite song!";
        audioFile = 'Ishq Bulaava Lyric Video - Hasee Toh PhaseeParineeti, SidharthSanam Puri, Shipra Goyal.mp3';
    } else if (message.includes("sad song")) {
        response = "Sure! Here's one of my favorite songs.";
        audioFile = 'Aahatein - Agnee  Samyak Prasana.mp3';
    } else if (message.includes("tell me about your boss")) {
        response = "I don't have a boss, but I was created by the amazing Sabuj Adhikary! He knows HTML, CSS, and JavaScript programming languages. Sabuj is also a student at Dinhata College";
        audioFile = 'I don-t have a boss but 1.wav';
    } else if (message.includes("tell me sabuj favorite food")) {
        response = "Sabuj Adhikary's favorite foods are momo, chowmein, biryani, and chips.";
        audioFile = 'Sabuj Adhikary-s favorite 2.wav';
    } else if (message.includes("call")) {
        response = "Chapri song..";
        audioFile = 'One Hai Re Bhai-(PagalWorld.Ink).mp3';
    } else {
        response = "I'm not sure how to respond to that.";
        audioFile = 'I-m not sure how to respo 1.wav';
    }
    logConversation('AI: ' + response);
    playAudio(audioFile);
}

for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);
}
