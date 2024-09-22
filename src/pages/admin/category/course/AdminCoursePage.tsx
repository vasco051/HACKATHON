import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Flex, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';

import { PageWrapper } from '../../../../components/layouts/page-wrapper/PageWrapper';
import { AdminCourseQuestionCreate } from './components/question/create/AdminCourseQuestionCreate';
import { AdminCourseQuestionList } from './components/question/list/AdminCourseQuestionList';

import { dynamicLinks } from '../../../../config/dynamicLinks';

import { useStyles } from './styles';


const { Title } = Typography;

export const AdminCoursePage = () => {
  const { styles } = useStyles();
  const categoryId = useParams().category_id as string;

  return (
    <PageWrapper>
      <Flex vertical gap={48} className={styles.wrapper}>
        <Link to={dynamicLinks.adminCategory(categoryId)} style={{ width: 'max-content' }}>
          <Button type="link" icon={<ArrowLeftOutlined/>}>
            Вернуться к курсам
          </Button>
        </Link>

        <Title>Вопросы курса</Title>

        <AdminCourseQuestionCreate/>
        <AdminCourseQuestionList/>
      </Flex>
    </PageWrapper>
  )
}