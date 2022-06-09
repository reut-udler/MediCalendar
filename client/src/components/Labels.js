import React, { useContext } from "react";
import GlobalContext from "./../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: labelColor, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: labelColor, checked: !checked })
            }
            className={`form-checkbox h-5 w-5 text-${labelColor}-400 rounded focus:ring-0 curser-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{labelColor}</span>
        </label>
      ))}
    </React.Fragment>
  );
}
