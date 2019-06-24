$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: window.location.origin + '/sinopac/ToDoList/',
        dataType: "json",
        success: (res)=> {
            for(var i = 0; i < res.length; i++){
                html = `
            <tr class="data">
                <td><input type="checkbox" id="d4"><label for="d4"><span></span></label></td>
                <td>${res[i]['progress']}%</td>
                <td><img src="../../static/todo/img/fire.svg"></td>
                <td><a href="${window.location.origin}/sinopac/case/?id=${res[i]['id']}">NYKD-545545</a></td>
                <td>${res[i]['name']}/${res[i]['apply_department']}</td>
                <td>${res[i]['name']}/${res[i]['identity']}</td>
                <td>${res[i]['name']} ${res[i]['debt_type']}</td>
                <td>${res[i]['case_property']}</td>
                `
                if(res[i]['comment']){
                    html += `<td><img src="../../static/todo/img/baseline-done-24px.svg"></td>`;
                }else{
                    html += `<td></td>`
                }

                if(res[i]['union_check_system_comment']){
                    html += `<td><img src="../../static/todo/img/baseline-done-24px.svg"></td>`;
                }else{
                    html += `<td></td>`
                }

                if(res[i]['case_comment']){
                    html += `<td><img src="../../static/todo/img/baseline-done-24px.svg"></td>`;
                }else{
                    html += `<td></td>`
                }

                html+=`
                <td>${res[i]['special_interview']}</td>
                <td>${res[i]['check_info']}</td>
            </tr>`
            $('#todo').append(html);
            }
        }
    });
});
$(window).on("load",function(){
            $(window).scroll(function(){
            if($(document).scrollTop()>60){
                
                $(".searchbar").addClass("fixed");
                $(".container").css("top","140px");
                
            }else{
                $(".searchbar").removeClass("fixed");
                 $(".container").css("top","0px");
                
            }
        })
  })
