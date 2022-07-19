import Container, { CONTAINER_DIRECTION } from "components/container";
import { SyntheticEvent } from "react";
import styles from "./registerPersonForm.module.scss";

const RegisterPersonForm = () => {
  const handleOnSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Container fullHeight fullWidth direction={CONTAINER_DIRECTION.VERTICAL}>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender">
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" />
        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" />
        <button type="submit">Save</button>
      </form>
    </Container>
  );
};

export default RegisterPersonForm;
