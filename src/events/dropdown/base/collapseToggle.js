import { Collapse } from 'bootstrap';

/**
 * Toggle to open or close a dropdown.
 * @param {Event} event Event triggered.
 */
function toggleDropdown(event){
  const elementClicked = event.target;
  if (!elementClicked.hasAttribute('data-toggle-button')) {
    return;
  }

  const elementToToggleSelector = `[data-toggle-list]`;
  const elementToToggle = elementClicked.parentElement.querySelector(elementToToggleSelector);

  const collapseObject = Collapse.getInstance(elementToToggle) || new Collapse(elementToToggle);
  elementClicked.ariaExpanded = !elementToToggle.classList.contains('show');
  collapseObject.toggle();
}

document.addEventListener('click', toggleDropdown);