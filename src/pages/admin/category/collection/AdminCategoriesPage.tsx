import { Flex, Typography } from "antd";

import { AdminCategoryList } from "./components/AdminCategoryList.tsx";
import { PageWrapper } from "../../../../components/layouts/page-wrapper/PageWrapper.tsx";
import { AdminCategoryCreate } from './components/create/AdminCategoryCreate';

import {useStyles} from "./styles.ts";

const {Title} = Typography

export const AdminCategoriesPage = () => {
  const {styles} = useStyles()

  return (
    <PageWrapper>
      <Flex vertical gap={48} className={styles.wrapper}>
        <Flex justify='space-between' align='center'>
          <Title>Список категорий</Title>
          <AdminCategoryCreate/>
        </Flex>

        <AdminCategoryList/>
      </Flex>
    </PageWrapper>
  )
}