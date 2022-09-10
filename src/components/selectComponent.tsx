import { Select } from "@chakra-ui/react";

interface Option {
  value: string;
  label: string;
}

const SelectComponent = ({ Options }: { Options: Option[] }) => {
  return (
    <Select placeholder="Select option">
      {Options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
};

export default SelectComponent;
