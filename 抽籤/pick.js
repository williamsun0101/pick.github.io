$('#img-shake').hide();
$('#img-ok').hide();


$('#start').on('click', getResult);

function getResult() {
    var content = $('#textarea').val();
    // console.log(content);
    var options = content.split('\n');
    // console.log(options);

    var rand = Math.floor(Math.random()*options.length);
    // alert(rand);

    $('#img-shake').show();
    
    $('#123').hide();

    $('#result').text('等待抽獎結果...');

    setTimeout(function() {
        $('#img-shake').hide();
        $('#img-ok').show();
        $('#result').text('開獎結果:' + options[rand]);
    }, 3000);
}