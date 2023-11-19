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
{title: "Karakomik - Lokantada",
 sentences: [{TR: "Taksi sizin mi, dışarıdaki?", EN: "Is it your taxi outside?"}
,{TR: "Çalışmıyorum abi ben.", EN: "I don't work."}
,{TR: "Öyle mi? Böyle durumlarda hemen güvenlik birimlerine haber vermek lazım.", EN: "Really? In such cases, it is necessary to notify the security units immediately."}
,{TR: "Alo, 155 mi? Bir saniye Memur Bey.", EN: "Hello, 155? Wait a second, Officer."}
,{TR: "Neresi oğlum burası?", EN: "Where are we, my son?"}
,{TR: "İyi nöbetler efendim.", EN: "Good watch sir."}
,{TR: "Taksici bir esnafımız burada yol beğenmiyor, müşteri seçiyor.", EN: "The taxi driver doesn't like the road here, cherry-picks his customers."}
,{TR: "Nasıl yardımcı olabilirsiniz?", EN: "How can you help?"}
,{TR: "Ben Tuncay Uğurlu, Dışişleri'nden.", EN: "I'm Tuncay Uğurlu from the Foreign Office."}
,{TR: "Paris Büyükelçisi Fuat Uğurlu'nun kardeşiyim. Ortanca, evet.", EN: "I am the brother of Paris Ambassador Fuat Uğurlu. The middle one, yes."}
,{TR: "Tamam, siz memur gönderin ben bekliyorum.", EN: "Okay, send some officers, I'm waiting."}
,{TR: "Adresi verseydim.", EN: "I could have given the address."}
,{TR: "Uydudan bulurlar. Sen dalga mı geçiyorsun yavrum?", EN: "They find it by satellite. Are you kidding my dear?"}
,{TR: "Şu aleti her yerden okuyorlar. Tuncay Uğurlu, tak bitti.", EN: "They read this instrument from everywhere. Tuncay Uğurlu, the plug is over."}
,{TR: "Polisi karıştırmak istemezdim ama gelsinler işlem yapılsın, her şey ortaya çıksın.", EN: "I wouldn't want to mix the police in, but let them come and take action, let everything come out."}
,{TR: "Siz nereye gideceksiniz abi?", EN: "Where will you go, man?"}
,{TR: "Hah, şöyle ya.", EN: "Oh, that's it."}
,{TR: "Valla nereye gideceğiz yavrum, tek yön var, aşağıya doğru gideceğiz işte.", EN: "Well, where are we going, boy? there is only one way, we will go down."}
,{TR: "Çayı şuradan alıver yavrum.", EN: "Take the tea from there, son."}
,{TR: "Abi, çorbaların parası?", EN: "The money for the soups?"}
,{TR: "Rica edeceğim, sizden para mı alacağız?", EN: "I beg you, will we take money from you?"}
 ]},
{title: "Kefir mi Yoğurt mu",
 sentences: [{TR: "Aralarında birçok fark vardır.", EN: "There are many differences between them."}
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
{title: "Asuman Tatlısının Hikayesi",
sentences: [{TR: "Yılmaz Cihan, 1985 Çorum doğumluyum.", EN:"Yılmaz Cihan, I was born in Çorum in 1985."}
,{TR: "Ya üniversite için geldim ben İstanbul'la ama cocukluğumun önemli bir kısmı da Almanya'da geçti.", EN:"Well, I came to Istanbul for university, but I spent a significant part of my childhood in Germany."}
,{TR: "Marmara Üniversitesi'nde İşletme bölümünü okudum.", EN:"I studied Business Administration at Marmara University."}
,{TR: "Bilgi Üniversitesi'nde pazarlama iletişimi master'ı yaptım.", EN:"I completed my master's degree in marketing communications at Bilgi University."}
,{TR: "Ondan sonra da pazar araştırmacılığı ve reklamcılık yaptım.", EN:"After that, I did market research and advertising."}
,{TR: "En son da cıkolatacı oldum.", EN:"Finally, I became a chocolate maker."}
,{TR: "Aslında keyifli işlerdi ama çok da benlik değildi.", EN:"Actually, it was fun work, but it wasn't very personal."}
,{TR: "Çok bana gerçek gibi gelmiyordu.", EN:"It didn't seem real to me."}
,{TR: "Daha gerçek bir dünyanın işini yapıyormuşum gibi gelmiyordu.", EN:"It didn't feel like I was doing the work of a real world yet."}
,{TR: "Hafta sonunu finanse etmek için sabah 9'dan akşam 6'ya kadar çalışma fikri benim çok barışabileceğim bir fikri değildi.", EN:"The idea of working from 9 a.m. to 6 p.m. to fund the weekend was not something I could quite reconcile with."}
,{TR: "Biraz daha gerçek bir hayat istedim.", EN:"I wanted a more real life."}
,{TR: "Biraz daha sokakta bir hayat istedim.", EN:"I wanted a little more life on the streets."}
,{TR: "Ben önce bir esnaf olmaya karar verdim.", EN:"I first decided to become a tradesman."}
,{TR: "Çikolata da ondan sonra bir yöntem olarak geldi.", EN:"Chocolate came as a method after that."}
,{TR: "Bir yöntem olarak doğdu.", EN:"It was born as a method."}
,{TR: "Dolayısıyla aşımalığım çok daha fazlaydı.", EN:"Therefore, my immunization rate was much higher."}
,{TR: "Bir Almanya'dan Türkiye'ye çikolata getiren aileydik.", EN:"We were a family that brought chocolate to Turkey from Germany."}
,{TR: "Kaliteli çikolatayla ilgili bir hassasiyetim vardı.", EN:"I was sensitive about quality chocolate."}
,{TR: "Yaptığım işlerden ötürü de çikolata pazarına hakim oldum.", EN:"Because of the work I did, I became familiar with the chocolate market."}
,{TR: "Çünkü piyasada ne kadar bildiğimiz büyük çikolata firması varsa bir şekilde benim müşterim oldu.", EN:"Because all the big chocolate companies we know in the market somehow became my customers."}
,{TR: "Onlara pazarını anlatırken ben de pazarı öğrenmiş oldum.", EN:"While I was telling them about the market, I also learned about the market."}
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
