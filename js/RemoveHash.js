/* Used for removal of the has after a redirect */
/* moved to be directly in file as onload requires it to be there
unless I use async which I am not doing */
/*function locationHashChanged() {
	var deleteIndex = window.location.href.indexOf("#");	
	 if(deleteIndex != -1)
	 {
	 	history.replaceState({}, '', window.location.href.slice(0, deleteIndex));
	 }
}
window.onhashchange = locationHashChanged;

window.onload = locationHasChanged;*/