$('#trailer').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});

$('.close').click(function(){
$('iframe').attr('src', $('iframe').attr('src'));
});
