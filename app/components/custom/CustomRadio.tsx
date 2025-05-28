import {useState} from 'react';

export function CustomRadio(props: any) {
  const [selected, setSelected] = useState('option1');

  const options = [
    {id: 'option1', label: 'One-Time Purchase'},
    {id: 'option2', label: 'Subscribe & Save'},
  ];

  return (
    <div className="flex gap-6">
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center cursor-pointer gap-3"
        >
          <input
            type="radio"
            name="customRadio"
            value={option.id}
            checked={selected === option.id}
            onChange={() => setSelected(option.id)}
            className="hidden"
          />
          <span
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selected === option.id ? 'border-black' : 'border-gray-400'
            }`}
          >
            {selected === option.id && (
              <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
            )}
          </span>
          <span className="text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
