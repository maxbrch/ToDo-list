let
  $btn = document.querySelector('.add-controls_btn'),
  $inp = document.querySelector('.add-controls_inp'),
  $out = document.querySelector('.out'),
  x    = document.querySelector('.x')
  date = document.getElementById('date'),
  remove = document.getElementById('remove'),
  them = document.getElementById('theme'),
  sidebar = document.getElementById("mySidenav"),
  btnshow = document.createElement('button'),
  popup  = document.createElement('div'),
  btnhide = document.createElement('button');
// зірка
function star() {
   var starx = document.bodycreateElement('star');
   starx.classList.toggle(".m-on");
}
document.addEventListener('click', checkPriority);
function checkPriority(e){
  let
    $target = e.target,
    targetClasses = $target.className.split(' ');

  console.log('--| target');
  console.log(targetClasses);

  let isRight = targetClasses.indexOf('out_task_star');

  if(!(isRight<0)){
    console.log('--| change star!');

    $target.classList.add("m-on");
  }
}
// добавлення задачі
$btn.addEventListener('click', addTask);
function addTask(e){
  let taskName = $inp.value;
  let dates    =  date.value;
  console.log('--| task name: ' + taskName);
// перевірка на попрожню строку
  if( taskName!='' && taskName!=' ' && taskName!='  '){
    console.log(' -| name is right');
// добавлення задачі

let task   = document.createElement('div');
task.className     = 'task';
task.id            = taskName;
$out.append(task); 

// pop up {
const openPopup   = document.getElementById('open_pop_up');
const closePopup  = document.getElementById('pop_up_close');
const popUp       = document.getElementById('pop_up');

openPopup.addEventListener('click', function(e) {
  popUp.classList.add('active');
})

closePopup.addEventListener('click', () => {
  popUp.classList.remove('active');
})
// }
let taskN  = document.createElement('p');
let check  = document.createElement('input');
let button = document.createElement('button');
let btnshow = document.createElement('button');
let btnhide = document.createElement('button');
check.type = "checkbox";
button.textContent = 'Remove';
btnshow.textContent = 'Show';
btnhide.textContent = 'Hide';


//star
let star   = new Image();
star.src ='D:/work/sendbox/todolist/version/v9.1/todolist/img/staroff.jpg';
star.addEventListener('click', starClass);
function starClass() {
  star.src ='D:/work/sendbox/todolist/version/v9.1/todolist/img/staron.jpg';
}


button.addEventListener('click', ()=>{  button.remove(),task.remove(),check.remove(),btnshow.remove(),btnhide.remove() });
task.append(star,taskN,check,button,popUp,openPopup,btnhide);  // add elements
taskN.textContent   = taskName;
//    btnshow.addEventListener('click', ()=>{subTask()});
 /*  var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");*/
}

}

//$btn.addEventListener('click', addTask);


//btnshow.addEventListener('click', show);

//btnshow.addEventListener('click',show());


//btnshow.addEventListener('click',)
// sidebar
function openNavt() {
  sidebar.style.width = "520px";
}

function closeNavt() {
  sidebar.style.width = "0";
}
// dark theme
function theme() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}