
const questions = [
    {
      type: "mc",
      question: "Vad sög Felix på för något när vi var yngre?",
      answers: ["En Dildo", "En Morot", "En Banan"],
      correct: 1
    },
    {
      type: "text",
      question: "Vad hade Felix för raggningsreplik för att få alla brudarna på fall när vi var på Gotland?",
      correctAnswer: "Vart ligger ICA någonstans?"
    },
    {
      type: "mc",
      question: "Vilket ställe har Felix inte varit på?",
      answers: ["Trolltunga", "Trollsjön", "Galdhøpiggen"],
      correct: 1
    },
    {
      type: "mc",
      question: "Vad hette Felix fotbollsklubb i Luleå?",
      answers: ["Notviken IK", "Notas BK", "Tuna FC"],
      correct: 0
    },
    {
      type: "mc",
      question: "Vad säger Felix i klippet?",
      video: "videos/felix-klipp.mp4",
      answers: ["Rebecka svarar inte mig.", "mobilen är snart död.", "har ingen mottagning här."],
      correct: 2
    },
    {
      type: "mc",
      question: "Vilken turist har Felix gått i här?",
      image: "images/samurai-museum.jpg",
      answers: ["Ninja och Samurai Museum Tokyo", "Norrköpings Samurai Museum", "Medeltida Museum Tokyo"],
      correct: 0
    },
    {
      type: "mc",
      question: "Utöver att elegant posera med samurajsvärd och rustning, vilket vapen testade Felix både att hantera och använda under besöket på bilden ovan?",
      image: "images/felix-vapen.jpg",
      answers: ["Kaststjärna", "Nunchucks", "AK-74"],
      correct: 0
    },
    {
      type: "text",
      question: "I gymnasiet var det 2 saker framförallt Fella avstod ifrån enligt en känd shot ramsa, vad var det?",
      correctAnswer: "Alkohol och kvinnohål"
    },
    {
      type: "mc",
      question: "Vad bar Felix alltid med sig på fest för att förgylla kvällen?",
      answers: [
        "Ett brädspel han planerat att tvinga alla att spela",
        "Ekologisk apelsinjuice",
        "Ett rör Pringles och en Cola",
        "En påse lösviktsgodis"
      ],
      correct: 2
    },
    {
      type: "mc",
      question: "Vilken klassisk Felix-grej gör han när han står i mål?",
      answers: [
        "Hoppar i sidled fem gånger för att kalibrera målet",
        "Stoppar spelet om vattenflaskan inte står rätt",
        "Gnuggar handskar innan varje utspark",
        "Dramatiskt grepp, rop och 14.3 sekunders paus"
      ],
      correct: 3
    },
    {
      type: "text",
      question: "Vad brukade Felix säga när han ville hålla med någon med orten slang?",
      correctAnswer: "Sanningen bror"
    },
    {
      type: "text",
      question: "Felix har bott på många ställen i världen, nämn minst fyra.",
      correctAnswer: "Luleå, Upplands Väsby, Nya Zeeland, Solna, Sollentuna"
    },
    {
      type: "text",
      question: "Hur träffades Felix och Rebecka?",
      correctAnswer: "Tinder"
    },
    {
      type: "text",
      question: "Vad blev Felix känd för att äta och dricka på fester?",
      correctAnswer: "Cola och Pringles"
    },
    {
      type: "text",
      question: "Vilket år är denna bilden tagen på Felix?",
      image: "images/fjortisfelix.jpg",
      correctAnswer: ""
    },
    {
      type: "mc",
      question: "Varför ser Felix så ledsen ut i den här bilden?",
      image: "images/Felix_Sad.JPG",
      answers: [
        "Han fick ingen skatteåterbäring detta år",
        "Han kommer inte få ligga ikväll",
        "Han är på Ed Sheeran konsert",
        "Han missade bussen och fick gå hem"
    ],
      correct: 2
    },
    {
        type: "mc",
        question: "Vad är säger Felix härnäst i klippet?",
        youtube: "https://www.youtube.com/embed/n55_AMS7LyU",
        answers: ["Kom och knulla med mig Patrik!", "30 slak isvak Emil!", "Det är kallare än i ett isbjörns rövhål!"],
        correct: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let userName = "";
  
  function startQuiz() {
    userName = document.getElementById("username").value.trim() || "Deltagare";
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("start-image").style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.classList.remove("hidden");
    quizDiv.innerHTML = "";
  
    if (currentQuestion >= questions.length) {
      showResult();
      return;
    }
  
    const q = questions[currentQuestion];
  
    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.alt = "Bild till frågan";
      img.className = "question-image";
      quizDiv.appendChild(img);
    }
  
    if (q.video) {
      const video = document.createElement("video");
      video.src = q.video;
      video.controls = true;
      video.style.maxWidth = "100%";
      video.style.marginBottom = "1rem";
      quizDiv.appendChild(video);
    }

    if (q.youtube) {
        const iframe = document.createElement("iframe");
        iframe.src = q.youtube;
        iframe.width = "100%";
        iframe.height = "315";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.style.marginBottom = "1rem";
        quizDiv.appendChild(iframe);
      }

    const questionEl = document.createElement("div");
    questionEl.className = "question";
    questionEl.textContent = `Fråga ${currentQuestion + 1} av ${questions.length} – ${userName}: ${q.question}`;
    quizDiv.appendChild(questionEl);
  
    if (q.type === "mc") {
      const answersDiv = document.createElement("div");
      answersDiv.className = "answers";
      q.answers.forEach((a, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = i;
        label.appendChild(input);
        label.append(" ", a);
        answersDiv.appendChild(label);
      });
      quizDiv.appendChild(answersDiv);
    } else if (q.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.id = "text-answer";
      input.style.width = "100%";
      quizDiv.appendChild(input);
    }
  
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Nästa";
    nextBtn.onclick = () => checkAnswer(q);
    quizDiv.appendChild(nextBtn);
  }
  
  function checkAnswer(q) {
    if (q.type === "mc") {
      const selected = document.querySelector("input[name='answer']:checked");
      if (selected && parseInt(selected.value) === q.correct) score++;
    }
    currentQuestion++;
    showQuestion();
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `${userName}, du fick ${score} av ${questions.filter(q => q.type === 'mc').length} rätt på quizet!`;
  }
  