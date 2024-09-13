import { Form, Input, Select, Upload } from "antd";

import styles from "./ClaimForm.module.css";
import dropdownStyles from "../../../shared/ui/UiDropdown/UiDropdown.module.css";
import { StoreValue } from "antd/es/form/interface";
import Image from "next/image";

export const ClaimForm = () => {
  const { Option } = Select;
  const { Dragger } = Upload;
  const { TextArea } = Input;
  const { Item } = Form;

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const normFile: (...args: any[]) => StoreValue = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <h2 className={styles.header}>Жалоба на 0xHearts.com</h2>
      <Form
        layout="vertical"
        name="modal_form"
        initialValues={{ remember: true }}
        className={styles.form}
        requiredMark={false}
      >
        <Item
          label={<span className={styles.label}>Причина жалобы</span>}
          name="claimReason"
          rules={[{ required: true, message: "Поле является обязательным" }]}
        >
          <Select
            placeholder="Выберите причину жалобы"
            className={dropdownStyles.dropdownOpen}
          >
            <Option value="option1">Причина 1</Option>
            <Option value="option2">Причина 2</Option>
            <Option value="option3">Причина 3</Option>
          </Select>
        </Item>
        <Item
          label={<span className={styles.label}>Опишите проблему</span>}
          name="claimDescription"
          rules={[{ required: true, message: "Поле является обязательным" }]}
        >
          <TextArea
            className={styles.multiline}
            rows={4}
            placeholder="Введите ваш текст"
          />
        </Item>
        <Item
          label={<span className={styles.label}>Доказательства</span>}
          name="files"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Загрузите доказательства" }]}
        >
          <Dragger
            name="files"
            multiple={true}
            action="/upload.do"
            listType="picture"
            className={styles.upload}
          >
            <p className="ant-upload-drag-icon">
              <Image
                width={24}
                height={24}
                alt="upload file icon"
                src="/icons/uploadFile.svg"
              />
            </p>
            <p className="ant-upload-text">
              Выберите файл или перетащите его сюда
            </p>
            <p className="ant-upload-hint">JPEG или PNG до 5 MB</p>
          </Dragger>
        </Item>
      </Form>
    </>
  );
};
