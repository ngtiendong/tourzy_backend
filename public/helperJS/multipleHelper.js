function WaitMeTemplate(element){
    $(element).waitMe({
        color: '#204d74',
        effect : 'rotation',
    })
}
function showNotify(message, type)
{
    if (type == undefined || type == '') {
        type = 'success';
    }

    $.notify(message, type, {position: 'top center'});
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showModal(modalContent) {
    // Create modal element
    var date = new Date();
    var id = date.getTime();

    var $modal = $('<div class="modal fade" id="modal-'+ id +'" tabindex="-1" role="dialog" aria-labelledby="modal-'+ id +'"></div>');
    $modal.html(modalContent);
    $('body').append($modal);
    $modal.modal('show');
}

var dialog = (function(){
    return {
        show : function(title, data){
            $('#finishModalLabel').html(title);
            $('#modal_content').html(data);
            $('#btnAction').attr('onclick', 'return formHelper.onSubmit("frmDialogCreate")');
            $('#detailModal').modal('show');
        },
        close: function () {
            $('#detailModal').modal('hide');
            $('#detailModal').css('display', 'none').attr('aria-hidden', 'true');
            $('#finishModalLabel').html('');
            $('#modal_content').html('');
        },
    }
})();

var formHelper = (function () {
    return {
        postFormJson: function (objID, onSucess) {
            var url = document.getElementById(objID).action;
            $.post(url, $('#' + objID).serialize(), function (data) {
                onSucess(data);
            }, 'json');
        }
    };
})();

var btn_loading = (function () {
    return {
        loading : function (btn_id) {
            var $btn = $('#' + btn_id);
            $btn.prop('disabled', true);
            $btn.waitMe({
                color: '#3c8dbc'
            });
        },
        hide : function (btn_id) {
            var $btn = $('#' + btn_id);
            $btn.prop('disabled', false);
            $btn.waitMe('hide');
        }
    };
})();

