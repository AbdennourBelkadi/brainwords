$('.title').css('font-size', '60px')
$('.title').css('font-family', 'Andale Mono, monospace')
$('.title').css('position', 'center')
$('body').css('background-image', 'url(https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg)', 'object-fit: contain')
$('.title').css({"text-shadow" : "white 0px 0px 3px"})
$('input').width(1000)

$('.rules').css({"text-shadow" : "red 0px 0px 1px"})
$('.rules').css('color', 'white')

$('#firstText').text('Enter first word')
$('#secondText').text('Player 1 Turn')

function compare(array1, array2) {
  if (array1.length === array2.length) {
    return array1.every((element, index) => {
      if (element === array2[index]) {
        return true;
      }

      return false;
    });
  }

  return false;
}


var sentence = undefined
var turn = 0
var word = []
var newWord = ''

$("#word").change(function(){
	if($('#word').val()===''){
		return false
	}
	word = $('#word').val()
	console.log(word)
	console.log(sentence)
	if(sentence){
		if(!word.includes(sentence)){
			if(turn%2===0){
				alert('player 2 won, refresh to replay')
			} else {
				alert('player 1 won, refresh to replay')
			}
		} else {
			sentence = word
		}
	} else{
		sentence = word
	}
$('#word').val('')
turn +=1
if(turn%2===0){
			$('#secondText').text('Player 1 Turn')
		} else {
			$('#secondText').text('Player 2 Turn')
			}
		$('#firstText').text('Complete it !')
})


