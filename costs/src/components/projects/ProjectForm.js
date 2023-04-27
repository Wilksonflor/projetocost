import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";
function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/categorys", {
    method: "GET",
    header: {
      "content-type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orcamento do projeto"
        name="budget"
        placeholder="Insira o Orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" option={categories}/>
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
