$(document).ready(()=>{
    var url = new URL(window.location.href);
    var id = url.searchParams.get('id');
    $.ajax({
        type: "GET",
        url: window.location.origin + '/sinopac/tinyInfo/?id=' + id,
        async:false,
        dataType: "json",
        success: (res) =>{
            $('#ppl').html(res['name']);
            $('#name').html(res['name'] + ' | 信用貸款')
            $('#overview').attr('href',`/sinopac/case/?id=${id}`);
            $('#comment').attr('href',`/sinopac/loan/?id=${id}`);
            $('#checklist').attr('href',`/sinopac/checklist/?id=${id}`);
            $('#bulletin').attr('href',`/sinopac/information/?id=${id}`);
        }
    });
});