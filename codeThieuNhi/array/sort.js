function temp(a,b){
	let temp = a;
	a = b;
	b = temp;
}
function sort(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length; j++){
			if(arr[i] > arr[j]){
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;	
			}
		}
	}
	
	return arr;
}

let afterSort = sort([5,2,4,1,3]);
console.log(afterSort)