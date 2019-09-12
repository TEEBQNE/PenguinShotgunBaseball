/* Used for removal of the has after a redirect */
function locationHashChanged() {
	var deleteIndex = window.location.href.indexOf("#");	
	 history.replaceState({}, '', window.location.href.slice(0, deleteIndex));
}
window.onhashchange = locationHashChanged;