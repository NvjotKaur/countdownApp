duplicates = (temp) =>{
	var obj = {}
	var maxRep = temp[0];
	var count = 1;
	for(var i=0; i<temp.lenght; i++){
		var ele = temp[i];
		if(obj[ele] === null)
		{
			obj[ele] = 1;
		}
		else
		{
			obj[ele]++;
		}
		if(obj[ele] > count)
		{
			maxRep = ele;
			count = obj[ele]	
		}
	}
	return maxRep;
}

console.log(duplicates([-2,-2,-2,-2,-2,-3,-3,-3,-3,-3,-3,4]))