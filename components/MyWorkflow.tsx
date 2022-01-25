import { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import CTA from './CTA'
import Divider from './Divider'
import styles from './MyWorkflow.module.scss'

const MyWorkflow: FC = () => {
	return (
		<section id='myWorkflow'>
			<Divider
				videoID='20hNkjwwVg0'
				altImageURL='/myWorkflow.png'
				title='Hogyan dolgozom?'
			/>
			<section className={styles.section}>
				<p className={styles.text}>
					Küldetésemnek és felelősségemnek érzem, hogy olyan videót
					adjak át az esküvőtökről, ami a nagy nap valós hangulatát és
					érzéseit adja át. Minden esküvőnek van egy fix, hasonló
					felépítése, ugyanúgy, ahogy az esküvői filmeknek is, mivel
					nagyjából azonos forgatókönyvből kell dolgoznia a filmesnek,
					csak más szereplőkkel, helyszínnel és díszlettel. Így nagyon
					sok egymáshoz hasonló gyönyörű esküvői film készül,
					rendkívül szép beállításokkal, kreatív vágásokkal,
					színekkel, hangulatos romantikus zenével aláfestve. Én ezzel
					azonban még nem elégszem meg.{' '}
				</p>
				<p className={styles.text}>
					Rendkívül fontosnak tartom, hogy a videóm ne csak gyönyörű,
					művészi legyen, hanem visszaadja az esküvőnek, a párnak, a
					résztvevőknek az egyéniségét, hangulatát, érzelmeit. Ezt
					azzal igyekszem elérni, hogy nagyon figyelek a nap alatt az
					emberekre, a hangulatra, a programokra, zenékre, táncra.
					Próbálom intuitívan megragadni az esküvő légkörét,
					meghatározó érzéseit és azokat a megfelelő vágási stílussal
					és zenei választással visszaadni. Igyekszem megfelelő
					arányban beletenni az érzelmes részeket és a bulis részeket,
					amelyik jobban dominált a nap folyamán, azt fogom a videóban
					is jobban előtérbe helyezni. Figyelek arra is, hogy a
					főszereplőkön kívül a násznépet is mutassam, a közeli
					családtagokat és barátokat is igyekszem megfigyelni az
					esküvőn, hogy tudjam kiket szerepeltessek többet a filmben.
				</p>
				<p className={styles.text}>
					A videó időrendi sorrendje se feltétlen lineárisan épül fel.
					De a legfontosabb eszközöm az egyediség visszaadásában, hogy
					beépítem a videóba az esküvőn elhangzott beszédek lényegét,
					a ceremóniamester felkonferálásait, játékokat, elhangzott
					vicceket, mondókákat, pohárköszöntőket. Sokszor a násznépet
					is megszólítom, hogy mondjanak néhány szót vagy jó
					kívánságot a párnak. Éppen ezért nagyon odafigyelek arra,
					hogy a hangot jó minőségben tudjam rögzíteni.
				</p>
				<p className={styles.text}>
					Egy vezeték nélküli csipis mikrofont szoktam tenni általában
					a vőlegényre és egy másik vezeték nélküli mini mikrofont
					ahhoz a mikrofonhoz, amibe beszélnek a szertartásvezetők.
					Ezek azonnal a videóra rögzítik a hangot, de ezenfelül a
					hangtechnikustól is engedélyt szoktam kérni, hogy a
					hangrögzítőmre rögzíthessem a keverőpultból kinyert hangot.
				</p>
				<p className={styles.text}>
					Volt hangtechnikus, aki nem értette, miért van erre szükség,
					ha úgy is felveszem a saját mikrofonommal vagy azt, hogy
					minek használok saját mikrofont, ha a keverőpultból kinyerem
					a hangot. De sokan elismerően tekintettek erre a
					hozzáállásra, sőt, megdöbbenve hallottam tőlük, hogy nagyon
					– nagyon ritka, hogy videós olyat kért tőlük, hogy
					felvehesse a hangot. Én nem tudom elképzelni az esküvői
					filmjeimet az elhangzottak jó minőségben történő beépítése
					nélkül. Nekem kulcsfontosságú, hogy meglegyen ilyen
					minőségben a hang, mert a videóim gerincét az elhangzott
					beszédek adják.
				</p>
				<p className={styles.text}>
					Számomra tehát nagyon fontos az, hogy olyan esküvői
					highlight filmet adjak át, ami tartalmazza a profi kamerával
					és drónnal készült mozis minőségű, művészi szép
					felvételeket, de a prioritásom nem egy művészi esküvői videó
					elkészítése, hanem egy olyan, amit ha bárki visszanéz, azt
					érezze, mintha ott lenne az esküvőn.{' '}
				</p>
				<p className={styles.text}>
					A visszajelzések alapján – amiért mindig nagyon hálás vagyok
					– ezt sikerült a „védjegyemmé” tenni és továbbra is azon
					dolgozom, hogy minden párnak egy olyan filmet készítsek,
					amit, ha 10-20 év múlva megnéznek, akkor is visszahozza
					azokat az élményeket, érzéseket, amiket átéltek életük
					legcsodálatosabb napján. Amennyiben a ti esküvői filmeteknél
					is ezek a legfontosabb szempontok és a referencia videóimban
					látott minőségében szeretnétek, hogy legyen az esküvőtök
					megörökítve, illetve a megadott irányárak is megfelelnek az
					elképzeléseiteknek, akkor kérlek töltsétek ki az ajánlatkérő
					űrlapot.{' '}
				</p>
				<p className={styles.text}>
					Sok sikert kívánok a szervezéshez és a számotokra
					legmegfelelőbb videós megtalálásához. Nem utolsó sorban
					pedig, nagyon sok boldogságot kívánok nektek!{' '}
				</p>
				<p className={styles.text}>Üdvözlettel, </p>
				<p className={styles.signature}>Nagy Gergely</p>

				<ScrollLink
					to='myExperiences'
					duration={500}
					offset={-50}
					smooth={true}
					spyThrottle={1000}>
					<CTA title='Előző munkáim' up />
				</ScrollLink>
			</section>
		</section>
	)
}

export default MyWorkflow
