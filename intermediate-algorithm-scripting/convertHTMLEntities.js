/*
|---------------------------------------------------------------------|
    [desc]                              [entityName]    [entityNumber]
    non-breaking space	                &nbsp;	        &#160;
<	less than	                        &lt;	        &#60;
>	greater than	                    &gt;	        &#62;
&	ampersand	                        &amp;	        &#38;
"	double quotation mark	            &quot;	        &#34;
'	single quotation mark (apostrophe)	&apos;	        &#39;
¢	cent	                            &cent;	        &#162;
£	pound	                            &pound;	        &#163;
¥	yen	                                &yen;	        &#165;
€	euro	                            &euro;	        &#8364;
©	copyright	                        &copy;	        &#169;
®	registered trademark	            &reg;	        &#174;
|---------------------------------------------------------------------|
*/

function convertHTML(str) {
    let entityObj = {
      "<" : "&lt;",
      ">" : "&gt;",
      "&" : "&amp;",	
      '"' : "&quot;",
      "'" : "&apos;"
    }
    let regex = /[&<>""'']/g
    
    return str.replace(regex, match => entityObj[match]);
  }
  
  console.log(convertHTML("Do<>lce & Gab'bana"));

