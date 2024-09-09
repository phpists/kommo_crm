define(["jquery"], function ($) {
  var CustomWidget = function () {
    var self = this, // to access an object from methods
      system = self.system(), // This method returns an object with system variables.
      langs = self.langs; // Localization object with data from the localization file (i18n folder)

    this.callbacks = {
      settings: function () {},
      init: function () {
        return true;
      },
      bind_actions: function () {
        return true;
      },
      render: function () {
        const saveButton = document.querySelector(".button-input_add");

        const handleAddEventListener = () => {
          var phoneInputs = document.querySelectorAll(
            ".card-fields__fields-block .linked-form__field .control-phone__formatted"
          );
          var addForm = document.querySelectorAll(
            ".linked-forms__item_is-add.expanded .linked-form__field .control-phone__formatted"
          );
          var isValid = true;

          [...addForm, ...phoneInputs].forEach(function (input) {
            input.removeEventListener("input", () => null, true);
            input.addEventListener("input", () => {
              phoneInputs = document.querySelectorAll(
                ".card-fields__fields-block .linked-form__field .control-phone__formatted"
              );
              addForm = document.querySelectorAll(
                ".linked-forms__item_is-add.expanded .linked-form__field .control-phone__formatted"
              );
              [...addForm, ...phoneInputs].forEach(function (e) {
                var phoneNumber = e?.value?.replace(/\D/g, "");
                if (phoneNumber?.length > 10) {
                  console.log(
                    'Номер телефону "' +
                      phoneNumber +
                      '" містить більше 10 цифр.'
                  );
                  isValid = false;
                } else {
                  isValid = true;
                }
              });

              saveButton.disabled = !isValid;
              if (isValid) {
                saveButton.classList.remove("button-input-disabled");
              } else {
                saveButton.classList.add("button-input-disabled");
              }
            });
          });
        };

        var addMorePhonesBtn = document.querySelector(
          ".linked-form__field-add-multiple"
        );

        handleAddEventListener();
        addMorePhonesBtn.addEventListener("click", () => {
          console.log("here");
          handleAddEventListener();
        });
        return true;
      },
      dpSettings: function () {
        return true;
      },
      advancedSettings: function () {
        return true;
      },
      destroy: function () {
        return true;
      },
      contacts: {
        selected: function () {
          return true;
        },
      },
      everywhere: function () {
        return true;
      },
      leads: {
        selected: function () {
          return true;
        },
      },
      onSave: function () {
        return true;
      },
    };
    return this;
  };
  return CustomWidget;
});
