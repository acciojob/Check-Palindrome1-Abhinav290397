// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	let rev= "";
	for(let i=str.length;i>=0;i--){
		rev += str.charAt(i);
	}
	if(rev === str)return true;
	return false;
}
module.exports = palindrome
