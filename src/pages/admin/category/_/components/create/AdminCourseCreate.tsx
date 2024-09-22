import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../../hooks/useStore';


export const AdminCourseCreate = observer(() => {
  const adminCourseStore = useStore().adminCourse;

  return (
    <Button>
      Создать курс
    </Button>
  );
});