import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./component/App";

/*-------------------------------
   Actual inputs and root rendering
-------------------------------*/

const mockTests = [
{title: "Sabırsız Tırtıl 1-24",
 sentences: [
{TR: "Hey ne yapıyorsunuz çocuklar?", EN: "Hey, what are you guys doing?"},
{TR: "Metamorfoza uğrayacağız.", EN: "We will undergo metamorphose."},
{TR: "Kime uğrayacaksınız?", EN: "What will you metamorphose into?"},
{TR: "Yani kelebeğe dönüşeceğiz.", EN: "So we'll turn into butterflies."},
{TR: "Evet. Doğru. Biliyordum zaten.", EN: "Yeah. That's right, yeah. I knew it."},
{TR: "Bir dakika! Yani şimdi sen bana kelebek olabileceğimi söylüyorsun?", EN: "Wait a minute! So now you're telling me I can be a butterfly?"},
{TR: "Kanatlı falan?", EN: "With wings and stuff?"},
{TR: "Beni de bekleyin!", EN: "Wait for me, too!"},
{TR: "Şimdi ne yapıyoruz?", EN: "What are we doing now?"},
{TR: "Kozanı ör.", EN: "Knit the cocoon."},
{TR: "Koza. Evet. Doğru. Biliyordum zaten.", EN: "Cocoon. Yeah. That's right, yeah. I knew it."},
{TR: "Ne! Bunu nasıl yaptın?", EN: "What! How did you do that?"},
{TR: "Bir kez dönmek yeterli mi?", EN: "Is it enough to turn round once?"},
{TR: "Yoksa fırıl fırıl döneyim mi?", EN: "Or should I spin round and round?"},
{TR: "Kelebek oldum mu?", EN: "Did I become a butterfly?"},
{TR: "Şimdi ne yapıyoruz?", EN: "What are we doing now?"},
{TR: "Sabırlı ol ve akışına bırak.", EN: "Be patient and go with the flow."},
{TR: "Sabır. Doğru. Tamam, anladım.", EN: "Patience. Right. Okay, I got it."},
{TR: "Kelebek oldum mu?", EN: "Have I become a butterfly?"},
{TR: "Hayır. Sabırlı ol.", EN: "No. Be patient."},
{TR: "Bir sorum var.", EN: "I have a question."},
{TR: "Daha değil!", EN: "Not yet!"},
{TR: "Ne soracağağımı bile bilmiyorsun.", EN: "You don't even know what I'm gonna ask."},
{TR: "Peki. Sor bakalım.", EN: "All right, then. Go ahead."}
]},
{title: "Sabırsız Tırtıl 25-48",
 sentences: [
{TR: "Günün nasıl geçiyor? Bir de... artık kelebek oldum mu?",EN: "How's your day going? And... am I a butterfly now?"},
{TR: "Hayır. Sabırlı ol!",EN: "No. Be patient."},
{TR: "Şişşşşt! Burada metamorfoza uğramaya çalışıyoruz!",EN: "Shhht! We're trying to metamorphose here!"},
{TR: "Bunun kaç gün süreceğini ben tabii ki biliyorum da... sen de biliyor musun acaba?",EN: "Of course I know how many days this will take... but I wonder if you know?"},
{TR: "İki hafta.",EN: "Two weeks."},
{TR: "Evet. Doğru. İki hafta.",EN: "Yeah. That's right. Two weeks."},
{TR: "İki hafta mı?",EN: "Two weeks?"},
{TR: "Of... İki hafta boyunca burada ne yapacağım ben?",EN: "What am I going to do here for two weeks?"},
{TR: "Çizgi roman falan alabilir miyim acaba?",EN: "Can I get a comic book or something?"},
{TR: "Ya canım bir şeyler atıştırmak isterse?...",EN: "What if I fancy a snack?"},
{TR: "Merhaba. İki pizza lütfen. Adres mi? Kozadayım. Alo? Alooo?",EN: "Hello. Two pizzas, please. Address? I'm in the cocoon. Hallo? Hallo?"},
{TR: "Ne kadar zamandır buradayım?",EN: "How long have I been here?"},
{TR: "Ya tuvalete gitmek gerekirse?",EN: "What if you need to go to the loo?"},
{TR: "Oyun oynamak isteyen var mı?",EN: "Anyone want to play games?"},
{TR: "Daha birinci günde miyiz? Ama uzun sürüyormuş!",EN: "It's only day one? It's taking so long!"},
{TR: "Bu kadar yeter.",EN: "That's enough."},
{TR: "Yeterince metamorfoza uğramışım gibi geliyor bana.",EN: "I feel like I've been metamorphosed enough."},
{TR: "Merhaba dünya.",EN: "Hello World!"},
{TR: "Bakın da gözleriniz bayram etsin.",EN: "Let your eyes feast."},
{TR: "İşte karşınızda güzeller güzeli bir kelebek!",EN: "Here is the most beautiful butterfly in front of you!"},
{TR: "Nasıl görünüyorum?",EN: "How do I look?"},
{TR: "Dönüşmüş müyüm?",EN: "Am I transformed?"},
{TR: "Kanatlarımı açıp uçma vakti geldi!",EN: "It's time to spread my wings and fly!"},
{TR: "Bir dakika! Pppp... Kanatlarım nerede?",EN: "Wait a minute! Pppp... Where are my wings?"}
 ]},
{title: "Sabırsız Tırtıl 49-72",
 sentences: [
 {TR: "Yeni bir yöntem denesem iyi olacak.", EN: "I'd better try a new method."},
{TR: "Başarabilirsin küçük tırtıl.", EN: "You can do it, little caterpillar."},
{TR: "Başaramazsın küçük tırtıl.", EN: "You won't make it, little caterpillar."},
{TR: "Tamam. Bunu yapabilirsin. Sabırlı olabilirsin.", EN: "Okay. You can do this. You can be patient."},
{TR: "Ah, kimi kandırıyorum ki? Ben sabırlı olamam!", EN: "Oh, who am I kidding? I can't be patient!"},
{TR: "Yapabilirsin! Yapamam.", EN: "You can do it! I can't."},
{TR: "Kendini topla! Bunu yapabilirsin!", EN: "Pull yourself together! You can do this!"},
{TR: "Yapamam! Yapamam!", EN: "I can't! I can't!"},
{TR: "Sabırlı olabilirim.", EN: "I can be patient."},
{TR: "Sabır zihinde başlar.", EN: "Patience begins in the mind."},
{TR: "Kozayla bütünleş.", EN: "Become one with the cocoon."},
{TR: "Derin derin nefes al... ve ver.", EN: "Take a deep breath... and out."},
{TR: "Başarmak üzereyim!", EN: "I'm about to make it!"},
{TR: "Sabırlı ol yeter.", EN: "Just be patient."},
{TR: "Sadece sabırlı ol.", EN: "Only be patient."},
{TR: "İki hafta sonra...", EN: "Two weeks later..."},
{TR: "Başardım! Artık bir kelebeğim!", EN: "I've done it! I'm a butterfly now!"},
{TR: "Biliyor musun, gerçekten de değiştiğimi hissediyorum!", EN: "You know, I really feel like I've changed!"},
{TR: "Şu andan itibaren çok daha sabırlı olacağım.", EN: "From now on, I'll be much more patient."},
{TR: "Hey! Hepiniz nereye gidiyorsunuz böyle?", EN: "Where are you all going?"},
{TR: "Göç ediyoruz.", EN: "We migrate."},
{TR: "Göç. Evet. Doğru. Beni de bekleyin!", EN: "Migration. Yeah. That's right. Wait for me, too!"},
{TR: "Geldik mi?", EN: "Are we here?"},
{TR: "Yine başlıyoruz.", EN: "Here we go again."}
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
,{TR: "Ali ve sen geçen yıl burada çalıştınız mı?", EN:"Did you and Ali work here last year?"}
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
