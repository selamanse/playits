/*
*
*  PlayIts Showcase Configuration                              
*  Author: Selamanse <selamanse@scheinfrei.info>                                 				  
*
*/
$.each(sounds, function (i,e){
	$("<div>").playit({
		sourcemp4: `${e}.m4a`, 
		sourceogg: `${e}.ogg`, 
		description: `${e}`	
	}).appendTo("#mainscene");
});

