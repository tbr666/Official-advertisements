function updateRule() {
    var text = document.getElementById("text").value;
    if (text.replace(/(\r\n|\n|\r)/gm,"") == "") {
        document.getElementById("text").focus();
    } else {
        var formData = "text=" + text;
        var opts = {
            lines: 13,
            length: 36,
            width: 14,
            radius: 62,
            scale: 1,
            corners: 1,
            color: 'white',
            opacity: 0.25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 60,
            fps: 30,
            zIndex: 2e9,
            className: 'spinner',
            top: '50%',
            left: '50%',
            shadow: true,
            hwaccel: false,
            position: 'absolute'
        };
        var target = document.getElementById('rightHeader');
        var spinner = new Spinner(opts).spin(target);
        $.ajax({
            url: "update_rules.php",
            type: "POST",
            data: formData,
            success: function(data, textStatus, jqXHR) {
                success = JSON.parse(data).success;
                spinner.stop();
                if(success==1) {
                    swal('Rules successfully updated', 'You have successfully updated the rules for your users', 'success');
                    setTimeout(function(){ window.history.back(); }, 1500);
                }
                else if (success == -666) window.location.href = 'logout.php';
            },

        });
    }
}

function deleteRule() {
        var formData = "";
        var opts = {
            lines: 13,
            length: 36,
            width: 14,
            radius: 62,
            scale: 1,
            corners: 1,
            color: 'white',
            opacity: 0.25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 60,
            fps: 30,
            zIndex: 2e9,
            className: 'spinner',
            top: '50%',
            left: '50%',
            shadow: true,
            hwaccel: false,
            position: 'absolute'
        };
        var target = document.getElementById('rightHeader');
        var spinner = new Spinner(opts).spin(target);
        $.ajax({
            url: "delete_rules.php",
            type: "POST",
            data: formData,
            success: function(data, textStatus, jqXHR) {
                success = JSON.parse(data).success;
                spinner.stop();
                if(success==1) {
                    swal('Rules successfully deleted', 'You have successfully deleted the rules for your users', 'success');
                    setTimeout(function(){ window.history.back(); }, 1500);
                }
                else if (success == -666) window.location.href = 'logout.php';
            },

        });
}


