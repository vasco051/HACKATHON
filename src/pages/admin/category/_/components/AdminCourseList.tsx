import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Table, TableProps } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { useNavigate } from "react-router-dom";

import { TAdminCourse } from "../../../../../types/entities/admin/TAdminCourse.ts";

import { useStore } from "../../../../../hooks/useStore.ts";

export const columns = (
  onDelete: (id: number) => void,
): TableProps<TAdminCourse>['columns'] => [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (_, {id}) => id,
    width: '5%',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    render: (_, {name}) => name,
    width: '25%',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
    render: (_, {description}) => description,
  },
  {
    title: 'Минимальный рейтинг',
    dataIndex: 'minRating',
    key: 'minRating',
    render: (_, {minRating}) => minRating,
    width: '10%',
  },
  {
    title: 'Оптимальный рейтинг',
    dataIndex: 'optimalRating',
    key: 'name',
    render: (_, {optimalRating}) => optimalRating,
    width: '10%',
  },
  {
    width: '5%',
    render: (_, {id}) => (
      <Button
        type='text'
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        icon={<DeleteOutlined/>}
      />
    ),
  },
];

type TAdminCourseListProps = {
  categoryId: string | number
}

export const AdminCourseList = observer(({categoryId}: TAdminCourseListProps) => {
  const adminCourseStore = useStore().adminCourse

  const navigate = useNavigate()

  useEffect(() => {
    adminCourseStore.fetchCourses(categoryId)
  }, []);

  const onDeleteCourse = () => {
    console.log('delete')
  }

  const onRow = (record: AnyObject) => {
    return {
      onClick: () => {
        navigate(String(record.id));
      },
    };
  }

  return (
    <Table
      onRow={onRow}
      pagination={false}
      loading={adminCourseStore.isLoading}
      dataSource={[...adminCourseStore.courses]}
      columns={columns(onDeleteCourse)}
    />
  )
})