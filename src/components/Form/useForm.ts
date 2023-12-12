export const useForm = () => {
  const handleSubmitForm = async (data: FormDataProps) => {
    alert("Dados validados com sucesso");
    setFormValidated(true);
    setData(data);
    const backup = data.backup;

    try {
      const res = await axios.post("http://localhost:5421/api/compliance", {
        client: "65778324d62ba41cad5a18ef",
        backup,
      });

      console.log(res.data, res.status);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleNext = () => {
    nextStep();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });
};
