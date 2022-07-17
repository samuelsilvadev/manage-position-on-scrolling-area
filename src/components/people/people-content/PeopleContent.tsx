import cx from "classnames";
import ActionMenu from "components/action-menu";
import Card, { CARD_HEIGHT, CARD_WIDTH } from "components/card";
import Container, {
  CONTAINER_DIRECTION,
  CONTAINER_PADDING,
} from "components/container";
import styles from "./peopleContent.module.scss";

export interface PeopleContentProps {
  people: {
    id: string;
    age: number;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    registered: string;
    latitude: number;
    longitude: number;
  }[];
}

const PeopleContent = ({ people }: PeopleContentProps) => {
  const renderRows = () =>
    people.map(({ name, age, gender, company, phone, email, id }) => (
      <tr key={id} className={cx(styles.tableRow)}>
        <td className={cx(styles.bodyCell)}>{name}</td>
        <td className={cx(styles.bodyCell)}>{age}</td>
        <td className={cx(styles.bodyCell)}>{gender}</td>
        <td className={cx(styles.bodyCell)}>{phone}</td>
        <td className={cx(styles.bodyCell)}>{email}</td>
        <td className={cx(styles.bodyCell)}>{company}</td>
        <td className={cx(styles.bodyCell)}>
          <ActionMenu
            items={[
              { label: "Allow", action: () => null },
              { label: "Decline", action: () => null },
            ]}
          />
        </td>
      </tr>
    ));

  return (
    <Card width={CARD_WIDTH.FULL} height={CARD_HEIGHT.FULL}>
      <Container
        fullHeight
        fullWidth
        spreadContent
        direction={CONTAINER_DIRECTION.VERTICAL}
        padding={CONTAINER_PADDING.NONE}
      >
        <div className={styles.tableWrapper}>
          <div className={styles.wrapper}>
            <table className={styles.table}>
              <thead className={styles.tableHeader}>
                <tr className={styles.headerRow}>
                  <th className={styles.headerCell}>Name</th>
                  <th className={styles.headerCell}>Age</th>
                  <th className={styles.headerCell}>Gender</th>
                  <th className={styles.headerCell}>Phone</th>
                  <th className={styles.headerCell}>Email</th>
                  <th className={styles.headerCell}>Company</th>
                  <th className={styles.headerCell}>Actions</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>{renderRows()}</tbody>
            </table>
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default PeopleContent;
