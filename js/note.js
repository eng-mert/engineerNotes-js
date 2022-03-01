import { displayCategory } from "./getCategories.js";
import { displayNote, getNote } from "./getNote.js";
// import { getCurrentNoteIndex, getNextArticle, getPreviousArticle } from "./pagination.js";
import { search } from "./search.js"

displayCategory();
search();


const note_id = new URL(window.location.href).searchParams.get('id');

getNote(note_id).then(note => {
    displayNote(note);
})
// const prevBtn = document.querySelector('#prev-note-btn');
// const nextBtn = document.querySelector('#next-note-btn');
// getCurrentNoteIndex(note_id).then(data => {
//     if (Number(data.current) === 0) {
//         prevBtn.classList.add("d-none")
//     } else if (Number(data.current) === Number(data.total)) {
//         nextBtn.classList.add("d-none")
//     }
//     return data.current;
// }).then(current => {
//     getPreviousArticle(current).then(article => {
//         if (article) {
//             const prevBtn = document.querySelector('#prev-note-btn');
//             prevBtn.setAttribute("href", "./note.html?id=" + article._id);
//             return article;
//         }
//     })
//     getNextArticle(current).then(article => {
//         if (article) {
//             const nextBtn = document.querySelector('#next-note-btn');
//             nextBtn.setAttribute("href", "./note.html?id=" + article._id);
//             return article;
//         }
//     })
// });






