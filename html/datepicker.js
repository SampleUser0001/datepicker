jQuery(function($){
    // datepickerの日本語設定
    $.datepicker.regional['ja'] = {
        closeText: '閉じる',
        prevText: '&#x3C;前',
        nextText: '次&#x3E;',
        currentText: '今日',
        monthNames: ['1月','2月','3月','4月','5月','6月',
                     '7月','8月','9月','10月','11月','12月'],
        monthNamesShort: ['1月','2月','3月','4月','5月','6月',
                          '7月','8月','9月','10月','11月','12月'],
        dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        dayNamesShort: ['日','月','火','水','木','金','土'],
        dayNamesMin: ['日','月','火','水','木','金','土'],
        weekHeader: '週',
        dateFormat: 'yymmdd',  // yyyyMMdd形式
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年',
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:2100'
    };
    $.datepicker.setDefaults($.datepicker.regional['ja']);

    // datepickerクラスを持つすべての要素に自動的にdatepickerを適用
    $('.datepicker').each(function() {
        var $input = $(this);

        // datepickerを適用
        $input.datepicker();

        // カレンダーアイコンを追加（まだ追加されていない場合）
        if (!$input.next('.calendar-icon').length) {
            var $icon = $('<span class="calendar-icon">📅</span>');
            $input.after($icon);

            // アイコンクリックでdatepickerを開く
            $icon.on('click', function() {
                $input.datepicker('show');
            });
        }
    });

    // datepickerクラスを持つ入力欄自体をクリックしたらdatepickerを開く
    $(document).on('click', '.datepicker', function(e) {
        $(this).datepicker('show');
    });
});


