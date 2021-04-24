var http = require("./utilities/http");
const url = `https://www.devrant.io/api/users/auth-token`;

function postRant(email, password, text, tags, type){
	const parameters = {
	app: 3,
	username: email,
	password: password,
	plat: 3
	};

	return http
	.POST(url, parameters).then((resp)=>{
		console.log(resp)
		const params = {
		app: 3,
		plat: 3,
		rant: text,
		tags: tags,
		type: type,
		token_id: resp["auth_token"]["id"],
		token_key: resp["auth_token"]["key"],
		user_id: resp["auth_token"]["user_id"]
		};
		http.POST("https://www.devrant.io/api/devrant/rants", params).then((responsive)=>{
			console.log(responsive);
		})
});

}
module.exports = {
    postRant
}