export const getOptionsAdapter = (data: any) => {
  return data.map((item: any) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
};
