let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  alert('sumador de dos numeros');
  const numero1 =  prompt('ingrese el primer valor');
  const numero2 =  prompt('ingrese el segundo valor');
  alert(+numero1 + +numero1);