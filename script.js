const typedElem = document.getElementById('typed');
const emojiTulips = document.getElementById('emojiTulips');
const audio = document.getElementById('audio');
const playButton = document.getElementById('playAudio');

let writing = false;

const message = `Tulipanes

El tiempo ha pasado lento y rápido a la vez.
Es extraño, a veces siento que fue ayer cuando me declaré y dijiste que sí.
Qué raro es el tiempo: cuando quiero que pase rápido se detiene,
pero cuando estoy a tu lado este vuela.

¿Por qué será?
Tal vez por lo que me haces sentir,
por la manera en que puedes cambiar mi ánimo con una palabra,
o porque contigo hasta el silencio se vuelve bonito y tranquilo.

No lo sé con certeza, pero quizá sean todas esas razones,
o más, por las que el tiempo, contigo, simplemente es distinto.

Sé que debería ser más romántico, anotar más cosas,
no dejar que los pequeños detalles se me escapen.

Recuerdo que, en su momento, me contaste que como buena fan de Enjambre
que querías tus tulipanes en octubre.

Admito que lo olvidé. Pensé en hacerte algo como:
un dibujo, una página web, una carta. pero nada me convencía.
Quería que fuera algo más bonito, más tuyo.

Si no me lo hubieras dicho, quizá ni lo habría recordado.
Y sé que no te gusta pedir las cosas,
porque te gusta que los gestos sean sinceros,
que se note que te escucho y estoy pendiente de ti.

Que lo olvidara da la impresión contraria,
así que discúlpame por eso.

Pero no pienso no hacer nada al respecto.

Anotare mas para asi no se me olvide,
y sobre todo, estar más atento,
porque tú mereces eso y más.

Tus tulipanes, al fin, en octubre. 🌷`;

function createSideEmoji() {
  const emoji = document.createElement('div');
  emoji.textContent = '🌷';
  emoji.className = 'emoji-tulip';
  const side = Math.random() < 0.5 ? 0 : window.innerWidth - 30;
  emoji.style.left = side + 'px';
  emoji.style.fontSize = 20 + Math.random() * 30 + 'px';
  emoji.style.animationDuration = (4 + Math.random() * 4) + 's';
  emojiTulips.appendChild(emoji);
  setTimeout(() => emoji.remove(), 8000);
}

// Generar tulipanes constantemente
setInterval(createSideEmoji, 400);

// Función de máquina de escribir
function typeWriter(text, i) {
  if (i < text.length) {
    typedElem.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 35);
  }
}

// Botón de reproducir música y comenzar texto
playButton.addEventListener('click', () => {
  if (writing) return;
  writing = true;

  // reproducir audio
  audio.currentTime = 0;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(e => console.log("Audio bloqueado hasta interacción"));
  }

  typeWriter(message, 0);
  playButton.style.display = 'none';
});
