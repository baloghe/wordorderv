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
,{TR: "Oldu mu? Tamam mıyız? Gidelim mi?", EN:"Is this okay? All good now? Should we go?"}
,{TR: "Nereye gidiyoruz diye sormayacak mısın?", EN:"You don't even ask where we go?"}
,{TR: "Açıkçası... sikimde değil.", EN:"Frankly, I don't fucking care."}
,{TR: "Nereye götürürsen oraya.", EN:"I'll go wherever you take me."}
]},
{title: "Terzi - Düğüne varış",
 sentences: [{TR: "Hayda! Şaka yapıyorsun herhâlde!", EN:"Come on! You've got to be kidding me!"}
,{TR: "Seni bir konuda uyarmam gerekiyor.", EN:"I have to warn you about something."}
,{TR: "Ben düğünlere çağrılmaması istenen o kızımdır.", EN:"I'm the girl people don't want at their wedding."}
,{TR: "Rolüm ne peki?", EN:"What's my role, then?"}
,{TR: "Yani beni buraya çağırdığına göre birilerine bir şey anlatmaya çalışıyorsun.", EN:"Since you invited me here, you must be trying to make a statement."}
,{TR: "Ne diye tanıtacaksın beni?", EN:"What are you introducing me as?"}
,{TR: "Hayır, yani sevgilin olabilirim, uzaktan bir kuzenin olabilirim, bir çalışanın olabilirim.", EN:"I mean, I could be your girlfriend, a distant cousin, or an employee."}
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
,{TR: "Yalnız biz konukları beyaz giymeyi konusunda uyarmıştık diye hatırlıyorum.", EN:"But I remember asking our guests to dress in all white."}
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
{title: "Ajda Pekkan - Boşvermişim Dünyaya",
 sentences: [{TR: "Temmuz, Ağustos, Eylül her mevsimde durma gül", EN: "July, August, September, keep laughing in all seasons"}
,{TR: "Hayat inan çok kısa belki çıkmayız yaza", EN: "Remember, life is short, we may not leave summer"}
,{TR: "Boşvermişim, boşvermişim, boşvermişim dünyaya", EN: "I don't care about the world"}
,{TR: "Ağlamak istemiyorsan sen de boşver dünyaya", EN: "If you don't want to cry, take no care either"}
,{TR: "Ahmet, Mehmet, Süreyya hepsi boş hepsi hülya", EN: "Ahmet, Mehmet, Süreyya - all empty dreams"}
,{TR: "Bir gün hayat bitecek dersin görmüşüm rüya", EN: "One day life is over, I've only seen a dream"}
,{TR: "Aldatırlar aç gözünü unut artık geçmiş dünü", EN: "They cheat, open your eyes, forget the past"}
,{TR: "Her akşam ayrı güzelle sen de geçir her gününü", EN: "A different beaty every night, spend the days like that"}
,{TR: "Boşvermişim, boşvermişim dünyaya ben boşvermiş", EN: "I don't care about the world"}
,{TR: "Vallahi aldırmıyorum elalem ne söylermiş", EN: "I swear I ignore what people say"}
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
{title: "Özel ders - 01",
 sentences: [{TR: "Hepimiz sürekli bir şeylere yetişmeye çalışıyoruz.", EN: "We're always trying to keep up with stuff."}
,{TR: "Okul, aşk, arkadaşlar, aile, dersler…", EN: "Studies, love, friends, family, classes..."}
,{TR: "Liste uzun, hayat kısa.", EN: "The list is long, life is short."}
,{TR: "Yetişkin olmak, yetişmekten geliyordur belki.", EN: "Being an adult may be all about development."}
,{TR: "Peki ya hayat dersleri?", EN: "What about life lessons?"}
,{TR: "İşte bu kısımda devreye ben giriyorum ve öğrencilerin en ihtiyaç duydukları kişi oluyorum. That's where I step in and become the person the clients need the most.", EN: ""}
 ]},
 {title: "Özel ders - 02",
 sentences: [{TR: "Bir de sen vardın, doğru ya.", EN: "There was also you, right."}
,{TR: "Ne Merkür retrosuymuş arkadaş!", EN: "What a Mercury retrograde!"}
,{TR: "Daha çok göktaşı sanki!", EN: "More like a meteorite!"}
,{TR: "Efendim? Düştün resme. Sorry? You crashed into my life.", EN: ""}
,{TR: "Anlamıyorum dediklerini.", EN: "I don't get it."}
,{TR: "Ben de onu diyorum. Bir de özel ders istiyorsun.", EN: "That's what I'm talking about. Yet you want tutoring."}
,{TR: "Ha yok, ben derslerde çok iyiyimdir.", EN: "I excel at classes, though."}
,{TR: "Hatta şöyle gelmeden önce ufak da bir araştırma yaptım.", EN: "I even did a little research before I came here."}
,{TR: "Bayağı ufak olmuş.", EN: "A little, sure."}
,{TR: "Gerçi tabii çok da değişip değişmemekle ilgili değil olay…", EN: "Although, of course, changing is not the key…"}
,{TR: "Yavaş. Sakin. Kahve? Yok, ben kahve içemem.", EN: "Easy. Calm down. Coffee? I don't take coffee."}
,{TR: "Kahve içersem hareketlenirim, çok konuşurum.", EN: "Coffee makes me all energetic and talkative."}
,{TR: "Stimülatörler bende öyle… Tamam. Papatya çayı.", EN: "Stimulants have the same effect on me… OK. Chamomile tea."}
 ]},
{title: "Özel Ders - Hande ve Azra",
 sentences: [{TR: "Vay be, gerçekten çalışıyormuş.", EN: "Wow, she does work a lot."}
,{TR: "Bu mesleğin bir adı falan var mı?", EN: "Does this profession have a name?"}
,{TR: "İyi para vardır bu işte.", EN: "I bet you make a lot."}
,{TR: "Hande! Seni hiç ilgilendirmez.", EN: "Hande! It's none of your business."}
,{TR: "Niye böyle bir meslek yapar ki insan?", EN: "Why would one choose such a career?"}
,{TR: "Senin travman falan mı var?", EN: "Are you traumatized or something?"}
,{TR: "Sana müşteri geldi Azra!", EN: "You have a customer, Azra!"}
,{TR: "Ya sınır nedir bilmez misin sen?", EN: "Don't you know what the limit is?"}
,{TR: "Demek böyle buluyorlar seni.", EN: "So that's how they find you."}
,{TR: "Söyleseydin ben de mesaj atardım ya.", EN: "I could've sent a message if I'd known."}
,{TR: "Amma tantana yaptın yani.", EN: "You made such a fuss."}
,{TR: "Öyle kolay zannediyorsun tabii.", EN: "You think it's so easy."}
,{TR: "Referans nereden bulacaktın?", EN: "How would you find a reference?"}
,{TR: "Teyzem referans olurdu bence bana.", EN: "I think my aunt would vouch for me."}
,{TR: "Hatta… Neydi, dur, kızın adı? Dur. Sakın söyleme.", EN: "Or even… What was her name? Don't tell me."}
,{TR: "Melisa da referans olurdu bence.", EN: "Melisa would vouch for me too."}
,{TR: "Hani velisi gibi aradığın var ya?", EN: "You pretended to be her parent, remember?"}
,{TR: "Tamam, anlaşıldı. Senden kurtuluş yok.", EN: "OK, got it. There is no escape from you."}
,{TR: "Bu akşam Utku'nun evinde bir parti var.", EN: "Utku's having a party tonight."}
,{TR: "Bilmiyorum haberin var mı.", EN: "I'm not sure if you're aware."}
,{TR: "Onunla başlayım bakalım.", EN: "Let's start with that."}
,{TR: "Kural bir. Söylediklerime harfiyen uyacaksın.", EN: "Rule number one. You're going to do what I tell you."}
,{TR: "Tamam, söz.", EN: "Okay, I promise."}
,{TR: "Hayatı kitaplardan öğrenemezsin.", EN: "You can't learn life from books."}
,{TR: "Pratik lazım sana. Şu saçmalıkları da kaldır.", EN: "You need practice. Remove that bullshit."}
]},
{title: "Serge Gainsbourg - Laetitia",
 sentences: [{TR: "Sur ma Remington portative j'ai écrit ton nom Lætitia", EN: "On my portable Remington I wrote your name Laetitia"}
,{TR: "Lætitia les jours qui se suivent hélas ne se ressemblent pas", EN: "Laetitia, recent days are not the same"}
,{TR: "C'est ma douleur que je cultive en frappant ces huit lettres-là", EN: "That's my pain I develop while I'm typing those eight very letters"}
,{TR: "C'est une fleur bien maladive je la touche du bout des doigts", EN: "This is a quite sickly flower I touch her with my fingertips"}
,{TR: "S'il faut aller à la dérive je veux bien y aller pour toi", EN: "If it must be going to drift, I am glad to go for you"}
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
