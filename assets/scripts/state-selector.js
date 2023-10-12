/*
  Dropdown functionality for state selector component.
 */

(() => {
  let stateComboBox, stateInput, stateResetBtn, stateDropdownBtn, stateResultsContainer, stateFilteredOptions, stateListResults;
  stateComboBox = document.getElementById("state-combo-box");
  stateInput = document.getElementById("state-input");
  stateResetBtn = document.getElementById("state-reset-btn");
  stateDropdownBtn = document.getElementById("state-dropdown-btn");
  stateResultsContainer = document.getElementById("state-results-container");
  stateFilteredOptions = stateResultsContainer.getElementsByTagName('a');
  stateListResults = [];

  function stateListShow() {
    stateResultsContainer.removeAttribute('hidden');
  }

  function stateListHide() {
    stateResultsContainer.setAttribute('hidden', '');
  }

  function stateListToggle() {
    stateResultsContainer.toggleAttribute('hidden');
  }

  function stateListFilter(reset) {
    let filter, txtValue;
    filter = stateInput.value.toUpperCase();
    txtValue = "";
    stateListResults = [];

    if (filter === '' || reset === 'reset') {
      stateResultsContainer.removeAttribute('data-filtered');
    }
    else {
      stateResultsContainer.setAttribute('data-filtered', 'true');
    }

    for (let i = 0; i < stateFilteredOptions.length; i++) {
      let li = stateFilteredOptions[i].parentNode;
      txtValue = li.textContent || li.innerText;

      if (reset === 'reset') {
        li.removeAttribute('hidden');
        stateListResults.push(stateFilteredOptions[i]);
      }
      else {
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li.removeAttribute('hidden');
          stateListResults.push(stateFilteredOptions[i]);
        } else {
          li.setAttribute('hidden', '');
        }
      }
    }

    if (!stateListResults.length) {
      stateListHide();
    } else {
      stateListShow();
    }
  }


  stateComboBox.addEventListener('focusout', (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      stateListHide();
    }
  });
  stateComboBox.addEventListener('load', () => {
    stateListFilter('reset');
  });
  stateComboBox.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = stateInput.value.toUpperCase();

    stateListResults.find((element, index) => {
      let resultTxt = element.textContent || element.innerText;
      if (resultTxt.toUpperCase() === value) {
        window.location.href = element.href;
      }
    });
  })


  stateInput.addEventListener('focus', stateListShow);
  stateInput.addEventListener('keydown', (e) => {
    if (e.key === "ArrowDown") {
      stateListResults[0].focus();
    }
  });
  stateInput.addEventListener('keyup', (e) => {
    if (e.key !== "ArrowDown") {
      stateListFilter();
    }
  });

  for (let i = 0; i < stateFilteredOptions.length; i++) {
    stateListResults.push(stateFilteredOptions[i]);
    stateFilteredOptions[i].addEventListener('keydown', (e) => {
      // stateFilteredOptions = stateResultsContainer.getElementsByTagName('a');
      if (e.key === "ArrowDown") {
        e.preventDefault();
        let option = stateFilteredOptions[i];

        stateListResults.find((element, index) => {
          if (element === option) {
            if (index === stateListResults.length - 1) {
              stateListResults[0].focus();
            }
            else {
              stateListResults[index + 1].focus();
            }
          }
        });
      }
    });

    stateFilteredOptions[i].addEventListener('keyup', (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        let option = stateFilteredOptions[i];

        stateListResults.find((element, index) => {
          if (element === option) {
            if (index === 0) {
              stateInput.focus();
            }
            else {
              stateListResults[index - 1].focus();
            }
          }
        });
      }
    });
  }

  stateResetBtn.addEventListener('click', (e) => {
    stateInput.focus();
    stateListFilter('reset');
    stateListShow();
  });
  stateResetBtn.addEventListener('keydown', (e) => {
    if (e.key === "Tab") {
      stateListHide();
    }
  });

  stateDropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    stateListToggle();
  });

})();
