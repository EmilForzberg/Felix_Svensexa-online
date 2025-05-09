
let openAnswers = [];

const questions = [
  {
      type: "mc",
      question: "Vad heter Felix i mellannamn?",
      image: "images/Felix_Kiss_Me.jpg",
      answers: ["Räkan", "Mats", "Mattias", "Martin", "En Bärs, Tack."],
      correct: 2
    },
    {
      type: "mc",
      question: "Vad sög Felix på för något när vi var yngre?",
      image: "images/Felix_With_Banana.jpg",
      answers: ["En Dildo", "En Morot", "En Banan"],
      correct: 1
    },
    {
      type: "mc",
      question: "Hmmmm... Vem är det som är Felix, höger eller vänster?",
      image: "images/Felix_Left_Or_Right.jpg",
      answers: ["Höger", "Vänster"],
      correct: 0
    },
    {
      type: "text",
      question: "Vad hade Felix för raggningsreplik för att få alla brudarna på fall när vi var på Gotland?",
      image: "images/Felix_Color_Run.jpg",
      answers: "Vart ligger ICA någonstans?"
    },
    {
      type: "mc",
      question: "Vilket ställe har Felix inte varit på?",
      image: "images/Felix_Mountain.jpg",
      answers: ["Trolltunga", "Trollsjön", "Galdhøpiggen", "I din mammas säng"],
      correct: 1
    },
    {
      type: "mc",
      question: "Vad sjunger Felix härnästa i klippet?",
      youtube: "https://www.youtube.com/embed/YeKDtVwrKEg",
      answers: ["Jag är fucking bäst", "Jag är beer pong", "Jag är som en jävla kung"],
      correct: 1
    },
    {
      type: "mc",
      question: "Vad hette Felix fotbollsklubb i Luleå?",
      image: "images/Felix_Football.jpg",
      answers: ["Notviken IK", "Notas BK", "Tuna FC", "Jag har inte fått min bärs??"],
      correct: 0
    },
    {
      type: "mc",
      question: "Vad kommer Felix säga i klippet?",
      youtube: "https://www.youtube.com/embed/qiBgJfaN79s",
      answers: ["Rebecka svarar inte mig.", "Mobilen är snart död.", "Har ingen mottagning här.", "Jag kommer inte in på Pornhub."],
      correct: 2
    },
    {
      type: "mc",
      question: "Vilken turist har Felix gått i här?",
      image: "images/Felix_Samurai.JPG",
      answers: ["Ninja och Samurai Museum Tokyo", "Norrköpings Samurai Museum", "Medeltida Museum Tokyo", "En Vanlig Fredagkväll För Felix"],
      correct: 0
    },
    {
      type: "mc",
      question: "Utöver att elegant posera med samurajsvärd och rustning, vilket vapen testade Felix både att hantera och använda under besöket på bilden ovan?",
      image: "images/Felix_Samurai.JPG",
      answers: ["Kaststjärna", "Nunchucks", "AK-74", "Han spela brädspel istället"],
      correct: 0
    },
    {
      type: "text",
      question: "I gymnasiet var det 2 saker framförallt Fella avstod ifrån enligt en känd shot ramsa, vad var det?",
      images: "images/Felix_Drunk.png", 
      correctAnswer: "Alkohol och kvinnohål"
    },
    {
      type: "mc",
      question: "Felix har aldrig varit känd som någon partyprisse i sina yngre dagar – men han var alltid med för att sprida positiv energi (och möjligtvis påminna alla om att dricka vatten). Medan andra anlände med ölplattor och vodka-flaskor, gjorde Felix entré med något helt annat i famnen. Vad var det han alltid bar på för att förgylla sin kväll?",
      image: "Felix_Kid.jpg",
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
      question: "På en skala från 1-10, hur snygg tycker Felix själv han är på den här bilden?",
      image: "images/Felix_With_Guitar_2.jpg",
      answers: ["1", "Inte så pjåkig", "Kvart i tre ragg material", "Väsbys Skönhet", "Duger i krig", "10"],
      correct: "3"
    },
    {
      type: "mc",
      question: "Alla här vet att Felix har en stor talang för fotboll. Framför allt när han står i mål. Att spela med honom är kul, men han har en viss vana som kan få vilken utespelare som helst att vilja byta sport. Vilken av dessa klassiska Felix-grejer är det jag pratar om?",
      answers: [
        "Varje gång Felix ställer sig i mål måste han hoppa i sidled fem gånger för att “kalibrera målet”. Alla andra får snällt stå och vänta medan han utför sin lilla ritual, som om han laddar upp för en VM-final.",
        "Om Felix har glömt att ställa sin vattenflaska exakt jämte ena stolpen…ja, då stoppas spelet. För det är ju helt omöjligt att rädda skott utan rätt hydrering på rätt plats.",
        "Felix måste regelbundet gnugga sina handskar mot varandra för att skapa “matchvärme”. Problemet? Han gör det varje gång han ska sparka ut bollen, vilket betyder att alla får stå som statyer och vänta medan han leker pyroman med sina handskar.",
        "Oavsett hur löst bollen rullar mot honom, så måste Felix ta ett dramatiskt grepp, slänga sig ner, krama bollen, skrika “MÅÅÅÅLVAAAKT!” och ligga blickstilla i exakt 14,3 sekunder innan han går vidare med livet."
      ],
      correct: 3
    },
    {
      type: "text",
      question: "Vad brukade Felix säga när han ville hålla med någon med orten slang?",
      image: "images/Felix_GangsterBoi.jpg",
      correctAnswer: "Sanningen bror"
    },
    {
      type: "text",
      question: "Felix har bott på många ställen i världen, nämn minst fyra.",
      image: "images/Felix_Drunk.png",
      correctAnswer: "Luleå, Upplands Väsby, Nya Zeeland, Solna, Sollentuna"
    },
    {
      type: "mc",
      question: "Hur träffades Felix och Rebecka?",
      image: "images/Felix_With_Rebecka.JPG",
      answers: ["Badoo", "Kvart i tre ragg", "En kompis, kompis, kompis","Tinder"],
      correct: 0
    },
    {
      type: "text",
      question: "Vad blev Felix känd för att dricka och äta på fester?",
      image: "images/Felix_Drunk.PNG",
      correctAnswer: "Cola och Pringles"
    },
    {
      type: "mc",
      question: "Vilket år är denna bilden tagen på Felix?",
      image: "images/Felix_Fjortis.PNG",
      answers: ["2014", "2015", "2016", "2025"],
      correct: 1
    },
    {
      type: "mc",
      question: "Varför ser Felix så ledsen ut i den här bilden?",
      image: "images/Felix_Sad.PNG",
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
      question: "Här har vi Felix eller jag menar såklart jultomten, men från vilken höjdmeter hälsar tomten god jul ifrån?",
      image: "images/Felix_Santa_Temp.jpg",
      answers: [
        "523 m.ö.h.",
        "782 m.ö.h.",
        "974 m.ö.h.",
        "1088 m.ö.h.",
        "1244 m.ö.h."
      ],
      correct: 2
    },
    {
        type: "mc",
        question: "Vad är säger Felix härnäst i klippet?",
        youtube: "https://www.youtube.com/embed/n55_AMS7LyU",
        answers: ["Kom och knulla med mig Patrik!", "30 slak isvak Emil!", "Det är kallare än i ett isbjörns rövhål!", "I'M THE KING OF THE WORLD!"],
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
      questionEl.innerHTML = `
        <div style="margin-bottom: 0.5rem;"><strong>Fråga ${currentQuestion + 1} av ${questions.length} – ${userName}:</strong></div>
        <div>${q.question}</div>
      `;
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
    } else if (q.type === "text") {
      const input = document.getElementById("text-answer");
      const answerText = input.value.trim();
      openAnswers.push({
        question: q.question,
        answer: answerText
      });
    }
  
    currentQuestion++;         // ← Viktigt
    showQuestion();            // ← Viktigt
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `${userName}, du fick ${score} av ${questions.filter(q => q.type === 'mc').length} rätt på quizet!`;
  
    if (openAnswers.length > 0) {
      const header = document.createElement("h3");
      header.textContent = "Dina svar på öppna frågor:";
      resultDiv.appendChild(header);
  
      const list = document.createElement("ul");
      openAnswers.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>Fråga:</strong> ${item.question}<br>
          <strong>Ditt svar:</strong> ${item.answer}<br><br>
        `;
        list.appendChild(li);
      });
      resultDiv.appendChild(list);
  
      const note = document.createElement("p");
      note.innerHTML = "<em>Dessa svar rättas tillsammans manuellt!</em>";
      resultDiv.appendChild(note);
    }
  }
  
  
  