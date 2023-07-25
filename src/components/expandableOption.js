import Link from "next/link";

export default function ExpandableOption({optionInformation, position}){
  const {title, options = []} = optionInformation;
  const id = `${position}-collapse`;
  return (
    <li className="mb-1">
      <button className="btn btn-toggle d-inline-flex align-items-center white-color border-0 collapsed" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false">
        {title}
      </button>
      <div className="collapse" id={id}>
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {options.map((option, index) => {
            return (<li key={index}><Link href={option.link} className="d-inline-flex text-decoration-none white-color">{option.name}</Link></li>)
          })}
        </ul>
      </div>
    </li>
  );
}