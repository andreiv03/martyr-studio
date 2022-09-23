export const handleFormDataChange = (name: string, value: string, setState: React.Dispatch<React.SetStateAction<any>>) => {
  setState((prevState: any) => ({
    ...prevState,
    [name]: value
  }));
}