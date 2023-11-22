/*
  Dropdown functionality for state selector component.
 */

(() => {
  const stateComboBox = document.getElementById("state-combo-box");
  const stateInput = document.getElementById("state-input");
  const stateDropdownBtn = document.getElementById("state-dropdown-btn");
  const stateResultsContainer = document.getElementById("state-results-container");
  const stateFilteredOptions = stateComboBox ? stateResultsContainer.getElementsByTagName('a') : null;

  // Store dynamic filtered results.
  let stateListResults = [];

  // Show state dropdown.
  function stateListShow() {
    stateResultsContainer.removeAttribute('hidden');
  }

  // Hide state dropdown.
  function stateListHide() {
    stateResultsContainer.setAttribute('hidden', '');
  }

  // Toggle state dropdown.
  function stateListToggle() {
    if (!stateResultsContainer.getAttribute('data-empty')) {
      stateResultsContainer.toggleAttribute('hidden');
    }
  }

  // Toggle state dropdown if empty.
  function stateListToggleEmpty(empty) {
    if (empty) {
      stateListHide();
      stateResultsContainer.setAttribute('data-empty', true);
    } else {
      stateListShow();
      stateResultsContainer.removeAttribute('data-empty');
    }
  }

  // Filter dropdown results based on user input.
  function stateListFilter() {
    let filter, txtValue;
    filter = stateInput.value.toUpperCase();
    txtValue = "";
    stateListResults = [];

    for (let i = 0; i < stateFilteredOptions.length; i++) {
      let li = stateFilteredOptions[i].parentNode;
      txtValue = li.textContent || li.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li.removeAttribute('hidden');
        stateListResults.push(stateFilteredOptions[i]);
      } else {
        li.setAttribute('hidden', '');
      }
    }

    toggleDataFiltered(filter);
    stateListToggleEmpty(!stateListResults.length);
  }

  // Focus on previous option in dropdown.
  function stateListPrevious(option) {
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

  // Focus on next option in dropdown.
  function stateListNext(option) {
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

  // Toggle data attribute on results container.
  function toggleDataFiltered(filter) {
    if (filter === '') {
      stateResultsContainer.removeAttribute('data-filtered');
    }
    else {
      stateResultsContainer.setAttribute('data-filtered', 'true');
    }
  }

  // Redirect user if value is an exact match to a option.
  function quickLinkToState(value) {
    stateListResults.find((element) => {
      let resultTxt = element.textContent || element.innerText;
      if (resultTxt.toUpperCase() === value) {
        window.location.href = element.href;
      }
    });
  }

  // Initialize event listeners if combobox loaded.
  if (stateComboBox) {
    // Attach events for combobox component.
    stateComboBox.addEventListener('focusout', (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        stateListHide();
      }
    });
    stateComboBox.addEventListener('submit', (e) => {
      e.preventDefault();
      let value = stateInput.value.toUpperCase();
      quickLinkToState(value);
    })

    // Attach events for state input field.
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

    // Attach events for state links in dropdown.
    for (let i = 0; i < stateFilteredOptions.length; i++) {
      stateListResults.push(stateFilteredOptions[i]);
      stateFilteredOptions[i].addEventListener('keydown', (e) => {
        // stateFilteredOptions = stateResultsContainer.getElementsByTagName('a');
        if (e.key === "ArrowDown") {
          e.preventDefault();
          let option = stateFilteredOptions[i];
          stateListNext(option);
        }
      });

      stateFilteredOptions[i].addEventListener('keyup', (e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          let option = stateFilteredOptions[i];
          stateListPrevious(option);
        }
      });
    }

    // Attach events for dropdown toggle button.
    stateDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      stateListToggle();
    });
  }

})();
