import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { theme } from 'antd';
import { ArcherContainer, ArcherElement } from 'react-archer';

import { useStore } from "../../../hooks/useStore.ts";
import { MapCard } from './card/MapCard';

import { getIdCard, getTargetId, getTargetPositionSource, getTargetPositionTarget } from "./utils.ts";

import styles from './styles.module.scss';

type TMapProps = {
  categoryId: string
}

export const Map = observer(({categoryId}: TMapProps) => {
  const store = useStore()
  const courseStore = store.course;
  const categoryStore = store.category;

  const {colorPrimary} = theme.useToken().token;
  const id = useParams().category_id as string

  useEffect(() => {
    courseStore.fetchCourses(id)
  }, []);

  return (
    <div className={styles.map}>
      <div className={styles.content}>
        <ArcherContainer
          strokeColor={colorPrimary}
          endMarker={false}
          strokeWidth={4}
        >
          <div className={styles.tree}>
            {courseStore.courses.map((course, index) => (
              <ArcherElement
                id={getIdCard(index)}
                key={course.id}
                relations={[
                  {
                    targetId: getTargetId(index),
                    targetAnchor: getTargetPositionTarget(index),
                    sourceAnchor: getTargetPositionSource(index),
                  },
                ]}
              >
                <div className={styles.wrapper}>
                  <MapCard card={course} categoryId={categoryId} index={index}/>
                </div>
              </ArcherElement>
            ))}
          </div>
        </ArcherContainer>
      </div>
    </div>
  );
});
