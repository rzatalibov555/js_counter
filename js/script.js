



// var timeoutID = setTimeout(bye,3000)

// console.log("Hello")

// clearTimeout(timeoutID);

// function bye(){
// 	console.log("goodbye")
// }

var count = 3
var intId = setInterval(counter,1000)

function counter(){
	console.log(--count)
	if(count <=0){
		clearInterval(intId)
	}
}
