$(function(){

    $('input').on('keyup',function(){
        const pass = $('input').val();
        $('#znaki').text(pass.length);
    })


    
    $("a").on("click",function(e){
            e.preventDefault();
        switch($('#pass').attr('type')){
            case 'password':
                $("#pass").attr('type','text');
                $(this).text('Ukryj znaki')
                break;
            default:
                $("#pass").attr('type','password');
                $(this).text('Pokaż znaki');
    }})
  
})