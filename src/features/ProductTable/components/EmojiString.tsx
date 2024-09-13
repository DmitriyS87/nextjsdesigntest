import DOMPurify from "dompurify";

import cn from "classnames";
import styles from "./EmojiString.module.css";

const cx = cn.bind(styles);

const wrapEmojiHtml = (value: string, className: string) => {
  const allEmojisRegex =
    /([\u2600-\u27BF]|[\u{1F300}-\u{1F6FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F600}-\u{1F64F}])/gu;
  //   const allEmojisRegex = /([\u2600-\u27BF]|[\u{1F300}-\u{1F6FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F600}-\u{1F64F}])/gu;
  const wrapped = value.replace(allEmojisRegex, (emoji) => {
    return `<span class="${className}">${emoji}</span>`;
  });
  return wrapped;
};

const sanitizeHtml = (html: string) => {
  return DOMPurify.sanitize(html);
};

export const EmojiString = ({
  data,
  className,
}: {
  data: string;
  className?: string;
}) => {
  const sanitizedHtml = sanitizeHtml(wrapEmojiHtml(data, cx(styles.emoji)));
  return (
    <span
      className={cn(styles.container, { [String(className)]: !!className })}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    ></span>
  );
};
