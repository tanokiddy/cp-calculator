import * as Select from "@radix-ui/react-select";

const SelectProfile = () => {
  return (
    <Select.Root
      onValueChange={() => {}}
    //   key={selectKey}
    >
      <Select.Trigger className="select-none pr-2 py-1 flex gap-2">
        <Select.Value placeholder="Select DU/UE stat" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="bg-white text-black rounded-lg overflow-hidden"
          position="popper"
        >
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              {/* {selectList.map((item) => (
                <Select.Item
                  value={item.key}
                  key={item.key}
                  className="focus:outline-none cursor-pointer px-2 py-1 hover:bg-blue-700 hover:text-white transition-hover ease-linear focus-within:bg-blue-700 focus-within:text-white"
                >
                  <Select.ItemText>{item.label}</Select.ItemText>
                </Select.Item>
              ))} */}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectProfile;
