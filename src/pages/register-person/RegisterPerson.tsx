import Container, {
  CONTAINER_PADDING,
  CONTAINER_DIRECTION,
} from "components/container";
import Spacing, { SPACING_MARGINS } from "components/spacing";
import { Link } from "react-router-dom";
import RegisterPersonForm from "./register-person-form";

const RegisterPerson = () => {
  return (
    <Container fullHeight fullWidth direction={CONTAINER_DIRECTION.VERTICAL}>
      <Container
        fullWidth
        padding={CONTAINER_PADDING.NONE}
        spreadContent
        alignCenter
      >
        <Container
          direction={CONTAINER_DIRECTION.VERTICAL}
          padding={CONTAINER_PADDING.NONE}
        >
          <h1>Register a new member</h1>
        </Container>
        <Link to="/">All members</Link>
      </Container>
      <Container
        fullWidth
        fullHeight
        alignCenter
        direction={CONTAINER_DIRECTION.VERTICAL}
        padding={CONTAINER_PADDING.NONE}
      >
        <Spacing size={SPACING_MARGINS.BIG} />
        <RegisterPersonForm />
      </Container>
    </Container>
  );
};

export default RegisterPerson;
