(function($){
	$(document).ready(function(){
		$('#edit-phone')
			.focus(function(e){
				if(!this.value.length) this.value = '+7 (';
			})
			.keyup(function(e){
				if(!this.value.match(/^\+7 \(/)) this.value = '+7 (';
				if(!skip_char(e.which)){
					var p = this.value
						.replace(/[^ +\d()-]/g,'')
						.split(/[- ()]+/);
					this.value = p[0]+
						' ('+p[1]+(p.length > 2 ? ') '+
						(p.slice(2).join('').match(/(\d\d?\d?)(\d\d?)?(\d\d?)?/) || []).slice(1).filter(function(v){return v;}).join('-') : '');
				}
			});
	});
})(jQuery);

function skip_char(code){
	return [8,13,27,37,38,39,40].indexOf(code) > -1;
}
