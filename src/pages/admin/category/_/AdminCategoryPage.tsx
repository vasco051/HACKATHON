import { useParams } from "react-router-dom";
import { Flex, Typography } from "antd";

import { AdminCourseList } from "./components/AdminCourseList.tsx";
import { PageWrapper } from '../../../../components/layouts/page-wrapper/PageWrapper.tsx';
import { AdminCourseCreate } from './components/create/AdminCourseCreate';

import { useStyles } from './styles.ts'

const {Title} = Typography

export const AdminCategoryPage = () => {
  const {styles} = useStyles()

  const categoryId = useParams().category_id as string

  return (
    <PageWrapper>
      <Flex vertical gap={48} className={styles.wrapper}>
        <Flex justify="space-between" align="center">
          <Title>Курсы категории</Title>
          <AdminCourseCreate/>
        </Flex>

        <AdminCourseList categoryId={categoryId}/>
      </Flex>
    </PageWrapper>
  )
}