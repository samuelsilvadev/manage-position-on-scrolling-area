import Container, {
  CONTAINER_PADDING,
  CONTAINER_DIRECTION,
} from "components/container";
import Spacing, { SPACING_MARGINS } from "components/spacing";
import { Link } from "react-router-dom";
import PeopleContent from "./people-content";
import { PEOPLE_MOCK_DATA } from "./data";

const People = () => {
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
          <h1>Registered members</h1>
        </Container>
        <Link to="/create">Save a new member</Link>
      </Container>
      <Container
        fullWidth
        fullHeight
        alignCenter
        direction={CONTAINER_DIRECTION.VERTICAL}
        padding={CONTAINER_PADDING.NONE}
      >
        <Spacing size={SPACING_MARGINS.BIG} />
        <PeopleContent people={PEOPLE_MOCK_DATA} />
      </Container>
    </Container>
  );
};

export default People;
