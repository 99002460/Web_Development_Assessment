$(document).ready(function(){
    $('#register').click(function()
    {
        $.get('details.json',function(data,status){
            console.log(status);
            data.forEach(book=>{
                var str='';
                for(const prop in book)
                {
                    str+= prop+' '+book[prop]+' '+'<br>';
                }
                $('#mydiv').append(str).append('<br>');
            })
            
        });
    });
});