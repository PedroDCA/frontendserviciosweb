'use client';

/**
 * Gets a card with a basic information without editing functions.
 * @param {string} elementName The name to be shown.
 * @param {string} elementInformation The information to be shown.
 * @returns A informative card.
 */
export default function InformationCard({elementName, elementInformation}){
  return (
    <div className="card p-1">
      <div className="title-card d-flex justify-content-start align-items-center">
        <p className="inventory-icon d-flex justify-content-center align-items-center p-3">
          {elementName.charAt('0').toUpperCase()}
        </p>
        {elementName}
      </div>
      <p>
        {elementInformation}
      </p>
    </div>
  )
}