//Inject to https://math.tusur.ru/moodle/

//Change constants!

const userdata_moodle_username = "username";
const userdata_moodle_password = "password";
const url_join_to = "Enter you target moodle lecture url (main page)";

function func_login(){

	try {
	  //Enter login data to strings:

		//Username: <input type="text" name="username" id="username" size="15" value="">
		document.getElementById('username').value = userdata_moodle_username;

		//Passwd: <input type="password" name="password" id="password" size="15" value="">
		document.getElementById('password').value = userdata_moodle_password;

		//Remember: <input type="checkbox" name="rememberusername" id="rememberusername" value="1">
		document.getElementById('rememberusername').click();

		//Enter: <input type="submit" id="loginbtn" value="Вход">
		document.getElementById('loginbtn').click();

		//Didn`t work??? Let`s submit form <form action="https://math.tusur.ru/moodle/login/index.php" method="post" id="login">
		document.getElementById('login').submit();

	} catch (error) {

		console.error(error);

	};

};

function func_after_login(){
	try {

		//Let`s join :3
		document.getElementById('join_button_input').click();

		//Didn`t read lol? May be this button does not exist: redirect to catch

	} catch (error) {

		window.location = url_join_to;

		//<input id="join_button_input" type="button" value="Подключиться к сеансу" class="btn btn-primary" onclick="M.mod_bigbluebuttonbn.rooms.join('https://math.tusur.ru/moodle/mod/bigbluebuttonbn/bbb_view.php?action=join&amp;id=1803&amp;bn=51');">

	};
};

////////////////////////MAIN//////////////////////////

func_login()	//Try to login in moodle

setTimeout('func_after_login()',4000);	//Wait for login and redirect to lesson
