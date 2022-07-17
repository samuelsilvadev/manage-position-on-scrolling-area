import Container, {
  CONTAINER_PADDING,
  CONTAINER_DIRECTION,
} from "components/container";
import Spacing, { SPACING_MARGINS } from "components/spacing";
import { Link } from "react-router-dom";
import PeopleContent, { PeopleContentProps } from "./people-content";

const MOCK_PEOPLE: PeopleContentProps["people"] = [
  {
    name: "Samuel",
    surname: "Silva",
    age: 26,
    sex: "M",
    id: "1",
  },
  {
    name: "Kathleen",
    surname: "Silva",
    age: 27,
    sex: "F",
    id: "2",
  },
];

const People = () => {
  return (
    <Container fullWidth direction={CONTAINER_DIRECTION.VERTICAL}>
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
        <PeopleContent people={MOCK_PEOPLE} />
      </Container>
    </Container>
  );
};

export default People;
