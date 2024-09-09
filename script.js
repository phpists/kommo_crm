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
        const addMoreInput = document.querySelectorAll(
          ".linked-form__field-add-multiple"
        );

        const handleAddEventListener = () => {
          const phoneInputs = document.querySelectorAll(
            ".card-fields__fields-block .linked-form__field .control-phone__formatted"
          );
          const addForm = document.querySelectorAll(
            ".linked-forms__item_is-add.expanded .linked-form__field .control-phone__formatted"
          );

          [...addForm, ...phoneInputs].forEach(function (input) {
            input.addEventListener("input", (e) => {
              input.value =
                parseInt(e.target.value)?.length <= 10
                  ? parseInt(e.target.value)
                  : isNaN(parseInt(e.target.value))
                  ? ""
                  : parseInt(e.target.value)?.toString()?.substring(0, 10);
            });
          });
        };

        handleAddEventListener();
        addMoreInput.forEach((btn) => {
          btn.addEventListener("click", () => {
            setTimeout(handleAddEventListener, 1000);
          });
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
        alert("heere");
        return true;
      },
    };
    return this;
  };
  return CustomWidget;
});
