import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./component/App";

/*-------------------------------
   Actual inputs and root rendering
-------------------------------*/

const mockTests = [
{title: "Terzi - Otoparkta",
 sentences: [{TR: "Biraz daha uzağa park etseydin keşke.", EN:"I wish you parked a little further away."}
,{TR: "Bir an tanıyamıyordum seni.", EN:"I didn't recognize you for a moment."}
,{TR: "Dün bayağı sarhoştun.", EN:"You were pretty drunk yesterday."}
,{TR: "Şimdi ayık kafayla görünce normal.", EN:"Now you're sober, it's understandable."}
,{TR: "Ayık kafa olduğumu kim söylüyor?", EN:"Who says I'm sober?"}
,{TR: "Burada mı kalıyorsun?", EN:"Are you staying here?"}
,{TR: "Evet, şimdilik öyle.", EN:"Yes, for now."}
,{TR: "Oteller güzel ya.", EN:"Hotels are nice."}
,{TR: "Hiç sessiz olmuyor.", EN:"It never gets quiet."}
,{TR: "Sürekli insanlar geliyor. Giriyorlar, çıkıyorlar.", EN:"People arrive all the time. They come in, they go out."}
,{TR: "Beyaz giymen gerekli demiştim.", EN:"I told you to wear white."}
,{TR: "Evet, doğru. O konuyla ilgili şöyle bir şey var.", EN:"Right, you did. The thing about that..."}
,{TR: "Beyaz hiç benim olayım değil. İçimi karartıyor.", EN:"White isn't for me. I find it depressing."}
,{TR: "Ya, nedir beyaz giyinmek ya?", EN:"Why would anyone wear white?"}
,{TR: "Ölünce filan giyiyor insanlar.", EN:"People wear it when they're dead."}
,{TR: "Hiç hoşlanmıyorum.", EN:"I hate it."}
,{TR: "Al, kötü mü olmuş bu?", EN:"Is this so bad?"}
,{TR: "Ama şöyle bir şey yapabiliriz.", EN:"Here's what we can do."}
,{TR: "Çünkü seni kırmak hiç istemiyorum.", EN:"Because I don't want to disappoint you."}
,{TR: "Şöyle ufak, beyaz bir detay.", EN:"A small white detail."}
,{TR: "Oldu mu? Tamam mıyız?", EN:"Gidelim mi? Is this okay? All good now? Should we go?"}
,{TR: "Nereye gidiyoruz diye sormayacak mısın?", EN:"You don't even ask where we go?"}
,{TR: "Açıkçası... sikimde değil.", EN:"Frankly, I don't fucking care."}
,{TR: "Nereye götürürsen oraya.", EN:"I'll go wherever you take me."}
]},
{title: "Terzi - Düğüne varış",
 sentences: [{TR: "Hayda! Şaka yapıyorsun herhâlde!", EN:"Come on! You've got to be kidding me!"}
,{TR: "Seni bir konuda uyarmam gerekiyor.", EN:"I have to warn you about something."}
,{TR: "Ben düğünlere çağrılmaması istenen kızımdır.", EN:"I'm the girl people don't want at their wedding."}
,{TR: "Rolüm ne peki?", EN:"What's my role, then?"}
,{TR: "Yani beni buraya çağırdığına göre birilerine bir şey anlatmaya çalışıyorsun.", EN:"Since you invited me here, you must be trying to make a statement."}
,{TR: "Ne diye tanıtacaksın beni?", EN:"What are you introducing me as?"}
,{TR: "Hayır, yani sevgilin olabilirim, uzaktan bir kuzenin olabilirim, çalışanın olabilirim.", EN:"I mean, I could be your girlfriend, a distant cousin, or an employee."}
,{TR: "Ne istiyorsun?", EN:"What will it be?"}
,{TR: "Kendin ol yeter.", EN:"Just be yourself."}
,{TR: "Emin misin?", EN:"Are you sure?"}
 ]},
{title: "Terzi - Cemre ve Dimitri",
 sentences: [{TR: "Selam. Cemre ben.", EN:"Hi. I'm Cemre."}
,{TR: "Evet Dimitri, Cemre arkadaşım.", EN:"Yes, Dimitri. Cemre is my friend."}
,{TR: "Tamam, arkadaş da nasıl arkadaş?", EN:"Okay, but what kind of friend?"}
,{TR: "Yani normal arkadaş, özel arkadaş?", EN:"A regular friend or a special one?"}
,{TR: "Anlaşıldı, özel arkadaş. Ne zamandan beri?", EN:"Got it. Special friend. Since when?"}
,{TR: "Sana ayıptır Peyami.", EN:"Shame on you, Peyami."}
,{TR: "Kan kardeşinin düğününe kız arkadaşını getiriyorsun ama tanıştırmıyorsun bile.", EN:"You bring your girlfriend to your blood brother's wedding, and you don't even introduce us."}
,{TR: "Üstündekiyle dikkatimi çekmese hiç haberimiz bile olmayacak belki.", EN:"If she hadn't drawn my attention with her dress I might have never known."}
,{TR: "Yalnız biz konukları beyaz giymeleri konusunda uyarmıştık diye hatırlıyorum.", EN:"But I remember asking our guests to dress in all white."}
,{TR: "Ya, o konuda… evet, haberim var ama ben maalesef beyaz giyemiyorum.", EN:"Yes, I'm aware of that, but I'm afraid I can't wear white."}
,{TR: "Niçin? Basıyor bana.", EN:"Why not? It's depressing."}
,{TR: "Ya, ne bileyim işte, ölüm, kefen…", EN:"I don't know. Death, shrouds…"}
,{TR: "Ben çok sevdim bu kızı.", EN:"I really like this girl."}
,{TR: "Yani böyle çok güzel kafası.", EN:"She's absolutely hilarious."}
,{TR: "Tebrikler bu arada.", EN:"Congrats, by the way."}
 ]},
{title: "Yedi kocalı Hürmüz açılış sahnesi",
sentences: [{TR: "Koca dediğiniz nedir ki, kızlar?", EN:"What's a husband, girls?"}
,{TR: "Evin geçimini yapan, sonra geceleri sırtını dönüp kıçında pireleri uçustura uçustura uyuyan adama koca denir.", EN:"A husband is a man who provides for the household, then turns his back at night and sleeps with fleas flying up his arse."}
,{TR: "Koca sedir gibi, mangal gibi, evin demirbaşıdır.", EN:"The husband is a fixture of the house, like a big cedar, like a brazier."}
,{TR: "Ah, kızlar, devir eski devir değil.", EN:"Ah, girls, it ain't the old days."}
,{TR: "Eski zamanın adamları deve benzerdi.", EN:"The men of the old days were like giants."}
,{TR: "Yaşadıkları yer eve benzerdi.", EN:"The place they lived in looked like a house."}
,{TR: "Yanına yatınca bir şeye benzerdi.", EN:"Lying next to him looked like something."}
,{TR: "Bir herif dört karıyla yetinmez fazlasını da ipe dizerdi.", EN:"A guy would not be content with four wives, would string on more."}
,{TR: "Ne oldu? Zaman değıştır.", EN:"What happened? Time changes."}
,{TR: "Herifleri küçüldü, karılara bir heybet geldi.", EN:"The blokes got smaller, the wives got bigger."}
,{TR: "Haliyle bir karının işini dört herif göremez hale geldi.", EN:"As it stands, four guys can't do the work of a wife."}
,{TR: "Şimdiki zamanın kocaları etliye sütlüye karışmaz, alacağını alır vereceğini verir erkenden ölür gölge etmez.", EN:"Today's husbands keep their nose clean, they take what they get and give what they give, they die early and do not cast a shadow."}
,{TR: "Bakın bu Hürmüz'ün rahmetlik kocası, bu koskoca konağın sahibi Fettah Paşa.", EN:"Look, this is Hürmüz's late husband, Fettah Pasha, the owner of this huge mansion."}
,{TR: "'Hürmüüüz' diye bağırır.", EN:"He shouts 'Hürmüüüz'."}
,{TR: "Hürmüz yanına gidince de 'Bak bakalım vaziyet nedir' derdi.", EN:"When Hürmüz went to him, he said, 'See what the situation is'."}
,{TR: "Hürmüz bunun üzerine adamın sağını solunu yoklar, 'Ay Paşa hazretleri zümrüdü anka kuşunuz bugün de görünürlerde yok' deyince.", EN:"Hürmüz then looked around the man and said, 'Your Highness, your Emerald Phoenix is nowhere to be seen today either'."}
,{TR: "Herif dediğiniz ilk fırsatta seni bırakıp gidecek bir kuştur.", EN:"A guy is a bird that will leave you the first chance it gets."}
,{TR: "Sen onu yakalıp yuvaya bağlayacaksın.", EN:"You're going to catch him and tie him to the nest."}
,{TR: "Nasıl? Şefkat göstereceksın ya: fazla sıkarsan - hop - kaçar.", EN:"How? You have to show affection: if you squeeze it too tightly - hop - it runs away."}
,{TR: "Sırtını sıvazlarsan 'İyidin, aslanım' dersen, aynı yapar...", EN:"If you pat his back and say 'You were fine, my lion', they'll do the same."}
,{TR: "Şimdi artık tavuklar eşelenir ibikler neşelenir.", EN:"Now the chickens are paired and the crests are cheering."}
,{TR: "Ne o öyle ikide bir harezlenmeler hışıl demeler bilmem neler.", EN:"What's all this harping and huffing and puffing and whatnot?"}
,{TR: "Allah allah! Boş olun lan eski herifler. Bize yeni herifler!", EN:"Oh my god! Fuck off, you old bastards. New blokes to us!"}
]},
{title: "Özdemir Erdoğan: Gurbet",
sentences: [{TR: "Kime desem derdimi ben, bulutlar", EN:"To whom should I tell my sorrow, clouds?"}
,{TR: "Bizi dost bildiklerimiz vurdular", EN:"Those regarded as friends hurt us"}
,{TR: "Bir de gurbet yarası var hepsinden derin", EN:"And then there is homesickness, which hurts the most"}
,{TR: "Söyleyin memleketten bir haber mi var?", EN:"Tell me, are there news from the homeland?"}
,{TR: "Yoksa yârin gözyaşları mı bu yağmurlar?", EN:"Are these rains perhaps the tears of my beloved?"}
,{TR: "İçerim yanıyor yar yar", EN:"I am burning inside"}
,{TR: "Yaram pek derin", EN:"My wound is deep"}
,{TR: "Bana nazlı yardan aman bir haber verin", EN:"Bring me somе good news from my delicate beloved"}
,{TR: "Bulutlar yârime selam söyleyin", EN:"Clouds, say hello to my love"}
,{TR: "Kavuşma günümüz yakınmış deyin", EN:"Tell her that the day of reunion is near"}
,{TR: "Felek yardan ırak koyduysa bizi", EN:"If fate set me far away from my love"}
,{TR: "Gurbet elde bir başıma neyleyim?", EN:"What can I do abroad all alone?"}
,{TR: "Yârdan ırak yaşanır mı söyleyin", EN:"Tell me, is it possible to live far away from love?"}
]},
{title: "Esmeray Diriker: Unutama beni",
sentences: [{TR: "Boğazında düğümlenen hıçkırık olayım", EN:"Let me be the sob which is stuck in your troat"}
,{TR: "Gözünden damlayamayan gözyaşın olayım", EN:"Let me be the tear which can't weep from your eyes"}
,{TR: "Unutma beni", EN:"Don't forget me"}
,{TR: "Gölgen gibi adım adım", EN:"Like your shadow step step"}
,{TR: "Her solukta benim adım", EN:"In every breath always my name"}
,{TR: "Ben nasıl ki unutmadım", EN:"I didn't forget you"}
,{TR: "Bitmek bilmez kapkaranlık geceler boyunca", EN:"During the endless, dark nights"}
,{TR: "Ayrılığın acısını kalbinde duyunca", EN:"When you feel the bitter grief in your heart"}
,{TR: "Sevişirken, Öpüşürken", EN:"While making love, while kissing"}
,{TR: "Yapayalnız dolaşırken", EN:"While walking alone"}
,{TR: "Unutmaya çalışırken", EN:"While trying to forget"}
,{TR: "Sen de unutma beni", EN:"You also don't forget me"}
]},
{title: "Meyhanenin Sesi - Kalamar",
sentences: [{TR: "Merhaba. Ben Meyhanenin Sesi.", EN:"Hello. I am the Voice of the Tavern."}
,{TR: "Bugün sizlere, kalabalık bir masaya en son gelmenin bedeli isimli prezentasyonun yapacak.", EN:"Today, he will make a presentation called the price of being the last to come to a crowded table."}
,{TR: "Mesela bu arkadaş. Kendisi geç geldiği için kolonun altına oturmak durumunda kaldı.", EN:"For instance, this guy. He had to sit under the column because he was late."}
,{TR: "Masanın en soğuk noktasından ara sıcaklara doğru hamle yapmakta.", EN:"He moves from the coldest point of the table to the warmer temperatures."}
,{TR: "Sürekli duymadığı şakalara sanki anlıyormuş gibi kafa sallamakta.", EN:"He constantly nods to jokes he hasn't heard, as if he understands them."}
,{TR: "Biz sorun bakalım neye gülmekten...", EN:"Let's see what we're laughing at..."}
,{TR: "Toplumda kabul görmeye çalışmakta toplum onu görememekte.", EN:"He is trying to be accepted in the community, but the community cannot see him."}
,{TR: "Bireyin yalnızlığını iliklerinde hissetmekte.", EN:"He feels the loneliness of the individual in his bones."}
,{TR: "Ahmet bey, ben bu çocuk burda verimsiz bir gece geçirsin istememekte.", EN:"Ahmet Bey, I do not want this child to spend an unproductive night here."}
,{TR: "Herhalde, sen de istememekte.", EN:"Probably you don't want it either."}
,{TR: "Hatırla bakalım sabah ne aldırdım sana.", EN:"Remember what I bought you in the morning."}
,{TR: "Akşama lazım olacak.", EN:"Will need it tonight."}
,{TR: "Abim, ben sana ızgara bebek kalamar vereyim.", EN:"Brother, I'll give you grilled baby squid."}
,{TR: "Taptaze, parmaklarını yersin.", EN:"Fresh, you'll lick your fingers."}
,{TR: "Ustam bir ızgara bebek kalamar çek!", EN:"Master make a grilled baby squid!"}
,{TR: "Sıparış üç güzel adımla şefe iletilde.", EN:"The order is forwarded to the chef in three beautiful steps."}
,{TR: "Biz buna kendi aramızda siparişin üç tonu diyoruz.", EN:"We call it three tones of order among ourselves."}
,{TR: "Şimdi koyalım arkadaşımın önüne, ve...", EN:"Now let's put it in front of my friend and..."}
,{TR: "Ali görüldü.", EN:"Ali was seen."}
,{TR: "Şakacı jonglörler Ali kabullendi.", EN:"Playful jugglers accept Ali."}
,{TR: "Kolonlar görünmez olduğu, masa bütünleşti.", EN:"Columns are invisible, the table is unified."}
,{TR: "Böylece kodadı baby operasyonumuz başarıyla tamamlanmış oldu.", EN:"Thus, our codename 'Baby Operation' was successfully completed."}
,{TR: "Ahmetciğim bu ikimizin başarısı. Bu hepimizin başarısı.", EN:"Ahmet, this is the success of both of us. This is our success."}
]},
{title: "Emir kipi",
 sentences: [{TR: "O ne yapsın?", EN: "What should he do?"}
,{TR: "Derste telefonla konuşmayınız.", EN: "Do not talk on the phone in class."}
,{TR: "Lütfen kapalı alanda sigara içmeyiniz.", EN: "Please do not smoke indoors."}
,{TR: "Lütfen sessiz olunuz.", EN: "Please be quiet."}
,{TR: "Lütfen içeri girin.", EN: "Please come in."}
,{TR: "Sağlıklı olmak için yüzün.", EN: "Swim to be healthy."}
,{TR: "Çocuklara söylemeniz. Hastanede sessiz olsunuz.", EN: "Don't talk to the kids. Be quiet in the hospital."}
,{TR: "Çiçeklere her gün çok su vermeyiniz.", EN: "Do not give too much water to the flowers every day."}
,{TR: "Çok su veriyorsun, o zaman çiçekler ölüyor.", EN: "You give too much water, then the flowers die."}
,{TR: "Hava çok soğuk. Siz bugün dışarı çıkmayınız.", EN: "The weather is very cold. Do not go out today."}
]},
{title: "Belirli geçmiş zaman",
 sentences: [{TR: "Ben dün akşam kafeye gittim ve kahve içtim.", EN:"I went to the cafe last night and drank coffee."}
,{TR: "Sen kardeşinin doğum günü için hediye aldın mı?", EN:"Did you buy a present for your brother's birthday?"}
,{TR: "Ayşe dün ev temizledi mi?", EN:"Did Ayşe clean the house yesterday?"}
,{TR: "Siz dün gece saat kaçta geldiniz?", EN:"What time did you come last night?"}
,{TR: "Sen anneni çok kırdın. Hemen özür dile.", EN:"You hurt your mother so much. Apologize now."}
,{TR: "Sevgi ve ben dün akşam dışarıda yemek yedik.", EN:"Sevgi and I had dinner out last night."}
,{TR: "Onlar geçen hafta partide eğlendiler mi?", EN:"Did they have fun at the party last week?"}
,{TR: "Baban eve saat kaçta geldi?", EN:"What time did your father come home?"}
,{TR: "Ali ve sen geçen yıl burada çalıştınız mı?", EN:"Did Ali and you work here last year?"}
,{TR: "Öğrenciler ödev yaptı mı?", EN:"Did the students do their homework?"}
,{TR: "Ben dün akşam çok çalıştım. Dün akşam çok yorgundum.", EN:"I worked hard last night. I was very tired last night."}
,{TR: "Biz eskiden bu üniversitede öğrenciydik. 4 yıl burada okuduk.", EN:"We used to be students at this university. We studied here for 4 years."}
,{TR: "Siz dün okulda çok mutluydunuz. Çok eğlendiniz.", EN:"You were very happy at school yesterday. You had so much fun."}
,{TR: "Dün gece partide yemekler çok lezzetliydi. Ben çok yedim.", EN:"The food at the party last night was delicious. I ate a lot."}
,{TR: "Geçen hafta pazar çok ucuzdu. Biz çok alışveriş yaptık.", EN:"Last week the market was very cheap. We did a lot of shopping."}
,{TR: "Sen dün sabah toplantıda mıydın?", EN:"Were you at the meeting yesterday morning?"}
,{TR: "Hayır, değildim. Dışarıdaydım.", EN:"No, I wasn't. I was outside."}
,{TR: "Siz dün gece neredeydiniz?", EN:"Where were you last night?"}
,{TR: "Biz dün gece yoldaydık.", EN:"We were on the road last night."}
,{TR: "Onlar geçen hafta okulda değillerdi. Ben görmedim.", EN:"They weren't at school last week. I have not seen."}
,{TR: "Öğrenciler 2 saat önce sınıfta mıydı?", EN:"Were the students in class 2 hours ago?"}
,{TR: "Hayır, değillerdi. Bahçedelerdi.", EN:"No, they weren't. They were in the garden."}
,{TR: "Hasta dün gece daha iyi miydi?", EN:"Was the patient better last night?"}
]},
{title: "Belirli geçmiş zaman 2",
 sentences: [{EN: "The dog was barking all night.", TR:"Köpek bütün gece havlıyordu."}
,{EN: "He was not speaking a single word for days.", TR:"Günlerdir tek kelime konuşmuyordu."}
,{EN: "Was she looking at us all this time?", TR:"Bunca zaman bize mi baktı?"}
,{EN: "Irish had lived in this part of the world.", TR:"İrlandalılar dünyanın bu bölgesinde yaşamıştı."}
,{EN: "I had not eaten yet.", TR:"Henüz yememiştim."}
,{EN: "Had they never singed before?", TR:"Daha önce imzalamamışlar mıydı?"}
,{EN: "Did you play football last day?", TR:"Geçen gün futbol oynadın mı?"}
,{EN: "Did he clean his home?", TR:"Evini temizledi mi?"}
,{EN: "Did you go to the party last night?", TR:"Dün gece partiye mi gittiniz?"}
,{EN: "Where did they go on Saturday?", TR:"Cumartesi nereye gittiler?"}
,{EN: "Did you drink coffee yesterday?", TR:"Dün kahve içtin mi?"}
,{EN: "Did you hear this sound?", TR:"Bu sesi duydunuz mu?"}
,{EN: "Yes, I heard this sound.", TR:"Evet bu sesi duydum."}
,{EN: "No, I didn’t hear that sound.", TR:"Hayır o sesi duymadım."}
,{EN: "Yesterday I studied for more than four hours.", TR:"Dün 4 saatten fazla çalıştım."}
,{EN: "We didn’t see the Eiffel Tower.", TR:"Eyfel Kulesi’ni görmedik."}	     
,{EN: "Have you ever been to the zoo?", TR:"Sen hiç hayvanat bahçesine gittin mi?"}
,{EN: "Didn't you get the tickets?", TR:"Biletleri almadın mı?"}
,{EN: "I bought a hot bagel, can we eat it?", TR:"Sıcak simit aldım, yer miyiz?"}
,{EN: "I was late for class because I missed the morning service.", TR:"Sabah servisi kaçırınca derse geç kaldım."}
,{EN: "Did you make this wonderful painting?", TR:"Bu harika resmi siz mi yaptınız?"}
,{EN: "I got wet because I didn't have an umbrella.", TR:"Şemsiyem olmadığı için ıslandım."}
]},
{title: "Bases de données",
 sentences: [{EN: "Business Intelligence", TR: "La Business Intelligence s’intéresse à l’exploitation des données pour les transformer en information qui permettront la prise de décision."}
,{EN: "Modéliser", TR: "Modéliser consiste à définir un monde abstrait qui coïncide avec les manifestations apparentes du monde réel."}
,{EN: "Modéliser", TR: "Il s’agit donc de déterminer l’ensemble des attributs, des relations et des contraintes qui constitueront le modèle."}
,{EN: "Anomalie de modification", TR: "Une modification sur une ligne peut nécessiter des modifications sur d’autres lignes."}
,{EN: "Anomalie de suppression", TR: "Certaines informations dépendent de l’existence d’autres informations."}
,{EN: "Anomalie d’insertion", TR: "La possibilité d’enregistrer un tuple implique la connaissance de toutes les informations qui lui sont liées : problème de valeurs manquantes."}
,{EN: "Dépendance fonctionnelle", TR: "Une dépendance fonctionnelle est une contrainte entre deux ensembles d’attributs dans une relation d’une base de données."}
,{EN: "Super clé", TR: "Un ensemble d’attributs dont un sous-ensemble est clé"}
,{EN: "Clé primaire", TR: "C’est le choix d’une clé parmi les candidates"}
,{EN: "Système d’Armstrong", TR: "Règle d’inférence applicable aux dépendances fonctionnelles"}
,{EN: "Première forme normale", TR: "Une relation est en première forme normale si tous les attributs possèdent tous une valeur sémantiquement atomique."}
,{EN: "Deuxième forme normale", TR: "Une relation respecte la deuxième forme normale, si elle respecte la première forme normale…"}
,{EN: "Deuxième forme normale cont…", TR: "...et tout attribut non-clé ne peut pas dépendre d’un sous-ensemble strict des attribut clés."}
,{EN: "Troisième forme normale", TR: "Une relation respecte la troisième forme normale, si elle respecte la deuxième forme normale…"}
,{EN: "Troisième forme normale cont…", TR: "… et tout attribut n’appartenant pas à une clé ne dépend pas d’un autre attribut non clé."}
,{EN: "Forme Normale Boyce-Codd", TR: "Une relation respecte FNBC, si elle respecte la troisième forme normale…"}
,{EN: "Forme Normale Boyce-Codd cont…", TR: "… et aucun attribut clé ne dépende pas d’un sous-ensemble strict d’un autre clé"}
,{EN: "L’entrepôt de données", TR: "Le DW est une collection de données orientées sujet, intégrées, non volatiles et historisées, organisées pour le support d’un processus d’aide à la décision."}
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
