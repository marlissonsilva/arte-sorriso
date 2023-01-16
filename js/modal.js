const dataModal = [
    {

        title: 'clínico geral',
        img: './assets/logo.png',
        desc: 'Um clínico geral em odontologia é um dentista que é habilitado para realizar uma ampla gama de procedimentos odontológicos. Eles podem tratar cáries, fazer limpezas dentárias, realizar cirurgias, aplicar coroas e pontes, entre outras coisas. Eles também podem prescrever medicamentos e dar orientações de cuidados bucais para os pacientes. O objetivo principal de um clínico geral em odontologia é ajudar os pacientes a manter a saúde bucal e os dentes fortes e saudáveis.',
        contato: '',
    },
    {

        title: 'endodontia',
        img: './assets/logo.png',
        desc: 'Endodontia é a especialidade da odontologia que se ocupa do tratamento de doenças e lesões do tecido interno do dente, conhecido como nervo ou polpa. Os procedimentos endodônticos são comumente chamados de tratamentos de canal, pois envolvem a remoção da polpa infectada ou danificada do interior do dente e o preenchimento do espaço vazio com um material de obturação. A endodontia é realizada para salvaguardar os dentes que de outra forma seriam extraídos devido à dor ou infecção.',
        contato: '',
    },
    {

        title: 'periodontia',
        img: './assets/logo.png',
        desc: 'Periodontia é a especialidade da odontologia que se ocupa da saúde dos tecidos de suporte dos dentes, incluindo gengivas, ligamentos e osso. A doença periodontal, também conhecida como doença gengival, é uma infecção desses tecidos que pode levar à perda dos dentes se não for tratada. Os procedimentos periodontais podem incluir limpezas profundas, cirurgias para remover o tecido infectado e tratamentos para fortalecer os tecidos de suporte. Os dentistas periodontistas são treinados para diagnosticar e tratar problemas relacionados aos tecidos de suporte dos dentes.',
        contato: '',

    },
    {

        title: 'prótese',
        img: './assets/logo.png',
        desc: 'A prótese dentária é um tratamento utilizado para substituir dentes perdidos ou danificados.Os materiais mais comuns utilizados na confecção de próteses são a resina acrílica, o metal e a cerâmica. O tipo de prótese mais adequado para cada paciente depende de fatores como o número de dentes perdidos, a saúde dos dentes remanescentes e da boca, e as preferências do paciente em relação ao custo e aparência.',
        // Existem vários tipos de próteses, incluindo:Próteses removíveis: são aquelas que podem ser facilmente retiradas pelo paciente, como as próteses totais ou parciais.Próteses fixas: são aquelas que são fixadas aos dentes remanescentes ou ao osso, como as coroas, pontes e implantes dentários.Próteses parciais removíveis: são próteses que substituem alguns dentes e são mantidas no lugar por meio de ganchos que se agarram aos dentes remanescentes. Próteses totais: são próteses que substituem todos os dentes da arcada superior ou inferior.
        contato: '',
    },
    {

        title: 'implantodontia',
        img: './assets/logo.png',
        desc: 'Implantodontia é a especialidade da odontologia que se ocupa da colocação de implantes dentários e da reconstrução dos dentes com base em implantes. Os implantes dentários são pinos de titânio ou outro material que são inseridos no osso da mandíbula ou maxila como substitutos dos raízes dos dentes. Eles servem como base para a fixação de coroas, pontes ou próteses removíveis.A colocação de implantes é um procedimento cirúrgico que é realizado por um cirurgião oral ou por um dentista especialmente treinado em implantodontia. Depois que os implantes são colocados, eles precisam de tempo para se integrar ao osso antes que possam ser usados para suportar a reconstrução dos dentes. A implantodontia é uma opção de tratamento eficaz para a substituição de dentes perdidos ou danificados e pode ajudar a melhorar a aparência e a função dos dentes. No entanto, é importante notar que os implantes dentários nem sempre são uma opção viável para todos os pacientes, dependendo da saúde geral e da quantidade de osso disponível na mandíbula ou maxila.',
        contato: '',
    },
    {

        title: 'ortodontia',
        img: './assets/logo.png',
        desc: 'Ortodontia é a especialidade da odontologia que se ocupa do diagnóstico, prevenção e tratamento de problemas de alinhamento dos dentes e da mandíbula. Os ortodontistas são dentistas que se especializam em corrigir más oclusões (erros de mordida), como apinhamento, overlap e espaços entre os dentes. Eles fazem isso usando aparelhos ortodônticos, como brackets, arcos e placas de expansão. O tratamento ortodôntico pode ser realizado em pessoas de todas as idades, embora seja mais comum em crianças e adolescentes. O objetivo da ortodontia é melhorar a aparência dos dentes e a função da mandíbula, bem como prevenir problemas de saúde bucal futuros. No entanto, o tratamento ortodôntico pode ser um processo longo e, em alguns casos, pode ser bastante invasivo.',
        contato: '',
    }

]


const img = document.querySelector('#img-person');
const title = document.querySelector('#title');
const desc = document.getElementById('desc');
const contato = document.querySelector('#fazer-contato')
const cards = document.querySelectorAll('[data-index]');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close-button')


cards.forEach(card => {
    card.addEventListener('click', () => {
        fade.classList.toggle('active')
        modal.classList.toggle('active')
        document.body.style.overflowY = 'hidden'
        btnWhats.style.display = 'none'

    });
});


[closeModal, fade].forEach((e) => {
    e.addEventListener('click', () => {
        fade.classList.toggle('active')
        modal.classList.toggle('active')
        document.body.style.overflowY = 'visible'
        btnWhats.style.display = 'block'
    })
})


cards.forEach(card => {
    card.addEventListener('click', () => {
        const index = card.getAttribute('data-index');
        showModal(index);
    });
});



function showModal(index) {
    const
        item = dataModal[index]
    img.src = item.img;
    title.textContent = item.title;
    desc.textContent = item.desc;
    contato.href = item.contato;

}