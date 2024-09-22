import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Table, TableProps } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { useNavigate } from "react-router-dom";

import { useStore } from "../../../../../hooks/useStore.ts";

import { TAdminCategory } from "../../../../../types/entities/admin/TAdminCategory.ts";

export const columns = (
  onDelete: (id: number) => void,
): TableProps<TAdminCategory>['columns'] => [
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
    key: 'name',
    render: (_, {description}) => description,
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

export const AdminCategoryList = observer(() => {
  const adminCategoryStore = useStore().adminCategory
  const navigate = useNavigate()

  useEffect(() => {
    adminCategoryStore.fetchCategories()
  }, []);

  const onDeleteCategory = () => {
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
      loading={adminCategoryStore.isLoading}
      dataSource={[...adminCategoryStore.categories]}
      columns={columns(onDeleteCategory)}
    />
  )
})