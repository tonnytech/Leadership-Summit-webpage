const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navList.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((nav) => nav.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  navList.classList.remove('active');
}));

//  dynamic speaker section

const projectSection = document.querySelector('.speakers-list');

const myArray = [
    {
        image:'/images/user-male.png',
        name:'Simon Kimani',
        work: 'Bekman Profesor of Enterprenurial\
         Legal Studies at Harvard Law School.',
        description:'Wikipedia is provided \
        free of charge in 290 languages ​​every month to  \
        over 100 million people, nearly half of the \
        world\'s population.'
    },
    {
        image: '/images/user-female.png',
        name: 'Moses Mwikali',
        work: 'Diretor of Center Nabi and a board \
        menber of CC Korea',
        description:'He led open \
        source projects at the Mozilla Foundation and \
        joined CC as CEO in 2014.',
    },
    {
        image:'images/user-male.png',
        name: 'Lilian Miller',
        work: 'Exercutive Director of Wikipedia Foundation',
        description: 'Focusing on a \
        collaborative approach in a networked environment,\
         he created the concept of co-production based on sharing,\
          such as open source software and Wikipedia.'
    },
    {
        image:'/images/user-male.png',
        name: 'Sam Wakanda',
        work: 'CEO of laik technology in Egypt',
        description: 'As the author\
        of &lt;Digital Art Art of Our Time&gt;,\
         he opened \'Art Center Nabi\', Korea\'s first digital\
         art institution, in 2000, and is currently serving.',
    },
    {
        image: 'images/user-female.png',
        name: 'Tyson Tailer',
        work: 'Founder and CEO of Utumishi supper market',
        description: 'European integration \
        and online youth participation in politics and \
        democracy are major concerns, and a report has \
        been published that will potentially affect the \
        revision of the EU\'s copyright law in July',
    },
    {
        image: 'images/user-male.png',
        name: 'Stacy Atieno',
        work: 'Manager at Unity bank',
        description: 'Layla Tretikov is the general \
        secretary of the Wikimedia Foundation,\
         a non-profit organization that runs Wikipedia.',
    }

]

const displayProjects =({
    image, name, work, description}, index) => {
        const div = document.createElement('div');
        div.className = 'speaker-list-items'
        div.innerHTML=`
            <div class="speaker-photo"><img src="${image}" alt="" class="speaker-image"> </div>
                <div class="speaker-info">
                    <div class="speaker-name">${name} </div>
                    <div class="speaker-position"> ${work} </div>
                    <div class="peaker-positon-def">${description} </div>
                </div>
            </div>        
        `;
        return (div);

};

const getProjects = () => {
    myArray.forEach( (myObjects,index) => {
        projectSection.append(displayProjects(myObjects,index));
    });
};

getProjects();