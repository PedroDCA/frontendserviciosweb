import Link from "next/link";

/**
 * Gets an exapndable option with redirecting.
 * @param {object} optionInformation Information related to the option to show.
 * @returns The expandable option with redirects.
 */
export default function ExpandableOption({optionInformation}){
  const {title, options = []} = optionInformation;
  return (
    <li className="mb-1">
      <button className="btn btn-toggle d-inline-flex align-items-center white-color border-0 collapsed" data-toggle-button aria-expanded="false">
        {title}
      </button>
      <div className="collapse" data-toggle-list>
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {options.map((option, index) => {
            return (<li key={index}><Link href={option.link} className="d-inline-flex text-decoration-none white-color">{option.name}</Link></li>)
          })}
        </ul>
      </div>
    </li>
  );
}