import React from "react";
import ReactDOM from 'react-dom/client';
import axios from "axios";

import "./index.css";
import App from "./component/App";

/*-------------------------------
   Actual inputs and root rendering
-------------------------------*/

const mockTests = [
{title: "Sen hep gülümse",
sentences: [{TR: "Gülmeyeceksin!", EN:"You won't laugh!"}
,{TR: "Gülerim", EN:"I laugh."}
,{TR: "Gülmeyeceksin işte!", EN:"Well you won't laugh!"}
,{TR: "Ya ne olmuş ya güldüysek?", EN:"So what if we laughed?"}
,{TR: "Arkadaşlar ne oluyor?", EN:"What's happening, guys?"}
,{TR: "Ne olacak, durduk yere her şeye gülüyor işte!", EN:"What will happen? He laughs at everything for no reason!"}
,{TR: "Öyle mi? Bak sen!", EN:"Really? Watch!"}
,{TR: "Ya, sanki sen hiç gülmüyorsun?", EN:"Oh, it's like you never laugh?"}
,{TR: "Hiç de bile gülmüyorum.", EN:"I don't even laugh at all."}
,{TR: "Kendi kendine gülene ne derler biliyor musun?", EN:"Do you know what they say about someone who laughs at himself?"}
,{TR: "Bilmem, ne derler?", EN:"I don't know, what do they say?"}
,{TR: "Sen de yerli yersiz gülenlerdensin galiba amca!", EN:"I guess you're one of those who laugh all the time, uncle!"}
,{TR: "Gülmek fena mi ya?", EN:"Is it bad to laugh?"}
,{TR: "Ben mümkünse hep gülerim.", EN:"I always laugh if possible."}
,{TR: "Kemal Sunal değil mi o?", EN:"He's Kemal Sunal, isn't he?"}
,{TR: "Evet! Kemal Sunal yaşiyor mu?", EN:"Yes! Is Kemal Sunal alive?"}
,{TR: "Evet, ayıptır söylemesi o benim.", EN:"Yes, it's a shame for me to say that."}
,{TR: "Bakma sen bunlara Kemal abi.", EN:"Don't look at these, Kemal bro."}
,{TR: "Gülmek hiç fena olur mu?", EN:"Is it ever bad to laugh?"}
,{TR: "Hem zaten sen gülünce herkes gülüyor.", EN:"Besides, when you laugh, everyone laughs."}
,{TR: "Ama herkes derken herkes!", EN:"I do mean everyone!"}
,{TR: "Evet! Ailem, mahallem, yurdum, milletim...", EN:"Yes! My family, my neighborhood, my country, my nation..."}
,{TR: "Hatta bütün dünya!", EN:"Even the whole world!"}
,{TR: "Ve sen öyle güzel gülüyorsun ki Kemal abi, gülüşün unutulmuyor.", EN:"And you smile so beautifully, Kemal bro, your smile is unforgettable."}
,{TR: "Ah canım benim, sağ olasin...", EN:"Oh my dear, thank you..."}
,{TR: "Bizim için gülmeye devam et, tamam mı?", EN:"Keep smiling for us, okay?"}
,{TR: "Merak etme sen, o iş bende.", EN:"Don't worry, that's my job."}
]},
{title: "Tuğçe Tenbel - 1",
sentences: [{TR: "En başta her şey çok zordu.", EN: "Everything was very difficult at first."}
,{TR: "İlk başta bulunan işler Türkiye'de burun kıvıracağınız işler oluyor.", EN: "The first jobs you find are the ones you would turn your nose up at in Turkey."}
,{TR: "Ben ilk olarak okul temizliğine gittim.", EN: "First, I went to school cleaning."}
,{TR: "Elime 600 euro civarı geçiyordu.", EN: "I received around 600 euros."}
,{TR: "Sonrasında Burger King'te çalıştım.", EN: "Afterwards, I worked at Burger King."}
,{TR: "Orası benim için çok zordu.", EN: "It was very difficult for me there."}
,{TR: "Hayatım boyunca beni o kadar tüketen bir işte çalışmadım.", EN: "I have never in my life worked in a job that drained me so much."}
,{TR: "Şu an büyük bir market zincirinde çalışıyorum.", EN: "I currently work in a large grocery chain."}
,{TR: "Elime haftalık 400 euro kadar bir para geçiyor, bu da beni rahat geçindiriyor.", EN: "I get about 400 euros a week, which allows me to live comfortably."}
,{TR: "Şu an Cork şehrindeyim.", EN: "I'm currently in Cork city."}
,{TR: "O röportajın yapıldığı sırada Dublin'de bisiklet ile yemek dağıtıyordum.", EN: "At the time of that interview, I was delivering food on a bicycle in Dublin."}
,{TR: "Yağmurun altında çalıştığım da oldu, kaza da geçirdim.", EN: "I sometimes worked in the rain and had an accident."}
,{TR: "Irkçılar tarafından saldırıya uğradığım da oldu.", EN: "I have also been attacked by racists."}
,{TR: "Burada bisiklet ile yemek dağıtanlar dışarıdan gelen öğrenciler olur.", EN: "Here, those who deliver food on bicycles are foreign students."}
,{TR: "Irkçı gruplar en çok onları hedef alıyor.", EN: "Racist groups target them the most."}
]}
];

axios
.post(`/api/qtitles`, null)
.then((data) => {
	ReactDOM.createRoot( 
	  document.querySelector('#root')	
	).render(
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
	ReactDOM.createRoot( 
	  document.querySelector('#root')
	).render(
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
