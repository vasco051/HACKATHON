import { Button, Form, Input, InputNumber, message, Modal } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../../hooks/useStore';
import { useState } from 'react';
import { TAdminCourseCreate } from '../../../../../../types/entities/admin/TAdminCourse.ts';
import { requiredValidation } from '../../../../../../config/validate.ts';
import { useStyles } from './styles.ts';

export const AdminCourseCreate = observer(() => {
  const adminCourseStore = useStore().adminCourse;

  const { styles } = useStyles();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onOpenModal = () => setIsOpenModal(true);

  const onCloseModal = () => setIsOpenModal(false);

  const onFinish = async (values: TAdminCourseCreate) => {
    const response = await adminCourseStore(values);

    if (response.status === 200) {
      onCloseModal();

      messageApi.open({
        type: 'success',
        content: 'Категория создана успешно',
      });
    }
  };

  const modalFooter = (
    <Button block type="primary" htmlType="submit" form="form">
      Создать
    </Button>
  );
  return (
    <>
      {contextHolder}

      <Button type="primary" onClick={onOpenModal}>
        Создать курс
      </Button>

      <Modal
        zIndex={1200}
        open={isOpenModal}
        title="Создание курса"
        onCancel={onCloseModal}
        footer={modalFooter}
      >
        <Form
          id="form"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            minRating: 0,
            optimalRating: 0,
          }}
        >
          <Form.Item
            name="name"
            label="Название"
            required
            rules={[requiredValidation]}
          >
            <Input maxLength={96} />
          </Form.Item>

          <Form.Item
            name="description"
            label="Описание"
            required
            rules={[requiredValidation]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="photoUrl" label="Ссылка на фото категории">
            <Input placeholder="https://example.com" />
          </Form.Item>

          <Form.Item name="photoUrl" label="Ссылка на задний фон категории">
            <Input placeholder="https://example.com" />
          </Form.Item>

          <Form.Item
            name="minRating"
            label="Минимальный рейтинг для начала курса"
          >
            <InputNumber min={0} className={styles.field} />
          </Form.Item>

          <Form.Item
            name="optimalRating"
            label="Рекомендуемый рейтинг для начала курса"
          >
            <InputNumber min={0} className={styles.field} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});
