module.exports.rootHandler = function(req, res){
	res.render("index-page.handlebars", {});
}


module.exports.calcFormHandler = function(req, res){
	res.render("calc-form.handlebars", {});
}


module.exports.convFormHandler = function(req, res){
	res.render("conv-form.handlebars", {});
}


module.exports.calcResultHandler = function(req, res){     //route for http get request for path /new 

var number1 = parseInt(req.body.nm1);
var number2 = parseInt(req.body.nm2);
var operator = req.body.operator;
var result = 0;

if(operator === "+"){
 	result = number1 + number2;
}else if (operator === "-"){
	result = number1 - number2;
}else if (operator === "*"){
	result = number1 * number2;	
}else if (operator === "div"){
	result = number1 / number2;
}

console.log("Received from Browser:nm1=%s nm2=%s Operator=%s. Result=%s", number1,number2,operator,result);
res.render("resultpage.handlebars", {resultvar:result});
};


module.exports.convResultHandler = function(req, res){ 
console.log("received a post request");
var number1 = parseInt(req.body.num);
var operator = req.body.operator;
var result = 0;

if(operator === "cm2m"){
 	result = number1 / 100;
}else if (operator === "ft2m"){
	result = number1 * 3.2808;
}else if (operator === "ft2in"){
	result = number1 * 0.083333;	
}else if (operator === "mt2in"){
	result = number1 /0.039370;
}

console.log("Received from Browser:num=%s Operator=%s. Result=%s", number1,operator,result);
res.render("resultpage.handlebars", {resultvar:result});			
};