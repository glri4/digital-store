import './FilterGroup.css'

function FilterGroup({ title, inputType = 'checkbox', options = [], selectedValues = [], onChange }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>

      {options.map((option) => (
        <label key={option.value}>
          <input
            type={inputType}
            name={title}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  )
}

export default FilterGroup