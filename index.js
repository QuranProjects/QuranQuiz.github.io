let submitButton = document.getElementById('submitButton')
let confirmSurahs = document.getElementById('confirmSurahs')
let surahSelector1 = document.getElementById('surahSelector1')
let surahSelector2 = document.getElementById('surahSelector2')
let surahQuizName = document.getElementById('surahQuizName')

let pageNumber = document.getElementById('pageNumber')
let juzNumber = document.getElementById('juzNumber')
let hizbNumber = document.getElementById('hizbNumber')
let surahNumber = document.getElementById('surahNumber')
let ayahNumber = document.getElementById('ayahNumber')

let correctPageNumber = document.getElementById('correctPageNumber')
let correctJuzNumber = document.getElementById('correctJuzNumber')
let correctHizbNumber = document.getElementById('correctHizbNumber')
let correctSurahNumber = document.getElementById('correctSurahNumber')
let correctAyahNumber = document.getElementById('correctAyahNumber')
let correctSurahName = document.getElementById('correctSurahName')

let surahInfo = {}

const SURAH_LIST = ['1 - الفاتحة', '2 - البقرة', '3 - آل عمران', '4 - النساء', '5 - المائدة', '6 - الأنعام', '7 - الأعراف', '8 - الأنفال', '9 - التوبة', '10 - يونس', '11 - هود', '12 - يوسف', '13 - الرعد', '14 - ابراهيم', '15 - الحجر', '16 - النحل', '17 - الإسراء', '18 - الكهف', '19 - مريم', '20 - طه', '21 - الأنبياء', '22 - الحج', '23 - المؤمنون', '24 - النور', '25 - الفرقان', '26 - الشعراء', '27 - النمل', '28 - القصص', '29 - العنكبوت', '30 - الروم', '31 - لقمان', '32 - السجدة', '33 - الأحزاب', '34 - سبإ', '35 - فاطر', '36 - يس', '37 - الصافات', '38 - ص', '39 - الزمر', '40 - غافر', '41 - فصلت', '42 - الشورى', '43 - الزخرف', '44 - الدخان', '45 - الجاثية', '46 - الأحقاف', '47 - محمد', '48 - الفتح', '49 - الحجرات', '50 - ق', '51 - الذاريات', '52 - الطور', '53 - النجم', '54 - القمر', '55 - الرحمن', '56 - الواقعة', '57 - الحديد', '58 - المجادلة', '59 - الحشر', '60 - الممتحنة', '61 - الصف', '62 - الجمعة', '63 - المنافقون', '64 - التغابن', '65 - الطلاق', '66 - التحريم', '67 - الملك', '68 - القلم', '69 - الحاقة', '70 - المعارج', '71 - نوح', '72 - الجن', '73 - المزمل', '74 - المدثر', '75 - القيامة', '76 - الانسان', '77 - المرسلات', '78 - النبإ', '79 - النازعات', '80 - عبس', '81 - التكوير', '82 - الإنفطار', '83 - المطففين', '84 - الإنشقاق', '85 - البروج', '86 - الطارق', '87 - الأعلى', '88 - الغاشية', '89 - الفجر', '90 - البلد', '91 - الشمس', '92 - الليل', '93 - الضحى', '94 - الشرح', '95 - التين', '96 - العلق', '97 - القدر', '98 - البينة', '99 - الزلزلة', '100 - العاديات', '101 - القارعة', '102 - التكاثر', '103 - العصر', '104 - الهمزة', '105 - الفيل', '106 - قريش', '107 - الماعون', '108 - الكوثر', '109 - الكافرون', '110 - النصر', '111 - المسد', '112 - الإخلاص', '113 - الفلق', '114 - الناس']
const SURAH_LIST_NO_NUM = ['الفاتحة', 'البقرة', 'آل عمران', 'النساء', 'المائدة', 'الأنعام', 'الأعراف', 'الأنفال', 'التوبة', 'يونس', 'هود', 'يوسف', 'الرعد', 'ابراهيم', 'الحجر', 'النحل', 'الإسراء', 'الكهف', 'مريم', 'طه', 'الأنبياء', 'الحج', 'المؤمنون', 'النور', 'الفرقان', 'الشعراء', 'النمل', 'القصص', 'العنكبوت', 'الروم', 'لقمان', 'السجدة', 'الأحزاب', 'سبإ', 'فاطر', 'يس', 'الصافات', 'ص', 'الزمر', 'غافر', 'فصلت', 'الشورى', 'الزخرف', 'الدخان', 'الجاثية', 'الأحقاف', 'محمد', 'الفتح', 'الحجرات', 'ق', 'الذاريات', 'الطور', 'النجم', 'القمر', 'الرحمن', 'الواقعة', 'الحديد', 'المجادلة', 'الحشر', 'الممتحنة', 'الصف', 'الجمعة', 'المنافقون', 'التغابن', 'الطلاق', 'التحريم', 'الملك', 'القلم', 'الحاقة', 'المعارج', 'نوح', 'الجن', 'المزمل', 'المدثر', 'القيامة', 'الانسان', 'المرسلات', 'النبإ', 'النازعات', 'عبس', 'التكوير', 'الإنفطار', 'المطففين', 'الإنشقاق', 'البروج', 'الطارق', 'الأعلى', 'الغاشية', 'الفجر', 'البلد', 'الشمس', 'الليل', 'الضحى', 'الشرح', 'التين', 'العلق', 'القدر', 'البينة', 'الزلزلة', 'العاديات', 'القارعة', 'التكاثر', 'العصر', 'الهمزة', 'الفيل', 'قريش', 'الماعون', 'الكوثر', 'الكافرون', 'النصر', 'المسد', 'الإخلاص', 'الفلق', 'الناس']
var SURAH_NUMBERS = []



function fetchAyah() {
    surahId = SURAH_NUMBERS[Math.floor(Math.random()*SURAH_NUMBERS.length)]
    
    pageNumber.value = ''
    juzNumber.value = ''
    hizbNumber.value = ''
    surahNumber.value = ''
    ayahNumber.value = ''

    surahInfo = {}
    fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
    .then(res => res.json())
    .then(out => {
        var ayahCount = out.data.numberOfAyahs
        let url = `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahId}`
        let verse1 = document.getElementById('verse1')
        let verse2 = document.getElementById('verse2')
        
        fetch(url)
        .then(res => res.json())
        .then(out => {
            randomAyah = Math.floor(Math.random()*(ayahCount))
            if (randomAyah == 0 ){
                randomAyah = 1
            }
            if (randomAyah == ayahCount){
                verse1.innerHTML = out.verses[randomAyah - 1].text_uthmani
                // verse2.innerHTML = out.verses[randomAyah].text_uthmani
            }
            else {
                verse1.innerHTML = out.verses[randomAyah - 1].text_uthmani
                verse2.innerHTML = out.verses[randomAyah].text_uthmani
            }
            surahInfo.ayahId = randomAyah
            }
            )
        .catch(err => console.log(err));
        surahInfo.name = SURAH_LIST_NO_NUM[surahId - 1]
        surahInfo.id = surahId
})}

SURAH_LIST.forEach(element => {
    surahSelector1[SURAH_LIST.indexOf(element)] = new Option(element, element);
    surahSelector2[SURAH_LIST.indexOf(element)] = new Option(element, element);
})


confirmSurahs.addEventListener("click", function() {
    SURAH_NUMBERS = []
    var surah1 = (SURAH_LIST.indexOf(surahSelector1.value) + 1)
    var surah2 = (SURAH_LIST.indexOf(surahSelector2.value) + 1)

    if (surah1 > surah2) {
        for (i = surah2; i <= surah1; i++){
            SURAH_NUMBERS.push(i)
         }
    }

    if (surah2 > surah1) {
        for (i = surah1; i <= surah2; i++){
            SURAH_NUMBERS.push(i)
         }
    }
    
    if (surah2 == surah1) {
        SURAH_NUMBERS.push(SURAH_LIST.indexOf(surahSelector1.value) + 1)
    }

    console.log(SURAH_NUMBERS)
    surahId = SURAH_NUMBERS[Math.floor(Math.random()*SURAH_NUMBERS.length)]
    document.getElementById('chooseSurahs').style.visibility = 'hidden'
    document.getElementById('chooseSurahs').style.display = 'none'
    document.getElementById('quizMain').style.visibility = 'visible'
    var index = 0
    SURAH_NUMBERS.forEach(element => {
        surahNameQuiz[index] = new Option(SURAH_LIST_NO_NUM[element - 1], SURAH_LIST_NO_NUM[element - 1]);
        console.log(index)
        index = index + 1
    })
    fetchAyah()

});

submitButton.addEventListener("click", function() {
    var ayahId = `${surahInfo.id}:${surahInfo.ayahId}`
    var selectedSurah = surahNameQuiz.value

    
    fetch(`https://api.alquran.cloud/v1/ayah/${ayahId}`)
    .then(res => res.json())
    .then(out => {
        var score = 0
        
        if (mushafType.value == 'طبعة الملك عبدالله') {
            fetch(`https://api.quran.com/api/v4/quran/verses/code_v2?chapter_number=${surahId}`)
            .then(res => res.json())
            .then(abdullah => {
                console.log(abdullah.verses[surahInfo.ayahId - 1].v2_page)
                surahInfo.page = abdullah.verses[surahInfo.ayahId - 1].v2_page  
        })}
            
        else {
            surahInfo.page = out.data.page
        }
        
        surahInfo.juz = out.data.juz
        surahInfo.hizb = Math.ceil(out.data.hizbQuarter / 4)
        
        if (surahInfo.juz == juzNumber.value) {
            score = score + 1
        }
        if (surahInfo.hizb == hizbNumber.value) {
            score = score + 1
        }
        if (surahInfo.id == surahNumber.value) {
            score = score + 1
        }
        if (surahInfo.ayahId == ayahNumber.value) {
            score = score + 1
        }
        if (surahInfo.name == selectedSurah) {
            score = score + 1
        }
        if (surahInfo.page == pageNumber.value) {
            score = score + 1
        }
        else{submitButton.click()}
        
        document.getElementById('totalScore').innerHTML = `${score}/6`
        correctPageNumber.innerHTML = `رقم الصفحة : ${surahInfo.page}`
        correctJuzNumber.innerHTML = `رقم الجزء : ${surahInfo.juz}`
        correctHizbNumber.innerHTML = `رقم الحزب : ${surahInfo.hizb}`
        correctSurahNumber.innerHTML = `رقم السورة : ${surahInfo.id}`
        correctAyahNumber.innerHTML = `رقم الآية : ${surahInfo.ayahId}`
        correctSurahName.innerHTML = `اسم السورة : ${surahInfo.name}`
        if (correctPageNumber.innerHTML != "رقم الصفحة : undefined") {
            document.getElementById('finalScore').style.visibility = 'visible'
            finalScore.scrollIntoView()
        }
    }

)})

repeatDifferentSurahs.addEventListener("click", function() {
    window.location.reload()
})

repeatSameSurahs.addEventListener("click", function() {
    document.getElementById('finalScore').style.visibility = 'hidden'
    window.scrollTo(0, 0)
    fetchAyah()
})