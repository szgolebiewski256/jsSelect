(function($){
    $.fn.jsSelect = function(config) {
        const options = $.extend({
            firstOptionVisible: false, //pierwsza opcja widoczna jesli nie jest zaznaczona automatycznie
            textSelect: 'default', //text w select
            responsive: {
                mode: true,
                width: 'auto',
            },
            style: {
                background: 'default',
                color: 'default',
                fontSize: 'default',
                height: 'default'
            }
        }, config);

        return this.each(function() {
            const $this = $(this);
            const numberOfOptions = $(this).children('option').length;
            let selectedOption = $this.find(":selected").val()
            const textSelect = (options.textSelect != 'default') ? `<span class="textSelect">${options.textSelect}</span>` : '';

            $this.after('<div class="select-container"></div>');
            const selectContainer = $this.next();

            selectContainer.each(function (){
                let $thisCon = $(this);
                $thisCon.append(`
                    <div class="select-selected">
                        ${textSelect}
                        <span class="select-selected-item bold"></span>
                    </div>
                    <div class="select-item-container"></div>
                `);
            });

            let selectSelected = selectContainer.find($('.select-selected'));
            let selectItemContainer = selectContainer.find($('.select-item-container'));


            for (let i = 0; i < numberOfOptions; i++) {
                $('<div />', {
                    class: 'select-item',
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo(selectItemContainer);
            }

            //if(selectedOption != ""){
                console.log('a')
                let txt = $(this).find(":selected").text().trim();
                selectSelected.find($('.select-selected-item')).text(txt);
            //}else console.log('b')

            selectSelected.click(function (){
                let $this = $(this);
                let a, b;
                $this.toggleClass('active-selected');
                $this.next().toggleClass('active-selected');
                a = $this;
                b = $this.next();
                $(document).mouseup(function(e) {
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!a.is(e.target) && a.has(e.target).length === 0) {
                        a.removeClass('active-selected')
                        b.removeClass('active-selected')
                    }
                });
            })

            selectItemContainer.children().click(function (){
                let $this = $(this);
                let thisSelect = $this.parent().parent().prev();
                thisSelect.val($this.attr('rel'));
                let option = $this.text();
                let selectedItem = $this.parent().prev().find($('.select-selected-item'));
                selectedItem.text(option);
                $this.parent().removeClass('active-selected');
                $this.parent().prev().removeClass('active-selected');
            });

            //responsive mode
            if(options.responsive.mode == false){
                if(options.responsive.width != 'auto'){
                    const width = `${options.responsive.width}`;
                    selectContainer.css('width', width);
                }
            }

            //style mode

        });
    }
})(jQuery);