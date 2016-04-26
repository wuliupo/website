var toc = document.getElementById('toc');
var addEvent = toc.addEventListener ? 'addEventListener' : 'attachEvent';
var innerText = toc.innerText ? 'innerText' : 'textContent';
var h2s = toc.getElementsByTagName('h2');
_.forEach(h2s, function(h2){
	h2[addEvent]('click', function(){
		var ul = h2.nextElementSibling;
		ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
	});
});

var lis = toc.getElementsByTagName('li');

var filter = document.getElementById('sfilter');
filter[addEvent]('keyup', doFilter);
filter[addEvent]('change', doFilter);
function doFilter(){
	var val = _.trim(filter.value).toLowerCase();
	var match;
	_.forEach(h2s, function(h2){
		var ul = h2.nextElementSibling;
		if(ul[innerText].toLowerCase().indexOf(val) < 0) {
			ul.parentNode.style.display = 'none';
			return;
		}
		ul.parentNode.style.display = ul.style.display = 'block';
		_.forEach(ul.getElementsByTagName('li'), function(li){
			if(val && li[innerText].toLowerCase().indexOf(val) < 0){
				li.style.display = 'none';
				return;
			}
			li.style.display = 'block';
			if(!match && li.getElementsByTagName('span').length > 0) {
				var data = li.getElementsByTagName('span')[0][innerText];
				if(data.toLowerCase() === val) {
					location.hash = '#' + data;
					match = true;
					filter.focus();
				}
			}
		});
	});
}
filter.focus();