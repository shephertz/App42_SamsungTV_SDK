
function onStart () {
	// TODO : Add your Initilize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
	
	// App42 initialize code.
	App42.initialize("Your APIKey","Your SecretKey");
	
	sf.scene.show('Scene1');
	sf.scene.focus('Scene1');
	
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to distroy your application here
	
}

alert("init.js loaded.");
