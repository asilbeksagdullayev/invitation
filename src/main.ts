import './style.css';
import backgroundImage from '../public/background.jpg';
import countdown from 'countdown'; // countdown.js kutubxonasini import qilamiz

// HTML tarkibi
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="background" style="background-image: url('${backgroundImage}');">
    <div class="invitation-container">
      <h1>Fatxullajon va Dilnozaxon nikoh to'yida faxriy mehmon bo'ling!</h1>
      <p>Hurmatli mehmonlar!</p>
      <p>Sizni Fatxullajon va Dilnozaxonlarning nikoh to'yining faxriy mehmoni bo'lishga taklif qilamiz!</p>
      <p>Qalblar ezguliklarga to'la bo'lgan ushbu qutlug' kunda do'stlar yonida bo'ling.</p>
      <p>Ushbu kunda bizning muhabbatimizni baham ko'ring!</p>
      <p>Sizning qatnashishingiz bilan bizning baxtimiz oshadi!</p>
      <strong>Bayramni boshlash vaqti: <br />19.10.2024 / soat 18:00</strong>
      <p>To'y manzili: <a href="https://www.google.com/maps/place/Toxir-Zuxra+restorani/@38.8500935,66.0533217,399m/data=!3m1!1e3!4m6!3m5!1s0x3f4c0f3ea8b08f1f:0x84c88d4187940300!8m2!3d38.8500935!4d66.0533217!16s%2Fg%2F11rfdgpwpg?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D">Tohir-Zuxro</a> to'yxonasi</p>
      <div id="countdown"></div>
      </div>
      </div>
`;

// Countdown funksiyasi va yangilanish
const targetDate = new Date('2024-10-19T18:00:00');

// Countdownni yangilash funksiyasi
function updateCountdown() {
	countdown(
		targetDate, // Belgilangan maqsad sanasi
		(ts) => {
			// Vaqt oralig'ini qaytaradi
			document.querySelector<HTMLDivElement>('#countdown')!.innerHTML = `
        <div class="countdown-timer">
           <div>${ts.days} : ${ts.hours} : ${ts.minutes} : ${ts.seconds} </div>

        </div>
      `;
		},
		countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS // Vaqt birligini aniqlash
	);
}

// Timer har 1 sekundda yangilanadi
setInterval(updateCountdown, 1000);
