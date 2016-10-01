/*
*
*  jquery.playit.js
*  Author: Selamanse <selamanse@scheinfrei.info>                         				  
*  Revision: 2013-06-02
*/


$.widget("custom.playit", {
  // default options
  options: {
	  sourcemp4: "",
	  sourceogg: "",
	  description: "n.a.",
	  playitClass: "playit",
	  loop: false
  },

  // the constructor
  _create: function () {
	  
	  // prevent double click to select text
	  this.element.disableSelection();
	  // add a class for theming
	  this.element.addClass(this.options.playitClass);
	 
	  this._refresh();
  },

  // called when created, and later when changing options
  _refresh: function () {
  	if(!this.options.sourcemp4 && !this.options.sourceogg ) return true;
	
	var playitwidget = this;
	var playit = this.element;
	
	var elemInner = $('<div class="playit-inner" />');
		
	var elemAudio = $('<audio autobuffer="autobuffer" />');
	
	if(this.options.sourcemp4) {
		$(elemAudio).append('<source src="' + this.options.sourcemp4 + '" type="audio/mpeg"/>');
	}
	
	if(this.options.sourceogg) {
		$(elemAudio).append('<source src="' + this.options.sourceogg + '" type="audio/ogg"/>');
	}
	
	$(elemAudio).prop("loop", playitwidget.options.loop);	
	
	
	$(elemInner).append(elemAudio);
	
	var elemDesc = $('<div class="playit-description">' + this.options.description + '</div>').hide();
	var elemHandle = $('<div class="playit-handle" />').hide();
	
	$(elemInner).append(elemDesc).append(elemHandle);
	
	
	$(playit).append(elemInner);
	
	$(playit).playit("unfold");
	
	//animations while playing or pausing…
	
	$(elemAudio).on("playing", function(){
		console.log("playing");
    	$(playit).addClass("playit-playing");
    	$(playit).find(".playit-handle").rotate({
            duration: 32000,
            angle: 0, 
            animateTo: 16000
     		})
	});

 
	$(elemAudio).on("pause", function(){	
			console.log("pause");
			$(playit).removeClass("playit-playing");    	
    		$(playit).find(".playit-handle").stopRotate();
    		$(playit).find(".playit-handle").attr("style", "transform: rotate(0deg);");
	});

	
	return true;
  },
  
  unfold: function () {
  	
  		var playit = this.element;
  		
  		$(playit).find(".playit-loading-text").remove();
		
		$(playit).removeClass("playit-loading");
			
		$(playit).find(".playit-handle").show();
		$(playit).find(".playit-description").show();
			
		$(playit).find(".playit-handle").on('click', function(event){
			$(this).stop();
			if(!$(playit).find("audio").prop("paused")){					
				$(playit).find("audio")[0].pause();
			}else{
    			$(playit).find("audio")[0].play();
    		}
		});
  	
  },
  stop: function() {
  	var playit = this.element;
  	$(playit).find("audio")[0].pause();
  	$(playit).find("audio").prop("currentTime", "0");
  },

  // events bound via _on are removed automatically
  // revert other modifications here
  _destroy: function () {
	  // remove generated elements
	  this.element
		  .removeClass(this.options.playitClass)
		  .enableSelection()
		  .children().remove();
  },

  // _setOptions is called with a hash of all options that are changing
  // always refresh when changing options
  _setOptions: function () {
	  // _super and _superApply handle keeping the right this-context
	  this._superApply(arguments);
	  this._refresh();
  },

  // _setOption is called for each individual option that is changing
  _setOption: function (key, value) {
	  this._super(key, value);
  }
});