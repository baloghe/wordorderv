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
{TR: "[/Hey/] ne yapıyorsunuz çocuklar?", EN: "Hey, what are you guys doing?"},
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
{TR: "[/Şişşşşt/]! Burada metamorfoza uğramaya çalışıyoruz!",EN: "Shhht! We're trying to metamorphose here!"},
{TR: "Bunun kaç gün süreceğini ben tabii ki biliyorum da... sen de biliyor musun acaba?",EN: "Of course I know how many days this will take... but I wonder if you know?"},
{TR: "İki hafta.",EN: "Two weeks."},
{TR: "Evet. Doğru. İki hafta.",EN: "Yeah. That's right. Two weeks."},
{TR: "İki hafta mı?",EN: "Two weeks?"},
{TR: "Of... İki hafta boyunca burada ne yapacağım ben?",EN: "What am I going to do here for two weeks?"},
{TR: "Çizgi roman falan alabilir miyim acaba?",EN: "Can I get a comic book or something?"},
{TR: "Ya canım bir şeyler atıştırmak isterse?...",EN: "What if I fancy a snack?"},
{TR: "[/Merhaba/]. İki pizza lütfen. Adres mi? Kozadayım. [/Alo/]? [/Alooo/]?",EN: "Hello. Two pizzas, please. Address? I'm in the cocoon. Hallo? Hallo?"},
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
{TR: "Bir dakika! [/Pppp/]... Kanatlarım nerede?",EN: "Wait a minute! Pppp... Where are my wings?"}
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
{TR: "[/Hey/]! Hepiniz nereye gidiyorsunuz böyle?", EN: "Where are you all going?"},
{TR: "Göç ediyoruz.", EN: "We migrate."},
{TR: "Göç. Evet. Doğru. Beni de bekleyin!", EN: "Migration. Yeah. That's right. Wait for me, too!"},
{TR: "Geldik mi?", EN: "Are we here?"},
{TR: "Yine başlıyoruz.", EN: "Here we go again."}
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
