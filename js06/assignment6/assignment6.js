(function () {
    var form = document.getElementById('create-account');
    form.onsubmit = function (e) {
        e.preventDefault();

        if (!validateState() || !validateTerms() || !validateMembership()) {
            return;
        }

        form.submit();
    };

    function validateState() {
        var stateSelect = document.getElementById('state');
        var selectedState = stateSelect.options[stateSelect.selectedIndex].value;
        if (selectedState === 'Choose...') {
            showAlert('Please select a state');
            return false;
        }
        return true;
    }

    function validateTerms() {
        var agreeCheckbox = document.getElementById('agree');
        if (!agreeCheckbox.checked) {
            showAlert('Please agree to the terms and conditions');
            return false;
        }
        return true;
    }

    function validateMembership() {
        var membershipRadios = document.getElementsByName('membership');
        var membershipSelected = false;
        for (var i = 0; i < membershipRadios.length; i++) {
            if (membershipRadios[i].checked) {
                membershipSelected = true;
                break;
            }
        }
        if (!membershipSelected) {
            showAlert('Please select a membership');
            return false;
        }
        return true;
    }

    function showAlert(message) {
        alert(message);
    }
})();