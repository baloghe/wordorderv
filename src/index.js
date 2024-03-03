import React from "react";
import ReactDOM from 'react-dom/client';
import axios from "axios";

import "./index.css";
import App from "./component/App";
import Spinner from "./component/Spinner";

/*-------------------------------
   Actual inputs and root rendering
-------------------------------*/

const mockTests = [
{title: "Özel Ders - Hande ve Azra",
 audio: "OzelDers_06.mp3",
 langs: {L1: "TR" , L2: "EN"},
 sentences: [{L1: "Vay be, gerçekten çalışıyormuş.", L2: "Wow, she really works.", audio: {start: 1000 , end: 3540 } }
,{L1: "Bu mesleğin bir adı falan var mı?", L2: "Does this profession have a name?", audio: {start: 3541 , end: 5821 } }
,{L1: "İyi para vardır ha bu işte.", L2: "There's good money in this business.", audio: {start: 7200 , end: 8900 } }
,{L1: "Hande! Seni hiç ilgilendirmez.", L2: "Hande! It's none of your business.", audio: {start: 8900 , end: 12137 } }
,{L1: "Niye böyle bir meslek yapar ki insan?", L2: "Why does a person do such a profession?", audio: {start: 21500 , end: 23677 } }
,{L1: "Senin travman falan mı var?", L2: "Do you have a trauma or something?", audio: {start: 23678 , end: 25473 } }
,{L1: "Ay, müşteri geldi! Ay, sana müşteri geldi Azra!", L2: "Oh, a customer has arrived! Oh, you have a customer Azra!", audio: {start: 26500 , end: 29300 } }
,{L1: "Ne yapıyorsun ya?", L2: "What are you doing?", audio: {start: 29301 , end: 30500 } }
,{L1: "Ya sınır nedir bilmez misin sen?", L2: "Don't you know what limits are?", audio: {start: 32000 , end: 34500 } }
,{L1: "Ha demek böyle buluyorlar seni.", L2: "Oh, so that's how they find you.", audio: {start: 34401 , end: 37100 } }
,{L1: "Söyleseydin ben de mesaj atardım ya.", L2: "If you had told me, I would have texted you too.", audio: {start: 37101 , end: 40000 } }
,{L1: "Amma tantana yaptın yani.", L2: "But you made such a fuss.", audio: {start: 39701 , end: 41200 } }
,{L1: "Öyle kolay zannediyorsun tabii.", L2: "Of course you think it's that easy.", audio: {start: 41201 , end: 43173 } }
,{L1: "Referans nereden bulacaktın?", L2: "Where would you find a reference?", audio: {start: 43174 , end: 45473 } }
,{L1: "Teyzem referans olurdu bence bana.", L2: "I think my aunt would be a reference for me.", audio: {start: 46000 , end: 48478 } }
,{L1: "Hatta… Neydi, dur, kızın adı? Dur. Sakın söyleme.", L2: "Even… What was, wait, the girl's name? Stop. Don't say it.", audio: {start: 50000 , end: 53082 } }
,{L1: "Melisa da referans olurdu bence.", L2: "I think Melisa would also be a reference.", audio: {start: 53100 , end: 57320 } }
,{L1: "Hani velisi gibi aradığın var ya?", L2: "You know the one you acted as a parent for?", audio: {start: 57301 , end: 59770 } }
,{L1: "Tamam, anlaşıldı. Senden kurtuluş yok.", L2: "OK, got it. One can't get away from you.", audio: {start: 61070 , end: 64396 } }
,{L1: "Bu akşam Utku'nun evinde bir parti var.", L2: "There is a party at Utku's house this evening.", audio: {start: 66030 , end: 68816 } }
,{L1: "Bilmiyorum haberin var mı.", L2: "I don't know if you heard about it.", audio: {start: 68817 , end: 70355 } }
,{L1: "Onunla başlayım bakalım.", L2: "Let's start with that.", audio: {start: 72000 , end: 73612 } }
,{L1: "Kural bir. Söylediklerime harfiyen uyacaksın.", L2: "There's one rule. You will obey exactly what I say.", audio: {start: 73650 , end: 78207 } }
,{L1: "Tamam, söz.", L2: "OK promise.", audio: {start: 77700 , end: 79000 } }
,{L1: "Hayatı kitaplardan öğrenemezsin.", L2: "You can't learn life from books.", audio: {start: 79151 , end: 81100 } }
,{L1: "Pratik lazım sana.", L2: "You need practice.", audio: {start: 82000 , end: 83300 } }
]},
{title: "Serge Gainsbourg - Laetitia",
 langs: {L1: "FR" , L2: "EN"},
 sentences: [{L1: "Sur ma Remington portative j’ai écrit ton nom Lætitia", L2: "On my portable Remington I wrote your name Laetitia"}
,{L1: "Lætitia les jours qui se suivent hélas ne se ressemblent pas", L2: "Laetitia, recent days are not the same"}
,{L1: "C’est ma douleur que je cultive en frappant ces huit lettres-là", L2: "That's my pain I develop while I'm typing those eight very letters"}
,{L1: "C’est une fleur bien maladive je la touche du bout des doigts", L2: "This is a quite sickly flower I touch her with my fingertips"}
,{L1: "S’il faut aller à la dérive je veux bien y aller pour toi", L2: "If it must be going to drift, I am glad to go for you"}
,{L1: "Ma raison en définitive se perd dans ces huit lettres-là", L2: "My reason ultimately loses itself in those eight very letters"}
 ]}
];

const reactRoot = ReactDOM.createRoot( 
	  document.querySelector('#root')
	);

reactRoot.render(
		<Spinner />
);
/*
	reactRoot.render(
		<App 
			qLang="EN" 
			aLang="TR" 
			tests={mockTests}
			dbAvailable={false}
			wait={3000}
		/>
);
*/

axios
.post(`/api/qtitles`, null)
.then((data) => {
	reactRoot.render(
		<App 
			qLang="EN" 
			aLang="TR" 
			tests={data.data.titles}
			dbAvailable={true}
			wait={3000}
		/>
	);
	
})
.catch(error => {
	reactRoot.render(
		<App 
			qLang="EN" 
			aLang="TR" 
			tests={mockTests}
			dbAvailable={false}
			wait={3000}
		/>
);
});

/*

*/
