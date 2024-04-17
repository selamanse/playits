/*
*
*  PlayIts Showcase Configuration                              
*  Author: Selamanse <selamanse@scheinfrei.info>                                 				  
*
*/
$.each(sounds, function (i,e){
	var e_split = e.split('/')
	var generated_desc = e_split[e_split.length - 1]
	$("<div>").playit({
		sourcemp4: `${e}.m4a`, 
		sourceogg: `${e}.ogg`, 
		description: `${generated_desc}`	
	}).appendTo("#mainscene");
});

