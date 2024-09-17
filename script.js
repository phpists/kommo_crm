define(["jquery"], function ($) {
  var CustomWidget = function () {
    var self = this, // to access an object from methods
      system = self.system(), // This method returns an object with system variables.
      langs = self.langs; // Localization object with data from the localization file (i18n folder)

    this.callbacks = {
      settings: function () {},
      init: function () {
        console.log("init");
        return true;
      },
      bind_actions: function () {
        return true;
      },
      render: function () {
        console.log("render");
        const addMoreInput = document.querySelectorAll(
          ".linked-form__field-add-multiple"
        );

        const handleAddEventListener = () => {
          const phoneInputs = document.querySelectorAll(
            ".control-phone__formatted"
          );

          phoneInputs.forEach((input) => {
            input.value = input.value.length === 0 ? "38" : input.value;
          });
          phoneInputs.forEach(function (input) {
            input.value = input.value.length === 0 ? "38" : input.value;
            if (input.value?.length < 4) {
              input.addEventListener("input", (e) => {
                const formatedValue =
                  parseInt(e.target.value)?.length <= 13
                    ? parseInt(e.target.value)
                    : isNaN(parseInt(e.target.value))
                    ? ""
                    : parseInt(e.target.value)?.toString()?.substring(0, 13);
                const isCode = formatedValue?.substring(0, 2) === "38";
                const valueWithCode = isCode
                  ? formatedValue
                  : `38${formatedValue?.substring(2)}`;
                input.value = valueWithCode;
              });
            }
          });
        };

        handleAddEventListener();
        addMoreInput?.forEach((btn) => {
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
        console.log("everywhere");
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
