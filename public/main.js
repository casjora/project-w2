const rafael = [
  {
    name: "Rafael Lopez",
    fullName: "Jose Rafael Lopez Castillo",
    nivelHTML: 90,
    nivelCSS: 80,
    nivelJs: 80,
    description: `I'm a passionate Frontend Developer, I started coding when I was 16 but I had never had the chance to work in this field. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto iusto nobis quis ea eaque molestias obcaecati quisquam. Ut, quidem labore?

    Programming to me is like a sneak peek of creation. God is the Great Programmer and his creation is the UI for his children.

    Programming to me is like a sneak peek of creation. God is the Great Programmer and his creation is the UI for his children.`,
    skills: [
      "./icons/html-5.svg",
      "./icons/css.svg",
      "./icons/js.svg",
      "./icons/sql-database.svg",
      "./icons/python.svg",
      "./icons/csharp.svg",
      "./icons/looker.svg",
      "./icons/linux.svg",
    ],
    additionalSkills:["./icons/sheets.svg",
        "./icons/tableau.svg",
        "./icons/microsoft-office.svg","./icons/ms-excel.svg",
        "./icons/microsoft-word.svg"] ,
    imgProfile: "./images/me-1-bg.png",
    imgProfile2: "./images/me-2-bg.png",
    imgProfile3: "./images/me-3-bg.png",
    imgProfile4: "./images/me-4-bg.png",
    imgProfile5: "./images/me-5-bg.png",
  },
];

let html = document.documentElement
let darkModeToggle = document.getElementById("toggle")

if( localStorage.getItem('theme') ==='dark'|| (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
{
  html.classList.add('dark');
}else{
  html.classList.remove('dark');
}

darkModeToggle.addEventListener('click',()=>{
  html.classList.toggle('dark');


//guardar en localStorage
if(html.classList.contains('dark')){
  localStorage.setItem('theme','dark');
}else{
  localStorage.setItem('theme','light')
}
});