import { Text } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./WithDrawalWarningText.module.scss";
const cx = classNames.bind(styles);

type WidthDrawlWarningTextProps = {
  warningArray: {
    title: string;
    description: string[];
  }[];
};

function WithDrawalWarningText({ warningArray }: WidthDrawlWarningTextProps) {
  return (
    <ul className={cx("container")}>
      <li>
        {warningArray.map((item, index) => (
          <div key={index}>
            <Text key={index} size="lg" fw={600}>
              {item.title}
            </Text>
            {item.description.map((text, index) => (
              <Text key={index}>{text}</Text>
            ))}
          </div>
        ))}
      </li>
    </ul>
  );
}

export default WithDrawalWarningText;
