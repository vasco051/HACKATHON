import { CSSProperties } from 'react';
import { observer } from 'mobx-react-lite';
import { theme } from 'antd';
import { ArcherContainer, ArcherElement } from 'react-archer';
import defaultBg from '../../../assets/images/img_map-pattern.png';
import { MapCard } from './card/MapCard';

import {
  getIdCard,
  getTargetId,
  getTargetPositionSource,
  getTargetPositionTarget,
} from './utils.ts';

import styles from './styles.module.scss';
import { TCategory } from '../../../types/entities/TCategory.ts';
import { TCourse } from '../../../types/entities/TCourse.ts';

type TMapProps = {
  category: TCategory;
  courses: readonly TCourse[];
};

export const Map = observer(({ category, courses }: TMapProps) => {
  const { colorPrimary } = theme.useToken().token;

  const mapStyles: CSSProperties = {
    backgroundImage: `url(${!!category.backgroundUrl ? category.backgroundUrl : defaultBg})`,
  };

  return (
    <div className={styles.map} style={mapStyles}>
      <div className={styles.content}>
        <ArcherContainer
          strokeColor={colorPrimary}
          endMarker={false}
          strokeWidth={4}
        >
          <div className={styles.tree}>
            {courses.map((course, index) => (
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
                  <MapCard
                    card={course}
                    categoryId={category.id}
                    index={index}
                  />
                </div>
              </ArcherElement>
            ))}
          </div>
        </ArcherContainer>
      </div>
    </div>
  );
});
