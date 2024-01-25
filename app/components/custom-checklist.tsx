'use client'

type checklistProps = {
  txtNumber: number;
  itemNumber: number;
  isChecked: boolean;
  // eslint-disable-next-line no-unused-vars
  onCheckboxChange: (index: number) => void
};

export default function CustomChecklist({
  txtNumber,
  itemNumber,
  isChecked,
  onCheckboxChange
}: checklistProps) {

  const handleChange = () => {
    onCheckboxChange(itemNumber)
  }

  return (
    <>
      <input
        type="checkbox"
        name="rating"
        id={`rating-${itemNumber}`}
        className="hidden peer"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        htmlFor={`rating-${itemNumber}`}
        className={`
          flex
          items-center
          justify-center
          text-neutral-300
          text-sm
          bg-neutral-700
          rounded-full
          hover:bg-gray-400
          hover:font-bold
          size-10
          ${isChecked ? 'peer-checked:bg-orange-600 font-bold' : ''}
        `}
      >
        {txtNumber}
      </label>
    </>
  );
}