# Word Order (Vercel)

Grammar excercises of 'Find the correct word order' type. Preset to a collection of translated Turkish excerpts collected and translated mostly from Youtube. Nevertheless anyone can upload his or her own set of tests in XML.

## Deployed on Vercel

Created by copying and modifying the 'Create React App project' on Vercel.

Also deployed on Vercel: [https://wordorderv.vercel.app/](App link)

## Play around with the Preset

Simply hit START. Mixed-up sentences (along with their English translation) are provided one by one.
Swap two words by simply clicking on them one after the other.
Hit Next when you think the word order is correct.

## Upload your own test set

A valid XML document is required:

&lt;languages&gt;
	&lt;language id="" name="" /&gt;
	&lt;language id="" name="" /&gt;
&lt;/languages&gt;
&lt;subjects&gt;
	&lt;subject id="" name="" /&gt;
	&lt;subject id="" name="" /&gt;
	...
	&lt;subject id="" name="" /&gt;
&lt;/subjects&gt;
&lt;sentences&gt;
	&lt;subject subjectID=""&gt;
		&lt;sentence order="1"&gt;
			&lt;variant lang="" txt="" /&gt;
			&lt;variant lang="" txt="" /&gt;
		&lt;/sentence&gt;
		&lt;sentence order="2"&gt;
			&lt;variant lang="" txt="" /&gt;
			&lt;variant lang="" txt="" /&gt;
		&lt;/sentence&gt;
		...
	&lt;/subject&gt;
	&lt;subject subjectID=""&gt;
		...
	&lt;/subject&gt;
&lt;/sentences&gt;
