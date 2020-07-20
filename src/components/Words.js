var programming_languages=[
    "python",
    "java",
    "cpp",
    "c",
    "html",
    "csharp",
    "ruby",
    "perl",
    "php"
]

function randomWord(){
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export {randomWord}