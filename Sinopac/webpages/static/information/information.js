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
            // $('#overview').attr('href',`/sinopac/case/?id=${id}`);
            // $('#comment').attr('href',`/sinopac/loan/?id=${id}`);
            // $('#checklist').attr('href',`/sinopac/`);
            // $('#bulletin').attr('href',`/sinopac/information/?id=${id}`);
        }
    });
});