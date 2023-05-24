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
{ EN: "Do you recognize me?"
 ,TR: "Beni tanıdınız mı?"
},{ EN: "Yes, I'm a tree."
 ,TR: "Evet, ben bir ağacım."
},{ EN: "Now I will tell you the story of the tree."
 ,TR: "Şimdi sizlerle, ağacın hikayesini anlatacağım."
},{ EN: "First, let me introduce myself to you more closely."
 ,TR: "Önce size kendimi daha yakından tanıtayım."
},{ EN: "These are my leaves!"
 ,TR: "Bunlar yapraklarım!"
},{ EN: "These are my nourishing roots beneath the soil."
 ,TR: "Bunlar, toprağın altındaki besleyici köklerim."
}
]},
{title: "Arılar varsa, yarınlar var",
 sentences: [
 { EN: "Then let's go to the flowers together..."
 ,TR: "O zaman gelin hep birlikte çiçeklere doğru gidelim..."
},{ EN: "Here is a worker bee."
 ,TR: "İşte bir işçi arı."
},{ EN: "How quickly it passed."
 ,TR: "Nasıl da hızla geçip gitti."
},{ EN: "Isn't it hard to believe that it was an egg 21 days ago?"
 ,TR: "Onun 21 gün önce bir yumurta olduğuna inanmak zor değil mi?"
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
