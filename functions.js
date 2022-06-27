function home() {
    window.location.href = "index.html";
}

function goToAbout() {
    window.location.href = "aboutus.html";
}

function goToTeam() {
    window.location.href = "meetteam.html";
}

function goToFAQ() {
    window.location.href = "faq.html";
}

function email() {
    console.log('work in progress')
}

function linkedIn() {
    console.log('coming soon')
}

function sectionOne() {
    document.getElementById('textarea').value = 'Example 2.'
    document.getElementById('head').innerText = 'Introduction'
}

function sectionTwo() {
    document.getElementById('textarea').value = 'Yt another example.'
    document.getElementById('head').innerText = 'Highlights'
}                                     

function sectionThree() {
    document.getElementById('textarea').value = 'Yes this is another example.'
    document.getElementById('head').innerText = 'Philosphy'
}

function sectionFour() {
    document.getElementById('textarea').value = 'This is the sample example as the second one.'
    document.getElementById('head').innerText = 'Unique Selling Points'
}

function submit() {
    console.log(document.getElementById('question').value)
    console.log(document.getElementById('email').value)
}