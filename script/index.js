// level //
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") // promise of responce
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLesson(json.data));
};

// 
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  
  fetch(url)
  .then((res) => res.json())
  .then((data) => displayLevelWord(data.data));
}

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  words.forEach(word => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="space-y-4 bg-white rounded-xl shadow-sm text-center px-5 py-10">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold text-base">Meaning/Pronounciation</p>
            <div class="font-medium font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between">
                <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
    
    `;
  wordContainer.append(card);
  })
}

const displayLesson = (lessons) => {
  // console.log(lessons);
  // 1. get the container & empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";


  // 2. get into every lessons
  for (let lesson of lessons) {
    // 3. create Element
    // console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `  <button onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
                            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
                         </button>
  `;
     // 4. append into container
    levelContainer.append(btnDiv);
  }
};

loadLessons();
