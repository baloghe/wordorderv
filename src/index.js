import React from "react";
import ReactDOM from 'react-dom/client';
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
{title: "Gözde Karakaya - Doğum Hikayesi",
sentences: [{TR: "Bana verdiler belden epidürali.", EN:"They gave me a waist epidural."}
,{TR: "Böyle alttan ritmik bir şekilde ittiriliyorum.", EN:"I am being pushed rhythmically from below."}
,{TR: "Yatay pozisyondayım.", EN:"I am in a horizontal position."}
,{TR: "Demek ki, dedim, ben sevişiyorum.", EN:"So, I said, I am making love."}
,{TR: "Yine daha önceki tecrübelerime dayanarak dedim ki sevişiyorum.", EN:"Again, based on my previous experiences, I said, I am making love."}
,{TR: "Bir de malak gibi yatıyorum!", EN:"And I'm lying like a buffalo!"}
,{TR: "Sonra sola baktım, kocam.", EN:"Then I looked to the left, to my husband."}
,{TR: "Dedim ki, ben aldatıyorum.", EN:"I said, I am cheating him."}
,{TR: "Ama kocam çok mutlu. Daha önce hiç görmediğim kadar mutlu.", EN:"But my husband is happy. Happier than ever."}
,{TR: "Yani... ben sevişiyorum, kocam mutlu.", EN:"Well, I'm making love, my husband is happy."}
,{TR: "Demek ki dedim ben, swinger'dayım.", EN:"Which means, I said, I'm at a swinger party."}
,{TR: "Tecrübe değil bu arada. Tamamen hayal gücü. Yanlış anlamayında.", EN:"This is not experience, by the way. Full imagination. Don't get me wrong."}
,{TR: "Sonra dedim ki kocam niye boşta?", EN:"Then I said, why is my husband idle?"}
,{TR: "O şapkayı takarsan tabii kimse seninle sevişmez.", EN:"If you wear that hat, of course no one will make love to you."}
]},
{title: "Doğu - Zeka geriliği",
 sentences: [{TR: "Kaç yaşına gelmiş adamsın yani? Belanı benden bulma tamam mı?", EN:"So, how old are you? Don't take trouble from me, okay?"}
,{TR: "Sen ne biçim konuşuyorsun lan?", EN:"What the hell are you talking about?"}
,{TR: "Pezevenge bak ya. Kızı yaşındaki insanlar.", EN:"Look at the pimp. People his daughter's age."}
,{TR: "Allah allah kardeşim, ne oldu, hayırdır?", EN:"Oh my God, brother, what happened, what's wrong?"}
,{TR: "Kardeşim ne oluyor burada, ben anlamadığım şey o.", EN:"What's going on here brother? I don't get it."}
,{TR: "Ne oluyor burada ya? Bir dakika!", EN:"What's going on here? Wait a minute!"}
,{TR: "Abi iki dakika şurada ben gittim, şurada iki dakika neler olmuş ya?", EN:"Bro, I was there for 2 minutes, what happened there for 2 minutes?"}
,{TR: "Sanat. Burası sanat. Burası asla kavga değil.", EN:"Art. This is art. This is never a fight."}
,{TR: "Yavşak! Sen de onunla aynı konuşmuyor muydun.", EN:"Arsehole! Weren't you talking the same way to him?"}
,{TR: "Abi hayır vallahi ben bir şey demedim.", EN:"Brother, no, I swear I didn't say anything."}
,{TR: "Bende kalp pili var abi. Ben ameliyatlıyım.", EN:"I have a pacemaker, brother. I have surgery."}
,{TR: "Kardeş bu çocuğun bir hatası varsa ben özür dilerim abi.", EN:"Brother, if this child made a mistake, I apologize."}
,{TR: "Yürü çık gidiyoruz. Çıkalım.", EN:"Go ahead, we're going. Let's go out."}
,{TR: "Bu çocuğun engelli raporu var. Özür dilerim.", EN:"This child has a disability report. I apologize."}
 ]},
{title: "Doğu - Betül Eczanesi",
 sentences: [{TR: "Buna ne kadardı?", EN:"How much does this cost?"}
,{TR: "Fiyatlar üstünde yazıyor.", EN:"The price is written on."}
,{TR: "Prezervatif. Aynı şekilde burada.", EN:"Condom. Something alike."}
,{TR: "Prezervatif demeye neden utandın?", EN:"Why were you embarrassed to say condom?"}
,{TR: "Tesettürlüyüm diye mi?", EN:"Because of my hijab?"}
,{TR: "Ayıp olmasın diye.", EN:"Just to avoid shame."}
,{TR: "Bıktım artık sizin şu ataerkil sığ zihniyetinizden ya.", EN:"I'm fed up with your shallow patriarchal mentality."}
,{TR: "Temassız var mıydı?", EN:"Contactless (payment) is available?"}
,{TR: "Vardı temassız vardı.", EN:"Sure, there is contactless."}
,{TR: "Öyle tercih edersiniz daha da az günah olur.", EN:"If you prefer that way, it will be even less of a sin."}
,{TR: "Ne diyorsun ya?", EN:"What are you saying?"}
,{TR: "Ne diyorum ya?", EN:"What am I saying?"}
,{TR: "Anlamadım hayırdır? Niye yükleniyorsun bana?", EN:"I don't get it, what's the problem? Why are you so hard on me?"}
,{TR: "Acaba ne yaptın?", EN:"I wonder what you did."}
,{TR: "Acaba niye? Almıyorum ya.", EN:"I wonder why. I don't take it."}
,{TR: "Gerçekten vazgeçtim almayacağım.", EN:"Really, I give up, I don't take it."}
,{TR: "Sen bilirsin alma.", EN:"Your choice, leave it."}
,{TR: "Bakın duydunuz. Alma diyor bana.", EN:"Could you hear it? She says me not to take it."}
,{TR: "Ben almıyorum diyorum alma diyor bana. Bu çalışanınızın yüzünden.", EN:"I say I won't buy it and she says I shouldn't. Because of this employee of yours."}
,{TR: "Kimi arıyorsun? Kime bakıyorsun? Yetkili mi arıyorsun?", EN:"Who are you looking for? Who are you looking at? Are you looking for authority?"}
,{TR: "Hesap verirsin.", EN:"You will pay for it."}
,{TR: "Yetkili arıyorsan burada bana konuşacaksın. Ama sen ne yaptın?", EN: "If you're looking for authority, just talk to me. But what did you do?"}
,{TR: "Dışarıdan gördün tabii tesettürlü başörtülü.", EN:"You peeked in from outside (and said, of course) hijab, headscarf."}
,{TR: "Anca dedin kalfadır çıraktır burada.", EN:"You just said it's a journeyman, an apprentice here."}
,{TR: "Senin problemini ben çözemem ya.", EN:"I can't solve your problems."}
]},
{title: "Kefir mi Yoğurt mu - 1",
 sentences: [{TR: "Kefir ve yoğurt, içerdikleri faydalı bakteriler nedeniyle oldukça sağlıklıdırlar.", EN: "Kefir and yoghurt are very healthy due to the beneficial bacteria they contain."}
,{TR: "Kefir daha iyi bir seçim olabilir.", EN: "Kefir may be a better choice."}
,{TR: "Aralarında birçok fark vardır.", EN: "There are many differences between them."}
,{TR: "Kefir ve yoğurt her ikisi ekşi bir tada sahiptirler.", EN: "Kefir and yoghurt both have a sour taste."}
,{TR: "Yüzyıllar boyunca insanlar kefir taneleri ve inek sütü kullanarak kefir yapmıştır.", EN: "For centuries, people have made kefir using kefir grains and cow's milk."}
,{TR: "Keçi veya koyun sütü ile yapmak da mümkündür.", EN: "It is also possible to make it with goat or sheep milk."}
,{TR: "Kefir taneleri küçük karnabahar çiçeklerine benzemektedir.", EN: "Kefir grains look like small cauliflower flowers."}
,{TR: "Üreticiler fermente etmek için kefir tanelerini süte ekler, sonra onları çıkarırlar.", EN: "Manufacturers add kefir grains to milk to ferment it, then remove them."}
,{TR: "Geri kalan ürün kefirdir.", EN: "The remaining product is kefir."}
,{TR: "Taneler bir sonraki mayalama işleminde tekrar kullanılabilir.", EN: "The grains can be reused in the next brewing process."}
,{TR: "Hem kefir hem de yoğurt bağırsakları iyi bakterilerle doldurmaya yardımcı olabilir.", EN: "Both kefir and yogurt can help populate the intestines with good bacteria."}
,{TR: "Araştırmalara göre kefir bağışıklık sistemini desteklemekte.", EN: "According to research, kefir supports the immune system."}
 ]},
{title: "Kefir mi Yoğurt mu - 2",
 sentences: [{TR: "Probiyotikler, bir kişinin sağlığına yararlı olabilecek bakterilerdir.", EN: "Probiotics are bacteria that may benefit a person's health."}
,{TR: "İnsanlar kefir ve yoğurdu olduğu gibi yiyebilir veya içebilirler.", EN: "People can eat or drink kefir and yogurt as they are."}
,{TR: "İnsanlar fermente süt ürünlerini her zaman buzdolabında tutmalıdır.", EN: "People should always keep fermented milk products in the refrigerator."}
,{TR: "İnsanlar genellikle fermente süt ürünlerini güvenle tüketebilir.", EN: "People can generally consume fermented milk products safely."}
,{TR: "Bunun nedeni fermantasyon sürecinin laktoz içeriğini azaltmasıdır.", EN: "This is because the fermentation process reduces the lactose content."}
,{TR: "Fermente gıdalar histamin adı verilen yüksek miktarda madde içerir.", EN: "Fermented foods contain high amounts of a substance called histamine."}
,{TR: "Bazı insanlar yoğurdu ilk kez tükettiklerinde şişkinlik yaşayabilirler.", EN: "Some people may experience swelling when they consume yogurt for the first time."}
,{TR: "Kişinin bağırsağı yeni gıdalara alıştığında bunlar azalır.", EN: "These decrease as the person's intestine gets used to new foods."}
,{TR: "İlaçlar alan kişiler yeni ürünler denemeden önce bir doktora danışmalıdır.", EN: "People taking medications should consult a doctor before trying new products."}
,{TR: "Kefirin sağlık açısından yoğurttan daha fazla faydası olabilir.", EN: "Kefir may have more benefits for the health than yogurt."}
,{TR: "İnsanlar marketlerden uygun fermente ürünleri satın alabilirler.", EN: "People can buy suitable fermented products from markets."}
,{TR: "İnsanlar evde kendi kefir veya yoğurt yapma seçeneklerine sahiptir.", EN: "People have the option of making their own kefir or yogurt at home."}
]},
{title: "Uğurlugiller 1",
 sentences: [{TR: "Bakar mısınız, hesabı rica edebilir miyim?", EN: "Excuse me, may I ask for the bill?"}
,{TR: "Yemekler de nefisti çok teşekkür ederim Leylacım.", EN: "The food was delicious too, thank you very much, Leyla."}
,{TR: "Asıl ben teşekkür ederim Nebahat abla!", EN: "I really thank you, sister Nebahat!"}
,{TR: "Derdimle biraz başınızı ağrıttım ama ben de ferahladı.", EN: "I gave you a little headache with my trouble, but I was relieved too."}
,{TR: "Telefonda bayağı merak etmiştim.", EN: "I was quite curious on the phone."}
,{TR: "Üzme böyle şeylere canını Leylacım.", EN: "Don't worry about such things, my dear Leyla."}
,{TR: "Bunlar gelip geçici problemler.", EN: "These are temporary problems."}
,{TR: "Bak sağlıklıyız, yaşıyoruz.", EN: "Look, we are healthy, we are alive."}
,{TR: "Benim için ne öyle güzel bir değişiklik oldu ki bu çok teşekkür ederim, sağ ol.", EN: "It was such a nice change for me, thank you very much, thank you."}
,{TR: "Bu seni kaçıncı davet edişim Nebahat abla, hep bir bahane buluyorsun.", EN: "This is the first time I've invited you, sister Nebahat, you always find an excuse."}
,{TR: "Salim akşamları çok yorgun dönüyor oluyor işte.", EN: "Salim usually comes back very tired in the evenings."}
,{TR: "Türken bildiğin gibi çalışıp duruyor sözüm ona çalışmak denirse.", EN: "As you know, Turks work hard, so to speak."}
,{TR: "Doğan´ı görüyorum arasıra bizim tarafta, bir defasında İnci´nin arabasında eden.", EN: "I see Doğan from time to time on our side, once in İnci's car."}
,{TR: "Ah bak, geçen gün de lokantada gördük. Bizi fark etmedi bile.", EN: "Oh look, we saw it at the restaurant the other day. He didn't even notice us."}
,{TR: "Ee tabii insan İnci´nin yanındayken başkasını zor fark eder doğrusu.", EN: "Well, of course, when you're next to İnci, you can barely notice anyone else."}
]},
{title: "Uğurlugiller 2",
sentences: [{TR: "Anne sen bu akşam iyice neşesiz sin.", EN: "Mom, you are looking very unhappy this evening."}
,{TR: "Biraz başım ağrıyor kızım. Hiç iyi değilim.", EN: "I have a little headache, girl. I'm not okay at all."}
,{TR: "Karıcığım yoksa gümüşlere mi üzüldün?", EN: "Wife, are you upset about the silver?"}
,{TR: "Ama Salim rica ederim Allah aşkına!", EN: "But Salim, please, for God's sake!"}
,{TR: "Yoksa senin de derdin bacım gibi inciler mi?", EN: "Or are you also worried about pearls like my sister?"}
,{TR: "Evet kızım. Benim derdim de inciler. Vallah, hem Vallaha hem billaha inciler.", EN: "Yes my daughter. My problem is pearls. I swear, I swear, pearls."}
,{TR: "Hoppala! Anlayan biri gelsin.", EN: "Whoops! Let someone who understands come."}
,{TR: "Abim bu akşam yine dışarıda yemek zorundaymış, yemeğe gelemeyecek.", EN: "My brother has to eat out again tonight, he can't come for dinner."}
,{TR: "Özür diliyor, hepimizi öpüyor.", EN: "He apologizes and kisses us all."}
,{TR: "Çocuklar ben de özür diliyorum. Yemek yiyemeyeceğim.", EN: "Guys, I apologize too. I won't be able to eat."}
,{TR: "Hiç canım istemiyor. Allah rahatlık versin, başım çok ağrıyor.", EN: "I don't feel like it at all. May God give me comfort, my head hurts so much."}
,{TR: "Baba! Annemin bir derdi var, farkında mısın?", EN: "Father! My mother has a problem, are yu aware?"}
,{TR: "Olmaz olur muyum.", EN: "No way can I?"}
,{TR: "Şimdi üstüne varsak, saklar. Ben gece anlarım.", EN: "Now if we get to it, she will hide it. I find it out tonight."}
]},
{title: "Uğurlugiller 3",
sentences: [{TR: "Niye öksürdün?", EN: "Why did you cough?"}
,{TR: "Bana bak diye.", EN: "Just to look at me."}
,{TR: "Baktım. Ne olmuş?", EN: "I looked. So what?"}
,{TR: "Bir derdin var bana söylemiyorsun.", EN: "You have a problem, you don't tell me."}
,{TR: "İyi işte ben de deminden beri ne diye sormuyorsun diye şaşıp duruyordum.", EN: "Well, I've been wondering why you didn't ask since."}
,{TR: "Diye sordum işte. Demek ki mesele yok.", EN: "That's what I asked. So there is no issue."}
,{TR: "Mesele var.", EN: "There is an issue."}
,{TR: "Doğan mesele olmaz karıcım, aklı başında çocuktur.", EN: "Doğan is not an issue, my wife, he is a sensible child."}
,{TR: "Mutlaka boşuna üzüyorsun gene kendini. Hadi yat artık.", EN: "You're definitely making yourself sad for nothing. Go to bed now."}
,{TR: "Dün öğle yemeğine götürdüm İnciyi, ağzından girdim, burnundan çıktım, şaklabanlıklar yaptım, sonunda razı ettim.", EN: "I took İnci to lunch yesterday, I twisted her arm, I played jokes, and finally I got her to agree."}
,{TR: "Bir dakika! Bu Ekrem Bey nişanlısının adı ne dedin?", EN: "One minute! What did you say, the name of this Ekrem Bey's fiancée?"}
,{TR: "Onun da adı İnci. Sakın benim İnciyle karıştırmayın!", EN: "Her name is İnci too. Don't confuse with my İnci!"}
]},	
{title: "1 kadın 1 erkek - Babalar haklı cıkmalı",
 sentences: [{TR: "Eğer soracak bir şeyiniz yoksa o zaman dersimize geçelim.", EN:"If you have nothing to ask, then let's move on to our lesson."}
,{TR: "Evli misiniz?", EN:"Are you married?"}
,{TR: "Hayir değilim, nişanlıyım.", EN:"No, I am not, I am engaged."}
,{TR: "Sevgiliniz şansli hödüğün teki olmalı.", EN:"Your lover must be a lucky bastard."}
,{TR: "Ay, ne kadar ayıp. Öyle denir mi ne kadar ayıp.", EN:"Ah, what a shame. How shameful is it to say that."}
,{TR: "Valla babam öyle dedi. Güzel kadınlar hep şansli hödükler kaparmış.", EN:"I swear my father told me so. Beautiful women always pick up lucky bastards."}
,{TR: "Ozan? Ne haber aşkım? Ne işin var burada?", EN:"Ozan? What happened my love? What are you doing here?"}
,{TR: "Telefonunu unutmuşsun da.", EN:"You forgot your phone."}
,{TR: "Zeynep, şu velet bana hödük dedi ya.", EN:"Zeynep, this brat called me a bastard."}
,{TR: "Ben nişanlınıza dedim vallahi.", EN:"I said to your fiancee, I swear."}
,{TR: "Ama Ozan benim nişanlım, hayatım.", EN:"But Ozan is my fiancee, my dear."}
,{TR: "Ehh, işte babam haklıymış.", EN:"Ehh, my father was right."}
]},
	{title: "Gestion projet 1",
 sentences: [{TR: "ils avaient réussi à faire adopter la leur, avec des postérités diverses", EN:"they managed to create their own, with various results"}
,{TR: "vous gagnez du temps et vous vous épargnez de nombreux problèmes par la suite", EN:"you save time and spare yourself many problems afterwards"}
,{TR: "Comment se fixer des objectifs et réussir à les atteindre?", EN:"How to set goals and achieve them afterwards?"}
,{TR: "l’objectif concerné doit être conforme à la portée du projet", EN:"the goal concerned must be in line with the scope of the project"}
,{TR: "tout le monde doit s’entendre sur les tâches à faire par chacun et leurs échéances", EN:"everybody must agree an the task of everyone along with their schedule"}
,{TR: "les objectifs représentent les résultats escomptés", EN:"the goals represent the expected results"}
,{TR: "cela lève le voile sur le pourquoi du projet", EN:"this unveils the WHY of the project"}
,{TR: "cela permet à tous les acteurs de rester sur la même longueur d’onde", EN:"this enables all participants to stay tuned"}
,{TR: "focaliser sur les résultats à atteindre", EN:"focus on the goals to achieve"}
,{TR: "déploiement de nouveaux équipements", EN:"deployment of new equipment"}
,{TR: "afin d’y parvenir sans accroc", EN:"in order to deliver without difficulties"}
]},
{title: "Gestion projet 2",
 sentences: [{TR: "indicateurs de réussite", EN:"performance indicators"}
,{TR: "transformer des visions en résultats tangibles", EN:"transform visions into tangible assets"}
,{TR: "cette méthode polyvalente vous guide dans la définition d’objectifs spécifiques", EN:"this versatile method helps you to define specific objectivrs"}
,{TR: "la méthode SMART préconise de ne pas se fixer d’objectifs totalement irréalisables", EN:"the method SMART advises you not to set unattainable goals"}
,{TR: "pendant six semaines d’affilée", EN:"for six weeks in a row"}
,{TR: "vous risquez de voir votre projet s’éterniser", EN:"you risk seeing your project drag on"}
,{TR: "le jeu en vaut la chandelle", EN:"it’s worth it"}
,{TR: "les objectifs doivent faire partie intégrante du processus de planification", EN:"the goals must form an integrant part of the planning process"}
,{TR: "voici les avantages que tirera votre équipe des objectifs SMART", EN:"here are the advantages your team would benefit"}
,{TR: "ne vous en faites pas si vous n’avez pas atteint tous vos objectifs", EN:"don’t worry if you haven’t achieved all your goals"}
,{TR: "pour n’en nommer que quelques-uns", EN:"only to name a few"}
]},
{title: "Gestion projet 3",
 sentences: [{TR: "nous partons du principe que", EN:"we assume that"}
,{TR: "en prenant sous mon aile au moins deux mentorés", EN:"taking at least two mentees under my wings"}
,{TR: "l’objectif est pertinent pour votre contexte", EN:"the objective is relevant to your context"}
,{TR: "dans le temps imparti", EN:"within the allotted time"}
,{TR: "un puissant besoin de prendre ses désirs pour des réalités", EN:"a powerful need to take one’s desires for realities"}
,{TR: "faire dresser les cheveux sur la tête", EN:"hair-raising"}
,{TR: "concentrer sur la réalisation de l’objectif dans un délai précis", EN:"focus on achieving the goal within a specified time"}
,{TR: "ils font l’impossible pour leur venir en aide", EN:"they do their best to help them"}
,{TR: "je te laisse la parole", EN:"you have the floor"}
,{TR: "une tâche doit compter un seul et unique responsable", EN:"a task must have a single responsible"}
,{TR: "veiller à ce que chacun connaisse ses responsabilités", EN:"ensure everyone knows their responsibilities"}
]},
{title: "Serge Gainsbourg - Laetitia",
 sentences: [{TR: "Sur ma Remington portative j’ai écrit ton nom Lætitia", EN: "On my portable Remington I wrote your name Laetitia"}
,{TR: "Lætitia les jours qui se suivent hélas ne se ressemblent pas", EN: "Laetitia, recent days are not the same"}
,{TR: "C’est ma douleur que je cultive en frappant ces huit lettres-là", EN: "That's my pain I develop while I'm typing those eight very letters"}
,{TR: "C’est une fleur bien maladive je la touche du bout des doigts", EN: "This is a quite sickly flower I touch her with my fingertips"}
,{TR: "S’il faut aller à la dérive je veux bien y aller pour toi", EN: "If it must be going to drift, I am glad to go for you"}
,{TR: "Ma raison en définitive se perd dans ces huit lettres-là", EN: "My reason ultimately loses itself in those eight very letters"}
 ]}
];

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(
	<App 
		qLang="EN" 
		aLang="TR" 
		tests={mockTests} 
		wait={3000}
/>);
