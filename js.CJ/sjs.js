function randNum(min,max){
	var num = parseInt(Math.random()*(max-min+1)+min);
	return num;
}
//定义一个函数,生成随机颜色
function randColor(){
	var r = parseInt(Math.random()*256);
	var g = parseInt(Math.random()*256);
	var b = parseInt(Math.random()*256);
	var color = "rgb("+r+","+g+","+b+")";
	return color;
}
