/* ============================================================
   PEAKFORM SPORTS ACADEMY — SCRIPT.JS
   This single file is loaded by every page. Each section checks
   whether the elements it needs exist before running, so nothing
   breaks on pages that don't have that particular piece of UI.
   ============================================================ */

/* ------------------------------------------------------------
   1. DATA — SPORTS
   Used by courses.html (links only) and sport.html (full detail).
   ------------------------------------------------------------ */
const sportsData = {
  football: {
    name: "Football",
    icon: "⚽",
    tagline: "Build vision, first touch and match intelligence on a full-size pitch.",
    description: "Our football programme blends technical drilling with real game scenarios so players learn to read space, not just kick a ball. Sessions run on a full-size turf pitch under floodlights, with small-sided games used to sharpen decision-making under pressure.",
    level: "Beginner to Elite",
    duration: "12-week terms",
    schedule: "Mon, Wed, Fri · 4:00–6:00 PM",
    fees: "₹3,500 / month",
    highlights: [
      "Position-specific technical drills every week",
      "Match-day analysis with video breakdowns",
      "Strength & conditioning built for footballers",
      "Trial pathway into the academy's competitive squad"
    ]
  },
  cricket: {
    name: "Cricket",
    icon: "🏏",
    tagline: "Net sessions, match simulation and biomechanics-backed coaching.",
    description: "From defensive technique to building an innings, our cricket programme covers batting, bowling and fielding in equal measure. High-speed camera review helps young players correct technique early, before habits set in.",
    level: "Beginner to Elite",
    duration: "12-week terms",
    schedule: "Tue, Thu, Sat · 6:00–8:00 AM",
    fees: "₹4,000 / month",
    highlights: [
      "Dedicated batting, pace and spin nets",
      "Bowling action analysis on high-speed camera",
      "Weekend match simulations with umpiring",
      "Fitness testing every 6 weeks"
    ]
  },
  basketball: {
    name: "Basketball",
    icon: "🏀",
    tagline: "Footwork, shooting mechanics and read-and-react team play.",
    description: "Players train on shooting form, ball-handling and pick-and-roll execution before moving into competitive scrimmages. Conditioning is built around the explosive, stop-start demands of the game.",
    level: "Beginner to Advanced",
    duration: "10-week terms",
    schedule: "Mon, Wed, Fri · 5:30–7:30 PM",
    fees: "₹3,200 / month",
    highlights: [
      "Shooting form correction with frame-by-frame video",
      "Position-based skill tracks (guard / wing / post)",
      "Weekly scrimmages against academy squads",
      "Vertical jump & agility testing"
    ]
  },
  volleyball: {
    name: "Volleyball",
    icon: "🏐",
    tagline: "Serve, set, spike — built on footwork and timing.",
    description: "Our volleyball coaches focus on the fundamentals — passing platform, setting hands and approach timing — before layering in rotations and game tactics. Indoor and beach formats are both available each term.",
    level: "Beginner to Advanced",
    duration: "10-week terms",
    schedule: "Tue, Thu · 5:00–7:00 PM, Sat · 9:00–11:00 AM",
    fees: "₹2,800 / month",
    highlights: [
      "Serve-receive and passing platform drills",
      "Setter-specific hand and footwork training",
      "Indoor and beach volleyball formats",
      "Inter-academy friendly matches each term"
    ]
  },
  badminton: {
    name: "Badminton",
    icon: "🏸",
    tagline: "Court craft, deception and explosive footwork.",
    description: "Singles and doubles players train side by side on footwork patterns, net play and smash technique. Shuttle drills are paired with agility ladders to build the split-second movement the sport demands.",
    level: "Beginner to Elite",
    duration: "12-week terms",
    schedule: "Mon to Fri · 6:00–8:00 AM (batch-wise)",
    fees: "₹3,000 / month",
    highlights: [
      "Six dedicated wooden-floor courts",
      "Footwork ladders and shadow-play sessions",
      "Singles and doubles strategy coaching",
      "Monthly graded internal tournaments"
    ]
  },
  athletics: {
    name: "Athletics",
    icon: "🏃",
    tagline: "Sprints, distance and field events on a certified track.",
    description: "Our athletics wing trains sprinters, middle-distance runners, jumpers and throwers on a synthetic, certified track. Programmes are individualised, with each athlete following a periodised plan toward their target meet.",
    level: "Beginner to Elite",
    duration: "Year-round, periodised",
    schedule: "Mon, Wed, Fri, Sat · 5:30–7:30 AM",
    fees: "₹3,000 / month",
    highlights: [
      "Synthetic 8-lane certified track",
      "Sprint, distance, jumps and throws coaching",
      "Periodised training plans toward meets",
      "Sports science–backed recovery protocols"
    ]
  },
  tennis: {
    name: "Tennis",
    icon: "🎾",
    tagline: "Stroke mechanics, footwork and match-play tactics.",
    description: "From grip fundamentals to advanced point construction, our tennis programme is built around video-assisted stroke correction and live point play. Clay and hard courts are both available for training.",
    level: "Beginner to Advanced",
    duration: "12-week terms",
    schedule: "Tue, Thu, Sat · 6:30–8:30 AM",
    fees: "₹4,200 / month",
    highlights: [
      "Clay and hard court training options",
      "Video-assisted serve and stroke correction",
      "Singles and doubles match-play sessions",
      "Junior development pathway (U-10 to U-18)"
    ]
  },
  swimming: {
    name: "Swimming",
    icon: "🏊",
    tagline: "Stroke efficiency, breathing technique and race-pace training.",
    description: "Swimmers train across all four strokes with an emphasis on technique before speed. Underwater video review and lane-by-lane coaching help every swimmer fix inefficiencies that cost time in races.",
    level: "Beginner to Elite",
    duration: "10-week terms",
    schedule: "Mon to Sat · 5:30–7:00 AM",
    fees: "₹3,800 / month",
    highlights: [
      "Semi-Olympic 8-lane heated pool",
      "Underwater video stroke analysis",
      "All four competitive strokes coached",
      "Race-pace and turn-technique sessions"
    ]
  }
};

/* ------------------------------------------------------------
   2. DATA — COACHES (3 specialists per sport, 24 total)
   Used by coaches.html (listing) and coach.html (full detail).
   ------------------------------------------------------------ */
const coachesData = {
  "arjun-mehta": {
    name: "Arjun Mehta", sport: "football", role: "Head Football Coach", initials: "AM",
    experience: "14 years", qualification: "AFC 'B' License",
    achievements: [
      "Led the academy U-18 squad to the State Inter-Academy title (2023)",
      "Former state-level defender with 60+ competitive appearances",
      "Trained 9 players who went on to play state-level football"
    ],
    trainingMethods: [
      "Small-sided games to build decision-making under pressure",
      "Weekly video breakdown of match footage with each player",
      "Position-specific technical circuits before every scrimmage"
    ],
    age: 41, languages: "English, Hindi, Marathi", joined: "2017",
    email: "arjun.mehta@peakform.academy", phone: "+91 98765 40011"
  },
  "carlos-fernandes": {
    name: "Carlos Fernandes", sport: "football", role: "Goalkeeping & Set-Pieces Coach", initials: "CF",
    experience: "10 years", qualification: "FIFA Goalkeeping Certificate",
    achievements: [
      "Coached three goalkeepers to district representative selection",
      "Specialist consultant for set-piece routines since 2019",
      "Played semi-professional football for 7 seasons in Goa"
    ],
    trainingMethods: [
      "Reaction-ball and reflex drills before every session",
      "Dead-ball routines rehearsed at full match intensity",
      "One-on-one shot-stopping clinics twice a week"
    ],
    age: 36, languages: "English, Portuguese, Konkani", joined: "2019",
    email: "carlos.fernandes@peakform.academy", phone: "+91 98765 40012"
  },
  "ritu-sharma": {
    name: "Ritu Sharma", sport: "football", role: "Youth Development Coach", initials: "RS",
    experience: "8 years", qualification: "AIFF 'D' License",
    achievements: [
      "Built the academy's U-12 and U-14 grassroots pathway",
      "Selected as State Youth Coach of the Year, 2022",
      "Coordinates the academy's annual summer talent scouting camp"
    ],
    trainingMethods: [
      "Fun-first, skill-based stations for younger age groups",
      "Individual development plans tracked every term",
      "Parent-inclusive progress reviews each month"
    ],
    age: 33, languages: "English, Hindi", joined: "2020",
    email: "ritu.sharma@peakform.academy", phone: "+91 98765 40013"
  },

  "vikram-rao": {
    name: "Vikram Rao", sport: "cricket", role: "Head Cricket Coach (Batting)", initials: "VR",
    experience: "16 years", qualification: "BCCI Level 2 Certified",
    achievements: [
      "Coached two batters into the state U-19 squad",
      "Former Ranji Trophy probable, 120+ first-class innings faced",
      "Runs the academy's annual high-performance batting camp"
    ],
    trainingMethods: [
      "Throw-down and bowling-machine sessions for shot precision",
      "High-speed camera review of backlift and footwork",
      "Match-pressure simulation in net sessions"
    ],
    age: 44, languages: "English, Hindi, Telugu", joined: "2015",
    email: "vikram.rao@peakform.academy", phone: "+91 98765 40021"
  },
  "suresh-iyer": {
    name: "Suresh Iyer", sport: "cricket", role: "Bowling Coach (Pace)", initials: "SI",
    experience: "12 years", qualification: "BCCI Level 1 Certified",
    achievements: [
      "Mentored 4 pacers to district-level selection trials",
      "Former state pace bowler with 200+ wickets across formats",
      "Designed the academy's pace-bowling injury-prevention protocol"
    ],
    trainingMethods: [
      "Action analysis on high-speed camera every fortnight",
      "Progressive run-up and load-management programme",
      "Yorker and bouncer accuracy drills under match pressure"
    ],
    age: 38, languages: "English, Tamil, Hindi", joined: "2018",
    email: "suresh.iyer@peakform.academy", phone: "+91 98765 40022"
  },
  "ananya-desai": {
    name: "Ananya Desai", sport: "cricket", role: "Spin & Fielding Coach", initials: "AD",
    experience: "9 years", qualification: "BCCI Level 1 Certified",
    achievements: [
      "Coached the academy's women's team to a state semi-final",
      "Former state-level off-spinner and slip fielder",
      "Introduced the academy's dedicated fielding-fitness circuit"
    ],
    trainingMethods: [
      "Flight, drift and variation drills for spin bowlers",
      "Reaction-catch and reflex circuits for fielders",
      "Game-situation fielding simulations every weekend"
    ],
    age: 31, languages: "English, Gujarati, Hindi", joined: "2021",
    email: "ananya.desai@peakform.academy", phone: "+91 98765 40023"
  },

  "rahul-nair": {
    name: "Rahul Nair", sport: "basketball", role: "Head Basketball Coach", initials: "RN",
    experience: "13 years", qualification: "FIBA Level 2 Coaching Certificate",
    achievements: [
      "Led the academy senior team to back-to-back district titles",
      "Former state league point guard, 8 competitive seasons",
      "Built the academy's structured guard-development curriculum"
    ],
    trainingMethods: [
      "Read-and-react team offense built through small-group drills",
      "Daily ball-handling and decision-making circuits",
      "Film sessions reviewing pick-and-roll execution"
    ],
    age: 39, languages: "English, Malayalam, Hindi", joined: "2016",
    email: "rahul.nair@peakform.academy", phone: "+91 98765 40031"
  },
  "jamal-thompson": {
    name: "Jamal Thompson", sport: "basketball", role: "Shooting & Skills Coach", initials: "JT",
    experience: "7 years", qualification: "Certified Shooting Specialist (NBSCA)",
    achievements: [
      "Improved academy team's free-throw percentage by 18% in one season",
      "Ran shooting clinics across 5 partner academies",
      "Former college-level shooting guard, USA"
    ],
    trainingMethods: [
      "Form-shooting progressions filmed and reviewed weekly",
      "Catch-and-shoot repetition under fatigue conditions",
      "Footwork drills for off-the-dribble shot creation"
    ],
    age: 29, languages: "English", joined: "2022",
    email: "jamal.thompson@peakform.academy", phone: "+91 98765 40032"
  },
  "priya-menon": {
    name: "Priya Menon", sport: "basketball", role: "Strength & Conditioning Coach", initials: "PM",
    experience: "6 years", qualification: "CSCS Certified Strength Coach",
    achievements: [
      "Designed the academy's in-season load-management programme",
      "Reduced non-contact injuries in the senior squad by a third",
      "Former state-level kabaddi athlete turned strength coach"
    ],
    trainingMethods: [
      "Plyometric and lateral-movement circuits for explosiveness",
      "Individualised strength programmes by playing position",
      "Recovery and mobility sessions after every match week"
    ],
    age: 30, languages: "English, Malayalam, Tamil", joined: "2021",
    email: "priya.menon@peakform.academy", phone: "+91 98765 40033"
  },

  "deepak-verma": {
    name: "Deepak Verma", sport: "volleyball", role: "Head Volleyball Coach", initials: "DV",
    experience: "11 years", qualification: "Volleyball Federation of India 'A' License",
    achievements: [
      "Coached the academy team to a state quarter-final finish",
      "Former state-level middle blocker, 9 seasons",
      "Established the academy's beach volleyball training block"
    ],
    trainingMethods: [
      "Six-rotation system drilled until automatic under fatigue",
      "Blocking footwork paired with read-the-hitter video review",
      "Serve-receive consistency tracked every session"
    ],
    age: 37, languages: "English, Hindi", joined: "2017",
    email: "deepak.verma@peakform.academy", phone: "+91 98765 40041"
  },
  "elena-petrova": {
    name: "Elena Petrova", sport: "volleyball", role: "Setting & Tactics Coach", initials: "EP",
    experience: "9 years", qualification: "CEV Youth Coaching Certificate",
    achievements: [
      "Former professional setter in the Eastern European league",
      "Mentored two setters into state representative squads",
      "Designed the academy's set-distribution tactical playbook"
    ],
    trainingMethods: [
      "Tempo and timing drills paired with hitters live",
      "Game-reading exercises using recorded match footage",
      "Hand-conditioning and ball-control fundamentals daily"
    ],
    age: 34, languages: "English, Russian", joined: "2020",
    email: "elena.petrova@peakform.academy", phone: "+91 98765 40042"
  },
  "kavya-reddy": {
    name: "Kavya Reddy", sport: "volleyball", role: "Youth Volleyball Coach", initials: "KR",
    experience: "5 years", qualification: "Volleyball Federation of India 'B' License",
    achievements: [
      "Built the academy's U-14 volleyball intake programme",
      "Coached the U-16 girls' team to a district runner-up finish",
      "Runs the academy's annual beginner volleyball camp"
    ],
    trainingMethods: [
      "Progressive passing-platform drills for absolute beginners",
      "Fun, station-based skill circuits for younger age groups",
      "Confidence-building game-play introduced from week two"
    ],
    age: 27, languages: "English, Telugu, Hindi", joined: "2022",
    email: "kavya.reddy@peakform.academy", phone: "+91 98765 40043"
  },

  "srinivas-kumar": {
    name: "Srinivas Kumar", sport: "badminton", role: "Head Badminton Coach", initials: "SK",
    experience: "15 years", qualification: "BAI Level 3 Certified Coach",
    achievements: [
      "Coached two players to national junior ranking top-50",
      "Former state-level singles player, 70+ tournaments",
      "Heads the academy's elite performance badminton track"
    ],
    trainingMethods: [
      "Shadow footwork patterns drilled before every session",
      "Multi-shuttle feeding for high-intensity rally simulation",
      "Match-play with live tactical correction between games"
    ],
    age: 45, languages: "English, Tamil, Telugu", joined: "2014",
    email: "srinivas.kumar@peakform.academy", phone: "+91 98765 40051"
  },
  "mei-tanaka": {
    name: "Mei Tanaka", sport: "badminton", role: "Footwork & Agility Coach", initials: "MT",
    experience: "8 years", qualification: "Certified Athletic Movement Specialist",
    achievements: [
      "Cut average court-coverage time by 15% across the senior squad",
      "Former national junior circuit player, Japan",
      "Introduced ladder-and-cone agility testing benchmarks"
    ],
    trainingMethods: [
      "Six-corner footwork drills repeated to muscle memory",
      "Split-step timing trained against live feeding",
      "Agility ladder circuits twice weekly"
    ],
    age: 32, languages: "English, Japanese", joined: "2020",
    email: "mei.tanaka@peakform.academy", phone: "+91 98765 40052"
  },
  "anjali-bose": {
    name: "Anjali Bose", sport: "badminton", role: "Doubles Strategy Coach", initials: "AB",
    experience: "10 years", qualification: "BAI Level 2 Certified Coach",
    achievements: [
      "Coached an academy pair to a state doubles semi-final",
      "Former state-level mixed doubles specialist",
      "Designed the academy's doubles rotation training module"
    ],
    trainingMethods: [
      "Front-back and side-by-side formation drills",
      "Communication and rotation cues rehearsed live",
      "Smash-and-cover sequences under match pressure"
    ],
    age: 35, languages: "English, Bengali, Hindi", joined: "2018",
    email: "anjali.bose@peakform.academy", phone: "+91 98765 40053"
  },

  "mohan-pillai": {
    name: "Mohan Pillai", sport: "athletics", role: "Head Athletics Coach (Sprints)", initials: "MP",
    experience: "18 years", qualification: "AFI Level 3 Certified Coach",
    achievements: [
      "Coached a sprinter to a state-record 100m junior time",
      "Former national-level 200m sprinter",
      "Heads the academy's sprint and relay programme"
    ],
    trainingMethods: [
      "Block-start technique refined through repeated video review",
      "Periodised speed and power blocks across the season",
      "Relay baton-exchange drills at race pace"
    ],
    age: 48, languages: "English, Tamil, Malayalam", joined: "2012",
    email: "mohan.pillai@peakform.academy", phone: "+91 98765 40061"
  },
  "farah-khan": {
    name: "Farah Khan", sport: "athletics", role: "Long Distance Coach", initials: "FK",
    experience: "10 years", qualification: "AFI Level 2 Certified Coach",
    achievements: [
      "Guided two distance runners to state cross-country podiums",
      "Former state-level 5000m and 10000m runner",
      "Built the academy's altitude-style endurance training block"
    ],
    trainingMethods: [
      "Heart-rate zone training for aerobic base building",
      "Tempo and interval sessions periodised across the term",
      "Running gait analysis on video every month"
    ],
    age: 36, languages: "English, Urdu, Hindi", joined: "2019",
    email: "farah.khan@peakform.academy", phone: "+91 98765 40062"
  },
  "thomas-george": {
    name: "Thomas George", sport: "athletics", role: "Field Events Coach", initials: "TG",
    experience: "12 years", qualification: "AFI Level 2 Certified Coach (Jumps & Throws)",
    achievements: [
      "Coached a long jumper to a district championship win",
      "Former state-level triple jump competitor",
      "Specialises in javelin and discus technique correction"
    ],
    trainingMethods: [
      "Approach-run rhythm drilled with marked run-up checkpoints",
      "Technical phase breakdown using slow-motion video",
      "Strength-to-technique transfer sessions twice weekly"
    ],
    age: 40, languages: "English, Malayalam", joined: "2016",
    email: "thomas.george@peakform.academy", phone: "+91 98765 40063"
  },

  "neha-kapoor": {
    name: "Neha Kapoor", sport: "tennis", role: "Head Tennis Coach", initials: "NK",
    experience: "14 years", qualification: "AITA Level 3 Certified Coach",
    achievements: [
      "Coached a junior player into the national top-20 ranking",
      "Former state-level singles champion, 5 consecutive years",
      "Heads the academy's junior development pathway (U-10 to U-18)"
    ],
    trainingMethods: [
      "Point-construction tactics built through live rally drills",
      "Video-assisted stroke correction every fortnight",
      "Mental-toughness routines built into match simulations"
    ],
    age: 42, languages: "English, Hindi, Punjabi", joined: "2015",
    email: "neha.kapoor@peakform.academy", phone: "+91 98765 40071"
  },
  "diego-morales": {
    name: "Diego Morales", sport: "tennis", role: "Serve & Return Coach", initials: "DM",
    experience: "9 years", qualification: "ITF Level 2 Certified Coach",
    achievements: [
      "Improved academy players' first-serve percentage averages by 12%",
      "Former ATP Challenger circuit competitor",
      "Designed the academy's serve-biomechanics video programme"
    ],
    trainingMethods: [
      "Serve toss and kinetic-chain drills filmed for review",
      "Return-of-serve positioning trained against varied paces",
      "Repetition-based second-serve consistency sessions"
    ],
    age: 33, languages: "English, Spanish", joined: "2021",
    email: "diego.morales@peakform.academy", phone: "+91 98765 40072"
  },
  "ravi-chauhan": {
    name: "Ravi Chauhan", sport: "tennis", role: "Junior Tennis Coach", initials: "RC",
    experience: "6 years", qualification: "AITA Level 1 Certified Coach",
    achievements: [
      "Built the academy's mini-tennis intake programme for U-10s",
      "Coached three juniors to state age-group quarter-finals",
      "Runs the academy's annual junior tennis summer camp"
    ],
    trainingMethods: [
      "Modified-court, modified-ball progressions for beginners",
      "Fun, game-based drills to build racket-ball familiarity",
      "Gradual introduction to scoring and match play"
    ],
    age: 28, languages: "English, Hindi", joined: "2022",
    email: "ravi.chauhan@peakform.academy", phone: "+91 98765 40073"
  },

  "sanjana-pillai": {
    name: "Sanjana Pillai", sport: "swimming", role: "Head Swimming Coach", initials: "SP",
    experience: "13 years", qualification: "Swimming Federation of India 'A' License",
    achievements: [
      "Coached two swimmers to state-level finals across strokes",
      "Former state-level freestyle and butterfly competitor",
      "Heads the academy's race-pace and taper programme"
    ],
    trainingMethods: [
      "Underwater video review of stroke technique every fortnight",
      "Interval sets periodised toward target competitions",
      "Turn and breakout technique drilled in isolation"
    ],
    age: 38, languages: "English, Malayalam, Tamil", joined: "2017",
    email: "sanjana.pillai@peakform.academy", phone: "+91 98765 40081"
  },
  "michael-obrien": {
    name: "Michael O'Brien", sport: "swimming", role: "Stroke Technique Coach", initials: "MO",
    experience: "8 years", qualification: "ASCTA Level 2 Certified Coach",
    achievements: [
      "Specialist in backstroke and breaststroke technique correction",
      "Former competitive swimmer, Ireland national age-group circuit",
      "Reduced lap times for multiple swimmers through stroke-rate analysis"
    ],
    trainingMethods: [
      "Stroke-count and rate drills for efficiency over speed",
      "Drill-based technique isolation before full-stroke swimming",
      "Video comparison against benchmark technique models"
    ],
    age: 31, languages: "English", joined: "2021",
    email: "michael.obrien@peakform.academy", phone: "+91 98765 40082"
  },
  "divya-krishnan": {
    name: "Divya Krishnan", sport: "swimming", role: "Junior Swimming Coach", initials: "DK",
    experience: "5 years", qualification: "Swimming Federation of India 'B' License",
    achievements: [
      "Built the academy's learn-to-swim programme for absolute beginners",
      "Coached the U-12 squad to a district relay podium finish",
      "Runs water-safety workshops for new academy members"
    ],
    trainingMethods: [
      "Water-confidence and breathing fundamentals before stroke work",
      "Short, frequent sets to build endurance gradually",
      "Positive-reinforcement coaching style for younger swimmers"
    ],
    age: 26, languages: "English, Tamil", joined: "2023",
    email: "divya.krishnan@peakform.academy", phone: "+91 98765 40083"
  }
};

/* ------------------------------------------------------------
   3. SMALL HELPERS
   ------------------------------------------------------------ */
function getQueryParam(name){
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
function slugToTitle(slug){
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function isValidName(v){ return /^[A-Za-z\s.'-]{2,40}$/.test(v.trim()); }
function isValidAge(v){ const n = Number(v); return Number.isInteger(n) && n >= 5 && n <= 65; }
function isValidPhone(v){ return /^[0-9]{10}$/.test(v.trim()); }
function isValidEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }

function setFieldError(input, errorEl, message){
  if(message){
    input.classList.add("invalid");
    if(errorEl) errorEl.textContent = message;
    return false;
  }else{
    input.classList.remove("invalid");
    if(errorEl) errorEl.textContent = "";
    return true;
  }
}

/* ------------------------------------------------------------
   4. RUN ON EVERY PAGE
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", function(){

  /* ---- footer year ---- */
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- mobile nav toggle ---- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if(navToggle && navLinks){
    navToggle.addEventListener("click", function(){
      navLinks.classList.toggle("open");
    });
  }

  /* ---- scoreboard count-up animation (index.html hero) ---- */
  const scoreNums = document.querySelectorAll(".score-num[data-target]");
  scoreNums.forEach(function(el){
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const tick = setInterval(function(){
      current += step;
      if(current >= target){
        current = target;
        clearInterval(tick);
      }
      el.textContent = current + (current >= target ? suffix : "");
    }, 25);
  });

  /* ---- auth tabs: login / signup / register (index.html) ---- */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const formPanels = document.querySelectorAll(".form-panel");
  if(tabButtons.length){
    tabButtons.forEach(function(btn){
      btn.addEventListener("click", function(){
        tabButtons.forEach(b => b.classList.remove("active"));
        formPanels.forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const target = document.getElementById(btn.dataset.tab);
        if(target) target.classList.add("active");
      });
    });
  }

  /* ---- generic academy REGISTER form validation ----
     Used on index.html (#registerForm) and reused logic on
     sport.html's pre-filled per-sport version (#sportRegisterForm). */
  setupRegisterForm("registerForm");
  setupRegisterForm("sportRegisterForm");

  function setupRegisterForm(formId){
    const form = document.getElementById(formId);
    if(!form) return;
    const successBox = form.querySelector(".form-success");

    form.addEventListener("submit", function(e){
      e.preventDefault();
      let valid = true;

      const name = form.querySelector('[name="reg-name"]');
      const age = form.querySelector('[name="reg-age"]');
      const phone = form.querySelector('[name="reg-phone"]');
      const email = form.querySelector('[name="reg-email"]');
      const sport = form.querySelector('[name="reg-sport"]');

      valid = setFieldError(name, name.nextElementSibling,
        isValidName(name.value) ? "" : "Enter a valid name (letters only, 2-40 characters).") && valid;

      valid = setFieldError(age, age.nextElementSibling,
        isValidAge(age.value) ? "" : "Age must be a number between 5 and 65.") && valid;

      valid = setFieldError(phone, phone.nextElementSibling,
        isValidPhone(phone.value) ? "" : "Enter a valid 10-digit phone number.") && valid;

      valid = setFieldError(email, email.nextElementSibling,
        isValidEmail(email.value) ? "" : "Enter a valid email address.") && valid;

      if(sport){
        valid = setFieldError(sport, sport.nextElementSibling,
          sport.value ? "" : "Please select a sport.") && valid;
      }

      if(valid){
        if(successBox){
          let sportLabel = "the academy";
          if(sport){
            sportLabel = (sport.tagName === "SELECT")
              ? sport.options[sport.selectedIndex].text
              : (sportsData[sport.value] ? sportsData[sport.value].name : sport.value);
          }
          successBox.textContent = "Registration successful! " + name.value.trim() +
            " has been registered for " + sportLabel + ". Our team will contact you shortly.";
          successBox.classList.add("show");
        }
        form.reset();
        // Re-lock the sport field if this is the sport-specific form
        if(form.id === "sportRegisterForm"){
          const lockedValue = form.dataset.lockedSport;
          if(lockedValue && sport) sport.value = lockedValue;
        }
      }else if(successBox){
        successBox.classList.remove("show");
      }
    });
  }

  /* ---- LOGIN form validation (index.html) ---- */
  const loginForm = document.getElementById("loginForm");
  if(loginForm){
    const successBox = loginForm.querySelector(".form-success");
    loginForm.addEventListener("submit", function(e){
      e.preventDefault();
      let valid = true;
      const email = loginForm.querySelector('[name="login-email"]');
      const password = loginForm.querySelector('[name="login-password"]');

      valid = setFieldError(email, email.nextElementSibling,
        isValidEmail(email.value) ? "" : "Enter a valid email address.") && valid;

      valid = setFieldError(password, password.nextElementSibling,
        password.value.trim().length >= 6 ? "" : "Password must be at least 6 characters.") && valid;

      if(valid){
        if(successBox){
          successBox.textContent = "Welcome back! You are now logged in as " + email.value.trim() + ".";
          successBox.classList.add("show");
        }
        loginForm.reset();
      }else if(successBox){
        successBox.classList.remove("show");
      }
    });
  }

  /* ---- SIGNUP form validation (index.html) ---- */
  const signupForm = document.getElementById("signupForm");
  if(signupForm){
    const successBox = signupForm.querySelector(".form-success");
    signupForm.addEventListener("submit", function(e){
      e.preventDefault();
      let valid = true;
      const name = signupForm.querySelector('[name="signup-name"]');
      const email = signupForm.querySelector('[name="signup-email"]');
      const password = signupForm.querySelector('[name="signup-password"]');
      const confirm = signupForm.querySelector('[name="signup-confirm"]');

      valid = setFieldError(name, name.nextElementSibling,
        isValidName(name.value) ? "" : "Enter a valid name.") && valid;

      valid = setFieldError(email, email.nextElementSibling,
        isValidEmail(email.value) ? "" : "Enter a valid email address.") && valid;

      valid = setFieldError(password, password.nextElementSibling,
        password.value.trim().length >= 6 ? "" : "Password must be at least 6 characters.") && valid;

      valid = setFieldError(confirm, confirm.nextElementSibling,
        confirm.value === password.value && confirm.value.trim().length >= 6 ? "" : "Passwords do not match.") && valid;

      if(valid){
        if(successBox){
          successBox.textContent = "Account created! Welcome to PeakForm, " + name.value.trim() + ".";
          successBox.classList.add("show");
        }
        signupForm.reset();
      }else if(successBox){
        successBox.classList.remove("show");
      }
    });
  }

  /* ------------------------------------------------------------
     5. COACHES LISTING (coaches.html)
     Renders cards grouped by sport from coachesData.
     ------------------------------------------------------------ */
  const coachesGrid = document.getElementById("coachesGrid");
  if(coachesGrid){
    const bySport = {};
    Object.keys(coachesData).forEach(function(slug){
      const c = coachesData[slug];
      if(!bySport[c.sport]) bySport[c.sport] = [];
      bySport[c.sport].push(Object.assign({ slug: slug }, c));
    });

    let html = "";
    Object.keys(sportsData).forEach(function(sportKey){
      const list = bySport[sportKey];
      if(!list) return;
      const sportInfo = sportsData[sportKey];
      html += '<h3 class="sport-group-title">' + sportInfo.icon + " " + sportInfo.name + " Coaches</h3>";
      html += '<div class="row g-3 mb-2">';
      list.forEach(function(c){
        html += '<div class="col-sm-6 col-lg-4">' +
          '<a class="pf-card clickable d-block h-100 text-decoration-none" href="coach.html?name=' + encodeURIComponent(c.slug) + '">' +
            '<div class="card-accent"></div>' +
            '<div class="pf-card-body">' +
              '<div class="coach-avatar">' + c.initials + '</div>' +
              '<h4>' + c.name + '</h4>' +
              '<p class="coach-meta">' + c.role + ' &middot; ' + c.experience + ' experience</p>' +
              '<span class="pf-tag">' + sportInfo.name + '</span>' +
              '<span class="card-link d-block mt-2">View Profile</span>' +
            '</div>' +
          '</a>' +
        '</div>';
      });
      html += '</div>';
    });
    coachesGrid.innerHTML = html;
  }

  /* ------------------------------------------------------------
     6. SPORT DETAIL PAGE (sport.html)
     Reads ?sport=football and renders from sportsData.
     ------------------------------------------------------------ */
  const sportDetailRoot = document.getElementById("sportDetail");
  if(sportDetailRoot){
    const key = (getQueryParam("sport") || "").toLowerCase();
    const sport = sportsData[key];

    if(!sport){
      sportDetailRoot.innerHTML =
        '<div class="container not-found">' +
          '<h2>Sport not found</h2>' +
          '<p>We could not find details for "' + (key || "this sport") + '".</p>' +
          '<a class="btn btn-pf-primary" href="courses.html">← Back to Courses</a>' +
        '</div>';
    }else{
      document.title = sport.name + " — PeakForm Sports Academy";

      const heroHtml =
        '<div class="page-banner-inner-wrap detail-hero">' +
          '<div class="container">' +
            '<p class="breadcrumb"><a href="courses.html">Courses</a> / ' + sport.name + '</p>' +
            '<div class="detail-hero-inner">' +
              '<div class="detail-icon">' + sport.icon + '</div>' +
              '<div>' +
                '<h1>' + sport.name + '</h1>' +
                '<p class="lead">' + sport.tagline + '</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';

      const bodyHtml =
        '<div class="container py-5">' +
          '<div class="row g-5 align-items-start">' +
            '<div class="col-md-7">' +
              '<span class="eyebrow">About this programme</span>' +
              '<p>' + sport.description + '</p>' +
              '<h3>What you get</h3>' +
              '<ul class="info-list">' +
                sport.highlights.map(h => '<li>' + h + '</li>').join("") +
              '</ul>' +
              '<div class="kv-grid">' +
                '<div><span>Level</span><strong>' + sport.level + '</strong></div>' +
                '<div><span>Term Length</span><strong>' + sport.duration + '</strong></div>' +
                '<div><span>Schedule</span><strong>' + sport.schedule + '</strong></div>' +
                '<div><span>Fees</span><strong>' + sport.fees + '</strong></div>' +
              '</div>' +
            '</div>' +
            '<div class="col-md-5"><div class="form-card">' +
              '<h3 class="mt-0">Register for ' + sport.name + '</h3>' +
              '<div class="form-success"></div>' +
              '<form id="sportRegisterForm" data-locked-sport="' + key + '" novalidate>' +
                '<div class="field">' +
                  '<label for="sf-name">Full Name</label>' +
                  '<input type="text" id="sf-name" name="reg-name" placeholder="Your full name">' +
                  '<span class="error-msg"></span>' +
                '</div>' +
                '<div class="field-row">' +
                  '<div class="field">' +
                    '<label for="sf-age">Age</label>' +
                    '<input type="number" id="sf-age" name="reg-age" placeholder="e.g. 16">' +
                    '<span class="error-msg"></span>' +
                  '</div>' +
                  '<div class="field">' +
                    '<label for="sf-phone">Phone Number</label>' +
                    '<input type="tel" id="sf-phone" name="reg-phone" placeholder="10-digit number">' +
                    '<span class="error-msg"></span>' +
                  '</div>' +
                '</div>' +
                '<div class="field">' +
                  '<label for="sf-email">Email Address</label>' +
                  '<input type="email" id="sf-email" name="reg-email" placeholder="you@example.com">' +
                  '<span class="error-msg"></span>' +
                '</div>' +
                '<div class="field">' +
                  '<label for="sf-sport">Sport</label>' +
                  '<select id="sf-sport" class="locked-field" disabled>' +
                    '<option selected>' + sport.icon + ' ' + sport.name + '</option>' +
                  '</select>' +
                  '<input type="hidden" name="reg-sport" value="' + key + '">' +
                  '<span class="error-msg"></span>' +
                '</div>' +
                '<button type="submit" class="btn btn-pf-primary w-100 rounded-pill">Submit Registration</button>' +
                '<p class="form-note">No payment required to register — our team will reach out to confirm your batch.</p>' +
              '</form>' +
            '</div></div>' +  /* close form-card + col-md-5 */
          '</div>' +
        '</div>';

      sportDetailRoot.innerHTML = heroHtml + bodyHtml;

      // The visible select is disabled just to show the locked sport name;
      // the real value submitted comes from the hidden input named "reg-sport".
      setupRegisterForm("sportRegisterForm");
    }
  }

  /* ------------------------------------------------------------
     7. COACH DETAIL PAGE (coach.html)
     Reads ?name=slug and renders from coachesData.
     ------------------------------------------------------------ */
  const coachDetailRoot = document.getElementById("coachDetail");
  if(coachDetailRoot){
    const slug = (getQueryParam("name") || "").toLowerCase();
    const coach = coachesData[slug];

    if(!coach){
      coachDetailRoot.innerHTML =
        '<div class="container not-found">' +
          '<h2>Coach not found</h2>' +
          '<p>We could not find a profile for "' + slugToTitle(slug || "this-coach") + '".</p>' +
          '<a class="btn btn-pf-primary" href="coaches.html">← Back to Coaches</a>' +
        '</div>';
    }else{
      const sportInfo = sportsData[coach.sport];
      document.title = coach.name + " — PeakForm Sports Academy";

      const heroHtml =
        '<div class="detail-hero">' +
          '<div class="container">' +
            '<p class="breadcrumb"><a href="coaches.html">Coaches</a> / ' + coach.name + '</p>' +
            '<div class="detail-hero-inner">' +
              '<div class="detail-icon">' + (sportInfo ? sportInfo.icon : "🏅") + '</div>' +
              '<div>' +
                '<h1>' + coach.name + '</h1>' +
                '<p class="lead">' + coach.role + ' · ' + (sportInfo ? sportInfo.name : coach.sport) + '</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';

      const bodyHtml =
        '<div class="container py-5">' +
          '<div class="row g-5 align-items-start">' +
            '<div class="col-md-7">' +
              '<span class="eyebrow">Achievements</span>' +
              '<ul class="info-list">' +
                coach.achievements.map(a => '<li>' + a + '</li>').join("") +
              '</ul>' +
              '<span class="eyebrow">Training Methods</span>' +
              '<ul class="info-list">' +
                coach.trainingMethods.map(t => '<li>' + t + '</li>').join("") +
              '</ul>' +
            '</div>' +
            '<div class="col-md-5"><div class="form-card">' +
              '<h3 class="mt-0">Personal Details</h3>' +
              '<div class="kv-grid">' +
                '<div><span>Age</span><strong>' + coach.age + '</strong></div>' +
                '<div><span>Experience</span><strong>' + coach.experience + '</strong></div>' +
                '<div><span>Qualification</span><strong>' + coach.qualification + '</strong></div>' +
                '<div><span>Joined Academy</span><strong>' + coach.joined + '</strong></div>' +
                '<div><span>Languages</span><strong>' + coach.languages + '</strong></div>' +
                '<div><span>Sport</span><strong>' + (sportInfo ? sportInfo.name : coach.sport) + '</strong></div>' +
              '</div>' +
              '<h3 style="margin-top:24px;">Contact</h3>' +
              '<p style="margin-bottom:4px;">📧 ' + coach.email + '</p>' +
              '<p>📞 ' + coach.phone + '</p>' +
              '<a class="btn btn-pf-primary w-100 rounded-pill" href="' + (sportInfo ? "sport.html?sport=" + coach.sport : "coaches.html") + '">View ' + (sportInfo ? sportInfo.name : "") + ' Programme</a>' +
            '</div></div>' +
          '</div>' +
        '</div>';

      coachDetailRoot.innerHTML = heroHtml + bodyHtml;
    }
  }

});