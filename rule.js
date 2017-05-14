function Works()
{
	//Increments f by two
	function calculate(f)
	{
		var e = f+1 
		return e+1
	}
	function changeSign(f){f = -f; return f}
		
		
	//Plus sign converts the string input to number
	var inValue = +document.getElementById('num').value;
	var result  = document.getElementById('result');
	
	//Shows the results in the browser
	result.innerHTML = calculate(inValue) + " & " + changeSign(inValue);
}
