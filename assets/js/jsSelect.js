(function($){
    $.fn.jsSelect = function(config) {
        const options = $.extend({
            firstOptionVisible: false, //pierwsza opcja widoczna
            textSelect: 'default', //text w select
            responsive: {
                mode: true,
                width: 'auto',
            },
            style: {
                background: 'default',
                color: 'default',
                fontSize: 'default'
            }
        }, config);

        return this.each(function() {
            const $this = $(this);
            const numberOfOptions = $(this).children('option').length;
            let textSelect = (options.textSelect != 'default') ? options.textSelect : '';

            $this.after('<div class="select-container"></div>');
            const selectContainer = $this.nextUntil();

            selectContainer.each(function (){
                let $thisCon = $(this);
                $thisCon.append(`
                    <div class="select-selected">
                        <span class="textSelect">${textSelect}</span>
                        <span class="select-selected-item bold"></span>
                    </div>
                    <div class="select-item-container"></div>
                `);
            })

            console.log($this)
            console.log(options.responsive.mode)

            //responsive mode
            if(options.responsive.mode == false){
                if(options.responsive.width != 'auto'){
                    const width = `${options.responsive.width}px`;
                }
            }

            //style mode
        });
    }
})(jQuery);