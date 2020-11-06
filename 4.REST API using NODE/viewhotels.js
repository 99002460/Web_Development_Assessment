$(document).ready(function(){
    $('#showHotels').click(function()
    {
        $.get('hotels.json',function(data,status){
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