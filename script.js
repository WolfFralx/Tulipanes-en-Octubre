const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const typedElem = document.getElementById('typed');
const finalTulips = document.getElementById('finalTulips');
const audio = document.getElementById('audio');

const message = `Tulipanes

El tiempo ha pasado lento y rápido a la vez.
Es extraño — a veces siento que fue ayer cuando me declaré y dijiste que sí.
Qué raro es el tiempo: cuando quiero que pase rápido, se detiene…
pero cuando estoy a tu lado, vuela.

¿Por qué será?
Tal vez por lo que me haces sentir,
por la manera en que puedes cambiar mi ánimo con una palabra,
o porque contigo hasta el silencio se vuelve bonito y tranquilo.

No lo sé con certeza, pero quizá sean todas esas razones —
o más — por las que el tiempo, contigo, simplemente es distinto.

Sé que debería ser más romántico, anotar más cosas,
no dejar que los pequeños detalles se me escapen.

Recuerdo que, en su momento, me contaste —como buena fan de Enjambre—
que querías tus tulipanes en octubre.

Admito que lo olvidé. Pensé en hacerte algo:
un dibujo, una página web, una carta… pero nada me convencía.
Quería que fuera algo más bonito, más tuyo.

Si no me lo hubieras recordado, quizá ni lo habría traído a la memoria.
Y sé que no te gusta pedir las cosas,
porque te gusta que los gestos sean sinceros,
que se note que te escucho y estoy pendiente de ti.

Que lo olvidara da la impresión contraria,
así que discúlpame por eso.

Pero esta vez no pienso quedarme de brazos cruzados.

Prometo anotar más, recordar más,
y sobre todo, estar más atento —
porque tú mereces eso y más.

Tus tulipanes, al fin, en octubre. 🌷`;

function createFallingTulip() {
  const tulip = document.createElement('img');
  tulip.src = 'https://i.imgur.com/xZlfQ0n.png';
  tulip.className = 'tulip';
  tulip.style.left = Math.random() * window.innerWidth + 'px';
  tulip.style.width = 20 + Math.random()*30 + 'px';
  tulip.style.height = 'auto';
  tulip.style.animationDuration = (5 + Math.random()*5) + 's';
  document.body.appendChild(tulip);
  setTimeout(() => tulip.remove(), 10000);
}

setInterval(createFallingTulip, 500);

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  letter.style.opacity = 1;
  audio.play();
  typeWriter(message, 0);
});

function typeWriter(text, i) {
  if (i < text.length) {
    typedElem.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 60);
  } else {
    for (let j = 0; j < 20; j++) {
      const t = document.createElement('span');
      t.style.left = Math.random()*letter.offsetWidth + 'px';
      t.style.top = Math.random()*letter.offsetHeight + 'px';
      finalTulips.appendChild(t);
    }
  }
}
