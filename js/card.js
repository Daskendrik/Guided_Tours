
$('.display-note').click(function() {
    if($('.notes').hasClass('display-none')){
        $('.notes').removeClass('display-none')
        $('.state-note-show').addClass('state-note-hide')
    } else {
        $('.notes').addClass('display-none')
        $('.state-note-show').removeClass('state-note-hide')
    }
})

$('.show-bus').click(function(){
    let text = `
    <div class = "buscard">
        <div class="date form-applet">
            <div>
            <span class ='btn btn-close-buscard'>Закрыть</span>
            <span class ='btn btn-close-buscard'>Перейти</span>
            </div>
            <table>
                <tr>
                    <td class="lable" colspan="3">Компания:</td>
                    <td class="date_table" colspan="1"><p>Экспресс кар</p></td>
                    <td class="lable" colspan="1">Телефон:</td>
                    <td class="date_table" colspan="1"><p>+7 854 859 45 45</p></td>
                </tr>
                <tr>
                    <td class="lable">Номер:</td>
                    <td class="date_table"><p>4564</p></td>
                    <td class="lable">Регион:</td>
                    <td class="date_table"><p>77</p></td>
                    <td class="lable">Кол-во мест:</td>
                    <td class="date_table"><p>54</p></td>
                </tr>
                <tr>
                    <td class="lable">Цвет:</td>
                    <td class="date_table"><p>Черный</p></td>
                    <td class="lable">Регион:</td>
                    <td class="date_table"><p>77</p></td>
                    <td class="lable">Кол-во мест:</td>
                    <td class="date_table"><p>54</p></td>
                </tr>
           </table>
        </div>
    </div>`
    $('.info-block').append(text)
    $('.btn-close-buscard').click(function(){
        console.log('dhfjksdhj')
        $('.buscard').remove()
    })
})

