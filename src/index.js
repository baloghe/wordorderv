import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./component/App";

/*-------------------------------
   Actual inputs and root rendering
-------------------------------*/

const mockTests = [
{title: "Ağaç Nasil Oluşur?",
 sentences: [
{ qSentence: "Do you recognize me?"
 ,aSentence: "Beni tanıdınız mı?"
},{ qSentence: "Yes, I'm a tree."
 ,aSentence: "Evet, ben bir ağacım."
},{ qSentence: "Now I will tell you the story of the tree."
 ,aSentence: "Şimdi sizlerle, ağacın hikayesini anlatacağım."
},{ qSentence: "First, let me introduce myself to you more closely."
 ,aSentence: "Önce size kendimi daha yakından tanıtayım."
},{ qSentence: "These are my leaves!"
 ,aSentence: "Bunlar yapraklarım!"
},{ qSentence: "These are my nourishing roots beneath the soil."
 ,aSentence: "Bunlar, toprağın altındaki besleyici köklerim."
}
]},
{title: "Arılar varsa, yarınlar var",
 sentences: [
 { qSentence: "Then let's go to the flowers together..."
 ,aSentence: "O zaman gelin hep birlikte çiçeklere doğru gidelim..."
},{ qSentence: "Here is a worker bee."
 ,aSentence: "İşte bir işçi arı."
},{ qSentence: "How quickly it passed."
 ,aSentence: "Nasıl da hızla geçip gitti."
},{ qSentence: "Isn't it hard to believe that it was an egg 21 days ago?"
 ,aSentence: "Onun 21 gün önce bir yumurta olduğuna inanmak zor değil mi?"
}
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
