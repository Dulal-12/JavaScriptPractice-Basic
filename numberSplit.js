function numberSplit(n) {
	if (n%2==0){
		return [n/2, n/2]
	}
	else{
		return [Math.floor(n/2),Math.ceil(n/2)]
	}
	
}