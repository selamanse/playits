/*
*
*  PlayIts Showcase Configuration                              
*  Author: Selamanse <selamanse@scheinfrei.info>                                 				  
*
*/
$.each(sounds, function (i,e){
	var generated_desc = e.split('/')[2]
	$("<div>").playit({
		sourcemp4: `${e}.m4a`, 
		sourceogg: `${e}.ogg`, 
		description: `${generated_desc}`	
	}).appendTo("#mainscene");
});

