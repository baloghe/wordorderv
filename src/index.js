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
{title: "Özel ders - 01",
 sentences: [{TR: "Hepimiz sürekli bir şeylere yetişmeye çalışıyoruz.", EN: "We're always trying to keep up with stuff."}
,{TR: "Okul, aşk, arkadaşlar, aile, dersler…", EN: "Studies, love, friends, family, classes..."}
,{TR: "Liste uzun, hayat kısa.", EN: "The list is long, life is short."}
,{TR: "Yetişkin olmak, yetişmekten geliyordur belki.", EN: "Being an adult may be all about development."}
,{TR: "Peki ya hayat dersleri?", EN: "What about life lessons?"}
,{TR: "İşte bu kısımda devreye ben giriyorum ve öğrencilerin en ihtiyaç duydukları kişi oluyorum.", EN: "That's where I step in and become the person the clients need the most."}
 ]},
 {title: "Özel ders - 02",
 sentences: [{TR: "Bir de sen vardın, doğru ya.", EN: "There was also you, right."}
,{TR: "Ne Merkür retrosuymuş arkadaş!", EN: "What a Mercury retrograde!"}
,{TR: "Daha çok göktaşı sanki!", EN: "More like a meteorite!"}
,{TR: "Efendim? Düştün resme.", EN: "Sorry? You crashed into my life."}
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
{title: "Özel ders - 03",
 sentences: [{TR: "Pratik lazım sana. Şu saçmalıkları da kaldır.", EN: "You need practice. And remove that bullshit."}
,{TR: "Teyzen eve gelmez, değil mi?", EN: "Your aunt won't come home, will she?"}
,{TR: "Yakalanmayalım. Bu saatte hayatta gelmez.", EN: "Let's not get caught. He won't come alive at this hour."}
,{TR: "Ay Burak, bütün gece beni yordun. Mahvoldum.", EN: "Ay Burak, you exhausted me all night. I'm ruined."}
,{TR: "Olur mu öyle şey canım?", EN: "Is such a thing possible, dear?"}
,{TR: "Bana haftaya programını söyle. Ona göre randevulaşırız.", EN: "Tell me your schedule for next week. We make an appointment accordingly."}
,{TR: "Yalnız bu dolap hâlâ burada!", EN: "Only this closet is still here!"}
,{TR: "Oo, Üç Numara. Günaydın. Ben unutmuşum dolabı tamamen. Kusura bakma.", EN: "Oh, Number Three. Good morning. I forgot the closet completely. Sorry."}
,{TR: "Apartmandan birileri bıt bıt bıt kamyonla alakalı söylenmişler.", EN: "Someone from the apartment said blah blah blah about the truck."}
,{TR: "Ben de erken yolladım arkadaşları.", EN: "I also sent them early."}
,{TR: "Ha, özrün kabahatinden büyük yani.", EN: "Oh, that's your big apology for your fault."}
,{TR: "Bak, görüyorsun, çok fazla işim var.", EN: "Look, you see, I have a lot of work."}
,{TR: "İşim bitsin aldırırım ben. Görüşürüz.", EN: "I'll take care of it when I'm done. See you later."}
,{TR: "İş diyor ya! Yok artık!", EN: "Work, he says! No way!"}
,{TR: "Sanat eseri bence.", EN: "I think it's a work of art."}
,{TR: "Evet, aynı sen.", EN: "Yes, like you."}
,{TR: "Sabah sabah da insanın bu kadar üstüne gelinmez ki!", EN: "In the morning, you can't come over a person like that!"}
,{TR: "Sana ne oluyor ya?", EN: "What's happening to you?"}
,{TR: "Ya iki gram umudum vardı, o da bitti gitti.", EN: "I had two grams of hope, and it's gone."}
,{TR: "Utku niye beni beğensin ki?", EN: "Why would Utku like me?"}
,{TR: "Bunlar kadınsa ben... başka bir cinsim.", EN: "If these are women, I am... another breed."}
,{TR: "Yok, sen sadece cinssin.", EN: "No, you're just the breed."}
,{TR: "O ayrı konuda gördüğünü de anlamıyorsun belli ki.", EN: "Regarding the other issue, you obviously don't understand what you see."}
 ]},
 {title: "Özel ders - 05",
 sentences: [{TR: "Bir eşeklik ettim. Beni affeder misin?", EN: "I was an ass. Will you forgive me?"}
,{TR: "Çok komik görünüyorsun. Çıkar şunu, gerek yok.", EN: "You look hilarious. Just take it off. It's fine."}
,{TR: "Ayrıca bunları ne ara yaptın ya?", EN: "When did you do all this?"}
,{TR: "Bu kadar şeye gerek yoktu.", EN: "You shouldn't have."}
,{TR: "Azra, ben seni sonradan anladım.", EN: "Azra, I didn't get it at first."}
,{TR: "Hiçbir şey bilmiyormuşum ki seninle alakalı.", EN: "I didn't know anything about you."}
,{TR: "Bundan sonra da sonuna kadar yanındayım.", EN: "I'll be on your side forever."}
,{TR: "Ya Burak, ne olur kusura bakma.", EN: "Burak, I'm so sorry."}
,{TR: "Ama çok önemli, bunu açmam gerekiyor.", EN: "But I really have to take this."}
 ]},
{title: "Özel Ders - 06 Hande ve Azra",
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
