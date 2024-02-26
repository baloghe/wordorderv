# Word Order (Vercel + MongoDB)

Grammar excercises of type _'Find the correct word order'_. Available with a collection of translated Turkish excerpts collected mostly from Youtube and Netflix. Nevertheless, anyone can practice with his or her own sets in XML.

## App deployed on Vercel, quizzes fetched from MongoDB

I created the application by copying and modifying the 'Create React App project' on Vercel. Quizzes now reside in MongoDB.

Also deployed on Vercel: [https://wordorderv.vercel.app/](https://wordorderv.vercel.app/)

## Play around with the Preset

Simply hit START. Mixed-up sentences (along with their English translation) are provided one by one.

Swap two words by simply clicking on them one after the other.

Hit Next when you think the word order is correct. A green checker means you were right, a red cross indicates an error. No problem, you can _RETRY_ by pushing the button.

## Practice with your own test set

Upload them on the 'Settings' page. A valid XML document is required:
```
<test>
<languages>
	<language id="" name="" />
	<language id="" name="" />
</languages>
<subjects>
	<subject id="" name="" />
	<subject id="" name="" />
	...
	<subject id="" name="" />
</subjects>
<sentences>
	<subject subjectID="">
		<sentence order="1">
			<variant lang="" txt="" />
			<variant lang="" txt="" />
		</sentence>
		<sentence order="2">
			<variant lang="" txt="" />
			<variant lang="" txt="" />
		</sentence>
		...
	</subject>
	<subject subjectID="">
		...
	</subject>
</sentences>
</test>
```

Checks:
* exactly two languages are provided (&lt;id&gt; suffices)
* all sentences are listed under a valid &lt;subjectID&gt;
* all sentences have exactly two variants pointing to valid languages 
