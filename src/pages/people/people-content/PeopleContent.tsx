import cx from "classnames";
import ActionMenu from "components/action-menu";
import Card, { CARD_HEIGHT, CARD_WIDTH } from "components/card";
import Container, {
  CONTAINER_DIRECTION,
  CONTAINER_PADDING,
} from "components/container";
import { useEffect, useRef, useState } from "react";
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

const TABLE_HEAD_HEIGHT = 62;

const PeopleContent = ({ people }: PeopleContentProps) => {
  const fixedContentRef = useRef<HTMLDivElement>(null);
  const scrollableContentRef = useRef<HTMLDivElement>(null);

  const [visibleAreaHeight, setVisibleAreaHeight] = useState(0);

  useEffect(() => {
    if (!fixedContentRef.current || !scrollableContentRef.current) {
      return;
    }

    const fullHeightMinusTableHeadHeight =
      fixedContentRef.current.offsetHeight - TABLE_HEAD_HEIGHT;

    setVisibleAreaHeight(fullHeightMinusTableHeadHeight);
  }, []);

  const renderRows = () =>
    people.map(({ name, age, gender, company, phone, email, id }) => (
      <tr key={id} className={styles.tableRow}>
        <td className={styles.bodyCell}>{name}</td>
        <td className={cx(styles.bodyCell, styles.hiddenInMobile)}>{age}</td>
        <td
          className={cx(
            styles.bodyCell,
            styles.hiddenInMobile,
            styles.hiddenInTablet
          )}
        >
          {gender}
        </td>
        <td className={cx(styles.bodyCell, styles.hiddenInMobile)}>{phone}</td>
        <td className={styles.bodyCell}>{email}</td>
        <td
          className={cx(
            styles.bodyCell,
            styles.hiddenInMobile,
            styles.hiddenInTablet
          )}
        >
          {company}
        </td>
        <td className={styles.bodyCell}>
          <ActionMenu
            extraHeight={TABLE_HEAD_HEIGHT}
            boundaryHeight={visibleAreaHeight}
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
        <div ref={fixedContentRef} className={styles.tableWrapper}>
          <Container
            ref={scrollableContentRef}
            scrollable
            fullHeight
            fullWidth
            padding={CONTAINER_PADDING.NONE}
          >
            <table className={styles.table}>
              <thead className={styles.tableHeader}>
                <tr className={styles.headerRow}>
                  <th className={styles.headerCell}>Name</th>
                  <th className={cx(styles.headerCell, styles.hiddenInMobile)}>
                    Age
                  </th>
                  <th
                    className={cx(
                      styles.headerCell,
                      styles.hiddenInMobile,
                      styles.hiddenInTablet
                    )}
                  >
                    Gender
                  </th>
                  <th className={cx(styles.headerCell, styles.hiddenInMobile)}>
                    Phone
                  </th>
                  <th className={styles.headerCell}>Email</th>
                  <th
                    className={cx(
                      styles.headerCell,
                      styles.hiddenInMobile,
                      styles.hiddenInTablet
                    )}
                  >
                    Company
                  </th>
                  <th className={styles.headerCell}>Actions</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>{renderRows()}</tbody>
            </table>
          </Container>
        </div>
      </Container>
    </Card>
  );
};

export default PeopleContent;
