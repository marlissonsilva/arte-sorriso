// const reviews = [
//     {
//         id: 1,
//         name: "ana luzia",
//         job: "professora",
//         img:
//             "https://img.freepik.com/fotos-gratis/professor-sorridente-segurando-um-monte-de-livros-e-uma-maca-com-espaco-de-copia_23-2148668527.jpg?w=900&t=st=1667474703~exp=1667475303~hmac=dfd5883afc5725211ff76b5edfb96f52dfda9442486ef2ea8858b12def7560d6",
//         text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi optio quos, tenetur quod voluptates,placeat recusandae ullam sed id eveniet repudiandae eos repellendus officia unde natus praesentium nostrum beatae rem?",
//     },
//     {
//         id: 2,
//         name: "joao pestana",
//         job: "aluno",
//         img: "https://img.freepik.com/fotos-gratis/garoto-segurando-uma-maca-na-sala-de-aula_1150-3835.jpg?t=st=1667445614~exp=1667446214~hmac=17db5282ab1d79711c47712814099358a038eca632c9167864ebadfbbed286c2",
//         text: "marlisson Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi optio quos, tenetur quod voluptates,placeat recusandae ullam sed id eveniet repudiandae eos repellendus officia unde natus praesentium nostrum beatae rem?",
//     },
//     {
//         id: 3,
//         name: "maria justina",
//         job: "desingn",
//         img:
//             "https://img.freepik.com/fotos-gratis/professor-sorridente-segurando-um-monte-de-livros-e-uma-maca-com-espaco-de-copia_23-2148668527.jpg?w=900&t=st=1667474703~exp=1667475303~hmac=dfd5883afc5725211ff76b5edfb96f52dfda9442486ef2ea8858b12def7560d6",
//         text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi optio quos, tenetur quod voluptates,placeat recusandae ullam sed id eveniet repudiandae eos repellendus officia unde natus praesentium nostrum beatae rem?",
//     },
//     {
//         id: 4,
//         name: "pedro justos",
//         job: "develop",
//         img: "https://img.freepik.com/fotos-gratis/garoto-segurando-uma-maca-na-sala-de-aula_1150-3835.jpg?t=st=1667445614~exp=1667446214~hmac=17db5282ab1d79711c47712814099358a038eca632c9167864ebadfbbed286c2",
//         text: "marlisson Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi optio quos, tenetur quod voluptates,placeat recusandae ullam sed id eveniet repudiandae eos repellendus officia unde natus praesentium nostrum beatae rem?",
//     },

// ];

// const img = document.querySelector('#img-person');
// const author = document.querySelector('#author');
// const job = document.getElementById('job');
// const info = document.querySelector('#info');


// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// let currentItem = 0;

// window.addEventListener('DOMContentLoaded', function () {
//     showPerson(currentItem)

// });

// function showPerson(person) {
//     const item = reviews[person]
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
// }

// nextBtn.addEventListener('click', () => {
//     currentItem++
//     if (currentItem > reviews.length - 1) {
//         currentItem = 0
//     }
//     showPerson(currentItem)
// })


// prevBtn.addEventListener('click', () => {
//     currentItem--
//     if (currentItem < 0) {
//         currentItem = reviews.length - 1;
//     }
//     showPerson(currentItem)
// })

// function randomSlide() {
//     setInterval(() => {
//         currentItem = Math.floor(Math.random() * reviews.length);
//         // console.log(currentItem);
//         showPerson(currentItem)
//     }, 4000);

// }

// randomSlide()


